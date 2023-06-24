input.onButtonPressed(Button.A, function () {
    game.addScore(1)
    power.fullPowerOn(FullPowerSource.A)
    WaitUntilBlocks.waitUntilSoundLevelAbove(80)
})
input.onButtonPressed(Button.AB, function () {
    serial.redirect(
    SerialPin.USB_TX,
    SerialPin.USB_RX,
    BaudRate.BaudRate115200
    )
})
input.onButtonPressed(Button.B, function () {
    WaitUntilBlocks.waitUntilButtonPressed(Button.A)
})
let strip = ""
game.startCountdown(10000)
pins.servoSetPulse(AnalogPin.P0, 1500)
let _4digit = grove.createDisplay(DigitalPin.P0, DigitalPin.P0)
let colorbit_51bit = colorbit.initColorBit(DigitalPin.P5, BitColorMode.RGB_RGB)
pins.i2cWriteNumber(
1,
10,
NumberFormat.Int8LE,
strip.includes("colorbit")
)
basic.forever(function () {
    joyfrog.joyfrog_init()
})
