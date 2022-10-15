# Import Library for GPIO
import RPi.GPIO as GPIO
# Import time library for sleep
import time

GPIO.setmode(GPIO.BCM)

# Setup GPIO 17 pin to input and pull down the voltage
GPIO.setup(17, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)


while True:
# Checks if 3.3V has been connected to the pin 11 or GPIO 17
    if GPIO.input(17):
        print("1")
    else:
        print("0")
    time.sleep(1)