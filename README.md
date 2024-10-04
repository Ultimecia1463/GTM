# Gesture Detection Using Teachable Machine

This project implements gesture detection using a model trained with Google's Teachable Machine. The application detects hand gestures (such as fist, palm, and directional movements) via webcam input and allows interaction with an on-screen element (a red square), which moves based on the detected gestures.

## Features
- Real-time gesture detection using a pre-trained model from Teachable Machine.
- Webcam-based interface to detect hand gestures.
- Moves an on-screen red square based on detected gestures:
  - **Fist**: Move right.
  - **Palm**: Move left.
  - **Thumb up**: Move up.
  - **Thumb down**: Move down.
- Simple and intuitive UI with webcam feed display.

## Technologies Used
- **Teachable Machine** by Google
- **TensorFlow.js** for pose estimation and gesture recognition
- **HTML5 Canvas** for webcam feed and rendering keypoints/skeleton
- **JavaScript** for real-time webcam control and DOM manipulation

## How It Works
1. The model is loaded from Teachable Machine and integrated using TensorFlow.js.
2. The webcam is initialized, and the feed is displayed inside a canvas element.
3. Hand gestures are detected in real-time, and the position of a red square on the screen is updated based on the detected gestures.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/gesture-detection.git
2. Open `index.html` in your preferred browser.

No additional installation steps are needed, as the project uses a CDN for TensorFlow.js and Teachable Machine.

## Live Demo
[View the live demo here](https://jesturedetection.netlify.app)

## Usage
- Open the app.
- Ensure you allow access to the webcam when prompted.
- Use hand gestures (fist, palm, thumb up, thumb down) to move the red square on the screen.

<!-- ## Project Preview
![Gesture Detection Preview](https://jesturedetection.netlify.app/screenshot.png) Replace with actual screenshot or preview link if available -->

## Future Enhancements
- Add more gestures for additional functionality.
- Improve gesture recognition accuracy.
- Add sound or other feedback mechanisms for detected gestures.
