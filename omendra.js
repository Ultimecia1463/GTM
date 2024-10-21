// ... (rest of your existing script.js code)

// Assuming you have a variable called 'prediction' that holds the model's prediction
// and 'prediction.class' contains the gesture class (e.g., "fist", "palm")
// and 'prediction.probability' contains the confidence score (0 to 1)


function moveSquare(prediction) {
  const confidenceThreshold = 0.7; // Adjust as needed

  if (prediction.probability > confidenceThreshold) {
    // Move the square based on the predicted gesture
    if (prediction.class === 'fist') {
      // Move right
      // ... your code to move the square right ...
    } else if (prediction.class === 'palm') {
      // Move left
      // ... your code to move the square left ...
    } else if (prediction.class === 'thumbsUp') {
      // Move up
      // ... your code to move the square up ...
    } else if (prediction.class === 'thumbsDown') {
      // Move down
      // ... your code to move the square down ...
    }
  } else {
    // Ignore the prediction if confidence is below the threshold
    console.log("Prediction confidence too low, ignoring."); 
  }
}

// ... (rest of your script.js code) 
