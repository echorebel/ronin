export default
class ArcadeMode
{
   preload()
   {
      console.log("game running");
      this.speed = 20;
   }

   create()
   {
      this.ship = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'ship');
      let ship = this.ship;
      ship.anchor.set(0.5);
      ship.scale.setTo(2, 2);

      ship.animations.add('leftTransition', [1,6,1,6,0], 12, false);
      ship.animations.add('left', [0,5], 12, true);
      ship.animations.add('rightTransition', [3,8,3,8,4], 12, false);
      ship.animations.add('right', [4,9], 12, true);
      ship.animations.add('idle', [2,7], 12, true);
      ship.animations.play('idle');

      // enabling physics on the ship
      this.physics.enable(ship, Phaser.Physics.ARCADE);
      ship.body.drag.set(500);
      ship.body.maxVelocity.set(300);
      ship.body.collideWorldBounds = true;

      /******************** controls ************************/
      this.cursors = this.game.input.keyboard.createCursorKeys();
      // TODO not for french guys - keep it configurable - ZQSD
      this.wasd = {
         up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
         down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
         left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
         right: this.game.input.keyboard.addKey(Phaser.Keyboard.D)
      }
   }

   update()
   {
      let ship = this.ship;
      // Stop the ship
      //ship.body.velocity.set(0);

      let left = this.wasd.left.isDown || this.cursors.left.isDown;
      let right = this.wasd.right.isDown || this.cursors.right.isDown;
      let up = this.wasd.up.isDown || this.cursors.up.isDown;
      let down = this.wasd.down.isDown || this.cursors.down.isDown;

      if (left)
      {
         ship.body.velocity.x -= this.speed;

         if (ship.animations.currentAnim.name == 'idle')
         {
            ship.animations.play('leftTransition').onComplete.add(this.onLeftComplete, this);
         }
      }
      else if (right)
      {
         ship.body.velocity.x += this.speed;

         if(ship.animations.currentAnim.name == 'idle')
         {
            ship.animations.play('rightTransition').onComplete.add(this.onRightComplete, this);
         }
      }
      else {
         ship.animations.play("idle");
      }

      if (up)
      {
         ship.body.velocity.y -= this.speed;
      }
      else if (down)
      {
         ship.body.velocity.y += this.speed;
      }

      /*if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
      {
         this.weapons[this.currentWeapon].fire(this.ship);
      }*/

      /*if (this.game.input.keyboard.isDown(Phaser.Keyboard.E))
      {

      }*/
   }

   onLeftComplete()
   {
      this.ship.animations.play('left');
   }

   onRightComplete()
   {
      this.ship.animations.play('right');
   }

}
