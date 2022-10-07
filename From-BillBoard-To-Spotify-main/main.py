from bs4 import BeautifulSoup
import requests
import spotipy
from spotipy.oauth2 import SpotifyOAuth
import os
from dotenv import load_dotenv

#####################################  Environment Variables  ###############################################
load_dotenv()
CL_ID = os.getenv('CLIENT_ID')
CL_SECRET = os.getenv('CLIENT_SECRET')

##################################  Scrapping the billboard hot-100  ######################################
base_url = "https://www.billboard.com/charts/hot-100"  #  To append: "/1995-07-08"

user_in = input("Enter date (YYYY-MM-DD): ")

final_url = base_url + '/' + user_in

response = requests.get(url=final_url)

response.raise_for_status()

soup = BeautifulSoup(response.text, "html.parser")

top_song = soup.find(name="h3", class_="c-title a-no-trucate a-font-primary-bold-s u-letter-spacing-0021 u-font-size-23@tablet lrv-u-font-size-16 u-line-height-125 u-line-height-normal@mobile-max a-truncate-ellipsis u-max-width-245 u-max-width-230@tablet-only u-letter-spacing-0028@tablet")
song_names = soup.find_all(name="h3", class_="c-title a-no-trucate a-font-primary-bold-s u-letter-spacing-0021 lrv-u-font-size-18@tablet lrv-u-font-size-16 u-line-height-125 u-line-height-normal@mobile-max a-truncate-ellipsis u-max-width-330 u-max-width-230@tablet-only")

song_list = [top_song.getText().strip()]

for i in song_names:
    song_list.append(i.getText().strip())

###################################  Spotify Authorisation  #################################################
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(scope="playlist-modify-private", client_id=CL_ID, client_secret=CL_SECRET, redirect_uri="http://example.com", cache_path="./token.txt"))

# To access user information, we have to use OAuth authorization instead of Client Credentials.

###################################  Search for billboard hot-100 on Spotify  ################################

# for song in search_res:
#     song["album"]["release_date"].split("-")[0]  to match year, but not a good idea as old songs can also be on the billboard.
#     song["name"] for name.

song_uri_list = []

for h100 in song_list:
    res = sp.search(q=h100, limit=5, type="track")
    search_res = res['tracks']['items']

    i = 0
    t_flag = False
    for song in search_res:
        if(h100.lower() in song['name'].lower() and not t_flag):
            song_uri_list.append(song["uri"])
            t_flag = True
        else:
            i += 1

    if(i == 5):
        print(h100, "Not found.")

print(len(song_uri_list))

#####################################  Create and add a new private playlist  #############################
my_playlist = sp.user_playlist_create(user=sp.current_user()['id'], name=f"{user_in} Billboard 100", public=False)
sp.playlist_add_items(playlist_id=my_playlist['id'], items=song_uri_list)
