export function initializeTerminalDialogs() {
  const dialogs = document.querySelectorAll<HTMLDialogElement>("[data-terminal-dialog]");
  const triggers = document.querySelectorAll<HTMLButtonElement>("[data-terminal-dialog-trigger]");
  const typewriterTimers = new WeakMap<HTMLDialogElement, number>();
  const bioScrollFrames = new WeakMap<HTMLDialogElement, number>();

  const resetTypewriter = (dialog: HTMLDialogElement) => {
    const timer = typewriterTimers.get(dialog);
    if (timer !== undefined) {
      window.clearTimeout(timer);
      typewriterTimers.delete(dialog);
    }
    const scrollFrame = bioScrollFrames.get(dialog);
    if (scrollFrame !== undefined) {
      window.cancelAnimationFrame(scrollFrame);
      bioScrollFrames.delete(dialog);
    }

    dialog.querySelectorAll<HTMLElement>("[data-dossier-typewriter]").forEach((element) => {
      const originalText = element.dataset.originalText;
      if (originalText === undefined) return;
      element.replaceChildren(document.createTextNode(originalText));
      element.removeAttribute("aria-label");
      delete element.dataset.originalText;
    });
  };

  const startTypewriter = (dialog: HTMLDialogElement) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lines = [...dialog.querySelectorAll<HTMLElement>("[data-dossier-typewriter]")].map((element) => {
      const text = element.textContent ?? "";
      element.dataset.originalText = text;
      element.setAttribute("aria-label", text);
      const textNode = document.createTextNode("");
      element.replaceChildren(textNode);
      return { characters: Array.from(text), textNode };
    });

    let lineIndex = 0;
    let characterIndex = 0;
    const revealNextCharacter = () => {
      while (lineIndex < lines.length && characterIndex >= lines[lineIndex].characters.length) {
        lineIndex += 1;
        characterIndex = 0;
      }

      if (lineIndex >= lines.length) {
        typewriterTimers.delete(dialog);
        return;
      }

      const line = lines[lineIndex];
      line.textNode.appendData(line.characters[characterIndex]);
      if (line.textNode.parentElement?.closest(".jury-dialog-bio") && !bioScrollFrames.has(dialog)) {
        const bio = dialog.querySelector<HTMLElement>(".jury-dialog-bio");
        if (bio) {
          bioScrollFrames.set(dialog, window.requestAnimationFrame(() => {
            bio.scrollTop = bio.scrollHeight;
            bioScrollFrames.delete(dialog);
          }));
        }
      }
      characterIndex += 1;
      typewriterTimers.set(dialog, window.setTimeout(revealNextCharacter, 6));
    };

    revealNextCharacter();
  };

  dialogs.forEach((dialog) => {
    if (dialog.dataset.terminalDialogInitialized) return;
    dialog.dataset.terminalDialogInitialized = "true";

    const closeButton = dialog.querySelector<HTMLButtonElement>(".dialog-close");
    let closeTimer: number | undefined;

    const closeWithAnimation = () => {
      if (!dialog.open || closeTimer !== undefined) return;

      dialog.classList.remove("is-open");
      resetTypewriter(dialog);
      const finishClosing = (event: TransitionEvent) => {
        if (event.target !== dialog || event.propertyName !== "transform") return;
        dialog.removeEventListener("transitionend", finishClosing);
        window.clearTimeout(closeTimer);
        closeTimer = undefined;
        dialog.close();
      };

      dialog.addEventListener("transitionend", finishClosing);
      closeTimer = window.setTimeout(() => {
        dialog.removeEventListener("transitionend", finishClosing);
        closeTimer = undefined;
        if (dialog.open) dialog.close();
      }, 400);
    };

    closeButton?.addEventListener("click", closeWithAnimation);
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeWithAnimation();
    });
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeWithAnimation();
    });
    dialog.addEventListener("close", () => {
      if (closeTimer !== undefined) window.clearTimeout(closeTimer);
      closeTimer = undefined;
      resetTypewriter(dialog);
      dialog.classList.remove("is-open");
    });
  });

  triggers.forEach((trigger) => {
    if (trigger.dataset.terminalDialogInitialized) return;
    trigger.dataset.terminalDialogInitialized = "true";

    const dialogId = trigger.getAttribute("aria-controls");
    const dialog = dialogId ? document.getElementById(dialogId) : null;
    if (!(dialog instanceof HTMLDialogElement)) return;

    trigger.addEventListener("click", () => {
      resetTypewriter(dialog);
      dialog.showModal();
      dialog.classList.add("is-open");
      startTypewriter(dialog);
    });
  });
}
