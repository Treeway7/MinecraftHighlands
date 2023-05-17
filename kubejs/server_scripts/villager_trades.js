// priority: 1

/// Custom villager trade list
/// Adding trading levels here will automatically remove all vanilla recipes in that level.
const tradeData = {
    armorer: {

        novice: {
            charcoal: {
                item: 'minecraft:charcoal',
                quantity: [10, 14],
                priceMultiplier: 0.05,
                tradesUntilDisabled: 16,
                xpToVillager: 2,
                reward: {
                    item: 'minecraft:emerald',
                    quantity: 1,
                },
            },
            chainmail_helmet: {
                item: 'minecraft:emerald',
                quantity: [1, 5],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 12,
                xpToVillager: 1,
                reward: {
                    item: Item.of('minecraft:chainmail_helmet', '{Damage:0}').enchant('minecraft:protection', 1),
                    quantity: 1,
                },
            },
            chainmail_chestplate: {
                item: 'minecraft:emerald',
                quantity: [4, 7],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 12,
                xpToVillager: 1,
                reward: {
                    item: Item.of('minecraft:chainmail_chestplate', '{Damage:0}').enchant('minecraft:protection', 1),
                    quantity: 1,
                },
            },
            chainmail_leggings: {
                item: 'minecraft:emerald',
                quantity: [3, 7],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 12,
                xpToVillager: 1,
                reward: {
                    item: Item.of('minecraft:chainmail_leggings', '{Damage:0}').enchant('minecraft:protection', 1),
                    quantity: 1,
                },
            },
            chainmail_boots: {
                item: 'minecraft:emerald',
                quantity: [1, 4],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 12,
                xpToVillager: 1,
                reward: {
                    item: Item.of('minecraft:chainmail_boots', '{Damage:0}').enchant('minecraft:protection', 1),
                    quantity: 1,
                },
            },
        },

        apprentice: {
            iron: {
                item: 'minecraft:iron_ingot',
                quantity: [4, 8],
                priceMultiplier: 0.05,
                tradesUntilDisabled: 12,
                xpToVillager: 10,
                reward: {
                    item: 'minecraft:emerald',
                    quantity: 1,
                },
            },
            bell: {
                item: 'minecraft:emerald',
                quantity: 36,
                priceMultiplier: 0.2,
                tradesUntilDisabled: 12,
                xpToVillager: 5,
                reward: {
                    item: 'minecraft:bell',
                    quantity: 1,
                },
            },
            iron_leggings: {
                item: 'minecraft:emerald',
                quantity: [7, 13],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 12,
                xpToVillager: 5,
                reward: {
                    item: Item.of('minecraft:iron_leggings', '{Damage:0}').enchant('minecraft:protection', 2),
                    quantity: 1,
                },
            },
            iron_boots: {
                item: 'minecraft:emerald',
                quantity: [4, 10],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 12,
                xpToVillager: 5,
                reward: {
                    item: Item.of('minecraft:iron_boots', '{Damage:0}').enchant('minecraft:protection', 2),
                    quantity: 1,
                },
            },
        },

        journeyman: {
            // Let's face it, who's bringing lava buckets to the armorer anyways?
            blaze_rod: {
                item: 'minecraft:blaze_rod',
                quantity: [3, 6],
                priceMultiplier: 0.05,
                tradesUntilDisabled: 12,
                xpToVillager: 20,
                reward: {
                    item: 'minecraft:emerald',
                    quantity: 1,
                },
            },
            diamond: {
                item: 'minecraft:diamond',
                quantity: 1,
                priceMultiplier: 0.05,
                tradesUntilDisabled: 3,
                xpToVillager: 20,
                reward: {
                    item: '48x minecraft:emerald',
                    quantity: 48,
                },
            },
            iron_helmet: {
                item: 'minecraft:emerald',
                quantity: [5, 12],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 12,
                xpToVillager: 10,
                reward: {
                    item: Item.of('minecraft:iron_helmet', '{Damage:0}').enchant('minecraft:protection', 2),
                    quantity: 1,
                },
            },
            iron_chestplate: {
                item: 'minecraft:emerald',
                quantity: [9, 15],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 12,
                xpToVillager: 10,
                reward: {
                    item: Item.of('minecraft:iron_chestplate', '{Damage:0}').enchant('minecraft:protection', 2),
                    quantity: 1,
                },
            },
            shield: {
                item: 'minecraft:emerald',
                quantity: [28, 42],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 3,
                xpToVillager: 10,
                reward: {
                    item: Item.of('tetra:modular_shield', '{Damage:0,EnchantmentMapping:{"minecraft:unbreaking":"shield/grip"},HideFlags:1,honing_progress:144,id:"92dc6b35-a2e1-46bb-98e8-c98128a03b82","shield/boss":"shield/sturdy_boss","shield/grip":"shield/straps","shield/plate":"shield/tower","shield/straps_material":"straps/leather","shield/sturdy_boss_material":"sturdy_boss/steel","shield/tower_material":"tower/steel"}').enchant('apotheosis:shield_bash', 1).enchant('minecraft:unbreaking', 2),
                    quantity: 1,
                },
            },
        },

        expert: {
            steel_boots: {
                item: 'minecraft:emerald',
                quantity: [32, 47],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 3,
                xpToVillager: 15,
                reward: {
                    item: Item.of('alloyed:steel_boots', '{Damage:0}').enchant('minecraft:protection', 3).enchant('minecraft:unbreaking', 2),
                    quantity: 1,
                },
            },
            steel_leggings: {
                item: 'minecraft:emerald',
                quantity: [40, 59],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 3,
                xpToVillager: 15,
                reward: {
                    item: Item.of('alloyed:steel_leggings', '{Damage:0}').enchant('minecraft:protection', 3).enchant('minecraft:unbreaking', 2),
                    quantity: 1,
                },
            },
        },

        master: {
            steel_helmet: {
                item: 'minecraft:emerald',
                quantity: [37, 52],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 3,
                xpToVillager: 30,
                reward: {
                    item: Item.of('alloyed:steel_helmet', '{Damage:0}').enchant('minecraft:protection', 3).enchant('minecraft:unbreaking', 2),
                    quantity: 1,
                },
            },
            steel_chestplate: {
                item: 'minecraft:emerald',
                quantity: [45, 64],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 3,
                xpToVillager: 30,
                reward: {
                    item: Item.of('alloyed:steel_chestplate', '{Damage:0}').enchant('minecraft:protection', 3).enchant('minecraft:unbreaking', 2),
                    quantity: 1,
                },
            },
            anvil: {
                item: 'kubejs:shining_emerald',
                quantity: [21, 32],
                priceMultiplier: 0.05,
                tradesUntilDisabled: 3,
                xpToVillager: 30,
                reward: {
                    item: Item.of('minecraft:anvil').enchant('apotheosis:splitting', 1).enchant('apotheosis:obliteration', 1),
                    quantity: 1,
                },
            },
        },

    },

    // shepherd: {
    //     master: {
    //         queen_shears: {
    //             item: 'minecraft:emerald',
    //             quantity: [27, 42],
    //             priceMultiplier: 0.2,
    //             tradesUntilDisabled: 3,
    //             xpToVillager: 30,
    //             reward: {
    //                 item: Item.of('alloyed:steel_shears', "{Damage:0,RepairCost:0,display:{Name:'{\"text\":\"Shep Queen\\'s Shears of Unity\"}'}}")
    //                     .enchant('minecraft:sharpness', 3)
    //                     .enchant('minecraft:unbreaking', 3)
    //                     .enchant('apotheosis:chromatic', 1),
    //                 quantity: 1,
    //             },
    //         },
    //         king_shears: {
    //             item: 'minecraft:emerald',
    //             quantity: [27, 42],
    //             priceMultiplier: 0.2,
    //             tradesUntilDisabled: 3,
    //             xpToVillager: 30,
    //             reward: {
    //                 item: Item.of('alloyed:steel_shears', "{Damage:0,RepairCost:0,display:{Name:'{\"text\":\"Shep King\\'s Shears of Justice\"}'}}")
    //                     .enchant('minecraft:sharpness', 3)
    //                     .enchant('minecraft:unbreaking', 3)
    //                     .enchant('apotheosis:exploitation', 1),
    //                 quantity: 1,
    //             },
    //         },
    //     },
    // },

    toolsmith: {
        expert: {
            diamond: {
                item: 'minecraft:diamond',
                quantity: 1,
                priceMultiplier: 0.05,
                tradesUntilDisabled: 3,
                xpToVillager: 30,
                reward: {
                    item: '48x minecraft:emerald',
                    quantity: 48,
                },
            },
            steel_axe: {
                item: 'minecraft:emerald',
                quantity: [32, 47],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 3,
                xpToVillager: 30,
                reward: {
                    item: Item.of('alloyed:steel_pickaxe', '{Damage:0}').enchant('minecraft:unbreaking', 2).enchant('minecraft:efficiency', 3).enchant('minecraft:silk_touch', 1),
                    quantity: 1,
                },
            },
            steel_shovel: {
                item: 'minecraft:emerald',
                quantity: [32, 47],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 3,
                xpToVillager: 30,
                reward: {
                    item: Item.of('alloyed:steel_pickaxe', '{Damage:0}').enchant('minecraft:unbreaking', 2).enchant('minecraft:efficiency', 3).enchant('minecraft:silk_touch', 1),
                    quantity: 1,
                },
            },
        },

        master: {
            steel_pickaxe: {
                item: 'minecraft:emerald',
                quantity: [47, 64],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 3,
                xpToVillager: 30,
                reward: {
                    item: Item.of('alloyed:steel_pickaxe', '{Damage:0}').enchant('minecraft:unbreaking', 2).enchant('minecraft:efficiency', 3).enchant('minecraft:fortune', 3),
                    quantity: 1,
                },
            },
        },
    },

    weaponsmith: {
        expert: {
            diamond: {
                item: 'minecraft:diamond',
                quantity: 1,
                priceMultiplier: 0.05,
                tradesUntilDisabled: 3,
                xpToVillager: 30,
                reward: {
                    item: '48x minecraft:emerald',
                    quantity: 48,
                },
            },
            steel_axe: {
                item: 'minecraft:emerald',
                quantity: [32, 47],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 3,
                xpToVillager: 15,
                reward: {
                    item: Item.of('alloyed:steel_pickaxe', '{Damage:0}').enchant('minecraft:unbreaking', 2).enchant('minecraft:efficiency', 3).enchant('minecraft:sharpness', 4),
                    quantity: 1,
                },
            },
        },

        master: {
            steel_sword: {
                item: 'minecraft:emerald',
                quantity: [47, 64],
                priceMultiplier: 0.2,
                tradesUntilDisabled: 3,
                xpToVillager: 30,
                reward: {
                    item: Item.of('alloyed:steel_pickaxe', '{Damage:0}').enchant('minecraft:unbreaking', 2).enchant('minecraft:sharpness', 4).enchant('minecraft:looting', 3),
                    quantity: 1,
                },
            },
        },
    },
};

