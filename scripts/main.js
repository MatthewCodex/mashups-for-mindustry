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
var newcontent = Vars.mods.locateMod("newunits") != null;
if (typeof Vars.content.planet("newunits-clexon") === "undefined") {
  var clexon = null;
} else {
  var clexon = Vars.content.planet("newunits-clexon");
}
function clearMusic() {
  Vars.control.sound.ambientMusic = Seq.with();
  Vars.control.sound.darkMusic = Seq.with();
  Vars.control.sound.bossMusic = Seq.with();
};
function callOnPlanetChange(pl) {
  switch(pl) {
    case (Planets.serpulo):
        
    case (Planets.sun): //So apparently the "<Any>" option in Mindustry sets the planet to the sun... wonderful.
    case (Planets.erekir):
        Vars.control.sound.ambientMusic = Seq.with(Musics.game1, Musics.game2, Musics.game3, Musics.game4, Musics.game5, Musics.game6, Musics.game7, Musics.fine);
        Vars.control.sound.darkMusic = Seq.with(Musics.game8, Musics.game9, Musics.game10, Musics.game11, Musics.game12, Musics.game13, Musics.game14, Musics.game15);
        Vars.control.sound.bossMusic = Seq.with(Musics.boss1, Musics.boss2);
        
        return;
      
  };
};
Vars.control.sound.ambientMusic = Seq.with(Musics.game1, Musics.game2, Musics.game3, Musics.game4, Musics.game5, Musics.game6, Musics.game7, Musics.fine);
Vars.control.sound.darkMusic = Seq.with(Musics.game8, Musics.game9, Musics.game10, Musics.game11, Musics.game12, Musics.game13, Musics.game14, Musics.game15);
Vars.control.sound.bossMusic = Seq.with(Musics.boss1, Musics.boss2);
