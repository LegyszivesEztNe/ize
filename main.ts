input.onButtonPressed(Button.A, function () {
    basic.showString("Mocskos Fidesz!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 5))
    basic.pause(2000)
    basic.clearScreen()
})
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
	
})
