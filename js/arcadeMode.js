var arcadeMode = function(game)
{
   this.speed = 20;
   this.ship = null;
}

arcadeMode.prototype =
{
   preload: function()
   {
      console.log("game running");
   },

   create: function()
   {

      ship = this.game.add.sprite(winW*0.5, winH*0.5, 'ship');
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
      cursors = this.game.input.keyboard.createCursorKeys();
      // TODO not for french guys - keep it configurable - ZQSD
      wasd = {
         up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
         down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
         left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
         right: this.game.input.keyboard.addKey(Phaser.Keyboard.D)
      }
   },

   update: function()
   {
      // Stop the ship
      //ship.body.velocity.set(0);

      left = wasd.left.isDown || cursors.left.isDown;
      right = wasd.right.isDown || cursors.right.isDown;
      up = wasd.up.isDown || cursors.up.isDown;
      down = wasd.down.isDown || cursors.down.isDown;

      if (left)
      {
         ship.body.velocity.x -= this.speed;

         if (ship.animations.currentAnim.name == 'idle')
         {
            ship.animations.play('leftTransition').onComplete.add(onLeftComplete, this);
         }
      }
      else if (right)
      {
         ship.body.velocity.x += this.speed;

         if(ship.animations.currentAnim.name == 'idle')
         {
            ship.animations.play('rightTransition').onComplete.add(onRightComplete, this);
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
}

function onLeftComplete()
{
    ship.animations.play('left');
}
function onRightComplete()
{
    ship.animations.play('right');
}
