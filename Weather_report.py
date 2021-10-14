#Nitin Kumar

import requests

from datetime import datetime

api_key= '2178c09220461a1703d24f75ff050e08'
location = input("Enter the city Name: ")

complete_api_link= (('https://api.openweathermap.org/data/2.5/weather?q=')+location+"&appid="+api_key)
api_link = requests.get(complete_api_link)
api_data= api_link.json()

temp_city=((api_data['main']['temp'])-273)
weather_des = api_data['weather'][0]['description']
hmdt= api_data['main']['humidity']
wind_spd= api_data['wind']['speed']
date_time= datetime.now().strftime("%d %b %Y | %I %M %S %p")

print("----------------------------------------------------------------")
print("Weather Stats For = {} || {}".format(location.upper(),date_time))
print("----------------------------------------------------------------")

print ("Current Temperature : {:.2f} deg C".format(temp_city))
print ("Weather Description : ",weather_des)
print ("Curerent Humidity   : ",hmdt,'%')
print ("Current Wind Speed  : ",wind_spd,'kmph')
print("----------------------------------------------------------------")

f=open("D:/Weather Report.txt",'a')
f.write("\n----------------------------------------------------------")
f.write("\nCity name: {}".format(location.upper()))
f.write("\nCurrent Temperature : {:.2f} deg C".format(temp_city))
f.write("\nCurerent Humidity   : %d" % hmdt)
f.write("\nCurrent Wind Speed  : %d kmph"% wind_spd)
f.close()
