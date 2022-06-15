const keyCode = Phaser.Input.Keyboard.KeyCodes;
import { isCollided, isPermitted } from "../Physics/MyPhisics.js";
class BootLoader extends Phaser.Scene{
    constructor(){
        super({
            key: "BootLoader"
        });
    }

    init(){
        this.LimitX2 = 1850;
        this.LimitX1 = 90;
        this.Floor = 843;
        this.LimitJump = 500;
        this.Capa_ultra_inferior = 4;
        this.Capa_inferior_2 = 5;
        this.Capa_inferior = 6;
        this.Capa_animate = 7;
        this.Capa_superior = 8;
        this.Ox = 0.5;
        this.Oy = 1;
        this.Scale = 0.8;
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image([
            "Android",
            "Arbol_1",
            "Piso",
            "Pasto",
            "savila", 
            "Dr.plaga", 
            "Dr.plaga_c1",
            "Dr.plaga_c2",
            "Dr.plaga_c3",
            "Dr.plaga_c4",
            "Dr.plaga_c5",
            "Dr.plaga_c6",
            "Dr.plaga_combo_1",
            "Dr.plaga_combo_2",
            "Dr.plaga_combo_3",
            "Dr.plaga_combo_4",
            "Dr.plaga_combo_5",
            "Dr.plaga_salto_1",
            "Dr.plaga_salto_2",
            "Dr.plaga_salto_3",
            "Dr.plaga_salto_4",
            "Dr.plaga_salto_5",
            "Dr.plaga_salto_6",
            "Dr.plaga_salto_7",
            "Android_c1",
            "Android_c2",
            "Android_c3",
            "Android_c4",
            "Android_c5",
            "Android_c6",
            "Android_cayendo_1",
            "Android_cayendo_2",
            "Android_cayendo_3",
            "Android_cayendo_4",
            "Android_cayendo_5",
            "Android_cayendo_6",
            "Android_cayendo_7",
            "Android_cayendo_8",
            "Android_combo_1",
            "Android_combo_2",
            "Android_combo_3",
            "Android_saltando_1",
            "Android_saltando_2",
            "Android_saltando_3"
        ]);
    }

