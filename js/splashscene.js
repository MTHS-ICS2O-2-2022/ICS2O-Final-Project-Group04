/*global Phaser */

// Copyright (c) 2023 william simard All rights reserved
//
// Created by: william simard
// Created on: may 2023
// this is the splash scene

/**
 * this class is the splash scene
 */
class splashscene extends phaser.scene {
  /**
   * this method is the constructor
   */
  constructor() {
    super({ key: "splashScene" });
  }

  /**
   * can be defined on your scenes.
   * this method is called by the scene manager when the scene starts.
   *   before preload() and create()
   * @param {object} data - any data passed via sceneplugin.add() or sceneplugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  /**
   * can be defined in your own scenes.
   * use it to load assets.
   */
  preload() {
    console.log("splash : scene");
  }

  /**
   * can be defined in your own scenes.
   * use to create your game objective
   * @param {object} data - any data passed via sceneplugin.add() or sceneplugin.start().
   */
  create(data) {
    // pass
  }

  /**
   * should be overridden in your own scenes.
   * this method is called once per game step while the scene is running.
   * @param {number} time - the current time..
   * @param {number} delta - the delta time in ms since the lase frame
   */
  update(time, delta) {
    // pass
  }
}

export default splashscene;
