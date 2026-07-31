# Emergency Alert – Finished Modify Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
input.onButtonPressed(Button.A, function () {
    if (SafetyLevel < 180) {
        SafetyLevel = SafetyLevel + 60
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    if (SafetyLevel > 0) {
        SafetyLevel = SafetyLevel - 60
        basic.pause(500)
    }
})
let SafetyLevel = 0
SafetyLevel = 180
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.leftServo, SafetyLevel)
    if (SafetyLevel == 0) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else if (SafetyLevel == 60) {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    } else if (SafetyLevel == 120) {
        fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    } else if (SafetyLevel == 180) {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
})
```

## 

This is a finished coding project, click ``|Done|`` to edit this code