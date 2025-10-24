fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    basic.showNumber(fwdButtons.dial1.position())
})
fwdSensors.line1.onLineSensorStateChange(function () {
    if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off)) {
        basic.showNumber(fwdSensors.line1.lineSensorState())
    }
})
fwdSensors.pir1.onMovement(function () {
    if (fwdSensors.pir1.motionDetected()) {

    }
})
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    if (fwdButtons.dialButton1.isPressed()) {
        basic.showNumber(fwdButtons.dialButton1.holdDuration())
    }
})
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    if (fwdButtons.touch1.isPressed()) {
        basic.showNumber(fwdButtons.touch1.holdDuration())
    }
})
if (fwdSensors.color1.isBetween(fwdSensors.redGreenBlue.Red, 0, 100) && fwdSensors.colorLED1.isOn()) {
    basic.showNumber(fwdSensors.color1.color(fwdSensors.redGreenBlue.Red))
    fwdSensors.colorLED1.setBrightness(0)
}
fwdSensors.initializeLcd()
fwdSensors.lcd1.printLineString("", 1)
fwdSensors.lcd1.printQuadrantString("", 1)
fwdSensors.lcd1.printLineNumber(0, 1)
fwdSensors.lcd1.printQuadrantNumber(fwdSensors.round(0, 0), 1)
fwdSensors.lcd1.clearScreen()
if (fwdSensors.moisture1.isPastThreshold(5, fwdEnums.OverUnder.Over)) {
    basic.showNumber(fwdSensors.moisture1.moistureLevel())
}
if (fwdSensors.solar1.isPastThreshold(5, fwdEnums.OverUnder.Over)) {
    basic.showNumber(fwdSensors.solar1.lightLevel())
}
if (fwdSensors.sonar1.isPastThreshold(0, fwdEnums.OverUnder.Over)) {
    basic.showNumber(fwdSensors.sonar1.distance())
}
if (fwdSensors.temperature1.isPastThreshold(0, fwdEnums.OverUnder.Over)) {
    basic.showNumber(fwdSensors.temperature1.temperature())
}
if (fwdMotors.pump.isOn()) {
    fwdMotors.pump.timedRun(500)
    fwdMotors.pump.setOn(false)
}
if (fwdMotors.conIsEnabled(fwdBase.leftServo)) {
    fwdMotors.setSpeed(fwdBase.leftServo, 0)
    fwdMotors.conSetEnabled(fwdBase.leftServo, false)
    basic.showNumber(fwdMotors.getSpeed(fwdBase.leftServo))
}
if (fwdMotors.conIsEnabled(fwdBase.leftServo)) {
    fwdMotors.setupDriving(
        fwdBase.leftServo,
        fwdBase.leftServo
    )
    fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 50)
    fwdMotors.stop()
    fwdMotors.turn(0)
}
if (fwdMotors.posIsEnabled(fwdBase.leftServo)) {
    fwdMotors.setAngle(fwdBase.leftServo, 0)
    fwdMotors.setAngleAndWait(fwdBase.leftServo, 0)
    fwdMotors.posSetEnabled(fwdBase.leftServo, false)
    basic.showNumber(fwdMotors.getAngle(fwdBase.leftServo))
    basic.showNumber(fwdMotors.positionPresets(fwdMotors.ServoClockPositions.Position0))
}
fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff0000)
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
fwdLights.ledRing1.setBrightness(10)
fwdLights.ledRing1.rotate(1)
fwdLights.ledRing1.shift(1)
basic.showNumber(fwdLights.ledRing1.brightness())
