boil.Play = function(){};

var ptag;

boil.Play.prototype = {
    preload: function(){
        game.load.tilemap('bathroomTilemap', 'Assets/Backgrounds/bathroomTilemap.json', null,Phaser.Tilemap.TILED_JSON);
        game.load.image('bathroomTileset', 'Assets/Backgrounds/bathroomTileset.png');
         game.load.spritesheet('ptag', 'Assets/Spritesheets/ptag.png',450,970);
         
    },
    create: function(){
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        //game.world.setBounds(0,0, 1500,1500);
        //game.stage.backgroundColor = '#A80000';
        console.log('You are in the Play state');        
        var map = game.add.tilemap('bathroomTilemap');
        map.addTilesetImage('bathroomTileset');
        var bathroom = map.createLayer('bathroom');
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
};