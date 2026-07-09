# Earthquake Detector – Finished Use Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.6
datalogger
```

```template
datalogger.onLogFull(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
})
fwdSensors.initializeLcd()
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
let strength = 0
let time = 0
basic.forever(function () {
    strength = input.acceleration(Dimension.Strength)
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Stength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
})
```

## 

This is a finished coding project, click ``|Done|`` to edit this code