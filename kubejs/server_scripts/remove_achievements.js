// priority: 0

const removeTheseAdvancements = [
    // { modId: 'adorn', advancement: 'all_brewing' },
    // { modId: 'adorn', advancement: 'buy_from_trading_station' },
    // { modId: 'adorn', advancement: 'bench' },
    // { modId: 'adorn', advancement: 'candlelit_lantern' },
    // { modId: 'adorn', advancement: 'chain_link_fence' },
    // { modId: 'adorn', advancement: 'chair' },
    // { modId: 'adorn', advancement: 'chimney' },
    // { modId: 'adorn', advancement: 'coffee_table' },
    // { modId: 'adorn', advancement: 'craft_trading_station' },
    // { modId: 'adorn', advancement: 'crate' },
    // { modId: 'adorn', advancement: 'drawer' },
    // { modId: 'adorn', advancement: 'everything' },
    // { modId: 'adorn', advancement: 'kitchen_counter' },
    // { modId: 'adorn', advancement: 'kitchen_cupboard' },
    // { modId: 'adorn', advancement: 'kitchen_sink' },
    // { modId: 'adorn', advancement: 'nether_wart_coffee' },
    // { modId: 'adorn', advancement: 'picket_fence' },
    // { modId: 'adorn', advancement: 'platform' },
    // { modId: 'adorn', advancement: 'prismarine_chimney' },
    // { modId: 'adorn', advancement: 'shelf' },
    // { modId: 'adorn', advancement: 'sofa' },
    // { modId: 'adorn', advancement: 'step' },
    // { modId: 'adorn', advancement: 'stone_ladder' },
    // { modId: 'adorn', advancement: 'stone_torch' },
    // { modId: 'adorn', advancement: 'table' },
    // { modId: 'adorn', advancement: 'table_lamp' },
    { modId: 'adorn', advancement: 'root' },
    { modId: 'blockcarpentry', advancement: 'general/root' },
    { modId: 'buildersdelight', advancement: 'root' },
    { modId: 'chiselsandbits', advancement: 'chiselsandbits/root' },
    { modId: 'lootr', advancement: 'root' },

    { modId: 'apotheosis', advancement: 'affix/chests' },
    { modId: 'apotheosis', advancement: 'affix/random' },
    { modId: 'apotheosis', advancement: 'affix/boss' },
    { modId: 'apotheosis', advancement: 'spawner/capturing' },
    { modId: 'apotheosis', advancement: 'spawner/redstone' },
    { modId: 'apotheosis', advancement: 'spawner/mindelay' },
    { modId: 'apotheosis', advancement: 'spawner/playerrange' },
    { modId: 'apotheosis', advancement: 'spawner/spawncount' },
    { modId: 'apotheosis', advancement: 'spawner/light' },
    { modId: 'apotheosis', advancement: 'spawner/maxdelay' },
    { modId: 'apotheosis', advancement: 'spawner/players' },
    { modId: 'apotheosis', advancement: 'spawner/conditions' },
    { modId: 'apotheosis', advancement: 'spawner/nearbyents' },
    // { modId: 'apotheosis', advancement: 'spawner/modifier' },
    { modId: 'apotheosis', advancement: 'spawner/noai' },
    { modId: 'apotheosis', advancement: 'spawner/spawnrange' },
];

ServerEvents.highPriorityData((event) => {
    // Overrides with empty json data
    removeTheseAdvancements.forEach((achievement) => {
        event.addJson(`${achievement.modId}:advancements/${achievement.advancement}.json`, {});
    });
});