    create(){

        // doctor plaga
        this.Dr_Plaga = new Array();
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c1"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c1"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c1"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c1"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c2"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c2"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c2"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c2"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c3"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c3"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c3"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c3"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c4"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c4"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c4"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c4"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c5"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c5"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c5"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c5"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c6"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c6"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c6"));
        this.Dr_Plaga.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_c6"));

        this.Dr_Plaga_fight = new Array();
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_1"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_1"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_1"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_1"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_1"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_2"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_2"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_2"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_2"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_2"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_3"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_3"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_3"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_3"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_3"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_4"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_4"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_4"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_4"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_4"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_5"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_4"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_4"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_4"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_4"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_4"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_3"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_3"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_3"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_3"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_3"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_2"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_2"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_2"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_2"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_2"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_1"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_1"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_1"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_1"));
        this.Dr_Plaga_fight.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_combo_1"));

        this.Dr_Plaga_Saltando = new Array();
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_1"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_1"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_1"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_1"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_2"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_2"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_2"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_2"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_3"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_3"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_3"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_3"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_4"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_4"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_4"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_4"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_5"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_5"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_5"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_5"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_5"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_5"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_5"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_5"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_5"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_5"));
        // bajada
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_6"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_7"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_7"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_7"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_7"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_7"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_7"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_7"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_7"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_7"));
        this.Dr_Plaga_Saltando.push(this.add.image(this.LimitX1,this.Floor,"Dr.plaga_salto_7"));

        for (let i = 0; i < this.Dr_Plaga.length; i++) {
            this.Dr_Plaga[i].setDepth(this.Capa_animate);
            this.Dr_Plaga[i].setOrigin(this.Ox,this.Oy);
            this.Dr_Plaga[i].setScale(this.Scale,this.Scale);
            if (i == 0) {
                this.Dr_Plaga[i].setVisible(true);
            }else{
                this.Dr_Plaga[i].setVisible(false);
            }   
        }

        for (let i = 0; i < this.Dr_Plaga_fight.length; i++) {
            this.Dr_Plaga_fight[i].setDepth(this.Capa_animate);
            this.Dr_Plaga_fight[i].setOrigin(this.Ox,this.Oy);
            this.Dr_Plaga_fight[i].setScale(this.Scale,this.Scale);
            this.Dr_Plaga_fight[i].setVisible(false);
        }

        for (let i = 0; i < this.Dr_Plaga_Saltando.length; i++) {
            this.Dr_Plaga_Saltando[i].setDepth(this.Capa_animate);
            this.Dr_Plaga_Saltando[i].setOrigin(this.Ox,this.Oy);
            this.Dr_Plaga_Saltando[i].setScale(this.Scale,this.Scale);
            this.Dr_Plaga_Saltando[i].setVisible(false);
        }

        // Android
        this.Android = new Array();
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c1"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c1"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c1"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c1"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c2"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c2"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c2"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c2"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c3"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c3"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c3"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c3"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c4"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c4"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c4"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c4"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c5"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c5"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c5"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c5"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c6"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c6"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c6"));
        this.Android.push(this.add.image(this.LimitX2,this.Floor,"Android_c6"));

        this.Android_falling_down = new Array();
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_1"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_1"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_1"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_1"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_2"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_2"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_2"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_2"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_3"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_3"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_3"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_3"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_4"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_4"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_4"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_4"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_5"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_5"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_5"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_5"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_6"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_6"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_6"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_6"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_7"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_7"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_7"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_7"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_8"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_8"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_8"));
        this.Android_falling_down.push(this.add.image(this.LimitX2,this.Floor,"Android_cayendo_8"));

        this.Android_jump = new Array();
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_1"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_1"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_1"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_1"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_2"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_2"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_2"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_2"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_3"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_1"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_1"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_1"));
        this.Android_jump.push(this.add.image(this.LimitX2,this.Floor,"Android_saltando_1"));

        this.Android_Combo = new Array();
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_1"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_1"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_1"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_1"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_2"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_2"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_2"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_2"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_3"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_2"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_2"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_2"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_2"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_1"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_1"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_1"));
        this.Android_Combo.push(this.add.image(this.LimitX2,this.Floor,"Android_combo_1"));

        for (let i = 0; i < this.Android.length; i++) {
            this.Android[i].setDepth(this.Capa_animate);
            this.Android[i].setOrigin(this.Ox,this.Oy)
            this.Android[i].setScale(this.Scale,this.Scale);
            this.Android[i].flipX = true;
            if (i == 0) {
                this.Android[i].setVisible(true);
            }else{
                this.Android[i].setVisible(false);
            }
        }

        for (let i = 0; i < this.Android_falling_down.length; i++) {
            this.Android_falling_down[i].setDepth(this.Capa_animate);
            this.Android_falling_down[i].setOrigin(this.Ox,this.Oy)
            this.Android_falling_down[i].setScale(this.Scale,this.Scale);
            this.Android_falling_down[i].setVisible(false);
            this.Android_falling_down[i].flipX = true;
        }

        for (let i = 0; i < this.Android_jump.length; i++) {
            this.Android_jump[i].setDepth(this.Capa_animate);
            this.Android_jump[i].setOrigin(this.Ox,this.Oy)
            this.Android_jump[i].setScale(this.Scale,this.Scale);
            this.Android_jump[i].setVisible(false);
            this.Android_jump[i].flipX = true;
        }

        for (let i = 0; i < this.Android_Combo.length; i++) {
            this.Android_Combo[i].setDepth(this.Capa_animate);
            this.Android_Combo[i].setOrigin(this.Ox,this.Oy)
            this.Android_Combo[i].setScale(this.Scale,this.Scale);
            this.Android_Combo[i].setVisible(false);
            this.Android_Combo[i].flipX = true;
        }
        
        //items
        this.Piso = new Array();
        this.Piso.push(this.add.image(0,969,"Piso"));
        this.Piso.push(this.add.image(1250,969,"Piso"));
        for (let i = 0; i < this.Piso.length; i++) {
            this.Piso[i].setOrigin(0,this.Oy);
            this.Piso[i].setDepth(this.Capa_inferior);          
        }

        this.Pasto = new Array();
        this.Pasto.push(this.add.image(0,850,"Pasto"));
        this.Pasto.push(this.add.image(1250,850,"Pasto"));
        for (let i = 0; i < this.Pasto.length; i++) {
            this.Pasto[i].setOrigin(0,this.Oy);
            this.Pasto[i].setDepth(this.Capa_superior);
        }

        this.Savila = new Array();
        this.Savila.push(this.add.image(30,845,"savila"));
        this.Savila.push(this.add.image(200,845,"savila"));
        this.Savila.push(this.add.image(600,845,"savila"));
        this.Savila.push(this.add.image(895,845,"savila"));
        this.Savila.push(this.add.image(1000,845,"savila"));
        this.Savila.push(this.add.image(1300,845,"savila"));
        this.Savila.push(this.add.image(1650,845,"savila"));
        for (let i = 0; i < this.Savila.length; i++) {
            this.Savila[i].setOrigin(this.Ox,this.Oy);
            this.Savila[i].setDepth(this.Capa_inferior_2);
        }

        this.Arbol = new Array();
        this.Arbol.push(this.add.image(-50,965,"Arbol_1"));
        this.Arbol.push(this.add.image(90,965,"Arbol_1"));
        this.Arbol.push(this.add.image(300,965,"Arbol_1"));
        this.Arbol.push(this.add.image(600,965,"Arbol_1"));
        this.Arbol.push(this.add.image(1000,965,"Arbol_1"));
        this.Arbol.push(this.add.image(1200,965,"Arbol_1"));
        this.Arbol.push(this.add.image(1400,965,"Arbol_1"));
        this.Arbol.push(this.add.image(1600,965,"Arbol_1"));
        for (let i = 0; i < this.Arbol.length; i++) {
            this.Arbol[i].setDepth(0);
            this.Arbol[i].setOrigin(0,this.Oy);
            if((i % 2) == 0){
                this.Arbol[i].setAlpha(0.2);
            }else{
                this.Arbol[i].setAlpha(0.5);
            }
            
        }

        // cursor para Dr Plaga
        this.move_dr_plaga = this.input.keyboard.createCursorKeys();

        this.move_dr_plaga.up.on('down', () => {
            this.state_Dr_plaga = 2;
        });

        this.move_dr_plaga.space.on('down', () => {
            this.setOpaque = false;
        });

        this.move_dr_plaga.space.on('up', () => {
            this.setOpaque = true;
        });

        //para combo
        this.Combo = this.input.keyboard.createCombo([keyCode.Z, keyCode.X, keyCode.C],{resetOnMatch: true},);
        this.input.keyboard.on('keycombomatch', (event)=>{
            if(event.keyCodes[0] == keyCode.Z && event.keyCodes[1] == keyCode.X && event.keyCodes[2] == keyCode.C){
                this.state_Dr_plaga = 3;
            }
        });

        this.ComboAndroid = this.input.keyboard.createCombo([keyCode.B, keyCode.N, keyCode.M], {resetOnMatch: true});
        this.input.keyboard.on('keycombomatch', (event) => {
            if(event.keyCodes[0] == keyCode.B && event.keyCodes[1] == keyCode.N, event.keyCodes[2] == keyCode.M){
                this.State_Android = 3;
            }
        });

        // para android
        this.AndroidControls = this.input.keyboard.addKeys({
            Arriba: keyCode.W,
            Agachar: keyCode.S,
            Derecha: keyCode.D,
            Izquierda: keyCode.A,
            Transparentar: keyCode.SHIFT
        });

        this.AndroidControls.Arriba.on('down', () => {
            this.State_Android = 2;
            this.bloqueo = true;
        });

        // imcrementos
        this.sequence_Dr_plaga = 1;
        this.sequence_Dr_plaga_salto = 0;
        this.sequence_Dr_plaga_combo = 0;
        this.state_Dr_plaga = 0;
        this.setOpaque = true;
        this.increment = 0.2;
        this.increment_y = 0.3;
        this.Dr_Plaga_location = this.LimitX1;
        this.Dr_Plaga_location_y = this.Floor;
        this.current_dir = false;
        this.etapa = 1;
        //Android
        this.sequence_Android = 1;
        this.sequence_Android_jump = 0;
        this.sequence_Android_combo = 0;
        this.sequence_Android_falling = 0;
        this.State_Android = 0;
        this.setOpaque_Android = true;
        this.incrementX_Android = 0.2;
        this.incrementY_Android = 0.3;
        this.LocationX_Android = this.LimitX2;
        this.LocationY_Android = this.Floor;
        this.Current_dir_Android = true;
        this.Etapa_Android = 1;

        // para colision
        this.colision = false;
    }

    update(time, delta){
        // dr_plaga

        if(this.move_dr_plaga.right.isDown){
            this.state_Dr_plaga = 1;
            this.Dr_Plaga_Saltando[70].setVisible(false);
            this.current_dir = false;
            for (let i = 0; i < this.Dr_Plaga.length; i++) {
                if (i == this.sequence_Dr_plaga) {
                    this.Dr_Plaga[i].setVisible(true);
                }else{
                    this.Dr_Plaga[i].setVisible(false);
                }
                if(!this.setOpaque){
                    this.Dr_Plaga[i].setAlpha(0.3);
                }else{
                    this.Dr_Plaga[i].setAlpha(1);
                }

                if (this.Dr_Plaga_location < 1840 && (!this.colision || !this.setOpaque)) {
                    this.Dr_Plaga_location += this.increment;
                    this.Dr_Plaga[i].x = this.Dr_Plaga_location;
                }else if(this.colision && isPermitted(this.current_dir, this.Current_dir_Android) == 1){
                    this.Dr_Plaga_location -= this.increment;
                }

                this.Dr_Plaga[i].flipX = false;
                this.ActualFlipx = false;
            }
        }else if(this.move_dr_plaga.left.isDown){
            this.state_Dr_plaga = 1;
            this.Dr_Plaga_Saltando[70].setVisible(false);
            this.current_dir = true;
            for (let i = 0; i < this.Dr_Plaga.length; i++) {
                if (i == this.sequence_Dr_plaga) {
                    this.Dr_Plaga[i].setVisible(true);
                }else{
                    this.Dr_Plaga[i].setVisible(false);
                }
                if(!this.setOpaque){
                    this.Dr_Plaga[i].setAlpha(0.3);
                }else{
                    this.Dr_Plaga[i].setAlpha(1);
                }

                if (this.Dr_Plaga_location > 60 && (!this.colision || !this.setOpaque)) {
                    this.Dr_Plaga_location -= this.increment;
                    this.Dr_Plaga[i].x = this.Dr_Plaga_location;
                }else if(this.colision && isPermitted(this.current_dir, this.Current_dir_Android) == 1){
                    this.Dr_Plaga_location += this.increment;
                    
                }

                this.Dr_Plaga[i].flipX = true;
                this.ActualFlipx = true;
            }
        }else if(this.move_dr_plaga.down.isDown){
            for (let i = 0; i < this.Dr_Plaga.length; i++) {
                this.Dr_Plaga[i].setVisible(false);
            }
            this.Dr_Plaga_Saltando[70].setVisible(true);
            this.Dr_Plaga_Saltando[70].x = this.Dr_Plaga_location;
            this.Dr_Plaga_Saltando[70].y = 850;
            this.Dr_Plaga_Saltando[70].flipX = this.current_dir;
            if (!this.setOpaque) {
                this.Dr_Plaga_Saltando[70].setAlpha(0.3);
            }else{
                this.Dr_Plaga_Saltando[70].setAlpha(1);
            }
        }else{
            this.Dr_Plaga_Saltando[70].setVisible(false);
            for (let i = 0; i < this.Dr_Plaga.length; i++) {
                if (i != 0) {
                    this.Dr_Plaga[i].setVisible(false);
                }else {
                    this.Dr_Plaga[i].setVisible(true);
                }
                if(!this.setOpaque){
                    this.Dr_Plaga[i].setAlpha(0.3);
                }else{
                    this.Dr_Plaga[i].setAlpha(1);
                }
            }
        }

        if(this.state_Dr_plaga == 2){ // salto
            this.Dr_Plaga_Saltando[70].setVisible(false);
            for (let i = 0; i < this.Dr_Plaga.length; i++) {
                this.Dr_Plaga[i].setVisible(false);
            }
            for (let i = 0; i < this.Dr_Plaga_Saltando.length; i++) {
                if (i == this.sequence_Dr_plaga_salto) {
                    this.Dr_Plaga_Saltando[i].setVisible(true);
                }else{
                    this.Dr_Plaga_Saltando[i].setVisible(false);
                }
                this.Dr_Plaga_Saltando[i].x = this.Dr_Plaga_location;
                this.Dr_Plaga_Saltando[i].flipX = this.ActualFlipx;
                if(this.Dr_Plaga_location_y > 500 && this.etapa == 1){
                    //console.log("subida");
                    this.Dr_Plaga_location_y -= this.increment_y;
                    this.Dr_Plaga_Saltando[i].y = this.Dr_Plaga_location_y;
                }else if(this.Dr_Plaga_location_y < 850){
                    this.etapa = 2;
                    //console.log("bajada");
                    this.Dr_Plaga_location_y += this.increment_y;
                    this.Dr_Plaga_Saltando[i].y = this.Dr_Plaga_location_y;
                }
            }
        }
        
        if(this.state_Dr_plaga == 3){ ///combo
            for (let i = 0; i < this.Dr_Plaga.length; i++) {
                this.Dr_Plaga[i].setVisible(false);
            }
            for (let i = 0; i < this.Dr_Plaga_fight.length; i++) {
                if (i == this.sequence_Dr_plaga_combo) {
                    this.Dr_Plaga_fight[i].setVisible(true);
                }else{
                    this.Dr_Plaga_fight[i].setVisible(false);
                }
                this.Dr_Plaga_fight[i].x = this.Dr_Plaga_location;
                this.Dr_Plaga_fight[i].flipX = this.ActualFlipx;
                if ((i % 2) == 0 || (i % 3) == 0 || (i % 5) == 0) {
                    this.Dr_Plaga_fight[i].setTint('0xff0000');   
                }else{
                    this.Dr_Plaga_fight[i].setTint('0xffffff');
                }
            }
        }

        if (this.state_Dr_plaga != 2 && this.state_Dr_plaga != 3) {
            if (this.sequence_Dr_plaga < 24) {
                this.sequence_Dr_plaga++;
            }else{
                this.sequence_Dr_plaga = 1;
            }
        }else if(this.state_Dr_plaga == 2){
            if (this.sequence_Dr_plaga_salto < this.Dr_Plaga_Saltando.length) {
                this.sequence_Dr_plaga_salto++;
            }else{
                this.sequence_Dr_plaga_salto = 0;
                this.state_Dr_plaga = 0;
                this.etapa = 1;
                for (let i = 0; i < this.Dr_Plaga_Saltando.length; i++) {
                    this.Dr_Plaga_Saltando[i].setVisible(false);
                }
            }
        }else if(this.state_Dr_plaga == 3){
            if (this.sequence_Dr_plaga_combo < this.Dr_Plaga_fight.length) {
                this.sequence_Dr_plaga_combo++;
            }else{
                this.sequence_Dr_plaga_combo = 0;
                this.state_Dr_plaga = 0;
            }
        }

        // android *******************************************************************************************************************
        if(this.AndroidControls.Izquierda.isDown /*&& !this.bloqueo*/){
            this.State_Android = -1;
            for (let i = 0; i < this.Android.length; i++) {
                if (i == this.sequence_Android) {
                    this.Android[i].setVisible(true);
                }else{
                    this.Android[i].setVisible(false);
                }

                if (this.AndroidControls.Transparentar.isDown) {
                    this.Android[i].setAlpha(0.3);
                    this.setOpaque_Android = false;
                }else{
                    this.Android[i].setAlpha(1);
                    this.setOpaque_Android = true;
                }

                if(this.LocationX_Android > this.LimitX1 && (!this.colision || !this.setOpaque_Android)){
                    this.LocationX_Android -= this.incrementX_Android;
                    this.Android[i].x = this.LocationX_Android;
                }else if(this.colision && isPermitted(this.current_dir, this.Current_dir_Android) == 1){
                    this.LocationX_Android += this.incrementX_Android;
                    this.Android[i].x = this.LocationX_Android;
                }

                this.Android[i].flipX = true;
                this.Current_dir_Android = true;
            }
        }else if (this.AndroidControls.Derecha.isDown /*&& !this.bloqueo*/){
            this.State_Android = 1;
            for (let i = 0; i < this.Android.length; i++) {
                if(this.sequence_Android == i){
                    this.Android[i].setVisible(true);
                }else{
                    this.Android[i].setVisible(false);
                }

                if (this.AndroidControls.Transparentar.isDown) {
                    this.Android[i].setAlpha(0.3);
                    this.setOpaque_Android = false;
                }else{
                    this.Android[i].setAlpha(1);
                    this.setOpaque_Android = true;
                }

                if (this.LocationX_Android < this.LimitX2 && (!this.colision || !this.setOpaque_Android)) {
                    this.LocationX_Android += this.incrementX_Android;
                    this.Android[i].x = this.LocationX_Android;
                }else if(this.colision && isPermitted(this.current_dir, this.Current_dir_Android) == 1){
                    this.LocationX_Android -= this.incrementX_Android;
                    this.Android[i].x = this.LocationX_Android;
                }
                this.Android[i].flipX = false;
                this.Current_dir_Android = false;
            }
        }else if (this.AndroidControls.Agachar.isDown /*&& !this.bloqueo*/){
            this.State_Android = -2;
            //this.bloqueo = true;
            for (let i = 0; i < this.Android.length; i++) {
                this.Android[i].setVisible(false);
            }
            for (let i = 0; i < this.Android_falling_down.length; i++) {
                if(i == this.sequence_Android_falling){
                    this.Android_falling_down[i].setVisible(true);
                }else{
                    this.Android_falling_down[i].setVisible(false);
                }
                this.Android_falling_down[i].flipX  = this.Current_dir_Android;
                this.Android_falling_down[i].x = this.LocationX_Android;
            }
        }else /*if(!this.bloqueo)*/{
            for (let i = 0; i < this.Android_falling_down.length; i++) {
                this.Android_falling_down[i].setVisible(false);
            }
            for (let i = 0; i < this.Android.length; i++) {
                if( i == 0){
                    this.Android[i].setVisible(true);
                }else {
                    this.Android[i].setVisible(false);
                }

                if (this.AndroidControls.Transparentar.isDown) {
                    this.Android[i].setAlpha(0.3);
                    this.setOpaque_Android = false;
                }else{
                    this.Android[i].setAlpha(1);
                    this.setOpaque_Android = true;
                }
            }
        }

        if(this.State_Android == 2){ // salto
            for (let i = 0; i < this.Android.length; i++) {
                this.Android[i].setVisible(false);
            }

            for (let i = 0; i < this.Android_jump.length; i++) {
                if(i == this.sequence_Android_jump){
                    this.Android_jump[i].setVisible(true);
                }else{
                    this.Android_jump[i].setVisible(false);
                }

                this.Android_jump[i].x = this.LocationX_Android;
                this.Android_jump[i].flipX = this.Current_dir_Android;
                if(this.LocationY_Android > 500 && this.Etapa_Android == 1){
                    this.LocationY_Android -= this.incrementY_Android;
                    this.Android_jump[i].y = this.LocationY_Android;
                }else if(this.LocationY_Android <= this.Floor){
                    this.Etapa_Android = 2;
                    this.LocationY_Android += this.incrementY_Android;
                    this.Android_jump[i].y = this.LocationY_Android;
                }
            }
        }

        // para combo
        if(this.State_Android == 3){
            for (let i = 0; i < this.Android.length; i++) {
                this.Android[i].setVisible(false);
            }
            for (let i = 0; i < this.Android_Combo.length; i++) {
                if(i == this.sequence_Android_combo){
                    this.Android_Combo[i].setVisible(true);
                }else{
                    this.Android_Combo[i].setVisible(false);
                }

                this.Android_Combo[i].x = this.LocationX_Android;
                this.Android_Combo[i].flipX = this.Current_dir_Android;

                if((i % 2) == 0 || (i % 3) == 0 || (i % 5) == 0){
                    this.Android_Combo[i].setTint('0x0000ff');
                }else{
                    this.Android_Combo[i].setTint('0xffffff');
                }
            }
        }


        if(this.State_Android != 2 && this.State_Android != -2 && this.State_Android != 3){
            if (this.sequence_Android < this.Android.length - 1) {
                this.sequence_Android++;
            }else{
                this.sequence_Android = 0;
            }
        }else if(this.State_Android == -2){
            if(this.sequence_Android_falling < this.Android_falling_down.length){
                this.sequence_Android_falling++;
            }else{
                this.sequence_Android_falling = 0;
            }
        }else if(this.State_Android == 2){
            if(this.sequence_Android_jump < this.Android_jump.length){
                this.sequence_Android_jump++;
            }else{
                this.sequence_Android_jump = 0;
                this.Etapa_Android = 1;
                this.State_Android = 0;
                //this.bloqueo = false;
            }
        }else if(this.State_Android == 3){
            if(this.sequence_Android_combo < this.Android_Combo.length - 1){
                this.sequence_Android_combo++;
            }else{
                this.sequence_Android_combo = 0;
                this.State_Android = 0;
                for (let i = 0; i < this.Android_Combo.length; i++) {
                    this.Android_Combo[i].setVisible(false);
                }
            }
        }

        this.colision = isCollided(this.LocationX_Android, this.LocationY_Android, this.Dr_Plaga_location, this.Dr_Plaga_location_y, 140)

    }

}

export default BootLoader;