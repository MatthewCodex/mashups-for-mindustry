// credits to  NEON-XZR and meep of faith
/* let mod = Vars.mods.locateMod("newunits");
mod.meta.displayName = Core.bundle.get("mod.name");
mod.meta.description = Core.bundle.get("mod.description");
//is this relevant?^^^
// special thanks to meep for the help!!
*/
function mus(e) {
  return Vars.tree.loadMusic(e);
}

        

Events.on(ClientLoadEvent, active => {
    Log.info("Mindustry Client has started up!");
    // Your main-menu or global initialization logic goes here
    Vars.control.sound.ambientMusic = Seq.with(Musics.game1, Musics.game2, Musics.game3, Musics.game4, Musics.game5, Musics.game6, Musics.game7, Musics.game8, Musics.fine);
    Vars.control.sound.darkMusic = Seq.with(Musics.game9, mus("game10"), mus("game11"), mus("game12"), mus("game13"), mus("game14"), mus("game15"));
    Vars.control.sound.bossMusic = Seq.with(Musics.boss1, Musics.boss2, Musics.game2);
});
