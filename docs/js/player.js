document.addEventListener('DOMContentLoaded', () => {
    const players = document.querySelectorAll('.plyr-audio');

    players.forEach(player => {
        const plyrInstance = new Plyr(player, {
            controls: ['play', 'mute', 'volume', 'settings'], // Αφαιρεί τη μπάρα χρόνου
        });
    });
});
