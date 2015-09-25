var preload = function(game){}

preload.prototype = {
	preload: function()
	{
		var loadingBar = this.add.sprite(160,240,"loading");
					loadingBar.anchor.setTo(0.5,0.5);
					this.load.setPreloadSprite(loadingBar);

					this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
			    this.game.load.spritesheet('ship', 'assets/space_shooter_pack/spritesheets/ship.png', 16, 24);

	},
  create: function()
	{
					this.game.state.start("GameTitle");
	}
}
