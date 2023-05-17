// priority: 0

// Garnet ore
LootJS.modifiers((event) => {
    ['', 'deepslate_'].forEach((ore_type) => {
        event.addBlockLootModifier(`kubejs:${ore_type}garnet_ore`)
            .removeLoot(`kubejs:${ore_type}garnet_ore`)
            .addLoot('4x kubejs:garnet')
            .dropExperience(7);
    });
});

ServerEvents.recipes((event) => {
    // Garnet block recipes
    event.shapeless(
        '9x kubejs:garnet',
        ['kubejs:garnet_block'],
    );

    event.shapeless(
        'kubejs:garnet_block',
        ['9x kubejs:garnet'],
    );

    // Garnet coin recipes
    event.shapeless(
        '9x kubejs:garnet_coin',
        ['kubejs:garnet'],
    );

    event.shapeless(
        'kubejs:garnet',
        ['9x kubejs:garnet_coin'],
    );

    // Smelting
    event.smelting('4x kubejs:garnet', 'kubejs:garnet_ore');
    event.smelting('4x kubejs:garnet', 'kubejs:deepslate_garnet_ore');
    event.blasting('4x kubejs:garnet', 'kubejs:garnet_ore');
    event.blasting('4x kubejs:garnet', 'kubejs:deepslate_garnet_ore');

    // Crushing
    event.recipes.createCrushing([
        '4x kubejs:garnet',
        Item.of('kubejs:garnet').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('minecraft:cobblestone').withChance(0.12),
    ], 'kubejs:garnet_ore');
    event.recipes.createCrushing([
        '4x kubejs:garnet',
        Item.of('kubejs:garnet').withChance(0.25),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('minecraft:cobblestone').withChance(0.12),
    ], 'kubejs:deepslate_garnet_ore');
});
