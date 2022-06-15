// codigo
import BootLoader from "./scenes/BootLoader.js"
// codigo
const config = {
    title: "Scene_javascript",
    url: "http://google.com",
    version: "0.0.1",
    type: Phaser.AUTO,

    width: 1920,
    height: 965,
    parent: "contenedor",

    pixelArt: true,
    backgroundColor: "#ACDEF9",
    scene: [BootLoader],
    banner:{
        hidePhaser: true,
        text: "#fff000f",
        background: [
            "#16a085",
            "#2ecc71",
            "#e74c3c",
            "#000000"
        ]
    }
}

const game = new Phaser.Game(config);