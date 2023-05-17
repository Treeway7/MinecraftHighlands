// This was declared in another file... this feels cursed tho
// const potionFluid = (potionID, count, bottle) =>
// Fluid.of('create:potion', count, `{Potion:"${potionID}", Bottle:"${bottle}"}`);

// TODO: Find a way to get every potion effect dynamically
// const potion_effects = [
//     'minecraft:night_vision',
//     'minecraft:long_night_vision',
//     'minecraft:leaping',
//     'minecraft:long_leaping',
// ];

// ServerEvents.recipes((event) => {
//     potion_effects.forEach((effect) => {
//         const trans_charm = 'kubejs:incomplete_potion_charm';
//         // const effectSplit = effect.split(':')[1];
//         event.recipes.createSequencedAssembly([
//             // TODO: This should be a potion charm core that can be
//             // mechanically crafted with 5 other eyes, and then bulk haunted into a potion charm
//             // TODO: Refactor to "${(regex to split namespace)effect}_potion_charm_core"
//             // TODO: figure out a way to make this item scan for any available potion charm
//             Item.of('apotheosis:potion_charm', `{Potion:"${effect}"}`),
//         ], 'kubejs:infused_potion_conduit', [
//             event.recipes.createFilling(trans_charm,
//                  [trans_charm, potionFluid(effect, 125, 'REGULAR')]),
//             event.recipes.createPressing(trans_charm, trans_charm),
//         ]).transitionalItem(trans_charm).loops(16);

        // TODO: fix this recipe
        // event.recipes.createMixing(
        //     Item.of('apotheosis:potion_charm', `Potion:"${effect}"`),
        //     [
        //         Item.of('kubejs:potion_charm_core', `{Potion:"${effect}"}`),
        //         Item.of('kubejs:potion_charm_core', `{Potion:"${effect}"}`),
        //         potionFluid(effect, 1000, 'REGULAR'),
        //     ],
        // ).superheated().id(`kubejs:potion_charm_${effectSplit}`);
//     });
// });

// event.recipes.createMixing(
//     '2x alloyed:steel_ingot',
//     ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot',
//     '#minecraft:coals'],
// ).heated().id('alloyed:mixing/steel_ingot');

// // for this code to work, transitional item need to be added to the game
// const trans_disc_11 = 'kubejs:incomplete_music_disc_11'; // transitional item
// event.recipes.createSequencedAssembly([
//     Item.of('kubejs:music_disc_three_hundred_mb').withChance(50.0), // result
//     Item.of('byg:pollen_dust').withChance(25.0), // scrap
//     Item.of('create:experience_nugget').withChance(25.0), // scrap
// ], 'minecraft:music_disc_11', [ // input
//     event.recipes.createPressing(trans_disc_11, trans_disc_11),
//     // set the transitional item and the loops (amount of repetitions)
// ]).transitionalItem(trans_disc_11).loops(100);
