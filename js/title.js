var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){
		/*var gameTitle = this.game.add.sprite(160,160,"gametitle");
		gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);*/

    /********************* sprites ***********************/

    ship = this.game.add.sprite(winW*0.5, winH, 'ship');
    ship.scale.setTo(2, 2);
    ship.animations.add('idle', [2,7], 12, true);
    ship.animations.play('idle');

    text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "<< RONIN >>\narcade shooter");
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

    this.game.add.tween(text).from({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);

    this.game.add.tween(ship).to({y: winH*0.5 + 100}, 2000, Phaser.Easing.Quartic.Out, true);

	},
	playTheGame: function(){
		//this.game.state.start("TheGame");
	}
}
