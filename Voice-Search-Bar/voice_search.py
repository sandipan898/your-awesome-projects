import tkinter as tk
from tkinter import ttk
import webbrowser
import speech_recognition as sr
from pygame import mixer

root = tk.Tk()
root.title("Search Bar")

# icon_img = tk.PhotoImage(file="mic_icon.ico")
# root.tk.call('wm', 'iconphoto', root._w, icon_img)

root.iconbitmap('mic_icon.ico')
style = ttk.Style()
style.theme_use('winnative')

label1 = tk.Label(root, text = "Query")
label1.grid(row = 0, column = 0)

entry1 = tk.Entry(root, width = 40)
entry1.grid(row = 0, column = 1, columnspan = 4)

btn_e = tk.StringVar()

def callback():
    if btn_e.get() == 'google' and entry1.get() != '':
        webbrowser.open('http://google.com/search?q=' + entry1.get())
    elif btn_e.get() == 'duck' and entry1.get() != '':
        webbrowser.open('http://duckduckgo.com/search?q=' + entry1.get())
    elif btn_e.get() == 'amz' and entry1.get() != '':
        webbrowser.open('http://amazon.com/s/?url=search-alias%3Dstripbooks&field-keywords=' + entry1.get())
    elif btn_e.get() == 'ytb' and entry1.get() != '':
        webbrowser.open('http://youtube.com/results?search_query=' + entry1.get())
    else:
        pass


def get(event):
    if btn_e.get() == 'google':
        webbrowser.open('http://google.com/search?q=' + entry1.get())
    elif btn_e.get() == 'duck':
        webbrowser.open('http://duckduckgo.com/search?q=' + entry1.get())
    elif btn_e.get() == 'amz':
        webbrowser.open('http://amazon.com/s/?url=search-alias%3Dstripbooks&field-keywords=' + entry1.get())
    elif btn_e.get() == 'ytb':
        webbrowser.open('http://youtube.com/results?search_query=' + entry1.get())
    else:
        pass


def buttonClick():
    mixer.init()

    r = sr.Recognizer()
    r.pause_threshold = 0.7
    r.energy_threshold = 200

    with sr.Microphone() as source:

        audio = r.listen(source, timeout = 5)
        message = str(r.recognize_google(audio))
        entry1.focus()
        entry1.delete(0, END)
        entry1.insert(0, message)
        try:
            if btn_e.get() == 'google':
                webbrowser.open('http://google.com/search?q=' + entry1.get())
            elif btn_e.get() == 'duck':
                webbrowser.open('http://duckduckgo.com/search?q=' + entry1.get())
            elif btn_e.get() == 'amz':
                webbrowser.open('http://amazon.com/s/?url=search-alias%3Dstripbooks&field-keywords=' + entry1.get())
            elif btn_e.get() == 'ytb':
                webbrowser.open('http://youtube.com/results?search_query=' + entry1.get())
            else:
                pass
        except sr.UnknownValueError:
            print("Could not understand audio...")
        except sr.RequestError:
            print("Request Error.")
        except:
            print("Failed to complete the work...")


entry1.bind('<Return>', get)

MyBtn1 = tk.Button(root, text = "Search", width = 10, bd = 1, command = callback)
MyBtn1.grid(row = 0, column = 6)

MyBtn2 = tk.Radiobutton(root, text = "Google", value = 'google', variable = btn_e)
MyBtn2.grid(row = 1, column = 1)

MyBtn3 = tk.Radiobutton(root, text = "Duck", value = 'duck', variable = btn_e)
MyBtn3.grid(row = 1, column = 2)

MyBtn4 = tk.Radiobutton(root, text = "Ytb", value = 'ytb', variable = btn_e)
MyBtn4.grid(row = 1, column = 3, sticky = "w")

MyBtn5 = tk.Radiobutton(root, text = "Amz", value = 'amz', variable = btn_e)
MyBtn5.grid(row = 1, column = 4)

MyBtn6 = tk.Button(root, command = buttonClick, text = "VS", bd = 1, overrelief = 'groove', relief = 'sunken')
MyBtn6.grid(row = 0, column = 5)

MyBtn7 = tk.Button(root, command = root.quit, text = "Close", bd = 1)
MyBtn7.grid(row = 1, column = 5, columnspan = 2)

entry1.focus()
root.wm_attributes('-topmost', 1)

btn_e.set('google')

root.mainloop()
