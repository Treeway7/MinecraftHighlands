// priority: 0

ServerEvents.blockLootTables((event) => {
    event.addSimpleBlock('kubejs:crushed_dirt');
    event.addSimpleBlock('littleframes:creative_pic_frame');
});

LootJS.modifiers((event) => {
    // Village chest loot
    event.addLootTableModifier('minecraft:chests/village')
        .removeLoot('neapolitan:strawberry_scones')
        .removeLoot('neapolitan:vanilla_fudge');
});
