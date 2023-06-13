// Created by: colton
// Created on: june 9 2023
// this is the flie for the title screen

// global variables


class titleScreen extends phaser.Screen {
    
    // constructor
    
    constructor () {
        super({ key: "titleScene" })
        this.startButton = null
    }

Init (data) {
    this.cameras.main.setBackgroundColor("#000000")
}

preload () {
    this.load.image("startButton", "./asset/start.png")
}

create (data) {
    console.log("Title Screen")
    this.startButton = this.add.sprite(400, 300, "startButton").setInteractive()
    this.startButton.setInteractive({ useHandCursor: true})
    this.startButton.on("pointerdown", this.startGame, this)
}

update (time, delta) {
}

clickButton () {
    this.scene.start("gameScene")
}
}

export default titleScreen