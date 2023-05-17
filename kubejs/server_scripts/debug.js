// priority: 0

/// REMOVE THIS WHEN DONE DEBUGGING STUFF
ServerEvents.recipes((event) => {
    event.shaped(
        Item.of('tetra:modular_double', "{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,display:{Name:'{\"text\":\"Ban Hammer.\"}'},\"double/basic_hammer_left_material\":\"basic_hammer/netherite\",\"double/basic_hammer_right_material\":\"basic_hammer/netherite\",\"double/basic_handle_material\":\"basic_handle/forged_beam\",\"double/binding\":\"double/binding\",\"double/binding_material\":\"double_binding/dragon_sinew\",\"double/handle\":\"double/basic_handle\",\"double/handle/settle_progress\":386,\"double/head_left\":\"double/basic_hammer_left\",\"double/head_left/settle_progress\":798,\"double/head_right\":\"double/basic_hammer_right\",\"double/head_right/settle_progress\":798,honing_progress:560,id:\"d0a1167e-3b33-4a09-986b-98caa9bbe8b6\"}"),
        [
            'N  ',
            'N  ',
            '   ',
        ],
        {
            N: 'minecraft:bedrock',
        },
    );

    event.shaped(
        Item.of('tetra:modular_sword', "{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,display:{Name:'{\"text\":\"funny shiv\"}'},honing_progress:215,id:\"2ec9e5be-33dd-44ab-8caf-a74c55dbe931\",\"sword/basic_hilt_material\":\"basic_hilt/stick\",\"sword/blade\":\"sword/short_blade\",\"sword/blade/settle_progress\":1047,\"sword/decorative_pommel_material\":\"decorative_pommel/netherite\",\"sword/guard\":\"sword/makeshift_guard\",\"sword/hilt\":\"sword/basic_hilt\",\"sword/hilt/settle_progress\":255,\"sword/hilt:basic_hilt/soot\":0,\"sword/makeshift_guard_material\":\"makeshift_guard/netherite\",\"sword/pommel\":\"sword/decorative_pommel\",\"sword/short_blade_material\":\"short_blade/netherite\"}"),
        [
            'B  ',
            '   ',
            '   ',
        ],
        {
            B: 'minecraft:bedrock',
        },
    );
});
