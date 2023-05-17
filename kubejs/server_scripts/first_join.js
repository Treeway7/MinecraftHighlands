// priority: 0

PlayerEvents.loggedIn((event) => {
    // Give the player the quest book on first join
    if (!event.player.persistentData.contains('firstjoin')) {
        event.player.persistentData.putBoolean('firstjoin', true);
        event.player.give('ftbquests:book');
    }
});
