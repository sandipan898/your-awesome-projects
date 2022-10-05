# OpenCV
import cv2

# OS
import os

# Load xml file for face detection
haar_cascade_face = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
haar_cascade_eyes = cv2.CascadeClassifier('haarcascade_eye.xml')


def _show_image(mat):
    while True:
        cv2.imshow("mat", mat)

        # Set exit key (esc to quit)
        if cv2.waitKey(1) == 27:
            break


def get_faces_folder(training_set_folder='imgs'):

    ''' Selects only the face of all the images '''
    images = []
    for found_path in os.listdir(training_set_folder):
        img = cv2.imread("imgs/" + found_path)

        # resize image (300x300)
        img = cv2.resize(img, (100, 100), interpolation=cv2.INTER_AREA)

        # analyze image (get all faces location in the photo)
        faces = _get_face_locations(img)
        print("Found {} face(s) in {} image".format(len(faces), found_path))

        # select part of image
        for (x, y, w, h) in faces:
            img = img[y:y+h, x:x+w]
            images.append(img)

    return images


def show_webcam(mirror=False, detect_eyes=False, eyesScaleFactor=1.6):
    cam = cv2.VideoCapture(0)

    while True:
        # Read webcam frame
        ret_val, img = cam.read()

        # Show image
        img = face_detection(img, width=10, detect_eyes=detect_eyes, eyesScaleFactor=eyesScaleFactor)

        if mirror:
            # Flip webcam image (mirror)
            img = cv2.flip(img, 1)

        # Show webcam output in a window
        cv2.imshow('What a nice face', img)

        # Set exit key (esc to quit)
        if cv2.waitKey(1) == 27:
            break

    cv2.destroyAllWindows()


def _get_face_locations(img, scaleFactor=1.1):
    # Convert to gray scale
    img_grey = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Detect faces
    faces = haar_cascade_face.detectMultiScale(img_grey, scaleFactor=scaleFactor, minNeighbors=5)

    return faces


def _get_eye_locations(img, scaleFactor=1.1):
    # Convert to grey scale
    img_grey = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Detect eyes
    eyes = haar_cascade_eyes.detectMultiScale(img, scaleFactor=scaleFactor, minNeighbors=5)

    return eyes


def face_detection(img, detect_eyes=False,scaleFactor=1.1, width=15, eyesScaleFactor=1.5):

    for (x, y, w, h) in _get_face_locations(img, scaleFactor):
        # Draw rects
        cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), width)

    if detect_eyes:
        # Detect also eyes
        for (x, y, w, h) in _get_eye_locations(img,eyesScaleFactor):
            cv2.rectangle(img, (x,y), (x+w, y+h), (255,255,0), width)

    # Return image with rects
    return img


def show_video(video_path, detect_eyes=False):
    cap = cv2.VideoCapture(video_path)

    # Check if camera opened successfully
    if not cap.isOpened():
        print("Error opening video stream or file")

    # Read until video is completed
    while cap.isOpened():
        # Capture frame-by-frame
        ret, frame = cap.read()

        if ret:
            frame = face_detection(frame, scaleFactor=1.5, width=10, detect_eyes=detect_eyes, eyesScaleFactor=1.3)

            # Display the resulting frame
            cv2.imshow(video_path, frame)

            # Set exit key (esc to quit)
            if cv2.waitKey(1) == 27:
                break

        # Break the loop
        else:
            break

    # When everything done, release the video capture object
    cap.release()

    # Closes all the frames
    cv2.destroyAllWindows()


def main():

    ''' Face Detection on Video '''
    show_video('gaben.mp4', detect_eyes=True)

    ''' Face Detection on Webcam '''
    # show_webcam(mirror=True, detect_eyes=True, eyesScaleFactor=1.3)

    ''' Get all faces in the photos '''
    # data = get_faces_folder()

if __name__ == "__main__":
    main()
