const URL = "https://teachablemachine.withgoogle.com/models/g0WhTEM-Q/";

let model, webcam, labelContainer, maxPredictions;

const redSquare = document.querySelector('.red-square');
let x = 50;
let y = 50;
let speedX = 0.1;
let speedY = 0.1;

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();


    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop() {
    webcam.update(); // update the webcam frame
    //await predict();
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        if (prediction[i].probability>0.9) {
            move(prediction,i);
        }
    //    const classPrediction =
    //        prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    }
    window.requestAnimationFrame(loop);
}

    // async function predict() {
    //     const prediction = await model.predict(webcam.canvas);
    //     for (let i = 0; i < maxPredictions; i++) {
    //         const classPrediction =
    //             prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    //     }
    // }
    async function move(prediction, i) {
        if (prediction[i].className == 'fist') {
            // Move right
            x += speedX;
            if (x > 300) {
                x = 300;
            }
            redSquare.style.left = `${x}%`;
        } else if (prediction[i].className == 'palm') {
            // Move left
            x -= speedX;
            if (x < 0) {
                x = 0;
            }
            redSquare.style.left = `${x}%`;
        } else if (prediction[i].className == 'tup') {
            // Move up
            y -= speedY;
            if (y < 0) {
                y = 0;
            }
            redSquare.style.top = `${y}%`;
        } else if (prediction[i].className == 'tdown') {
            // Move down
            y += speedY;
            if (y > 300) {
                y = 300;
            }
            redSquare.style.top = `${y}%`;
        }
    }
