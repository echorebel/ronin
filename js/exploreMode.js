var exploreMode = function(game)
{
   this.ship = null;
}

exploreMode.prototype =
{
   preload: function()
   {
      console.log("explore mode running");
   },

   create: function()
   {
      // TODO move to ship class
      ship = this.game.add.sprite(winW*0.5, winH*0.5, 'ship');
      ship.angle = -90;
      ship.anchor.set(0.5);
      ship.scale.setTo(2, 2);

      ship.animations.add('leftTransition', [1,6,1,6,0], 12, false);
      ship.animations.add('left', [0,5], 12, true);
      ship.animations.add('rightTransition', [3,8,3,8,4], 12, false);
      ship.animations.add('right', [4,9], 12, true);
      ship.animations.add('idle', [2,7], 12, true);
      ship.animations.play('idle');

      this.game.physics.enable(ship, Phaser.Physics.ARCADE);
      ship.body.drag.set(100);
      ship.body.maxVelocity.set(200);

      cursors = this.game.input.keyboard.createCursorKeys();
      wasd = {
         up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
         down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
         left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
         right: this.game.input.keyboard.addKey(Phaser.Keyboard.D)
      }
   },

   update: function()
   {
      left = wasd.left.isDown || cursors.left.isDown;
      right = wasd.right.isDown || cursors.right.isDown;
      up = wasd.up.isDown || cursors.up.isDown;
      down = wasd.down.isDown || cursors.down.isDown;

      if(down)
      {
         this.game.physics.arcade.accelerationFromRotation(ship.rotation, 200, ship.body.acceleration);
      } else {
         ship.body.acceleration.set(0);
      }

      if(left)
      {
         ship.body.angularVelocity = -300;
      } else if(right) {
         ship.body.angularVelocity = 300;
      } else {
         ship.body.angularVelocity = 0;
      }
   }
}
