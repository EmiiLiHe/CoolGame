var game = new Phaser.Game(1500, 1500, Phaser.AUTO);
game.state.add('Load', boil.Load);
game.state.add('Menu', boil.Menu);
game.state.add('bathroom', boil.bathroom);
game.state.add('bedroom', boil.bedroom);
game.state.add('mBathroom',boil.mBathroom);
game.state.add('GameOver', boil.GameOver);
game.state.start('Load'); 