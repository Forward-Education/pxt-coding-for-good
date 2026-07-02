# Field Station – Finished Modify Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.4
```
## 
This is an example of the finished modify tutorial code. Use the blocks from the toolbox to make it your own.

```template
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("Loud")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Loud") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(1000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
    if (receivedString == "Quiet") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
})
input.onSound(DetectedSound.Quiet, function () {
    radio.sendString("Quiet")
})
radio.setGroup(1)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
```