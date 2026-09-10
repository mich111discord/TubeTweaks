(function () {
    'use strict';

    function setMaxQuality() {
        const player = document.getElementById('movie_player') || document.querySelector('.html5-video-player');
        
        if (!player || typeof player.getAvailableQualityLevels !== 'function') return;

        const qualities = player.getAvailableQualityLevels();
        if (qualities && qualities.length > 0) {
            // Pierwszy element na liście YouTube to zawsze najwyższa dostępna jakość (np. hd2160, hd1080, hd720)
            const highestQuality = qualities[0];
            const currentQuality = player.getPlaybackQuality();

            if (currentQuality !== highestQuality) {
                player.setPlaybackQualityRange(highestQuality, highestQuality);
                player.setPlaybackQuality(highestQuality);
                console.log(`[TubeTweaks] Wymuszono jakość: ${highestQuality}`);
            }
        }
    }

    function initForceHD() {
        // Obserwacja zmian stanu odtwarzacza
        const interval = setInterval(() => {
            const player = document.getElementById('movie_player');
            if (player && typeof player.addEventListener === 'function') {
                clearInterval(interval);

                // Próba ustawienia jakości przy starcie i zmianie stanu wideo
                player.addEventListener('onStateChange', (state) => {
                    // State 1 = odtwarzanie (PLAYING), State 3 = buforowanie (BUFFERING)
                    if (state === 1 || state === 3) {
                        setMaxQuality();
                    }
                });

                setMaxQuality();
            }
        }, 300);

        // Obsługa przechodzenia między filmami bez przeładowania strony (Single Page Application)
        window.addEventListener('yt-navigate-finish', () => {
            setTimeout(setMaxQuality, 500);
            setTimeout(setMaxQuality, 1500);
        });
    }

    initForceHD();
})();
