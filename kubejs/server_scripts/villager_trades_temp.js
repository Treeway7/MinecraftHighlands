// /// Villager trades
// /// This is temporary until I can figure out why
// /// the other trades file is bugging out so badly.
// let trades = [
//     // novice
//     [
//         'armorer',
//         1,
//         'minecraft:charcoal',
//         [10, 14], // sell quantity
//         'minecraft:emerald',
//         1, // reward count
//         16, // trades until disabled
//         0.05, // price multiplier
//         2, // xp to villager
//     ],
//     // [
//     //     'armorer',
//     //     1,
//     //     'minecraft:emerald',
//     //     [1, 5], // sell quantity
//     //     Item.of('minecraft:chainmail_helmet', '{Damage:0}').enchant('minecraft:protection', 1),
//     //     1, // reward count
//     //     12, // trades until disabled
//     //     0.2, // price multiplier
//     //     1, // xp to villager
//     // ],
//     // [
//     //     'armorer',
//     //     1,
//     //     'minecraft:emerald',
//     //     [4, 7], // sell quantity
//     //     Item.of('minecraft:chainmail_chestplate', '{Damage:0}').enchant('minecraft:protection', 1),
//     //     1, // reward count
//     //     12, // trades until disabled
//     //     0.2, // price multiplier
//     //     1, // xp to villager
//     // ],
//     // [
//     //     'armorer',
//     //     1,
//     //     'minecraft:emerald',
//     //     [3, 7], // sell quantity
//     //     Item.of('minecraft:chainmail_leggings', '{Damage:0}').enchant('minecraft:protection', 1),
//     //     1, // reward count
//     //     12, // trades until disabled
//     //     0.2, // price multiplier
//     //     1, // xp to villager
//     // ],
//     // [
//     //     'armorer',
//     //     1,
//     //     'minecraft:emerald',
//     //     [1, 4], // sell quantity
//     //     Item.of('minecraft:chainmail_boots', '{Damage:0}').enchant('minecraft:protection', 1),
//     //     1, // reward count
//     //     12, // trades until disabled
//     //     0.2, // price multiplier
//     //     1, // xp to villager
//     // ],

//     // // apprentice
//     // [
//     //     'armorer',
//     //     2,
//     //     'minecraft:iron',
//     //     [4, 8], // sell quantity
//     //     'minecraft:emerald',
//     //     1, // reward count
//     //     12, // trades until disabled
//     //     0.05, // price multiplier
//     //     10, // xp to villager
//     // ],
//     // [
//     //     'armorer',
//     //     2,
//     //     'minecraft:emerald',
//     //     [36, 36], // sell quantity
//     //     'minecraft:bell',
//     //     1, // reward count
//     //     12, // trades until disabled
//     //     0.2, // price multiplier
//     //     5, // xp to villager
//     // ],
//     // [
//     //     'armorer',
//     //     2,
//     //     'minecraft:emerald',
//     //     [7, 13], // sell quantity
//     //     Item.of('minecraft:iron_leggings', '{Damage:0}').enchant('minecraft:protection', 2),
//     //     1, // reward count
//     //     12, // trades until disabled
//     //     0.2, // price multiplier
//     //     5, // xp to villager
//     // ],
//     // [
//     //     'armorer',
//     //     2,
//     //     'minecraft:emerald',
//     //     [4, 10], // sell quantity
//     //     Item.of('minecraft:iron_boots', '{Damage:0}').enchant('minecraft:protection', 2),
//     //     1, // reward count
//     //     12, // trades until disabled
//     //     0.2, // price multiplier
//     //     5, // xp to villager
//     // ],

//     // // journeyman
//     // [
//     //     'armorer',
//     //     3,
//     //     'minecraft:blaze_rod',
//     //     [3, 6], // sell quantity
//     //     'minecraft:emerald',
//     //     1, // reward count
//     //     12, // trades until disabled
//     //     0.05, // price multiplier
//     //     20, // xp to villager
//     // ],
//     // [
//     //     'armorer',
//     //     3,
//     //     'minecraft:diamond',
//     //     [1, 1], // sell quantity
//     //     'minecraft:emerald',
//     //     48, // reward count
//     //     3, // trades until disabled
//     //     0.05, // price multiplier
//     //     30, // xp to villager
//     // ],
//     // [
//     //     'armorer',
//     //     3,
//     //     'minecraft:emerald',
//     //     [5, 12], // sell quantity
//     //     Item.of('minecraft:iron_helmet', '{Damage:0}').enchant('minecraft:protection', 2),
//     //     1, // reward count
//     //     12, // trades until disabled
//     //     0.2, // price multiplier
//     //     10, // xp to villager
//     // ],
//     // [
//     //     'armorer',
//     //     3,
//     //     'minecraft:emerald',
//     //     [9, 15], // sell quantity
//     //     Item.of('minecraft:iron_chestplate', '{Damage:0}').enchant('minecraft:protection', 2),
//     //     1, // reward count
//     //     12, // trades until disabled
//     //     0.2, // price multiplier
//     //     10, // xp to villager
//     // ],
//     // [
//     //     'armorer',
//     //     3,
//     //     'minecraft:emerald',
//     //     [28, 42], // sell quantity
//     //     Item.of('tetra:modular_shield', '{Damage:0,EnchantmentMapping:{"minecraft:unbreaking":"shield/grip"},HideFlags:1,honing_progress:144,id:"92dc6b35-a2e1-46bb-98e8-c98128a03b82","shield/boss":"shield/sturdy_boss","shield/grip":"shield/straps","shield/plate":"shield/tower","shield/straps_material":"straps/leather","shield/sturdy_boss_material":"sturdy_boss/steel","shield/tower_material":"tower/steel"}').enchant('apotheosis:shield_bash', 1).enchant('minecraft:unbreaking', 2),
//     //     1, // reward count
//     //     3, // trades until disabled
//     //     0.2, // price multiplier
//     //     10, // xp to villager
//     // ],

