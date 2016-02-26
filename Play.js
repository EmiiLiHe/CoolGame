boil.Play = function(){};

boil.Play.prototype = {
    preload: function(){
         game.load.image('mbathroom', 'Assets/Backgrounds/bathroom.png');
         game.load.sprites('uh', 'Assets/Sprites/uh.png');
    
    },
    create: function(){
        console.log('You are in the Play state');
        var uh = game.add.sprite(0,0, 'uh');
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0,0, 2813,1000);
        game.stage.backgroundColor = '#A80000';
        adam = game.add.sprite(0, 0, 'uh');
        uh.scale.setTo(.5, .5);
        uh.anchor.setTo(.5,.5)
        //uh.animations.add('walk',[0,1,2,3,4]);
        game.physics.enable(uh);
        adam.body.collideWorldBounds = true;
        game.camera.follow(uh);
        game.camera.deadzone = new Phaser.Rectangle(750-300, 0, 600, 1000);
        game.input.onDown.add(function(){
            changeState('GameOver');
        }); 
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0,0, 2813,1000);
        var tree = game.add.sprite(0,0, 'trees');
        game.stage.backgroundColor = '#A80000';
        adam = game.add.sprite(0, 0, 'uh');
        //adam.scale.setTo(.5, .5);
        //adam.anchor.setTo(.5,.5)
        //adam.animations.add('walk',[0,1,2,3,4]);
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;
        game.camera.follow(adam);
        game.camera.deadzone = new Phaser.Rectangle(750-300, 0, 600, 1000);
    },
    update: function(){
        
    }
};