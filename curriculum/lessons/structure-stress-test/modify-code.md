# Structure Stress Test - Finished Modify Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.7
```

```template
function TableTrue () {
    tableOn = true
    shakeStart = input.runningTime()
    if (Math.abs(fwdButtons.dial1.position()) == 1) {
        Power = 33
        fwdSensors.lcd1.printLineString("Speed 1", 2)
    } else if (Math.abs(fwdButtons.dial1.position()) == 2) {
        Power = 66
        fwdSensors.lcd1.printLineString("Speed 2", 2)
    } else if (Math.abs(fwdButtons.dial1.position()) >= 3) {
        Power = 100
        fwdSensors.lcd1.printLineString("Speed 3", 2)
    } else {
        tableOn = false
        fwdSensors.lcd1.printLineString("Table Off", 2)
    }
}
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    TableTrue()
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    TableTrue()
})
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    tableOn = false
    shakeDuration = Math.round((input.runningTime() - shakeStart) / 1000)
    fwdSensors.lcd1.printLineString("Shook: " + shakeDuration + "s", 1)
})
function Shake () {
    fwdMotors.setSpeed(fwdBase.leftServo, Power)
    basic.pause(100)
    fwdMotors.setSpeed(fwdBase.leftServo, -1 * Power)
    basic.pause(100)
}
let shakeDuration = 0
let Power = 0
let shakeStart = 0
let tableOn = false
fwdSensors.initializeLcd()
tableOn = false
fwdMotors.setSpeed(fwdBase.leftServo, 0)
basic.pause(1000)
basic.forever(function () {
    if (tableOn) {
        Shake()
    } else {
        fwdMotors.setSpeed(fwdBase.leftServo, 0)
    }
})
// Modify a Structure Stress Test to add dial-controlled speed tiers, and test how a structure responds to different shake magnitudes
```

## 

This is a finished coding project, click ``|Done|`` to edit this code