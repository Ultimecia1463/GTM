const URL = "https://teachablemachine.withgoogle.com/models/Szfr5_cWb/";

let model, webcam, labelContainer, maxPredictions;
let isWebcamInitialized = false; // Add a flag to track initialization

async function init() {
    if (isWebcamInitialized) return; // Prevent multiple initializations

    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // Load the model and metadata
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    try {
        // Setup webcam
        const flip = true;
        webcam = new tmImage.Webcam(200, 200, flip);
        await webcam.setup();  // Request permission and setup the webcam
        await webcam.play();   // Play the webcam feed
        window.requestAnimationFrame(loop);

        // Append webcam canvas and initialize label container
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) {
            labelContainer.appendChild(document.createElement("div"));
        }

        // Set the flag to true after successful initialization
        isWebcamInitialized = true;
    } catch (error) {
        console.error("Error setting up webcam:", error);
    }
}



async function loop() {
    if (webcam.canvas) {
        webcam.update(); // Update the webcam frame
        await predict();  // Run predictions
    } else {
        console.error("Webcam canvas is not initialized");
    }
    window.requestAnimationFrame(loop);
}

async function predict() {
    if (webcam.canvas) {
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction = 
                `${prediction[i].className}: ${prediction[i].probability.toFixed(2)}`;
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }
    } else {
        console.error("Webcam canvas is not available for prediction.");
    }
}


// Predict and display results
async function predict() {
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            `${prediction[i].className}: ${prediction[i].probability.toFixed(2)}`;
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
}
