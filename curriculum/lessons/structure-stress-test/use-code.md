# Structure Stress Test - Finished Use Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.5
```

```template
function TableTrue () {
    TableOn = true
    shakeStart = input.runningTime()
    fwdSensors.lcd1.printLineString("Table On", 2)
}
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    TableTrue()
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    TableTrue()
})
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    TableOn = false
    shakeDuration = Math.round((input.runningTime() - shakeStart) / 1000)
    fwdSensors.lcd1.printLineString("Shook: " + shakeDuration + "s", 2)
})
function Shake () {
    fwdMotors.setSpeed(fwdBase.leftServo, 100)
    basic.pause(100)
    fwdMotors.setSpeed(fwdBase.leftServo, -100)
    basic.pause(100)
}
let shakeDuration = 0
let shakeStart = 0
let TableOn = false
fwdSensors.initializeLcd()
TableOn = false
fwdMotors.setSpeed(fwdBase.leftServo, 0)
basic.pause(1000)
basic.forever(function () {
    if (TableOn) {
        Shake()
    } else {
        fwdMotors.setSpeed(fwdBase.leftServo, 0)
    }
})
```

## 

This is a finished coding project, click ``|Done|`` to edit this code