const levels = [
    'novice',
    'apprentice',
    'journeyman',
    'expert',
    'master',
];

const debug = false;
MoreJSEvents.villagerTrades((event) => {
    // Iterate through each profession...
    Object.keys(tradeData).forEach((profession) => {
        /// Then iterate through the profession levels and make sure it's a real level
        Object.keys(tradeData[profession]).forEach((level) => {
            if (levels.includes(level)) {
                // Remove vanilla trades for one level at a time
                event.removeVanillaTrades([profession], levels.indexOf(level) + 1);
                Object.keys(tradeData[profession][level]).forEach((item) => {
                    const item_key = tradeData[profession][level][item];
                    const real_item = item_key.item;

                    if (debug) {
                        console.log('- KubeJS Trade Debug -');
                        console.log(`Profession: ${profession}`);
                        console.log(`Level: ${level}`);
                        console.log(`Buy item: ${item_key.item}`);
                        console.log(`Buy quantity: ${item_key.quantity}`);
                        console.log(`Sell item: ${item_key.reward.item}`);
                        console.log('                 ');
                    }

                    event.addTrade(
                        profession,
                        levels.indexOf(level) + 1,
                        // If the item quantity is a real number, just use that
                        Number.isInteger(item_key.quantity) ? `${item_key.quantity}x ${real_item}` : real_item,
                        // Item being sold
                        item_key.reward.item,
                    ).transform((offer, entity, random) => {
                        if (!offer && debug) {
                            console.log('OFFER CAUGHT!');
                            console.log('- KubeJS Offer is null -');
                            console.log(`Profession: ${profession}`);
                            console.log(`Level: ${level}`);
                            console.log(`Buy item: ${item_key.item}`);
                            console.log(`Buy quantity: ${item_key.quantity}`);
                            console.log(`Sell item: ${item_key.reward.item}`);
                            console.log('                 ');
                            return;
                        }
                        // If the quantity is a range, randomize it
                        if (item_key.quantity.constructor === Array) {
                            if (!item_key.quantity[0] === null || !item_key.quantity[1] === null) {
                                offer.getFirstInput().setCount(
                                    // this code is bugged and idk why...
                                    random.nextInt(item_key.quantity[0], item_key.quantity[1]),
                                    // (item_key.quantity[0] + item_key.quantity[1]) / 2,
                                );
                            } else {
                                // worst case scenario...
                                offer.getFirstInput().setCount(32);
                            }
                        }
                        offer.setMaxUses(item_key.tradesUntilDisabled);
                        offer.setVillagerExperience(item_key.xpToVillager);
                        offer.setPriceMultiplier(item_key.priceMultiplier);
                    });
                });
            }
        });
    });
});
