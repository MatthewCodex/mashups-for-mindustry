Events.on(ClientLoadEvent, () => {
    // 1. Load the sound files from your mod folder
    // 'your-mod-internal-name' must match the 'name' field in your mod.json
    let mashup1 = Vars.tree.loadSound("your-mod-internal-name-custom_day");
    let mashup2 = Vars.tree.loadSound("your-mod-internal-name-custom_night");

    // 2. Access the game's music collections
    let ambientMusic = Musics.ambient;
    let darkMusic = Musics.dark;

    // 3. Inject your custom songs into the playlists
    if (daySong) ambientMusic.add(daySong);
    if (nightSong) darkMusic.add(nightSong);
});
