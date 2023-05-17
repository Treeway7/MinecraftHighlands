const custom_tooltips = [
    ['doggytalents:tiny_bone', 'Shrinks your dog!'],
    ['doggytalents:big_bone', 'Grows your dog!'],
    ['doggytalents:conducting_bone', 'Teleports your dog to you.'],
    ['minecraft:phantom_membrane', 'Phantoms have been disabled.'],
];

// TODO: search by string (ie. 'kousa' in Ingredient.all.stacks iterator)
// instead of hardcoding these item IDs.
// The array below is a ridiculous bandaid solution for this many items
const now_obtainable_items = [
    'abnormals:grimwood_cabinet',
    'atmospheric:grimwood_planks', 'atmospheric:grimwood_log', 'atmospheric:stripped_grimwood_wood',
    'atmospheric:stripped_grimwood_log', 'atmospheric:stripped_grimwood', 'atmospheric:grimwood',
    'atmospheric:grimwood_wood', 'atmospheric:grimwood_slab', 'atmospheric:grimwood_bookshelf',
    'atmospheric:grimwood_stairs', 'atmospheric:grimwood_boards', 'atmospheric:vertical_grimwood_planks',
    'atmospheric:grimwood_vertical_slab', 'atmospheric:stripped_grimwood_post', 'atmospheric:grimwood_post',
    'atmospheric:grimwood_sapling', 'atmospheric:grimwood_leaves', 'atmospheric:grimwood_ladder',
    'atmospheric:grimwood_fence', 'atmospheric:grimwood_sign', 'atmospheric:grimwood_beehive',
    'atmospheric:grimwood_leaf_pile', 'atmospheric:grimwood_chest', 'atmospheric:grimwood_leaf_carpet',
    'atmospheric:grimwood_hedge', 'atmospheric:grimwood_button', 'atmospheric:grimwood_pressure_plate',
    'atmospheric:grimwood_door', 'atmospheric:grimwood_trapdoor', 'atmospheric:grimwood_fence_gate',
    'atmospheric:grimwood_trapped_chest', 'atmospheric:grimwood_boat', 'atmospheric:grimwood_chest_boat',
    'atmospheric:grimwood_furnace_boat', 'atmospheric:large_grimwood_boat',
    'supplementaries:atmospheric/hanging_sign_grimwood', 'supplementaries:atmospheric/sign_post_grimwood',

    'abnormals:kousa_cabinet',
    'atmospheric:kousa_planks', 'atmospheric:kousa_log', 'atmospheric:stripped_kousa_wood',
    'atmospheric:stripped_kousa_log', 'atmospheric:stripped_kousa', 'atmospheric:kousa',
    'atmospheric:kousa_wood', 'atmospheric:kousa_slab', 'atmospheric:kousa_bookshelf',
    'atmospheric:kousa_stairs', 'atmospheric:kousa_boards', 'atmospheric:vertical_kousa_planks',
    'atmospheric:kousa_vertical_slab', 'atmospheric:stripped_kousa_post', 'atmospheric:kousa_post',
    'atmospheric:kousa_sapling', 'atmospheric:kousa_leaves', 'atmospheric:kousa_ladder',
    'atmospheric:kousa_fence', 'atmospheric:kousa_sign', 'atmospheric:kousa_beehive',
    'atmospheric:kousa_leaf_pile', 'atmospheric:kousa_chest', 'atmospheric:kousa_leaf_carpet',
    'atmospheric:kousa_hedge', 'atmospheric:kousa_button', 'atmospheric:kousa_pressure_plate',
    'atmospheric:kousa_door', 'atmospheric:kousa_trapdoor', 'atmospheric:kousa_fence_gate',
    'atmospheric:kousa_trapped_chest', 'atmospheric:kousa_boat', 'atmospheric:kousa_chest_boat',
    'atmospheric:kousa_furnace_boat', 'atmospheric:large_kousa_boat',
    'supplementaries:atmospheric/hanging_sign_kousa', 'supplementaries:atmospheric/sign_post_kousa',
];

// Jelly torches
[
    'pink', 'purple', 'blue', 'green',
    'yellow', 'orange', 'red', 'white',
].forEach((color) => {
    now_obtainable_items.push(`upgrade_aquatic:${color}_jelly_torch`);
});

ItemEvents.tooltip((event) => {
    custom_tooltips.forEach((item_group) => {
        event.add(
            item_group[0],
            Text.darkGray(item_group[1]),
        );
    });

    now_obtainable_items.forEach((item) => {
        event.add(
            item,
            Text.gray('Item no longer'),
        );
    });

    // Tapestry tooltips, for ease of use
    [
        ['white', 'Sheep'],
        ['orange', 'Sunset'],
        ['magenta', 'Nether Portal'],
        ['light_blue', 'Cloudy Day'],
        ['yellow', 'Horse'],
        ['lime', 'Slime'],
        ['pink', 'Pig'],
        ['gray', 'Pillager'],
        ['light_gray', 'Iron Golem'],
        ['cyan', 'Steve'],
        ['purple', 'Witch'],
        ['blue', 'Moon'],
        ['brown', 'Cow'],
        ['green', 'Zombie Villager'],
        ['red', 'Giant Red Mushroom'],
        ['black', 'Enderman'],
    ].forEach((item_set) => {
        event.add(
            `biomemakeover:${item_set[0]}_tapestry`,
            Text.gray(item_set[1]),
        );
    });
});
