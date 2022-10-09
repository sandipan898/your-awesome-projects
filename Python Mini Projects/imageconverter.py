from PIL import Image
import os


def negative(image):
    neagtive = image.convert("L")
    neagtive.show()


def png_to_jpg(image):
    rgb = image.convert("RGB")
    rgb.show()
    rgb.save("png_to_jpg.jpg")
    


def convert(image):
    image = Image.open(img)
    if choice == 1:
        negative(image)
    elif choice == 2:
        png_to_jpg(image)
    else:
        print("Invalid choice!!")


try:
    img = input("Enter the location of the image to be converted: \n")
    

    if "." not in img:
        img += ".png"

    elif img[-4:] != ".png":
        print("Please enter a .png file")

    else:
        img = img
    image = Image.open(img)
    print("Image Conversion Menu")
    print("1. Negative form\n2. PNG to JPG\n")
    choice = int(input("Enter your choice: "))
    convert(image)
except:
    print("Image not found")
