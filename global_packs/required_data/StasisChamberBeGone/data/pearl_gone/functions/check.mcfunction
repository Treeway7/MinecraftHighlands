schedule function pearl_gone:check 1s

scoreboard players add @e[type=ender_pearl] pearlTimer 1

execute at @e[scores={pearlTimer=45..}] run playsound minecraft:entity.ender_eye.death block @a ~ ~ ~
execute at @e[scores={pearlTimer=45..}] run particle minecraft:item ender_pearl ~ ~ ~ 0.5 0 0.5 0.1 6
execute as @e[scores={pearlTimer=45..}] run kill @s