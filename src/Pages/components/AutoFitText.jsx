export function AutoFitText({
    wordSelector = ".word",
    containerSelector = null,
} = {}) {
    const fit = () => {
        const words = document.querySelectorAll(wordSelector);
        if (!words.length) return;

        const parentMap = new Map();

        words.forEach((word) => {
            const sizeParent = word.closest(".line");
            if (!sizeParent) return;

            if (!parentMap.has(sizeParent)) {
                parentMap.set(sizeParent, []);
            }

            parentMap.get(sizeParent).push(word);
        });

        parentMap.forEach((wordList, sizeParent) => {
            sizeParent.style.fontSize = "";

            const computedStyle = window.getComputedStyle(sizeParent);
            const initialFontSize = parseFloat(computedStyle.fontSize);
            if (!initialFontSize) return;

            const container = containerSelector
                ? sizeParent.closest(containerSelector)
                : document.documentElement;

            if (!container) return;

            const availableWidth = container.clientWidth;
            const SAFETY_GAP = 0;

            let maxWordWidth = 0;
            wordList.forEach((word) => {
                maxWordWidth = Math.max(maxWordWidth, word.scrollWidth);
            });

            if (maxWordWidth > availableWidth - SAFETY_GAP) {
                const scale = (availableWidth - SAFETY_GAP) / maxWordWidth;
                sizeParent.style.fontSize = `${initialFontSize * scale}px`;
            }
        });
    };

    const run = () => {
        requestAnimationFrame(() => {
            requestAnimationFrame(fit);
        });
    };

    if (document.fonts?.ready) {
        document.fonts.ready.then(run);
    } else {
        run();
    }

    const observer = new ResizeObserver(run);
    observer.observe(document.documentElement);

    return () => observer.disconnect();
}
