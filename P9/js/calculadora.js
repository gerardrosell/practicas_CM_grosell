var calculadora = new Phaser.Game(410, 550, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

    calculadora.load.spritesheet('button', 'assets/btn3.png', 90,90);
    calculadora.load.spritesheet('button2', 'assets/btn4.png', 90,90);
    //calculadora.load.backgroundColor('#999999');

}

var button;

function create() {

    calculadora.stage.backgroundColor = '#888888';
    var posx1=10;
    var posx2=posx1+100;
    var posx3=posx2+100;
    var posx4=posx3+100;

    var posy1=150;
    var posy2=posy1+100;
    var posy3=posy2+100;
    var posy4=posy3+100;
    
    var style = { font: "65px Arial", fill: "#000000"};

    button7 = calculadora.add.button(posx1, posy1, 'button', actionOnClick, this, 1, 0, 2, {keyname:7});
    var text = calculadora.add.text(posx1+45, posy1+50, "7", style);
    text.anchor.set(0.5);
    button8 = calculadora.add.button(posx2, posy1, 'button', actionOnClick, this, 1, 0, 2, {keyname:8});
    var text = calculadora.add.text(posx2+45, posy1+50, "8", style);
    text.anchor.set(0.5);
    button9 = calculadora.add.button(posx3, posy1, 'button', actionOnClick, this, 1, 0, 2, {keyname:9});
    var text = calculadora.add.text(posx3+45, posy1+50, "9", style);
    text.anchor.set(0.5);
    buttond = calculadora.add.button(posx4, posy1, 'button2', actionOnClick, this, 1, 0, 2, {keyname:'/'});
    var text = calculadora.add.text(posx4+45, posy1+50, "/", style);
    text.anchor.set(0.5);

    button4 = calculadora.add.button(posx1, posy2, 'button', actionOnClick, this, 1, 0, 2, {keyname:4});
    var text = calculadora.add.text(posx1+45, posy2+50, "4", style);
    text.anchor.set(0.5);
    button5 = calculadora.add.button(posx2, posy2, 'button', actionOnClick, this, 1, 0, 2, {keyname:5});
    var text = calculadora.add.text(posx2+45, posy2+50, "5", style);
    text.anchor.set(0.5);
    button6 = calculadora.add.button(posx3, posy2, 'button', actionOnClick, this, 1, 0, 2, {keyname:6});
    var text = calculadora.add.text(posx3+45, posy2+50, "6", style);
    text.anchor.set(0.5);
    buttonm = calculadora.add.button(posx4, posy2, 'button2', actionOnClick, this, 1, 0, 2, {keyname:'*'});
    var text = calculadora.add.text(posx4+45, posy2+50, "X", style);
    text.anchor.set(0.5);

    button1 = calculadora.add.button(posx1, posy3, 'button', actionOnClick, this, 1, 0, 2, {keyname:1});
    var text = calculadora.add.text(posx1+45, posy3+50, "1", style);
    text.anchor.set(0.5);
    button2 = calculadora.add.button(posx2, posy3, 'button', actionOnClick, this, 1, 0, 2, {keyname:2});
    var text = calculadora.add.text(posx2+45, posy3+50, "2", style);
    text.anchor.set(0.5);
    button3 = calculadora.add.button(posx3, posy3, 'button', actionOnClick, this, 1, 0, 2, {keyname:3});
    var text = calculadora.add.text(posx3+45, posy3+50, "3", style);
    text.anchor.set(0.5);
    buttonr = calculadora.add.button(posx4, posy3, 'button2', actionOnClick, this, 1, 0, 2, {keyname:'-'});
    var text = calculadora.add.text(posx4+45, posy3+50, "-", style);
    text.anchor.set(0.5);

    buttonx = calculadora.add.button(posx1, posy4, 'button', actionOnClick, this, 1, 0, 2, {keyname:'c'});
    var text = calculadora.add.text(posx1+45, posy4+50, "C", style);
    text.anchor.set(0.5);
    button0 = calculadora.add.button(posx2, posy4, 'button', actionOnClick, this, 1, 0, 2, {keyname:0});
    var text = calculadora.add.text(posx2+45, posy4+50, "0", style);
    text.anchor.set(0.5);
    buttoni = calculadora.add.button(posx3, posy4, 'button', actionOnClick, this, 1, 0, 2, {keyname:'='});
    var text = calculadora.add.text(posx3+45, posy4+50, "=", style);
    text.anchor.set(0.5);
    buttons = calculadora.add.button(posx4, posy4, 'button2', actionOnClick, this, 1, 0, 2, {keyname:'+'});
    var text = calculadora.add.text(posx4+45, posy4+50, "+", style);
    text.anchor.set(0.5);


    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);

}

function up() {
    console.log('button up', arguments);
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick () {

    background.visible =! background.visible;
    if(keyname==)


}
