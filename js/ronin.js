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
          preload: preload,
          create: create,
          update: update,
          render: render
      },
      false, // transparent canvas
      false // antialias off
    );

  function preload()
  {
    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    game.load.spritesheet('ship', 'assets/space_shooter_pack/spritesheets/ship.png', 16, 24);
  }

  function create()
  {
    /********************* sprites ***********************/

    ship = game.add.sprite(winW*0.5, winH, 'ship');
    ship.scale.setTo(2, 2);
    ship.animations.add('idle', [2,7], 12, true);
    ship.animations.play('idle');

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

    text = game.add.text(game.world.centerX, game.world.centerY, "<< RONIN >>\narcade shooter");
    text.anchor.setTo(0.5);

    text.font = 'Press Start 2P';
    text.fontSize = 60;

    //  x0, y0 - x1, y1
    grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
    grd.addColorStop(0, '#d85a34');
    grd.addColorStop(1, '#40180c');
    text.fill = grd;

    text.align = 'center';
    /*text.stroke = '#000000';
    text.strokeThickness = 2;
    text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);*/

    game.add.tween(text).from({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);

    game.add.tween(ship).to({y: winH*0.5 + 100}, 2000, Phaser.Easing.Quartic.Out, true);

  }

}
