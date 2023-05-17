/* eslint-disable no-param-reassign */

// Garnet gem item
StartupEvents.registry('item', (event) => {
    event.create('garnet')
            .displayName('Garnet')
            .texture('highland:item/garnet')
            .tag('minecraft:beacon_payment_items')
            .tag('forge:gems')
            .tag('forge:gems/garnet');

    event.create('garnet_coin')
        .displayName('Garnet Coin')
        .texture('highland:item/garnet_coin')
        .tag('forge:nuggets')
        .tag('forge:nuggets/garnet');
});

// Garnet ores and block
StartupEvents.registry('block', (event) => {
    function registerGarnetOre(id, material, hardness) {
        event.create(id)
        .material(material)
        .hardness(hardness)
        .tag('forge:ores')
        .tag('forge:ores/garnet')
        .tagBlock('forge:ores/garnet')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBoth(`forge:ores_in_ground/${material}`)
        .requiresTool(true);
    }
    registerGarnetOre('garnet_ore', 'stone', '3');
    registerGarnetOre('deepslate_garnet_ore', 'deepslate', '4.5');

    event.create('garnet_block')
        .material('metal')
        .hardness(5)
        .resistance(6)
        .displayName('Block of Garnet')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:beacon_base_blocks')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBoth('forge:storage_blocks')
        .tagBoth('forge:storage_blocks/garnet')
        .requiresTool(true);
});

// Worldgen
WorldgenEvents.add((event) => {
    const anchors = event.getAnchors();
    event.addOre((ore) => {
        ore.id = 'kubejs:deepslate_garnet_ore';
        ore.addTarget('minecraft:deepslate', 'kubejs:deepslate_garnet_ore');
        ore.count([20, 64])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(-128),
                anchors.absolute(0),
        );

        ore.noSurface = 0.25;
        ore.size = 3;
        ore.worldgenLayer = 'underground_ores';
    });

    event.addOre((ore) => {
        ore.id = 'kubejs:garnet_ore';
        ore.addTarget('minecraft:stone', 'kubejs:garnet_ore');

        ore.count([24, 96])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(-192),
                anchors.absolute(64),
        );

        ore.noSurface = 0.25;
        ore.size = 3;
        ore.worldgenLayer = 'underground_ores';
    });
});
