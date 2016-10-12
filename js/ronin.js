window.onload = function() {

  WebFontConfig = {
    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },
    google: {
      families: ['Press+Start+2P']
    }

  };

  // get users screen size
  winW = window.innerWidth;
  winH = window.innerHeight

  var ship;

  var game = new Phaser.Game(
      winW, winH,
      Phaser.AUTO, '', { },
      false, // transparent canvas
      false // antialias off
    );

  game.state.add("Boot", boot);
  game.state.add("Preload", preload);
  game.state.add("Title", title);
  game.state.add("ArcadeMode", arcadeMode);
  game.state.add("ExploreMode", exploreMode);
  //game.state.add("GameOver", gameOverState);
  game.state.start("Boot");

  function createText() {



  }

}
