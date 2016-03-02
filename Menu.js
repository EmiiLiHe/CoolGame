boil.Menu = function(){};

boil.Menu.prototype = {
    preload: function(){

    },
    create: function(){
        console.log('You are in the Menu state');
        game.stage.backgroundColor = '#000000';
        game.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown.add(function(){
            game.state.start('Play');
        });
         
    },
    update: function(){
        
    }
};