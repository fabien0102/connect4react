# Connect 4 game kata

[![Build Status](https://travis-ci.org/fabien0102/connect4react.svg?branch=master)](https://travis-ci.org/fabien0102/connect4react)

This repo is just a kata to experiment new technologies.

Demo: https://fabien0102.github.io/connect4react/

## Technologies used

- yarn
- webpack 2
- HMR
- babel
- react
- typescript
- jest
- redux
- lodash
- cypress
- travis

## Goal

Construct a connect 4 game, from scratch (no starter kit), with latest tools available :)
It will be create following TDD process, using react tools.

## Connect 4 rules
The two players then alternate turns dropping one of their discs at a time into an unfilled column, until the second player, with red discs, achieves four discs in a row, diagonally, and wins. If the game board fills before either player achieves four in a row, then the game is a draw.

- board size: 7 columns x 6 rows
- win if a player have 4 discs aligned
- draw if board is fulfill
