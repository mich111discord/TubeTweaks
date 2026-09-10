(function () {
    'use strict';

    const STYLE_ID = 'tt-remove-download-button-style';

    function applyPatch() {
        if (document.getElementById(STYLE_ID)) return;

        const css = `
            /* Ukrycie przycisku Pobierz bezpośrednio pod odtwarzaczem */
            ytd-download-button-renderer,
            ytd-button-renderer[target-id="type-download"],
            ytd-download-button-renderer.style-scope,

            /* Ukrycie pozycji Pobierz w rozwijanym menu (...) */
            ytd-menu-service-item-renderer:has(path[d*="M17 18v1H6v-1h11zm0-7l-5 5-5-5h3V4h4v7h3z"]),
            ytd-menu-service-item-renderer:has(yt-icon[icon="download"]),
            ytd-menu-service-item-download-renderer {
                display: none !important;
            }
        `;

        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = css;
        (document.head || document.documentElement).appendChild(style);

        console.log('[TubeTweaks] Patch remove-download-button (z menu) aktywny.');
    }

    applyPatch();
})();
