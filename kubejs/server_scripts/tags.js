// priority: 1

ServerEvents.tags('block', (event) => {
    // event.add('minecraft:mineable/shovel', 'kubejs:crushed_dirt');
    event.add('minecraft:mineable/axe', 'littleframes:creative_pic_frame');
});

ServerEvents.tags('item', (event) => {
    const glassOres = [
        'iron',
        'gold',
        'diamond',
        'emerald',
        'netherite',
        'lapis',
        'copper',
        'brass',
        'zinc',
    ];

    glassOres.forEach((ore) => {
        event.add(`kubejs:${ore}_glass_blocks`, `create_connected_blocks:${ore}_glass`);
        event.add(`kubejs:${ore}_glass_blocks`, `create_connected_blocks:${ore}_clear_glass`);
    });

    [
        'diamond',
        'ender_pearl',
        'emerald',
        // 'lapis_lazuli',
    ].forEach((ore) => {
        event.add('forge:gems', `kubejs:shining_${ore}`);
    });

    event.add('kubejs:redstone_pens', 'redstonepen:pen');
    event.add('kubejs:redstone_pens', 'redstonepen:quill');

    // event.add('kubejs:infused_bookshelves', 'apotheosis:infused_seashelf');
    // event.add('kubejs:infused_bookshelves', 'apotheosis:infused_hellshelf');

    event.add('kubejs:upgraded_infused_seashelves', 'apotheosis:crystal_seashelf');
    event.add('kubejs:upgraded_infused_seashelves', 'apotheosis:heart_seashelf');
    event.add('kubejs:upgraded_infused_hellshelves', 'apotheosis:blazing_hellshelf');
    event.add('kubejs:upgraded_infused_hellshelves', 'apotheosis:glowing_hellshelf');

    // #region Tag Compatibility (forge why :skull:)

    // Big shoutouts to the Adorn mod for tagging every single furniture item in their mod!!

    /// All items and tags within these lists will be tagged with kubejs:[key]
    const untagged_items = {
        // beehives: [
        //     'minecraft:beehive',

        //     'environmental:willow_beehive', 'environmental:cherry_beehive', 'environmental:wisteria_beehive',

        //     'upgrade_aquatic:driftwood_beehive', 'upgrade_aquatic:river_beehive',

        //     'woodworks:birch_beehive', 'woodworks:jungle_beehive', 'woodworks:acacia_beehive', 'woodworks:dark_oak_beehive',
        //     'woodworks:mangrove_beehive', 'woodworks:crimson_beehive', 'woodworks:warped_beehive',

        //     'atmospheric:rosewood_beehive', 'atmospheric:morado_beehive', 'atmospheric:yucca_beehive', 'atmospheric:kousa_beehive',
        //     'atmospheric:aspen_beehive', 'atmospheric:grimwood_beehive',
        // ],
        // ladders: [
        //     'adorn:stone_ladder',

        //     'blockcarpentry:frame_ladder', 'blockcarpentry:illusion_ladder',

        //     'create:andesite_ladder', 'create:brass_ladder', 'create:copper_ladder',

        //     'alloyed:steel_ladder',

        //     '#chipped:ladder',

        //     '#quark:ladders',
        // ],
        chests: [
            'ironchest:iron_chest', 'ironchest:gold_chest', 'ironchest:diamond_chest', 'ironchest:copper_chest',
            'ironchest:crystal_chest', 'ironchest:obsidian_chest', 'ironchest:dirt_chest',
            'ironchest:trapped_iron_chest', 'ironchest:trapped_gold_chest', 'ironchest:trapped_diamond_chest', 'ironchest:trapped_copper_chest',
            'ironchest:trapped_crystal_chest', 'ironchest:trapped_obsidian_chest', 'ironchest:trapped_dirt_chest',

            '#forge:chests',
        ],
        leaf_piles: [
            'atmospheric:rosewood_leaf_pile', 'atmospheric:morado_leaf_pile', 'atmospheric:flowering_morado_leaf_pile', 'atmospheric:yucca_leaf_pile',
            'atmospheric:kousa_leaf_pile', 'atmospheric:aspen_leaf_pile', 'atmospheric:grimwood_leaf_pile',

            'environmental:willow_leaf_pile', 'environmental:cherry_leaf_pile', 'environmental:pink_wisteria_leaf_pile',
            'environmental:blue_wisteria_leaf_pile', 'environmental:purple_wisteria_leaf_pile', 'environmental:white_wisteria_leaf_pile',

            'byg:leaf_pile',

            'upgrade_aquatic:river_leaf_pile',

            'woodworks:oak_leaf_pile', 'woodworks:spruce_leaf_pile', 'woodworks:birch_leaf_pile', 'woodworks:jungle_leaf_pile', 'woodworks:acacia_leaf_pile',
            'woodworks:dark_oak_leaf_pile', 'woodworks:mangrove_leaf_pile', 'woodworks:azalea_leaf_pile', 'woodworks:flowering_azalea_leaf_pile',
        ],
        leaf_carpets: [
            'atmospheric:rosewood_leaf_carpet', 'atmospheric:morado_leaf_carpet', 'atmospheric:flowering_morado_leaf_carpet', 'atmospheric:yucca_leaf_carpet',
            'atmospheric:kousa_leaf_carpet', 'atmospheric:aspen_leaf_carpet', 'atmospheric:grimwood_leaf_carpet',

            'environmental:willow_leaf_carpet', 'environmental:cherry_leaf_carpet', 'environmental:pink_wisteria_leaf_carpet',
            'environmental:blue_wisteria_leaf_carpet', 'environmental:purple_wisteria_leaf_carpet', 'environmental:white_wisteria_leaf_carpet',

            'upgrade_aquatic:river_leaf_carpet',

            'minecraft:moss_carpet',
        ],
        mushrooms: [
            'biomemakeover:wild_mushrooms',

            // Why is the BYG Shulkren fungus tagged,
            // but not the Sythian one?
            // That's what I call a fungus among us...
            'byg:sythian_fungus',

            '#chipped:brown_mushroom', '#chipped:red_mushroom',
            '#chipped:crimson_fungus', '#chipped:warped_fungus',

            '#forge:mushrooms',
        ],
        glowshrooms: [
            'biomemakeover:orange_glowshroom', 'biomemakeover:green_glowshroom', 'biomemakeover:purple_glowshroom',

            'byg:soul_shroom',
        ],
        mushroom_blocks: [
            'byg:soul_shroom_stem', 'byg:green_mushroom_block', 'byg:imparius_mushroom_block', 'byg:weeping_milkcap_mushroom_block',
            'byg:wood_blewit_mushroom_block', 'byg:white_mushroom_stem', 'byg:brown_mushroom_stem', 'quark:glow_shroom_stem',

            '#chipped:red_mushroom_block', '#chipped:brown_mushroom_block', '#chipped:mushroom_stem',
        ],
        glowshroom_blocks: [
            'biomemakeover:purple_glowshroom_block', 'biomemakeover:green_glowshroom_block', 'biomemakeover:orange_glowshroom_block',
            'biomemakeover:glowshroom_stem',

            'quark:glow_shroom_block',

            'byg:soul_shroom_block', 'byg:death_cap_mushroom_block',
        ],
        posts: [
            'atmospheric:stripped_rosewood_post', 'atmospheric:rosewood_post',
            'atmospheric:stripped_morado_post', 'atmospheric:morado_post',
            'atmospheric:stripped_yucca_post', 'atmospheric:yucca_post',
            'atmospheric:stripped_kousa_post', 'atmospheric:kousa_post',
            'atmospheric:stripped_aspen_post', 'atmospheric:aspen_post',
            'atmospheric:stripped_grimwood_post', 'atmospheric:grimwood_post',

            'environmental:stripped_willow_post', 'environmental:willow_post',
            'environmental:stripped_cherry_post', 'environmental:cherry_post',
            'environmental:stripped_wisteria_post', 'environmental:wisteria_post',

            'quark:stripped_blossom_post', 'quark:blossom_post',
            'quark:stripped_azalea_post', 'quark:azalea_post',
            'quark:stripped_ancient_post', 'quark:ancient_post',
            'quark:stripped_oak_post', 'quark:oak_post',
            'quark:stripped_spruce_post', 'quark:spruce_post',
            'quark:stripped_birch_post', 'quark:birch_post',
            'quark:stripped_jungle_post', 'quark:jungle_post',
            'quark:stripped_acacia_post', 'quark:acacia_post',
            'quark:stripped_dark_oak_post', 'quark:dark_oak_post',
            'quark:stripped_crimson_post', 'quark:crimson_post',
            'quark:stripped_warped_post', 'quark:warped_post',
            'quark:stripped_mangrove_post', 'quark:mangrove_post',
            'quark:stripped_bamboo_post', 'quark:bamboo_post',

            'upgrade_aquatic:stripped_driftwood_post', 'upgrade_aquatic:driftwood_post',
            'upgrade_aquatic:stripped_river_post', 'upgrade_aquatic:river_post',

            '#adorn:posts', // Adorn <3
        ],
        hedges: [
            '#cfm:fences/hedge',

            '#quark:hedges',
        ],
        lily_pads: [
            'environmental:large_lily_pad', 'environmental:giant_lily_pad',

            'biomemakeover:water_lily',

            // a funny underscore is missing here
            'byg:flowering_tiny_lily_pads', 'byg:tiny_lilypads', 'byg:embur_lily',

            '#chipped:lily_pad',
        ],
        vines: [
            'minecraft:weeping_vines', 'minecraft:twisting_vines', 'minecraft:vine',

            'atmospheric:passion_vine',

            'biomesoplenty:willow_vine',

            'byg:imparius_vine', 'byg:lament_vine', 'byg:skyris_vine', 'byg:embur_gel_vines',
            'byg:wailing_vine', 'byg:shulkren_vine',

            '#chipped:vine',
        ],
        grass: [
            'minecraft:grass', 'minecraft:tall_grass',

            'biomesoplenty:dune_grass', 'biomesoplenty:desert_grass', 'biomesoplenty:dead_grass',

            'environmental:giant_tall_grass',

            'byg:wailing_grass', 'byg:scorched_grass', 'byg:tall_ether_grass', 'byg:ether_grass',
            'byg:tall_prairie_grass', 'byg:prairie_grass', 'byg:beach_grass',
            'byg:horseweed',

            'quark:chorus_weeds',

            'upgrade_aquatic:beachgrass', 'upgrade_aquatic:tall_beachgrass',

            '#chipped:nether_sprouts',
        ],
        seagrass: [
            'minecraft:seagrass', 'minecraft:kelp', 'minecraft:sea_pickle',

            'biomesoplenty:watergrass',

            'environmental:duckweed',

            'upgrade_aquatic:blue_pickerelweed', 'upgrade_aquatic:purple_pickerelweed',
        ],
        roots: [
            'minecraft:hanging_roots',

            'biomemakeover:mycelium_roots',

            'byg:tall_crimson_roots', 'byg:weeping_roots', 'byg:sythian_roots', 'byg:hanging_sythian_roots',
            'byg:embur_roots', 'byg:tall_embur_roots', 'byg:ivis_roots', 'byg:nightshade_roots',

            '#chipped:warped_roots', '#chipped:crimson_roots',
        ],
        hanging: [
            'minecraft:hanging_roots',

            'biomesoplenty:hanging_cobweb',

            'byg:hanging_sythian_roots', 'byg:hanging_bones',

            'chipped:hanging_broken_cobweb', 'chipped:hanging_cobweb',

            'environmental:pink_hanging_wisteria_leaves', 'environmental:blue_hanging_wisteria_leaves',
            'environmental:purple_hanging_wisteria_leaves', 'environmental:white_hanging_wisteria_leaves',
            'environmental:hanging_willow_leaves',
        ],
    };

    Object.keys(untagged_items).forEach((category) => {
        untagged_items[category].forEach((item) => {
            event.add(`kubejs:${category}`, item);
        });
    });

    // Merging Forge and Minecraft tags... -.-
    // there needs to be a standard for this stuff.
    // const forge_minecraft_tag_merge = [
    //     'fences',
    //     'fence_gates',
    //     'wool',
    // ];
    // forge_minecraft_tag_merge.forEach((tag) => {
    //     event.add(`kubejs:${tag}`, `forge:${tag}`);
    //     event.add(`kubejs:${tag}`, `minecraft:${tag}`);
    // });

    // #endregion
});
