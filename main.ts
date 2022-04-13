input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
})
input.onGesture(Gesture.Shake, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    droppy_guy = game.createSprite(randint(0, 4), 0)
    droppy_guy.delete()
})
let droppy_guy: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    while (pins.digitalReadPin(DigitalPin.P1) == 1) {
        droppy_guy = game.createSprite(randint(0, 4), 0)
        basic.pause(300)
        droppy_guy.change(LedSpriteProperty.Y, 1)
        basic.pause(300)
        droppy_guy.change(LedSpriteProperty.Y, 1)
        basic.pause(300)
        droppy_guy.change(LedSpriteProperty.Y, 1)
        basic.pause(300)
        droppy_guy.change(LedSpriteProperty.Y, 1)
        basic.pause(300)
        if (player.isTouching(droppy_guy)) {
            game.addScore(1)
            music.playTone(784, music.beat(BeatFraction.Whole))
        }
        droppy_guy.delete()
    }
})
