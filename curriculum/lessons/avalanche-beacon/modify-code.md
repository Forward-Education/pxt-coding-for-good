# Avalanche Beacon – Finished Modify Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.6
```

```template
radio.onReceivedString(function (receivedString) {
    lastReceived = input.runningTime()
    Signal = Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 100)
    BeaconName = receivedString
})
let BeaconName = ""
let lastReceived = 0
let Signal = 0
radio.setGroup(1)
fwdSensors.initializeLcd()
Signal = 0
lastReceived = 0
BeaconName = ""
loops.everyInterval(1000, function () {
    radio.sendString("Group 1")
})
basic.forever(function () {
    if (input.runningTime() - lastReceived > 3000) {
        fwdSensors.lcd1.printLineString("No Signal", 1)
        fwdSensors.lcd1.printLineString("No Beacon", 2)
    } else {
        fwdSensors.lcd1.printQuadrantString("Signal %", 1)
        fwdSensors.lcd1.printQuadrantNumber(Math.round(Signal), 2)
        fwdSensors.lcd1.printQuadrantString("Beacon:", 3)
        fwdSensors.lcd1.printQuadrantString(BeaconName, 4)
    }
})
```

## 

This is a finished coding project, click ``|Done|`` to edit this code