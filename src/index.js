import Boot from 'states/Boot';
import Preload from 'states/Preload';
import Title from 'states/Title';
import ArcadeMode from 'states/ArcadeMode';
import ExploreMode from 'states/ExploreMode';

class Ronin extends Phaser.Game
{
   constructor(size_w, size_h)
   {
      super(size_w, size_h, Phaser.AUTO, '', { },
         false, // transparent canvas
         false // antialias off
      );

      this.state.add('Boot', Boot);
      this.state.add('Preload', Preload);
      this.state.add('Title', Title);
      this.state.add('ArcadeMode', ArcadeMode);
      this.state.add('ExploreMode', ExploreMode);
      this.state.start('Boot');
   }

}

window.onload = function()
{
   // get users screen size
   let winW = window.innerWidth;
   let winH = window.innerHeight

   new Ronin(winW, winH);
}
