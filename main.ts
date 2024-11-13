/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mohammed Afheej
 * Created on: Nov 2024
 * This program Move aroud the edge of the screen 
*/

// variables
let sprite: game.LedSprite = null
let counter = 0
let spritemove = 0

// happy
basic.showIcon(IconNames.Happy)

// on button A edge moving
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    counter = 0
    sprite = game.createSprite(0, 0)
    basic.pause(500)

    // setting up the movement
    while (counter < 4) {
        spritemove = 0
        while (spritemove < 4) {
            sprite.move(1)
            basic.pause(500)
            spritemove++
        }
        sprite.turn(Direction.Right, 90)
        counter++
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
