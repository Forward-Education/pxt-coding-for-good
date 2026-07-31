# Emergency Alert – Finished Use Code

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
})
```

## 

This is a finished coding project, click ``|Done|`` to edit this code