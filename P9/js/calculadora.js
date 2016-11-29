var calculadora = new Phaser.Game(410, 520, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

    calculadora.load.spritesheet('button', 'assets/btn3.png', 90,90);
    calculadora.load.spritesheet('button2', 'assets/btn4.png', 90,90);
    //calculadora.load.backgroundColor('#999999');

}

var button;
var val=0;
var operador;
var display="";
var r;
var text, text2;

function create() {
    

    calculadora.stage.backgroundColor = '#BBBBBB';
    var posx1=10;
    var posx2=posx1+100;
    var posx3=posx2+100;
    var posx4=posx3+100;

    var posy1=125;
    var posy2=posy1+100;
    var posy3=posy2+100;
    var posy4=posy3+100;
    
    var style = { font: "65px Arial", fill: "#000000", };
    text2 = calculadora.add.text(10, 10, display, style);
    
    button7 = calculadora.add.button(posx1, posy1, 'button', actionOnClick, {keyname:7}, 1, 0, 2);
    text = calculadora.add.text(posx1+30, posy1+20, "7", style);
    
    button8 = calculadora.add.button(posx2, posy1, 'button', actionOnClick, {keyname:8}, 1, 0, 2);
    text = calculadora.add.text(posx2+30, posy1+20, "8", style);
    
    button9 = calculadora.add.button(posx3, posy1, 'button', actionOnClick, {keyname:9}, 1, 0, 2);
    text = calculadora.add.text(posx3+30, posy1+20, "9", style);
    
    buttond = calculadora.add.button(posx4, posy1, 'button2', actionOperador, {keyname:'/'}, 1, 0, 2);
    text = calculadora.add.text(posx4+30, posy1+20, "/", style);
    
    button4 = calculadora.add.button(posx1, posy2, 'button', actionOnClick, {keyname:4}, 1, 0, 2);
    text = calculadora.add.text(posx1+30, posy2+20, "4", style);
    
    button5 = calculadora.add.button(posx2, posy2, 'button', actionOnClick, {keyname:5}, 1, 0, 2);
    text = calculadora.add.text(posx2+30, posy2+20, "5", style);
    
    button6 = calculadora.add.button(posx3, posy2, 'button', actionOnClick, {keyname:6}, 1, 0, 2);
    text = calculadora.add.text(posx3+30, posy2+20, "6", style);
    
    buttonm = calculadora.add.button(posx4, posy2, 'button2', actionOperador, {keyname:'*'}, 1, 0, 2);
    text = calculadora.add.text(posx4+30, posy2+20, "X", style);
    
    button1 = calculadora.add.button(posx1, posy3, 'button', actionOnClick, {keyname:1}, 1, 0, 2);
    text = calculadora.add.text(posx1+30, posy3+20, "1", style);
    
    button2 = calculadora.add.button(posx2, posy3, 'button', actionOnClick, {keyname:2}, 1, 0, 2);
    text = calculadora.add.text(posx2+30, posy3+20, "2", style);
    
    button3 = calculadora.add.button(posx3, posy3, 'button', actionOnClick, {keyname:3}, 1, 0, 2);
    text = calculadora.add.text(posx3+30, posy3+20, "3", style);
    
    buttonr = calculadora.add.button(posx4, posy3, 'button2', actionOperador, {keyname:'-'}, 1, 0, 2);
    text = calculadora.add.text(posx4+30, posy3+20, "-", style);
    
    buttonx = calculadora.add.button(posx1, posy4, 'button', actionEsborra, this, 1, 0, 2);
    text = calculadora.add.text(posx1+30, posy4+20, "C", style);
    
    button0 = calculadora.add.button(posx2, posy4, 'button', actionOnClick, {keyname:0}, 1, 0, 2);
    text = calculadora.add.text(posx2+30, posy4+20, "0", style);
    
    buttoni = calculadora.add.button(posx3, posy4, 'button', actionCalcula, this, 1, 0, 2);
    text = calculadora.add.text(posx3+30, posy4+20, "=", style);
    
    buttons = calculadora.add.button(posx4, posy4, 'button2', actionOperador, {keyname:'+'}, 1, 0, 2);
    text = calculadora.add.text(posx4+30, posy4+20, "+", style);
    
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

    
    text2.destroy();
    display+=(this.keyname);
    create();
}

function actionOperador(){
    if(val!=0){actionOperador();}
    val=display;
    display="";
    text2.destroy();
    create();
    operador=this.keyname;
    console.log(operador);
}

function actionCalcula() {
    switch (operador){
        case"+":
            r=parseInt(display)+parseInt(val);
            break;
        case"-":
            r=parseInt(val)-parseInt(display);
            break;
        case"*":
            r=parseInt(display)*parseInt(val);
            break;
        case"/":
            r=parseInt(val)/parseInt(display);
            break;
    }
    val=0;
    display=r.toString();
    console.log(display);
    text2.destroy();
    create();
}

function actionEsborra() {
    val=0
    display="";
    text2.destroy();
}
