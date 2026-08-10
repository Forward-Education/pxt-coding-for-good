# Lampe d'ambiance – Code d'utilisation terminé

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.7
```

```template
input.onButtonPressed(Button.A, function () {
    Mood = "Happy"
})
input.onButtonPressed(Button.B, function () {
    Mood = "Frustrated"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Mood = "Calm"
})
let Mood = ""
fwdLights.ledRing1.setBrightness(10)
Mood = ""
basic.forever(function () {
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
})
// Build a Mood Light and explore how color can help everyone in your classroom communicate how they're feeling.
```

## 

Ceci est un projet de codage terminé, clique sur ``|Terminé|`` pour modifier ce code