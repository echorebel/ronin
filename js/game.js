var gameState = function(game){}

gameState.prototype = {
  preload: function()
	{
    console.log("game running");
	},
  create: function()
	{
    ship = this.game.add.sprite(winW*0.5, winH*0.5, 'ship');
    ship.scale.setTo(2, 2);
    ship.animations.add('idle', [2,7], 12, true);
    ship.animations.play('idle');
    /******************** controls ************************/

    cursors = this.game.input.keyboard.createCursorKeys();
    // TODO not for french guys - keep it configurable - ZQSD
    wasd = {
        up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: this.game.input.keyboard.addKey(Phaser.Keyboard.D)
    }
	}
}
