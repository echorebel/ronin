var boot = function(game)
{
   console.log("%cStarting Ronin", "color:white; background:red");
};

boot.prototype =
{
   preload: function()
   {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.load.image("loading","assets/loading.png");
   },

   create: function()
   {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.pageAlignHorizontally = true;
      //this.scale.setScreenSize();
      this.game.state.start("Preload");
	}
}
