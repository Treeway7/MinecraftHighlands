// priority: 0

/*
potionID: "minecraft:strength" etc
Bottle: REGULAR, SPLASH, LINGERING
*/
// const potion = (potionID, bottle) => Item.of('minecraft:potion',
    // `{Potion:"${potionID}", Bottle:"${bottle}"}`);
const potionFluid = (potionID, count, bottle) => Fluid.of('create:potion', count, `{Potion:"${potionID}", Bottle:"${bottle}"}`);

ServerEvents.recipes((event) => {
    // #region Removed recipes

    const outputEventsRemove = [
        'chunkloaders:single_chunk_loader',
        'chunkloaders:basic_chunk_loader',
        'chunkloaders:advanced_chunk_loader',
        'chunkloaders:ultimate_chunk_loader',
        // 'apotheosis:potion_charm_enchanting',
        'createaddition:zinc_sheet',
        'doggytalents:conducting_bone',
        'farmersrespite:rose_hips',
        'farmersrespite:rose_hip_pie',
        'farmersrespite:rose_hip_tea',
        'farmersrespite:long_rose_hip_tea',
        'farmersrespite:strong_rose_hip_tea',
    ];

    outputEventsRemove.forEach((output_recipe) => {
        event.remove({ output: output_recipe });
    });

    [
        'computercraft:computer_advanced',
        'computercraft:pocket_computer_advanced',
    ].forEach((id_recipe) => {
        event.remove({ id: id_recipe });
    });

    // TODO: Refactor this code for removed recipes and items into a neat JSON set. Too similar
    /// When normal item removals don't work, or to verbally tell the player an item is uncraftable
    /// [item_id, recipe_id]
    const uncraftable_items = [
        ['apotheosis:ender_lead', 'apotheosis:ender_lead'],
        ['ironchest:diamond_to_crystal_chest_upgrade', 'ironchest:upgrades/diamond_to_crystal_chest_upgrade'],
        ['apotheosis:potion_charm', 'apotheosis:potion_charm'],
        // This grants A FULL MINUTE of regeneration. Seriously?
        ['corn_delight:creamy_corn_drink', 'corn_delight:cooking/creamy_corn_drink'],
        ['computercraft:turtle_normal', 'computercraft:turtle_normal'],
        ['computercraft:turtle_advanced', 'computercraft:turtle_advanced'],
        ['cfm:post_box', 'cfm:post_box'],
        // ['computercraft:wireless_modem_advanced', 'computercraft:wireless_modem_advanced'],
        ['buildinggadgets:gadget_destruction', 'buildinggadgets:gadget_destruction'],
        ['constructionwand:core_destruction', 'constructionwand:core_destruction'],
        // ['alloyed:steel_catwalk', 'alloyed:steel_catwalk'],
    ];

    // [
    //     'gold', 'netherite', 'andesite', 'brass',
    //     'cast_iron', 'iron', 'copper', 'zinc',
    // ].forEach((material) => {
    //     uncraftable_items.push(
    //         [`createdeco:${material}_catwalk`, `createdeco:${material}_catwalk`]
    //     );
    //     uncraftable_items.push(
    //         [`createdeco:${material}_catwalk_stairs`, `createdeco:${material}_catwalk_stairs`]
    //     );
    // });

    uncraftable_items.forEach((to_remove) => {
        event.shapeless(to_remove[0], [
            'kubejs:uncraftable_item',
        ]).id(to_remove[1]);
    });

    // For recipes that have a disabled craft, with an alternative recipe
    const removed_recipes = [
    ];

    removed_recipes.forEach((to_remove) => {
        event.shapeless(to_remove[0], [
            'kubejs:removed_recipe',
        ]).id(to_remove[1]);
    });

    // #endregion
    // #region Shapeless crafting recipes

    // We all scream for ICE CREAM! Pack intro food item
    event.shapeless('2x kubejs:ice_cream_chocolate_chip', [
        'minecraft:cocoa_beans', 'minecraft:sugar',
        'neapolitan:ice_cubes', '#forge:milk',
        '#forge:dough',
    ]);

    // Redstone Pen crafts with 256 redstone
    event.shapeless('redstonepen:pen', [
        'compressium:redstone_1', 'compressium:redstone_1', 'compressium:redstone_1',
        'minecraft:redstone_block', 'minecraft:redstone', 'minecraft:redstone',
        'minecraft:redstone', 'minecraft:redstone', 'minecraft:feather',
    ]).id('redstonepen:pen_recipe');

    event.shapeless('kubejs:green_screen', [
        'minecraft:lime_concrete', 'minecraft:glowstone',
    ]);

    // Filled Akashic Tome recipe
    event.shapeless(
        Item.of('akashictome:tome', '{"akashictome:data":{adorn:{Count:1b,id:"adorn:guide_book"},adorn_0:{Count:1b,id:"adorn:traders_manual",tag:{"akashictome:definedMod":"adorn_0"}},apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"book.apotheosis.name"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"book.apotheosis.name"}]}\'},"patchouli:book":"apotheosis:apoth_chronicle"}},byg:{Count:1b,id:"byg:biomepedia"},cookingforblockheads:{Count:1b,id:"cookingforblockheads:recipe_book",tag:{"akashictome:displayName":{text:\'{"translate":"item.cookingforblockheads.recipe_book"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.cookingforblockheads.recipe_book"}]}\'}}},ftbquests:{Count:1b,id:"ftbquests:book"},solcarrot:{Count:1b,id:"solcarrot:food_book",tag:{"akashictome:displayName":{text:\'{"translate":"item.solcarrot.food_book"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.solcarrot.food_book"}]}\'}}},tetra:{Count:1b,id:"tetra:holo",tag:{"akashictome:displayName":{text:\'{"text":"Holosphere"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Holosphere"}]}\'},"holo/core":"holo/core","holo/core_material":"frame/dim","holo/frame":"holo/frame","holo/frame_material":"core/ancient","holo/repo":"holo/repo","holo/repo_material":"repo/default","holo/scanner":"holo/scanner","holo/scanner_material":"scanner/default"}}},"akashictome:is_morphing":1b}'),
        [
            'minecraft:book', 'minecraft:bookshelf',
            'minecraft:gold_ingot',
        ],
    );

    event.shapeless(
        'kubejs:ender_pearl_block',
        [
            'minecraft:ender_pearl', 'minecraft:ender_pearl', 'minecraft:ender_pearl',
            'minecraft:ender_pearl', 'minecraft:ender_pearl', 'minecraft:ender_pearl',
            'minecraft:ender_pearl', 'minecraft:ender_pearl', 'minecraft:ender_pearl',
        ],
    );

    event.shapeless('9x minecraft:ender_pearl', ['kubejs:ender_pearl_block']);

    event.shapeless('littleframes:creative_pic_frame', [
        'minecraft:painting', '#minecraft:wooden_pressure_plates',
    ]);

    // Skinned lanterns

    ['lantern', 'soul_lantern'].forEach((lantern_type) => {
        event.shapeless(
            `skinnedlanterns:tiny_potato_${lantern_type}_block`,
            ['quark:tiny_potato', `minecraft:${lantern_type}`],
        );
    });

    ['zombie', 'creeper'].forEach((lantern_type) => {
        event.shapeless(
            `skinnedlanterns:${lantern_type}_ender_lantern_block`,
            ['minecraft:lantern', `${lantern_type}_head`, 'minecraft:chorus_fruit'],
        );
    });
    ['skeleton', 'wither_skeleton'].forEach((lantern_type) => {
        event.shapeless(
            `skinnedlanterns:${lantern_type}_ender_lantern_block`,
            ['minecraft:lantern', `${lantern_type}_skull`, 'minecraft:chorus_fruit'],
        );
    });
    event.shapeless('skinnedlanterns:jack_o_lantern_ender_lantern_block', ['minecraft:lantern', 'minecraft:carved_pumpkin', 'minecraft:chorus_fruit']);

    // Tapestry
    [
        ['white', 'minecraft:white_wool'],
        ['orange', 'minecraft:sunflower'],
        ['magenta', 'minecraft:obsidian'],
        ['light_blue', 'supplementaries:wind_vane'],
        ['yellow', 'minecraft:leather_horse_armor'],
        ['lime', 'minecraft:slime_ball'],
        ['pink', 'minecraft:porkchop'],
        ['gray', 'minecraft:crossbow'],
        ['light_gray', 'minecraft:poppy'],
        ['cyan', 'minecraft:player_head'],
        ['purple', 'minecraft:glass_bottle'],
        ['blue', 'minecraft:phantom_membrane'],
        ['brown', 'minecraft:beef'],
        ['green', 'minecraft:rotten_flesh'],
        ['red', 'minecraft:red_mushroom'],
        ['black', 'minecraft:ender_pearl'],
    ].forEach((item_set) => {
        event.shapeless(
            `biomemakeover:${item_set[0]}_tapestry`,
            [`minecraft:${item_set[0]}_banner`, item_set[1]],
        );
    });

    // #endregion
    // #region Shaped crafting recipes

    // Backpack crafting nerf (uses less rabbit hide, swapping instead with leather)
    // The 50/50 hide drop RNG from bunnies is annoying, and hide is not used for much else.
    // event.remove({ output: 'backpacked:backpack' });
    event.shaped('backpacked:backpack', [
        'LLL',
        'SIS',
        'LLL',
    ], {
        L: 'minecraft:leather',
        // R: 'minecraft:rabbit_hide',
        S: 'minecraft:string',
        I: 'minecraft:iron_ingot',
    }).id('backpacked:backpack');

    // String mesh recipe conflicts with Tetra rope
    const modular_toolbelt = Item.of(
        'tetra:modular_toolbelt',
        '{"toolbelt/belt":"toolbelt/belt","toolbelt/belt_material":"belt/rope","toolbelt/slot1":"toolbelt/strap_slot1","toolbelt/strap_slot1_material":"strap1/leather"}',
    );
    event.shaped(modular_toolbelt, [
        ' R ',
        'R R',
        ' R ',
    ], {
        R: 'farmersdelight:rope',
    }).id('tetra:toolbelt_modular');

    event.shaped('simplemagnets:advancedmagnet', [
        'GGL',
        'MED',
        'GGR',
    ], {
        G: 'minecraft:gold_ingot',
        L: 'minecraft:lapis_lazuli',
        M: 'simplemagnets:basicmagnet',
        E: 'kubejs:shining_ender_pearl',
        R: 'minecraft:redstone',
        D: 'kubejs:shining_diamond',
    }).id('simplemagnets:advancedmagnet');

    event.shaped('constructionwand:infinity_wand', [
        '  D',
        ' S ',
        'S  ',
    ], {
        D: 'kubejs:shining_diamond',
        S: 'minecraft:stick',
    }).id('constructionwand:infinity_wand');

    event.shaped('4x kubejs:error_block', [
        'BM ',
        'MB ',
        '   ',
    ], {
        B: 'minecraft:black_concrete',
        M: 'minecraft:magenta_concrete',
    });

    /// Lights for standing torches. Overrides weird coal recipes

    event.shaped('additional_lights:fire_for_standing_torch_s', [
        '   ',
        ' C ',
        'SS ',
    ], {
        C: '#minecraft:coals',
        S: 'minecraft:stick',
    }).id('additional_lights:fire_for_standing_torch_s');

    event.shaped('additional_lights:fire_for_standing_torch_l', [
        '   ',
        ' C ',
        'LL ',
    ], {
        C: '#minecraft:coals',
        L: '#minecraft:logs',
    }).id('additional_lights:fire_for_standing_torch_l');

    event.shaped('additional_lights:fire_for_fire_pit_s', [
        '   ',
        'CCC',
        'LLL',
    ], {
        C: '#minecraft:coals',
        L: '#minecraft:logs',
    }).id('additional_lights:fire_for_fire_pit_s');

    event.shaped('additional_lights:fire_for_fire_pit_l', [
        'CCC',
        'CCC',
        'LLL',
    ], {
        C: '#minecraft:coals',
        L: '#minecraft:logs',
    }).id('additional_lights:fire_for_fire_pit_l');

    // event.shaped('environmental:music_disc_leaving_home', [
    //     'BBB',
    //     'YMY',
    //     'RER',
    // ], {
    //     B: 'minecraft:blue_stained_glass_pane',
    //     R: 'minecraft:red_stained_glass_pane',
    //     Y: 'minecraft:yellow_stained_glass_pane',
    //     E: 'minecraft:emerald',
    //     M: 'minecraft:music_disc_cat',
    // });

    // CC: Tweaked
    event.shaped('computercraft:wireless_modem_normal', [
        'SSS',
        'SES',
        'SSS',
    ], {
        S: '#bookshelf:stones',
        E: 'kubejs:ender_pearl_block',
    }).id('computercraft:wireless_modem_normal');

    event.shaped('computercraft:wireless_modem_advanced', [
        'GSG',
        'GMG',
        'GGG',
    ], {
        S: 'kubejs:shining_ender_pearl',
        G: 'minecraft:gold_ingot',
        M: 'computercraft:wireless_modem_normal',
    }).id('computercraft:wireless_modem_advanced');

    event.shaped('computercraft:computer_advanced', [
        'GEG',
        'GCG',
        'GGG',
    ], {
        G: 'minecraft:gold_ingot',
        C: 'computercraft:computer_normal',
        E: 'kubejs:shining_ender_pearl',
    }).id('computercraft:computer_advanced_upgrade');

    event.shaped('computercraft:pocket_computer_advanced', [
        'GEG',
        'GCG',
        'GGG',
    ], {
        G: 'minecraft:gold_ingot',
        C: 'computercraft:pocket_computer_normal',
        E: 'kubejs:shining_ender_pearl',
    }).id('computercraft:pocket_computer_advanced_upgrade');

    // Bamboo stuff

    event.shaped('chimes:bamboo_chimes', [
        ' W ',
        ' S ',
        ' B ',
    ], {
        W: 'bambooeverything:dry_bamboo_slab',
        S: 'minecraft:string',
        B: 'minecraft:bamboo',
    }).id('chimes:bamboo_chimes');

    event.shaped('chimes:carved_bamboo_chimes', [
        ' W ',
        ' S ',
        ' B ',
    ], {
        W: 'bambooeverything:dry_bamboo_slab',
        S: 'minecraft:string',
        B: 'bambooeverything:dry_bamboo',
    });

    event.shaped('quark:bamboo_block', [
        'BBB',
        'B B',
        'BBB',
    ], {
        B: 'minecraft:bamboo',
    }).id('quark:building/crafting/compressed/bamboo_block');

    // Seashelf buff: make it so you need to kill guardians
    // this is due to the Create lapis to prismarine recipe
    event.shaped('apotheosis:seashelf', [
        'BBB',
        'SKP',
        'BBB',
    ], {
        B: 'minecraft:prismarine_bricks',
        S: 'upgrade_aquatic:guardian_spine',
        K: '#forge:bookshelves',
        P: 'minecraft:pufferfish',
    }).id('apotheosis:seashelf');

    // Endshelf buff (progression tweak)
    event.shaped('2x apotheosis:endshelf', [
        'BBB',
        'SDH',
        'BBB',
    ], {
        B: 'minecraft:end_stone_bricks',
        S: '#kubejs:upgraded_infused_seashelves',
        H: '#kubejs:upgraded_infused_hellshelves',
        D: 'minecraft:dragon_breath',
        // P: 'minecraft:ender_pearl',
    }).id('apotheosis:endshelf');

    event.shaped('apotheosis:draconic_endshelf', [
        ' D ',
        'ESE',
        'EEE',
    ], {
        D: 'minecraft:dragon_head',
        S: 'apotheosis:endshelf',
        E: 'kubejs:shining_ender_pearl',
    }).id('apotheosis:draconic_endshelf');

    event.shaped('apotheosis:pearl_endshelf', [
        'N N',
        'ESE',
        'N N',
    ], {
        N: 'minecraft:end_rod',
        S: 'apotheosis:endshelf',
        E: 'kubejs:shining_ender_pearl',
    }).id('apotheosis:pearl_endshelf');

    event.shaped('apotheosis:beeshelf', [
        'HBH',
        'NSN',
        'HBH',
    ], {
        H: 'minecraft:honeycomb',
        B: '#kubejs:beehives',
        N: 'minecraft:honey_block',
        S: '#forge:bookshelves',
    }).id('apotheosis:beeshelf');

    event.shaped('minecraft:enchanted_golden_apple', [
        'FGE',
        'APA',
        'RAR',
    ], {
        P: 'minecraft:golden_apple',
        G: 'compressium:gold_1',
        F: Item.of('minecraft:potion', '{Potion:"minecraft:long_fire_resistance"}').weakNBT(),
        E: Item.of('minecraft:potion', '{Potion:"minecraft:strong_regeneration"}').weakNBT(),
        A: Item.of('minecraft:potion', '{Potion:"apotheosis:strong_absorption"}').weakNBT(),
        R: Item.of('minecraft:potion', '{Potion:"apotheosis:resistance"}').weakNBT(),
    }).id('apotheosis:enchanted_golden_apple');

    event.shaped('lootr:trophy', [
        'H  ',
        'C  ',
        '   ',
    ], {
        H: 'minecraft:player_head',
        C: 'minecraft:chest',
    });

    event.shaped('buildinggadgets:gadget_building', [
        'IRI',
        'DRD',
        'ILI',
    ], {
        I: 'alloyed:steel_ingot',
        R: 'minecraft:redstone',
        D: 'minecraft:diamond',
        L: 'minecraft:lapis_lazuli',
    }).id('buildinggadgets:gadget_building');

    event.shaped('buildinggadgets:gadget_exchanging', [
        'IRI',
        'DLD',
        'ILI',
    ], {
        I: 'alloyed:steel_ingot',
        R: 'minecraft:redstone',
        D: 'minecraft:diamond',
        L: 'minecraft:lapis_lazuli',
    }).id('buildinggadgets:gadget_exchanging');

    event.shaped('buildinggadgets:gadget_copy_paste', [
        'IRI',
        'ERE',
        'ILI',
    ], {
        I: 'alloyed:steel_ingot',
        R: 'minecraft:redstone',
        E: 'minecraft:emerald',
        L: 'minecraft:lapis_lazuli',
    }).id('buildinggadgets:gadget_copy_paste');

    // this needs a MASSIVE progression buff if this were obtainable
    // event.shaped('buildinggadgets:gadget_destruction', [
    //     'IRI',
    //     'ERE',
    //     'ILI',
    // ], {
    //     I: 'minecraft:iron_ingot',
    //     R: 'minecraft:redstone',
    //     E: 'kubejs:shining_ender_pearl',
    //     L: 'kubejs:shining_lapis_lazuli',
    // }).id('buildinggadgets:gadget_destruction');

    event.shaped(
        Item.of('tetra:scroll_rolled', '{BlockEntityTag:{data:[{details:"art_of_forging",glyphs:[8,7,9,2],intricate:0b,key:"tetra/crucible_blade",material:2,ribbon:"ff1e00",schematics:["tetra:sword/crucible_blade"]}]}}'),
        [
            'SSS',
            'DED',
            'NBN',
        ],
        {
            S: 'tetra:dragon_sinew',
            D: 'kubejs:shining_diamond',
            E: 'minecraft:beacon',
            N: 'minecraft:netherite_ingot',
            B: 'minecraft:book',
        },
    ).id('tetra:crucible_scroll');

    // Storage drawer upgrades
    const storage_drawer_ores = ['obsidian', 'iron', 'gold', 'diamond', 'emerald'];
    storage_drawer_ores.forEach((ore, index) => {
        if (index !== 0) {
            event.shaped(`storagedrawers:${ore}_storage_upgrade`, [
                'OOO',
                'OUO',
                'OOO',
            ], {
                O: `minecraft:${ore}_block`,
                U: `storagedrawers:${storage_drawer_ores[index - 1]}_storage_upgrade`,
            }).id(`storagedrawers:${ore}_storage_upgrade`);
        }

        if (ore === 'emerald') {
            event.shaped(`storagedrawers:${ore}_storage_upgrade`, [
                'OOO',
                'OUO',
                'OOO',
            ], {
                O: 'compressium:emerald_1',
                U: `storagedrawers:${storage_drawer_ores[index - 1]}_storage_upgrade`,
            }).id(`storagedrawers:${ore}_storage_upgrade`);
        }
    });

    const compact_drawers = {
        'storagedrawers:compacting_drawers_3': ['minecraft:piston', 'storagedrawers:iron_storage_upgrade'],
        'storagedrawers:controller': ['minecraft:comparator', 'minecraft:diamond_block'],
        'storagedrawers:controller_slave': ['minecraft:comparator', 'minecraft:gold_block'],
    };
    Object.keys(compact_drawers).forEach((item) => {
        event.shaped(item, [
            'SSS',
            'ODO',
            'STS',
        ], {
            S: 'compressium:stone_1',
            D: '#storagedrawers:drawers',
            O: compact_drawers[item][0],
            T: compact_drawers[item][1],
        }).id(item);
    });

    // Massive void upgrade nerf
    event.shaped('storagedrawers:void_upgrade', [
        'CCC',
        'CTC',
        'CCC',
    ], {
        C: '#forge:cobblestone',
        T: 'storagedrawers:upgrade_template',
    }).id('storagedrawers:void_upgrade');

    // AstikorCarts supply cart buff
    event.shaped('astikorcarts:supply_cart', [
        'P P',
        'PCP',
        'WPW',
    ], {
        P: '#minecraft:planks',
        C: 'ironchest:iron_chest',
        W: 'astikorcarts:wheel',
    }).id('astikorcarts:supply_cart');

    [
        'pink', 'purple', 'blue', 'green',
        'yellow', 'orange', 'red', 'white',
    ].forEach((color) => {
        event.shaped(
            `4x upgrade_aquatic:${color}_jelly_torch`,
            [
                'DJ ',
                'PG ',
                '   ',
            ],
            {
                D: `minecraft:${color}_dye`,
                J: 'delightful:jelly_bottle',
                P: 'upgrade_aquatic:prismarine_rod',
                G: 'minecraft:glowstone_dust',
            },
        );
    });

    // #endregion
    // #region Smelting crafting recipes

    // Rotten flesh to leather. It's just really convenient.
    event.smelting('minecraft:leather', 'minecraft:rotten_flesh').xp(1.0);

    // hundreds of biomes and not one green dye recipe from modded cacti. #cactusgreendye #awareness
    event.smelting('minecraft:green_dye', 'byg:barrel_cactus').xp(1.0);
    event.smelting('minecraft:green_dye', 'byg:flowering_barrel_cactus').xp(1.0);
    event.smelting('minecraft:green_dye', 'atmospheric:barrel_cactus').xp(1.0);
    event.smelting('minecraft:green_dye', 'biomemakeover:saguaro_cactus').xp(1.0);
    event.smelting('minecraft:green_dye', 'creeperoverhaul:tiny_cactus').xp(1.0);

    // #endregion
    // #region Smithing recipes

    event.smithing(
        'ring_of_enderchest:ring_of_enderchest',
        'minecraft:ender_chest',
        Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1).weakNBT(),
    ).id('ring_of_enderchest:ring_of_enderchest');

    // #endregion
    // #region Input replacement

    // Iron chest recipe buff
    event.replaceInput({ mod: 'ironchest' }, 'minecraft:copper_ingot', 'minecraft:copper_block');
    event.replaceInput({ mod: 'ironchest' }, 'minecraft:iron_ingot', 'minecraft:iron_block');
    event.replaceInput({ mod: 'ironchest' }, 'minecraft:gold_ingot', 'minecraft:gold_block');
    event.replaceInput({ mod: 'ironchest' }, 'minecraft:diamond', 'minecraft:diamond_block');
    event.replaceInput({ mod: 'ironchest' }, 'minecraft:obsidian', 'minecraft:obsidian');

    // #endregion
    // #region Create mechanical crafting

    // event.recipes.create.mechanicalCrafting('kubejs:mini_disc_o_floor_label', [
    //     'RYG',
    //     'L B',
    //     'PMK',
    // ], {
    //     R: 'mcwwindows:red_mosaic_glass_pane',
    //     Y: 'chipped:tiled_yellow_stained_glass_pane',
    //     G: 'chipped:raster_lime_stained_glass_pane',
    //     L: 'mcwwindows:light_blue_mosaic_glass_pane',
    //     B: 'chipped:ornate_blue_stained_glass_pane',
    //     P: 'quark:purple_framed_glass_pane',
    //     M: 'chipped:tiled_magenta_stained_glass_pane',
    //     K: 'mcwwindows:pink_mosaic_glass_pane',
    // });

    event.recipes.create.mechanicalCrafting('chunkloaders:single_chunk_loader', [
        'IO',
    ], {
        I: '#kubejs:iron_glass_blocks',
        O: '#forge:obsidian',
    });

    event.recipes.create.mechanicalCrafting('chunkloaders:basic_chunk_loader', [
        ' S ',
        'SES',
        'SSS',
        'SSS',
    ], {
        S: 'chunkloaders:single_chunk_loader',
        E: 'minecraft:ender_pearl',
    });

    event.recipes.create.mechanicalCrafting('chunkloaders:advanced_chunk_loader', [
        '   G   ',
        ' PSSSP ',
        'GSBLBSG',
        ' PSRSP ',
        '   G   ',
    ], {
        S: 'chunkloaders:single_chunk_loader',
        B: 'chunkloaders:basic_chunk_loader',
        P: 'minecraft:blaze_powder',
        G: '#kubejs:gold_glass_blocks',
        L: 'quark:blaze_lantern',
        R: 'minecraft:blaze_rod',
    });

    event.recipes.create.mechanicalCrafting('chunkloaders:ultimate_chunk_loader', [
        ' RIR ',
        'EBABE',
        'DRSRD',
        ' SSS ',
        ' SSS ',
    ], {
        S: 'chunkloaders:single_chunk_loader',
        B: 'chunkloaders:basic_chunk_loader',
        A: 'chunkloaders:advanced_chunk_loader',
        I: 'create_connected_blocks:iron_reinforcement',
        R: 'minecraft:redstone_block',
        E: 'minecraft:ender_eye',
        D: '#kubejs:diamond_glass_blocks',
    });

    // #endregion
    // #region Create compacting recipes

    // TODO: Finish wheezer disc recipe
    // event.recipes.createCompacting('kubejs:music_disc_wheezer', ['minecraft:music_disc_5', 'doggytalents:smarty_glasses']).superheated();
    event.recipes.createCompacting([Fluid.of('biomesoplenty:blood', 25)], 'minecraft:rotten_flesh');
    event.recipes.createCompacting([Fluid.of('biomesoplenty:blood', 50)], 'biomesoplenty:flesh');
    event.recipes.createCompacting([Fluid.of('biomesoplenty:blood', 50)], 'biomesoplenty:porous_flesh');
    event.recipes.createCompacting('kubejs:crushed_dirt', 'minecraft:dirt');

    event.recipes.createCompacting(
        'kubejs:stress_guts',
        [
            'minecraft:ender_pearl', 'minecraft:ender_pearl',
            'minecraft:phantom_membrane',
            Fluid.of('minecraft:water', 250),
        ],
    );

    // #endregion
    // #region Create mixing recipes

    event.recipes.createMixing(
        '2x alloyed:steel_ingot',
        ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot',
        '#minecraft:coals'],
    ).heated().id('alloyed:mixing/steel_ingot');

    event.recipes.createMixing(
        [Fluid.of('create_enchantment_industry:experience', 20)],
        [
            'minecraft:gunpowder',
            'minecraft:rotten_flesh',
            'minecraft:spider_eye',
            'minecraft:bone',
        ],
    ).superheated();

    event.recipes.createMixing(
        'doggytalents:training_treat',
        [
            'minecraft:string', 'minecraft:bone', 'minecraft:gunpowder',
            'minecraft:sugar', 'minecraft:sugar', 'minecraft:sugar',
            'minecraft:wheat', 'minecraft:wheat', 'minecraft:wheat',
        ],
    );

    event.recipes.createMixing(
        [
            'minecraft:phantom_membrane',
            Item.of('minecraft:phantom_membrane').withChance(0.15),
        ],
        [
            'kubejs:stress_guts',
            Fluid.of('minecraft:water', 1000),
        ],
    ).heated();

    event.recipes.createMixing(
        [
            'minecraft:iron_ingot',
            '#minecraft:coals', '#minecraft:coals', '#minecraft:coals',
        ],
        [
            'dustrial_decor:cast_iron_billet', 'dustrial_decor:cast_iron_billet',
            'dustrial_decor:cast_iron_billet', 'dustrial_decor:cast_iron_billet',
        ],
    ).id('dustrial_decor:cast_iron_billet');

    // mfw my decorative crystal chest lags out my framerate D:
    event.recipes.createMixing('ironchest:diamond_chest', 'ironchest:crystal_chest').heated();

    event.recipes.createMixing(
        [Fluid.of('kubejs:shine_solution', 1000), 'minecraft:nether_star'],
        ['minecraft:nether_star', Fluid.of('minecraft:water', 1000)],
    ).heated();

    [
        'diamond',
        'ender_pearl',
        'emerald',
        // 'lapis_lazuli',
    ].forEach((ore) => {
        event.recipes.createMixing(
            [`kubejs:shining_${ore}`],
            [Fluid.of('kubejs:shine_solution', 500), `minecraft:${ore}`],
        ).heated();
    });

    event.recipes.createMixing(
        ['kubejs:shine_core'],
        ['quark:blaze_lantern', Fluid.of('kubejs:shine_solution', 1000)],
    );

    // Liquid exp.
    // Weird syntax as a bug workaround..?
    // so these items can be used interchangeably
    // event.recipes.createMixing(
    //     {
    //         heatRequirement: 'superheated',
    //         ingredients: [
    //             {
    //                 item: 'minecraft:gunpowder',
    //             },
    //             {
    //                 item: 'minecraft:rotten_flesh',
    //             },
    //             {
    //                 item: 'minecraft:string',
    //             },
    //             {create
    //                 item: 'minecraft:bone',
    //             },
    //         ],
    //         results: [
    //             {
    //                 fluid: 'create_enchantment_industry:experience',
    //                 amount: 20,
    //             },
    //         ],
    //     },
    // ).superheated();

    // #endregion
    // #region Create deploying recipes

    // event.recipes.createDeploying(Item.of('minecraft.copper_nugget').withChance(25), ['kubejs:crushed_dirt', 'simplemagnets:basicmagnet']).keepHeldItem();

    // #endregion
    // #region Create filling recipes

    event.recipes.create.filling(
        'create:experience_nugget',
        [
            Fluid.of('create_enchantment_industry:experience', 3),
            'minecraft:iron_nugget',
        ],
    );

    // #endregion
    // #region Create haunting recipes

    event.recipes.create.haunting('biomemakeover:soul_embers', 'minecraft:blaze_powder');

    event.recipes.create.haunting('atmospheric:grimwood_sapling', 'minecraft:spruce_sapling');
    event.recipes.create.haunting('atmospheric:kousa_sapling', 'biomesoplenty:white_cherry_sapling');
    event.recipes.create.haunting('atmospheric:kousa_sapling', 'byg:white_cherry_sapling');

    // #endregion
    // #region Create sequenced assembly recipes

    // for this code to work, transitional item need to be added to the game
    // const trans_disc_11 = 'kubejs:incomplete_music_disc_11'; // transitional item
    // event.recipes.createSequencedAssembly([
    //     Item.of('kubejs:music_disc_three_hundred_mb').withChance(50.0), // result
    //     Item.of('byg:pollen_dust').withChance(25.0), // scrap
    //     Item.of('create:experience_nugget').withChance(25.0), // scrap
    // ], 'minecraft:music_disc_11', [ // input
    //     event.recipes.createPressing(trans_disc_11, trans_disc_11),
    //     // set the transitional item and the loops (amount of repetitions)
    // ]).transitionalItem(trans_disc_11).loops(100);

    // const trans_mellohi = 'kubejs:incomplete_music_disc_mellohi';
    // event.recipes.createSequencedAssembly(
    //     ['kubejs:music_disc_antgry_dance'], // result
    //     'minecraft:music_disc_mellohi', // input
    //     [ // process
    //         event.recipes.createFilling(trans_mellohi, [trans_mellohi, potionFluid('minecraft:strength', 250, 'REGULAR')]),
    //         event.recipes.createDeploying(trans_mellohi, [trans_mellohi, 'minecraft:smooth_quartz_slab']),
    //         event.recipes.createDeploying(trans_mellohi, [trans_mellohi, 'minecraft:slime_ball']),
    //         event.recipes.createDeploying(trans_mellohi, [trans_mellohi, 'kubejs:mini_disc_o_floor_label']),
    //         event.recipes.createPressing(trans_mellohi, trans_mellohi),
    //         event.recipes.createPressing(trans_mellohi, trans_mellohi),
    //     ],
    // ).transitionalItem(trans_mellohi).loops(1);

    [
        ['iron_ingot', 'iron'],
        ['gold_ingot', 'golden'],
        ['lapis_lazuli', 'lapis'],
        ['netherite_ingot', 'netherite'],
        ['copper_ingot', 'copper'],
        ['brass_ingot', 'brass'],
        ['zinc_ingot', 'zinc'],
        ['diamond', 'diamond'],
        ['emerald', 'emerald'],
    ].forEach((ore) => {
        const trans_ore = `create_connected_blocks:incomplete_${ore[1]}_reinforcement`;
        const pfx = ore[0] === 'brass_ingot' || ore[0] === 'zinc_ingot' ? 'create:' : 'minecraft:';
        const mod_ore = pfx + ore[0];
        event.recipes.createSequencedAssembly(
            [`create_connected_blocks:${ore[1]}_reinforcement`],
            'kubejs:shining_diamond',
            [
                event.recipes.createDeploying(trans_ore, [trans_ore, mod_ore]),
                event.recipes.createDeploying(trans_ore, [trans_ore, 'minecraft:slime_ball']),
                event.recipes.createPressing(trans_ore, trans_ore),
            ],
        ).transitionalItem(trans_ore).loops(18);
    });

    const trans_crushed_dirt = 'kubejs:crushed_dirt';
    ['basic', 'advanced'].forEach((magnet) => {
        event.recipes.createSequencedAssembly(
            [
                Item.of('2x create:copper_nugget').withChance(25.0),
                Item.of('twigs:pebble').withChance(75.0),
            ],
            'minecraft:dirt',
            [
                event.recipes.createPressing(trans_crushed_dirt, trans_crushed_dirt),
                event.recipes.createPressing(trans_crushed_dirt, trans_crushed_dirt),
                event.recipes.createPressing(trans_crushed_dirt, trans_crushed_dirt),
                event.recipes.createDeploying(trans_crushed_dirt, [trans_crushed_dirt, `simplemagnets:${magnet}magnet`]).keepHeldItem(),
            ],
        ).transitionalItem(trans_crushed_dirt).loops(1);
    });

    // const trans_conduit = 'kubejs:incomplete_potion_conduit';
    // event.recipes.createSequencedAssembly(
    //     ['kubejs:potion_conduit'],
    //     'minecraft:ender_eye',
    //     [
    //         event.recipes.createDeploying(trans_conduit,
        //          [trans_conduit, 'minecraft:glowstone_dust']),
    //         event.recipes.createDeploying(trans_conduit, [trans_conduit, 'minecraft:redstone']),
    //         event.recipes.createDeploying(trans_conduit,
                        // [trans_conduit, 'minecraft:blaze_powder']),
    //         event.recipes.createFilling(trans_conduit,
                    // [trans_conduit, Fluid.of('minecraft:lava', 250)]),
    //         event.recipes.createFilling(trans_conduit,
                    // [trans_conduit, Fluid.of('minecraft:water', 1000)]),
    //     ],
    // ).transitionalItem(trans_conduit).loops(8);

    // const trans_deepslate = 'minecraft:deepslate';
    // event.recipes.createSequencedAssembly(
    //     ['minecraft:bedrock'],
    //     'minecraft:deepslate',
    //     [
    //         event.recipes.createFilling(trans_deepslate, [
    //             trans_deepslate, Fluid.of('minecraft:lava', 5)]),
    //         event.recipes.createPressing(trans_deepslate, trans_deepslate),
    //         event.recipes.createPressing(trans_deepslate, trans_deepslate),
    //         event.recipes.createPressing(trans_deepslate, trans_deepslate),
    //     ],
    // ).transitionalItem(trans_deepslate).loops(100000);

    // #endregion
    // #region Custom datapack recipes

    // Farmer's Delight cutting board

    // Ice cubes from ice
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'minecraft:ice',
            },
        ],
        tool: {
            type: 'farmersdelight:tool_action',
            action: 'pickaxe_dig',
        },
        result: [
            {
                item: 'neapolitan:ice_cubes',
                count: 3,
            },
        ],
    });

    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'chimes:bamboo_chimes',
            },
        ],
        result: [
            {
                count: 1,
                item: 'chimes:carved_bamboo_chimes',
            },
        ],
        tool: {
            tag: 'forge:tools/knives',
        },
    });

    // event.custom({
    //     type: 'farmersdelight:cutting',
    //     ingredients: [
    //         {
    //             item: 'minecraft:ice',
    //         },
    //     ],
    //     tool: {
    //         type: 'farmersdelight:tool_action',
    //         action: 'pickaxe_dig',
    //     },
    //     result: [
    //         {
    //             item: 'neapolitan:ice_cubes',
    //             count: 3,
    //         },
    //     ],
    // });

    // Apotheosis infusion

    event.custom({
        type: 'apotheosis:enchanting',
        conditions: [{
            type: 'apotheosis:module',
            module: 'enchantment',
        }],
        input: {
            item: 'minecraft:oak_log',
        },
        requirements: {
            eterna: 40,
            quanta: 0,
            arcana: 20,
        },
        max_requirements: {
            eterna: 50,
            quanta: 20,
            arcana: 50,
        },
        result: {
            item: 'mysticaloaktree:wise_oak',
            count: 1,
        },
    });

    event.custom({
        type: 'apotheosis:enchanting',
        conditions: [{
            type: 'apotheosis:module',
            module: 'enchantment',
        }],
        input: {
            item: 'constructionwand:diamond_wand',
        },
        requirements: {
            eterna: 30,
            quanta: 25,
            arcana: 30,
        },
        max_requirements: {
            eterna: 50,
            quanta: 45,
            arcana: 70,
        },
        result: {
            item: 'constructionwand:infinity_wand',
            count: 1,
        },
    });

    // Potion Conduit max enchant
    // event.custom({
    //     type: 'apotheosis:enchanting',
    //     conditions: [{
    //         type: 'apotheosis:module',
    //         module: 'enchantment',
    //     }],
    //     input: {
    //         item: 'kubejs:potion_conduit',
    //     },
    //     requirements: {
    //         eterna: 50,
    //         quanta: 0,
    //         arcana: 45,
    //     },
    //     max_requirements: {
    //         eterna: 50,
    //         quanta: 0,
    //         arcana: 55,
    //     },
    //     result: {
    //         item: 'kubejs:infused_potion_conduit',
    //         count: 1,
    //     },
    // });
    // #endregion
});