//     // // expert
//     // [
//     //     'armorer',
//     //     4,
//     //     'minecraft:emerald',
//     //     [32, 47], // sell quantity
//     //     Item.of('alloyed:steel_boots', '{Damage:0}').enchant('minecraft:protection', 3).enchant('minecraft:unbreaking', 2),
//     //     1, // reward count
//     //     3, // trades until disabled
//     //     0.2, // price multiplier
//     //     15, // xp to villager
//     // ],
//     // [
//     //     'armorer',
//     //     4,
//     //     'minecraft:emerald',
//     //     [40, 59], // sell quantity
//     //     Item.of('alloyed:steel_leggings', '{Damage:0}').enchant('minecraft:protection', 3).enchant('minecraft:unbreaking', 2),
//     //     1, // reward count
//     //     3, // trades until disabled
//     //     0.2, // price multiplier
//     //     15, // xp to villager
//     // ],

//     // // master
//     // [
//     //     'armorer',
//     //     5,
//     //     'minecraft:emerald',
//     //     [37, 52], // sell quantity
//     //     Item.of('alloyed:steel_helmet', '{Damage:0}').enchant('minecraft:protection', 3).enchant('minecraft:unbreaking', 2),
//     //     1, // reward count
//     //     3, // trades until disabled
//     //     0.2, // price multiplier
//     //     30, // xp to villager
//     // ],
//     // [
//     //     'armorer',
//     //     5,
//     //     'minecraft:emerald',
//     //     [45, 64], // sell quantity
//     //     Item.of('alloyed:steel_chestplate', '{Damage:0}').enchant('minecraft:protection', 3).enchant('minecraft:unbreaking', 2),
//     //     1, // reward count
//     //     3, // trades until disabled
//     //     0.2, // price multiplier
//     //     30, // xp to villager
//     // ],
//     // [
//     //     'armorer',
//     //     5,
//     //     'kubejs:shining_emerald',
//     //     [21, 32], // sell quantity
//     //     Item.of('minecraft:anvil').enchant('apotheosis:splitting', 1).enchant('apotheosis:obliteration', 1),
//     //     1, // reward count
//     //     3, // trades until disabled
//     //     0.05, // price multiplier
//     //     30, // xp to villager
//     // ],

//     // // expert toolsmith
//     // [
//     //     'toolsmith',
//     //     4,
//     //     'kubejs:diamond',
//     //     [1, 1], // sell quantity
//     //     'minecraft:emerald',
//     //     48, // reward count
//     //     12, // trades until disabled
//     //     0.05, // price multiplier
//     //     30, // xp to villager
//     // ],
//     // [
//     //     'toolsmith',
//     //     4,
//     //     'kubejs:emerald',
//     //     [42, 55], // sell quantity
//     //     Item.of('alloyed:steel_axe', '{Damage:0}').enchant('minecraft:unbreaking', 2).enchant('minecraft:efficiency', 4).enchant('minecraft:silk_touch', 1),
//     //     1, // reward count
//     //     3, // trades until disabled
//     //     0.2, // price multiplier
//     //     30, // xp to villager
//     // ],
//     // [
//     //     'toolsmith',
//     //     4,
//     //     'kubejs:emerald',
//     //     [37, 52], // sell quantity
//     //     Item.of('alloyed:steel_shovel', '{Damage:0}').enchant('minecraft:unbreaking', 2).enchant('minecraft:efficiency', 4).enchant('minecraft:silk_touch', 1),
//     //     1, // reward count
//     //     3, // trades until disabled
//     //     0.2, // price multiplier
//     //     30, // xp to villager
//     // ],

//     // [
//     //     'toolsmith',
//     //     5,
//     //     'kubejs:emerald',
//     //     [47, 64], // sell quantity
//     //     Item.of('alloyed:steel_pickaxe', '{Damage:0}').enchant('minecraft:unbreaking', 2).enchant('minecraft:efficiency', 4).enchant('minecraft:fortune', 3),
//     //     1, // reward count
//     //     3, // trades until disabled
//     //     0.2, // price multiplier
//     //     30, // xp to villager
//     // ],
// ];

// MoreJSEvents.villagerTrades((event) => {
//     event.removeVanillaTrades(['armorer'], 1);
//     event.removeVanillaTrades(['armorer'], 2);
//     event.removeVanillaTrades(['armorer'], 3);
//     event.removeVanillaTrades(['armorer'], 4);
//     event.removeVanillaTrades(['armorer'], 5);
//     event.removeVanillaTrades(['toolsmith'], 4);
//     event.removeVanillaTrades(['toolsmith'], 5);
//     trades.forEach((trade) => {
//         event.addCustomTrade(trade[0], trade[1], (offer, entity, random) => {
//             offer.setFirstInput(trade[2]);
//             offer.getFirstInput().setCount(random.nextInt(trade[3][0], trade[3][1]));
//             offer.setOutput(trade[4]);
//             offer.setMaxUses(trade[6]);
//             offer.setPriceMultiplier(trade[7]);
//             offer.setVillagerExperience(trade[8]);
//         });
//     });
// });
