/*global Phaser */

// Copyright (c) 2023 william simard All rights reserved
//
// Created by: william simard
// Created on: may 2023
// This file contains the JS functions for index.html

// scene import statments
import splashScene from "./scenes/splashScene.js";
import titleScene from "./scenes/titleScene.js";

// Minesweeper Game

// Constants
const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 10;

// Create the game board
let board = createBoard(BOARD_SIZE);

// Place the mines randomly on the board
placeMines(board, NUMBER_OF_MINES);

// Print the initial board
printBoard(board);

// Function to create the game board
function createBoard(size) {
  let board = [];
  for (let i = 0; i < size; i++) {
    board[i] = [];
    for (let j = 0; j < size; j++) {
      board[i][j] = {
        revealed: false,
        hasMine: false,
        neighborMines: 0,
      };
    }
  }
  return board;
}

// Function to randomly place mines on the board
function placeMines(board, numberOfMines) {
  let count = 0;
  while (count < numberOfMines) {
    let row = Math.floor(Math.random() * BOARD_SIZE);
    let col = Math.floor(Math.random() * BOARD_SIZE);
    if (!board[row][col].hasMine) {
      board[row][col].hasMine = true;
      count++;
    }
  }
}

// Function to print the board
function printBoard(board) {
  for (let i = 0; i < BOARD_SIZE; i++) {
    let row = "";
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (board[i][j].revealed) {
        if (board[i][j].hasMine) {
          row += "* ";
        } else {
          row += board[i][j].neighborMines + " ";
        }
      } else {
        row += "_ ";
      }
    }
    console.log(row);
  }
}

// Function to reveal a cell
function revealCell(row, col) {
  if (board[row][col].hasMine) {
    console.log("Game Over!");
    revealAllMines(board);
  } else {
    board[row][col].revealed = true;
    if (board[row][col].neighborMines === 0) {
      // Reveal neighboring cells recursively if the cell has no neighboring mines
      revealNeighboringCells(row, col);
    }
    printBoard(board);
  }
}

// Function to reveal neighboring cells
function revealNeighboringCells(row, col) {
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (
        row + i >= 0 &&
        row + i < BOARD_SIZE &&
        col + j >= 0 &&
        col + j < BOARD_SIZE &&
        !board[row + i][col + j].revealed
      ) {
        revealCell(row + i, col + j);
      }
    }
  }
}

// Function to reveal all mines when the game is over
function revealAllMines(board) {
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (board[i][j].hasMine) {
        board[i][j].revealed = true;
      }
    }
  }
  printBoard(board);
}

// Example usage:
// Call revealCell(row, col) to reveal a cell at a specific row and column

// Start the game by revealing a cell at row 0, column 0
reveal;
