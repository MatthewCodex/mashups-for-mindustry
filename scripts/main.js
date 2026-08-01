// Check if client audio and SoundControl are accessible
if (!Vars.headless) {
  try {
    // Load the custom music file from the music directory
    let customTrack = new Music(tree.get("music/ambientmus-mysong.ogg"));
    
    // Add to the ambient music playlist pool
    Control.sound.getAmbientMusic().add(customTrack);
    Log.info("Custom ambient track loaded successfully!");
  } catch (err) {
    Log.err("Failed to load custom ambient track: " + err);
  }
}
