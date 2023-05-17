/* eslint-disable no-param-reassign */
const Material = Java.loadClass('net.minecraft.world.level.material.Material');

BlockEvents.modification((event) => {
    event.modify('littleframes:creative_pic_frame', (block) => {
        block.material = Material.WOOD;
        block.destroySpeed = 2;
    });
});
