export default
class Boot extends Phaser.State
{
   preload()
   {
      console.log("Boot::preload");

      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.load.image("loading","assets/loading.png");
   }

   create()
   {
      //let center = { x: this.game.world.centerX, y: this.game.world.centerY }
      this.game.state.start("Preload");
   }

}
