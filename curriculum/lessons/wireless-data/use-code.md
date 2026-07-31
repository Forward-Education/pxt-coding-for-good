# Smart Lock – Finished Use Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
input.onButtonPressed(Button.A, function () {
    if (PressCount < 3) {
        EnteredCode = "" + EnteredCode + "a"
        PressCount += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (PressCount < 3) {
        EnteredCode = "" + EnteredCode + "b"
        PressCount += 1
    }
})
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdSensors.lcd1.printLineString("Door Locked", 1)
    basic.clearScreen()
    basic.pause(5000)
    EnteredCode = ""
    PressCount = 0
})
let EnteredCode = ""
let PressCount = 0
let SecretCode = "abb"
let FailedAttempts = 0
fwdSensors.initializeLcd()
basic.forever(function () {
    if (PressCount == 3) {
        if (EnteredCode == SecretCode) {
            FailedAttempts = 0
            basic.showIcon(IconNames.House)
            fwdSensors.lcd1.printLineString("Door Unlocked", 1)
        } else {
            FailedAttempts += 1
            if (FailedAttempts >= 3) {
                basic.showIcon(IconNames.Skull)
                fwdSensors.lcd1.printLineString("Tampering Alert", 1)
            } else {
                basic.showIcon(IconNames.No)
                fwdSensors.lcd1.printLineString("Access Denied", 1)
            }
        }
    } else {
        fwdSensors.lcd1.printLineString("Enter Code", 1)
    }
})

```

## 

This is a finished coding project, click ``|Done|`` to edit this code