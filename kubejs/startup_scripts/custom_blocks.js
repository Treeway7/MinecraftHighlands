// const Carpet = Java.loadClass('net.minecraft.world.level.block.CarpetBlock');
// const BProperties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties');
// const Material = Java.loadClass('net.minecraft.world.level.material.Material');
// const BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem');
// const IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties');

// let carpetBlock = '';

// StartupEvents.registry('block', (event) => {
//     carpetBlock = event.custom(
//         'crushed_dirt',
//         new Carpet(BProperties
//             .of(Material.DIRT)
//             .destroyTime(0.5)
//             .explosionResistance(0.5)),
//     );
// });

// StartupEvents.registry('item', (event) => {
//     event.custom('crushed_dirt', new BlockItem(carpetBlock.get(), new IProperties()));
// });
