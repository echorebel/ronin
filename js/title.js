var title = function(game)
{
   ship: null;
}

title.prototype =
{
  create: function(){

   console.log("show game title");

   /*var gameTitle = this.game.add.sprite(160,160,"gametitle");
   gameTitle.anchor.setTo(0.5,0.5);
   var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
   playButton.anchor.setTo(0.5,0.5);*/

   /********************* sprites ***********************/

   ship = this.game.add.sprite(winW*0.5, winH, 'ship');
   ship.scale.setTo(2, 2);
   ship.animations.add('idle', [2,7], 12, true);
   ship.animations.play('idle');

   title = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "<< RONIN >>\narcade shooter");
   title.anchor.setTo(0.5);
   title.font = 'Press Start 2P';
   title.fontSize = 60;

   //  x0, y0 - x1, y1
   grd = title.context.createLinearGradient(0, 0, 0, title.canvas.height);
   grd.addColorStop(0, '#d85a34');
   grd.addColorStop(1, '#40180c');
   title.fill = grd;

   title.align = 'center';
   /*title.stroke = '#000000';
   title.strokeThickness = 2;
   title.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);*/

   startText = this.game.add.text(title.game.world.centerX, title.y + 120, "press F to start");
   startText.anchor.setTo(0.5);
   startText.fontSize = 18;
   startText.font = 'Press Start 2P';
   startText.fill = grd;

   var startKey = this.game.input.keyboard.addKey(Phaser.Keyboard.F);
   startKey.onDown.add(this.playTheGame, this);
   var exploreKey = this.game.input.keyboard.addKey(Phaser.Keyboard.E);
   exploreKey.onDown.add(this.exploreTheGame, this);

   this.game.add.tween(title).from({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);
   this.game.add.tween(startText).from({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);

   this.game.add.tween(ship).to({y: winH*0.5 -160}, 2000, Phaser.Easing.Quartic.Out, true);

   },

   playTheGame: function(){
      this.game.state.start("ArcadeMode");
   },

   exploreTheGame: function()
   {
      this.game.state.start("ExploreMode");
   }

}
