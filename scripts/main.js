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
          
        Vars.control.sound.ambientMusic = Seq.with(Musics.game1, Musics.game2, Musics.game3, Musics.game4, Musics.game5, Musics.game6, Musics.game7, Musics.game8, Musics.fine);
        Vars.control.sound.darkMusic = Seq.with(Musics.game9, mus("game10"), mus("game11"), mus("game12"), mus("game13"), mus("game14"), mus("game15"));
        Vars.control.sound.bossMusic = Seq.with(Musics.boss1, Musics.boss2, Musics.game2);
      
    case (Planets.sun): //So apparently the "<Any>" option in Mindustry sets the planet to the sun... wonderful.
    case (Planets.erekir):
          
        Vars.control.sound.ambientMusic = Seq.with(Musics.game1, Musics.game2, Musics.game3, Musics.game4, Musics.game5, Musics.game6, Musics.game7, Musics.game8, Musics.fine);
        Vars.control.sound.darkMusic = Seq.with(Musics.game9, mus("game10"), mus("game11"), mus("game12"), mus("game13"), mus("game14"), mus("game15"));
        Vars.control.sound.bossMusic = Seq.with(Musics.boss1, Musics.boss2, Musics.game2);
        
        
        return;
      
  };
};
let planet = null, planetCur = null;
Events.run(Trigger.update, () => {
  if(Vars.state.isMenu() || Vars.state.isEditor()) return;
  planetCur = Vars.state.getPlanet();
  if(planetCur != planet) callOnPlanetChange(planetCur);
  planet = planetCur;
});
