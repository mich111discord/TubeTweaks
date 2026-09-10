(function () {
    'use strict';

    const STYLE_ID = 'tt-restore-classic-icons-style';

    function applyPatch() {
        if (document.getElementById(STYLE_ID)) return;

        const css = `
            /* Przywrócenie cieńszych obrysów ikon SVG w odtwarzaczu i interfejsie */
            ytd-app svg path,
            .html5-video-player svg path,
            yt-icon svg path {
                stroke-width: 0px !important;
                paint-order: stroke fill !important;
            }

            /* Usunięcie wymuszonego pogrubienia (bold/fill) dla nowoczesnych ikon YT */
            yt-icon, 
            .yt-spec-icon-shape {
                font-weight: normal !important;
            }

            /* Wyłączenie grubych linii w ikonach typu outline */
            path[stroke-width="2"],
            path[stroke-width="1.5"],
            path[stroke-width="2.5"] {
                stroke-width: 1px !important;
            }

            /* Odchudzenie czcionek przycisków, które również zostały pogrubione przy nowym UI */
            ytd-button-renderer yt-formatted-string,
            #button.ytd-compact-link-renderer,
            .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {
                font-weight: 400 !important;
            }
        `;

        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = css;
        (document.head || document.documentElement).appendChild(style);

        console.log('[TubeTweaks] Patch restore-classic-icons aktywny.');
    }

    applyPatch();
})();
