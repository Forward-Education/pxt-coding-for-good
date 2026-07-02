# Avalanche Beacon – Finished Use Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.3
```

```template
radio.onReceivedString(function (receivedString) {
    lastReceived = input.runningTime()
    Signal = Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 100)
})
let lastReceived = 0
let Signal = 0
radio.setGroup(1)
fwdSensors.initializeLcd()
Signal = 0
lastReceived = 0
loops.everyInterval(1000, function () {
    radio.sendString("")
})
basic.forever(function () {
    if (input.runningTime() - lastReceived > 3000) {
        fwdSensors.lcd1.printLineString("No Signal", 1)
    } else {
        fwdSensors.lcd1.printQuadrantString("Signal %", 1)
        fwdSensors.lcd1.printQuadrantNumber(Math.round(Signal), 2)
    }
})

## 
This is a finished coding project, click ``|Done|`` to edit this code