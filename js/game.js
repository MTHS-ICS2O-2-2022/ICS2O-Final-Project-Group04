/*global Phaser */

// Copyright (c) 2023 william simard All rights reserved
//
// Created by: william simard
// Created on: may 2023
// This file contains the JS functions for index.html

// scene import statments
import splashScene from "./scenes/splashScene.js";
import titleScene from "./scenes/titleScene.js";

// create the new scene
const splash = new splashScene();
const titlescene = new titleScene();

/**
 * start phaser game
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  //set background colour
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);
//console.log(game)

// load scenes
//note: remember any "key" is global and CAN NOT be reused!
game.scene.add("splashScene", splashScene);
game.scene.add("titleScene", titleScene);

//start game
game.scene.start("splashScene");
