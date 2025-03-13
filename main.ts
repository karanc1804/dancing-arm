input.onButtonPressed(Button.A, function () {
    dance()
})
function dance () {
    mover(90, 150)
    music.playTone(262, 200)
    basic.pause(200)
    mover(45, 135)
    music.playTone(294, 200)
    basic.pause(200)
    mover(135, 45)
    music.playTone(330, 200)
    basic.pause(200)
    mover(90, 90)
    music.playTone(349, 200)
    basic.pause(200)
    mover(0, 180)
    music.playTone(392, 200)
    basic.pause(200)
    mover(180, 0)
    music.playTone(440, 200)
    basic.pause(200)
    reset()
    music.playTone(523, 200)
}
input.onButtonPressed(Button.B, function () {
    reset()
    music.playTone(262, 200)
})
function mover (angleP0: number, angleP1: number) {
    servoP0.setAngle(angleP0)
servoP1.setAngle(angleP1)
basic.pause(200)
}
function reset () {
    mover(0, 0)
}
const servoP0 = servos.P0
const servoP1 = servos.P1
