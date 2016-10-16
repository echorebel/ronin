export default
class ExploreMode extends Phaser.State
{
   preload()
   {
      console.log("explore mode running");
   }

   create()
   {
      // TODO move to ship class
      this.ship = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'ship');
      let ship = this.ship;
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
      ship.body.collideWorldBounds = true;

      this.cursors = this.game.input.keyboard.createCursorKeys();
      this.wasd = {
         up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
         down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
         left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
         right: this.game.input.keyboard.addKey(Phaser.Keyboard.D)
      }
   }

   update()
   {
      let left = this.wasd.left.isDown || this.cursors.left.isDown;
      let right = this.wasd.right.isDown || this.cursors.right.isDown;
      let up = this.wasd.up.isDown || this.cursors.up.isDown;
      let down = this.wasd.down.isDown || this.cursors.down.isDown;

      if(down)
      {
         // TODO how can i fix the sprite alignment/rotation?
         this.game.physics.arcade.accelerationFromRotation(this.ship.rotation, 200, this.ship.body.acceleration);
      } else {
         this.ship.body.acceleration.set(0);
      }

      if(left)
      {
         this.ship.body.angularVelocity = -300;
      } else if(right) {
         this.ship.body.angularVelocity = 300;
      } else {
         this.ship.body.angularVelocity = 0;
      }
   }
}
