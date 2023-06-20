/*global Phaser */

// Copyright (c) 2023 william simard All rights reserved
//
// Created by: william simard
// Created on: may 2023
// this is the splash scene
// Export the Splash Scene for use in other files


/**
 * this class is the splash scene
 */
class splashscene extends phaser.scene {
  /**
// Splash Scene

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "SplashScene" });
  }

  preload() {
    // Load any necessary assets here (e.g., images, sounds)
    this.load.image("logo", "assets/logo.png");
  }

  create() {
    // Display the splash screen and logo
    this.add.image(400, 300, "logo");

    // Add any additional text or UI elements
    this.add.text(400, 500, "Click to Start", { fontSize: "24px", fill: "#ffffff" }).setOrigin(0.5);

    // Set up an event listener for the start button
    this.input.on("pointerdown", this.startGame, this);
  }

  startGame() {
    // Transition to the game scene
    this.scene.start("GameScene");
  }
}

// Export the Splash Scene for use in other files
export default SplashScene;

