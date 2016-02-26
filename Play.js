boil.Play = function(){};

boil.Play.prototype = {
    preload: function(){
         game.load.image('bathroom', 'Assets/Backgrounds/bathroom.png');
         game.load.image('uh', 'Assets/Sprites/uh.png');
         game.load.tilemap('bathrooom', 'Assets/tilemaps/bathroomTileMap.json', null,Phaser.Tilemap.Tiled_JSON);
    },
    create: function(){
        console.log('You are in the Play state');
        var uh = game.add.sprite(0,0, 'uh');
        game.add.tilemap('bathroom');
        game.addTilesetImage()
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0,0, 2813,1000);
        game.stage.backgroundColor = '#A80000';
        
        
    },
    update: function(){
        
    }
};