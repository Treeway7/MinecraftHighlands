/// https://discord.com/channels/303440391124942858/1096284201965322250/1096284201965322250

ItemEvents.tooltip((event) => {
    for (let i = 1; i <= 9; i += 1) {
        event.add(
            RegExp(`compressium.*_${i}`),
            Text.darkGray(
                `Holds ${(9 ** (i))
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} blocks`,
            ),
        );
    }
});
