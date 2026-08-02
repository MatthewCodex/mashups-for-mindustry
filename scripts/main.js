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

Vars.control.sound.bossMusic = Seq.with(Musics.boss1, Musics.boss2, Musics.game2);
Vars.control.sound.ambientMusic.add(mus("game1"));
Vars.control.sound.ambientMusic.add(mus("game2"));
Vars.control.sound.ambientMusic.add(mus("game3"));
Vars.control.sound.ambientMusic.add(mus("game4"));
Vars.control.sound.ambientMusic.add(mus("game5"));
Vars.control.sound.ambientMusic.add(mus("game6"));
Vars.control.sound.ambientMusic.add(mus("game7"));
Vars.control.sound.ambientMusic.add(mus("game8"));

Vars.control.sound.darkMusic.add(mus("game9"));
Vars.control.sound.darkMusic.add(mus("game10"));
Vars.control.sound.darkMusic.add(mus("game11"));
Vars.control.sound.darkMusic.add(mus("game12"));
Vars.control.sound.darkMusic.add(mus("game13"));
Vars.control.sound.darkMusic.add(mus("game14"));
Vars.control.sound.darkMusic.add(mus("game15"));



