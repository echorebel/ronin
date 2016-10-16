export default
class Preload extends Phaser.State
{
   preload()
   {
      console.log("preloading game");

      let loadingBar = this.add.sprite(160, 240, "loading");
      loadingBar.anchor.setTo(0.5, 0.5);
      this.load.setPreloadSprite(loadingBar);

      this.game.load.spritesheet('ship', 'assets/space_shooter_pack/spritesheets/ship.png', 16, 24);

   }

   create()
   {
      this.game.state.start("Title");
   }

}
