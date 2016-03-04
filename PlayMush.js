boil.PlayMush = function(){
    var ptag;
};

boil.Play.prototype = {
    preload: function(){
         game.load.tilemap('mbathroomTilemap', 'Assets/Backgrounds/mBathroomTilemap.json', null,Phaser.Tilemap.TILED_JSON);
        game.load.image('mBathroomTileset', 'Assets/Backgrounds/mBathroom.png');
         game.load.spritesheet('ptag', 'Assets/Spritesheets/ptag.png',450,970);
    },
    create: function(){
        console.log('You are in the PlayMush state');      
        var map = game.add.tilemap('mBathroomTilemap');
        map.addTilesetImage('mBathroomTileset');
        var mbathroom = map.createLayer('mbathroom');
        ptag = game.add.sprite(0,10, 'ptag');
        ptag.animations.add('walk',[0,1,2,3,4,5,6,7]);
        game.physics.enable(ptag);
        ptag.scale.setTo(.5,.5);
        
        
    },
    update: function(){
            if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            ptag.x = ptag.x + 5;
            ptag.animations.play('walk', 20, true);
            ptag.scale.setTo(-.5,.5)
           }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            ptag.x = ptag.x - 5;
            ptag.animations.play('walk', 20, true);
            ptag.scale.setTo(.5,.5)
           }
        else{
            ptag.animations.stop('walk');
            ptag.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            ptag.y = ptag.y - 5;
            //if(ptag.y < 1500 ){
                //ptag.y = 1500;
           }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            ptag.y = ptag.y +5;
             }
        
    }
    }
};