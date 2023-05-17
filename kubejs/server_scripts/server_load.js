// priority: 10

ServerEvents.loaded((event) => {
    event.server.scheduleInTicks(48, () => {
        // Sometimes custom recipes don't load the first time. It's weird
        // event.server.tell('Reloading custom recipes...');
        // event.server.runCommandSilent('reload');

        // First server load
        if (!event.server.persistentData.contains('firstload')) {
            event.server.runCommandSilent('gamerule doInsomnia false');
            // event.server.runCommandSilent('gamerule mobGriefing false');
            // For the stasis chamber buster
            event.server.runCommandSilent('function pearl_gone:load');

            event.server.persistentData.putBoolean('firstload', true);
        }
    });
});
