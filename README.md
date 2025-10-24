# fwd-coding-for-good

Coding For Good Kit, by Forward Education.

Find us at [forwardedu.com](https://forwardedu.com/) and [learn.forwardedu.com](https://learn.forwardedu.com/). Learn more about the Coding For Good Kit on the [product page](https://forwardedu.com/collections/robotics-platform#Shop-Robotics).

### ~ reminder

![works with micro:bit V2 only image](/static/v2/v2-only.png)

These blocks require the [micro:bit V2](/device/v2). If you use them with a V1 micro:bit you will see the 927 error code on the screen.

### ~

## Example Usage

Our learning systems are designed to simplify teaching coding and computer science for educators at all experience levels. Our Coding For Good Kit can be used on its own or joined with other kits to access our wider library of sensors, motors, lights, and buttons. Check out our libraries of [lessons](https://learn.forwardedu.com/lesson-library), [projects](https://learn.forwardedu.com/projects/), and [tutorials](https://learn.forwardedu.com/tutorials/). Samples of coding with the Coding For Good Kit can be seen below.

A motion-activated light can be created using the passive infrared (PIR) sensor and the LED ring. If the PIR sensor detects motion, then the LED ring is lit up. For this light to be automatic, it also needs to turn off after a certain amount of time with no motion. For that there is a counter that is set to 5 seconds during motion detection and counted down each second. An important detail is that if there is another motion event while the light is already lit up then the timer gets reset. In other words, when there is continuous motion there is continuous light.

```blocks
let counter = 0
basic.forever(function () {
    if (fwdSensors.pir1.motionDetected()) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
        counter = 5
    }
    basic.pause(1000)
    counter += -1
    if (counter == 0) {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

Temperature can be reported and classified in real-time using the temperature probe and LCD display. Every second the temperature reading is printed on line 1 of the LCD. The reading is then classified using references to the natural environment and that classification is printed on line 2 of the LCD. The LCD is initialized at the start of the program, which delays execution while things get set up behind the scenes.

```blocks
fwdSensors.initializeLcd()
loops.everyInterval(1000, function () {
    fwdSensors.lcd1.printLineString("Temp: " + fwdSensors.temperature1.temperature() + "°C", 1)
    if (fwdSensors.temperature1.isPastThreshold(0, fwdEnums.OverUnder.Under)) {
        fwdSensors.lcd1.printLineString("Icy!", 2)
    } else if (fwdSensors.temperature1.isPastThreshold(0, fwdEnums.OverUnder.Over) && fwdSensors.temperature1.isPastThreshold(10, fwdEnums.OverUnder.Under)) {
        fwdSensors.lcd1.printLineString("Polar Dip", 2)
    } else if (fwdSensors.temperature1.isPastThreshold(10, fwdEnums.OverUnder.Over) && fwdSensors.temperature1.isPastThreshold(25, fwdEnums.OverUnder.Under)) {
        fwdSensors.lcd1.printLineString("Coldwater beach", 2)
    } else if (fwdSensors.temperature1.isPastThreshold(25, fwdEnums.OverUnder.Over) && fwdSensors.temperature1.isPastThreshold(35, fwdEnums.OverUnder.Under)) {
        fwdSensors.lcd1.printLineString("Tropical beach", 2)
    } else if (fwdSensors.temperature1.isPastThreshold(35, fwdEnums.OverUnder.Over) && fwdSensors.temperature1.isPastThreshold(90, fwdEnums.OverUnder.Under)) {
        fwdSensors.lcd1.printLineString("Hot spring", 2)
    } else if (fwdSensors.temperature1.isPastThreshold(35, fwdEnums.OverUnder.Over)) {
        fwdSensors.lcd1.printLineString("Geyser!", 2)
    } else {
        fwdSensors.lcd1.printLineString("--", 2)
    }
})
```

## Supported Targets

-   for PXT/microbit

## License

MIT
