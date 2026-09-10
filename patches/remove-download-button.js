(function () {
    'use strict';

    const STYLE_ID = 'tt-remove-download-button-style';

    function applyPatch() {
        if (document.getElementById(STYLE_ID)) return;

        const css = `
            /* Ukrycie przycisku Pobierz pod odtwarzaczem */
            ytd-download-button-renderer,
            ytd-button-renderer[target-id="type-download"],
            ytd-download-button-renderer.style-scope {
                display: none !important;
            }
        `;

        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = css;
        (document.head || document.documentElement).appendChild(style);

        console.log('[TubeTweaks] Patch remove-download-button aktywny.');
    }

    applyPatch();
})();
