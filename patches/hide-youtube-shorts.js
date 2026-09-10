(function () {
    'use strict';

    const STYLE_ID = 'tt-hide-shorts-style';

    function applyPatch() {
        if (document.getElementById(STYLE_ID)) return;

        const css = `
            /* Przycisk Shorts w lewym menu nawigacji (desktop & mini grid) */
            ytd-guide-entry-renderer:has(a[href*="/shorts"]),
            ytd-mini-guide-entry-renderer:has(a[href*="/shorts"]),

            /* Sekcje/Siatki Shorts na stronie głównej i w wynikach wyszukiwania */
            ytd-rich-section-renderer:has(a[href*="/shorts"]),
            ytd-reel-shelf-renderer,

            /* Pojedyncze kafelki Shorts w wynikach wyszukiwania i polecanych */
            ytd-video-renderer:has(a[href*="/shorts"]),
            ytd-compact-video-renderer:has(a[href*="/shorts"]),

            /* Tab/Zakładka Shorts na kanałach twórców */
            yt-tab-shape[tab-title*="Shorts"],
            tp-yt-paper-tab:has(a[href*="/shorts"]) {
                display: none !important;
            }
        `;

        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = css;
        (document.head || document.documentElement).appendChild(style);

        console.log('[TubeTweaks] Patch hide-youtube-shorts aktywny.');
    }

    applyPatch();
})();
