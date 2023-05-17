// priority: 0

function snakeToTitle(item_name) {
    return item_name.replace(/^_*(.)|_+(.)/g, (s, c, d) => (c ? c.toUpperCase() : ` ${d.toUpperCase()}`));
}

function registerSimpleCustomItem(event, item_name, tooltip) {
    if (tooltip) {
        event.create(`kubejs:${item_name}`)
            .texture(`highland:item/${item_name}`)
            .displayName(snakeToTitle(item_name))
            .tooltip(tooltip);
    } else {
        event.create(`kubejs:${item_name}`)
            .texture(`highland:item/${item_name}`)
            .displayName(snakeToTitle(item_name));
    }
}

function registerSimpleGameTexturedItem(event, item_name, item_texture, tooltip) {
    if (tooltip) {
        event.create(`kubejs:${item_name}`)
            .texture(item_texture)
            .displayName(snakeToTitle(item_name))
            .tooltip(tooltip);
    } else {
        event.create(`kubejs:${item_name}`)
            .texture(item_texture)
            .displayName(snakeToTitle(item_name));
    }
}

StartupEvents.registry('item', (event) => {
    // My first ever KubeJS item addition!
    // It was initially a simple diamond sword item.
    // event.create('weezer').texture('highland:item/weezer')
    //     .displayName('weezer blue album (real)');

    event.create('ice_cream_chocolate_chip').texture('highland:item/ice_cream_chocolate_chip').displayName('Chocolate Chip Ice Cream')
        .food((food) => {
            food
            .hunger(3)
            .saturation(0.7) // 1 saturation = 3 drumsticks
            // This value does not directly translate to saturation points gained
            // The real value can be assumed to be:
            // min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
            // 2hx + x = s
            // 6x + x = 4
            // 0 saturation = 0 drumsticks
            // 1 saturation = 3 drumsticks
            // 6(1) + 1 = 6... but it equals 7
            // i entered 0.66 for x and it gave me ~3.5 saturation instead of 4.62
            // the docs are somewhat wrong
            .effect('neapolitan:vanilla_scent', 20, 0, 1);
    });

    // Disc base items for the AnTgry - Dance disc craft
    // event.create('kubejs:mini_disc_o_floor_label')
    //     .texture('highland:item/mini_disc_o_floor_label')
    //     .displayName('Mini Disc-o Floor Label');
    // event.create('kubejs:incomplete_music_disc_mellohi', 'create:sequenced_assembly')
    //     .texture('minecraft:item/music_disc_mellohi')
    //     .displayName('Music Disc');

    // Transitional item for the 300MB music disc craft
    // event.create('kubejs:incomplete_music_disc_11', 'create:sequenced_assembly')
    //     .texture('minecraft:item/music_disc_11')
    //     .displayName('Music Disc');

    event.create('kubejs:crushed_dirt', 'create:sequenced_assembly')
        .texture('twigs:item/pebble')
        .displayName('Crushed Dirt');

    registerSimpleGameTexturedItem(event, 'uncraftable_item', 'minecraft:item/barrier', 'This item isn\'t obtainable in survival mode.');
    registerSimpleGameTexturedItem(event, 'removed_recipe', 'minecraft:item/barrier', 'This item can be made in some other way...');

    registerSimpleCustomItem(event, 'stress_guts');

    [
        'diamond',
        'ender_pearl',
        'emerald',
        // 'lapis_lazuli',
    ].forEach((ore) => {
        event.create(`kubejs:shining_${ore}`)
            .texture(`highland:item/shining_${ore}`)
            // snake_case to Title Case regex
            .displayName(`Shining ${snakeToTitle(ore)}`)
            .rarity('UNCOMMON');
    });

    // event.create('potion_conduit')
    //     .texture('highland:item/potion_conduit')
    //     .displayName('Potion Conduit');

    // event.create('infused_potion_conduit')
    //     .texture('highland:item/potion_conduit')
    //     .displayName('Infused Potion Conduit')
    //     .glow(true);

    // event.create('incomplete_potion_conduit', 'create:sequenced_assembly')
    //     .texture('minecraft:item/ender_eye')
    //     .displayName('Incomplete Potion Conduit');

    // TODO: Refactor this item with the potion charm mold addition
    // event.create('incomplete_potion_charm', 'create:sequenced_assembly')
    //     .texture('highland:item/potion_conduit')
    //     .displayName('Incomplete Potion Charm')
    //     .glow(true);
});

StartupEvents.registry('fluid', (event) => {
    event.create('shine_solution')
        .stillTexture('kubejs:block/shine_solution_still')
        .flowingTexture('kubejs:block/shine_solution_flow') // TODO: refactor flowing texture
        .displayName('Shine Solution')
        .noBucket()
        .noBlock();
});
