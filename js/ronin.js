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
      Phaser.AUTO, '', {
        //  preload: preload,
          create: create,
          update: update,
          render: render
      },
      false, // transparent canvas
      false // antialias off
    );

    game.state.add("Boot", boot);
    game.state.add("Preload", preload);
    game.state.add("GameTitle", gameTitle);
    //game.state.add("Game", gameState);
    //game.state.add("GameOver", gameOverState);
    game.state.start("Boot");

  function create()
  {


    /******************** controls ************************/

    cursors = game.input.keyboard.createCursorKeys();
    // TODO not for french guys - keep it configurable - ZQSD
    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D)
    }
  }

  function update()
  {

  }

  function render()
  {

  }

  function createText() {



  }

}
