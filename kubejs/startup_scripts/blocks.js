StartupEvents.registry('block', (event) => {
    // Cool green screen block
    event.create('green_screen')
        .material('stone')
        .hardness(1.8)
        .displayName('Green Screen')
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true)
        .lightLevel(1);

    event.create('error_block')
        .material('stone')
        .displayName('Error Block')
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(false);

    event.create('ender_pearl_block')
        .material('stone')
        .hardness(0.5)
        .displayName('Block of Ender Pearl')
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(false);

    event.create('shine_core')
        .material('glass')
        .hardness(0.3)
        .resistance(0.3)
        .lightLevel(1)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(false);

    // event.create('crushed_dirt')
    //     .material('dirt')
    //     .hardness(0.5)
    //     .resistance(0.5)
    //     .textures({
    //         variants: {
    //           '': [
    //             {
    //               model: 'minecraft:block/dirt',
    //             },
    //             {
    //               model: 'minecraft:block/dirt',
    //               y: 90,
    //             },
    //             {
    //               model: 'minecraft:block/dirt',
    //               y: 180,
    //             },
    //             {
    //               model: 'minecraft:block/dirt',
    //               y: 270,
    //             },
    //           ],
    //         },
    //       })
    //     .tagBlock('minecraft:mineable/shovel')
    //     .requiresTool(false);
});
