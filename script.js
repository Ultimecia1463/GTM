const URL = "https://teachablemachine.withgoogle.com/models/g0WhTEM-Q/";
//const URL = "https://teachablemachine.withgoogle.com/models/96Tk9csO0/";

let model, webcam, labelContainer, maxPredictions;

const redSquare = document.querySelector('.red-square');
let x = 50;
let y = 50;
let speedX = 0.3;
let speedY = 0.3;

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
    const maxProbabilityIndex = prediction.findIndex((item) => item.probability === Math.max(...prediction.map((item) => item.probability)));
    if (prediction[maxProbabilityIndex].probability > 0.8) {
        move(prediction, maxProbabilityIndex);
    }
    //console.log(prediction);
    //    const classPrediction =
    //        prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    // const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    // drawPose(pose);
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
        } else if (prediction[i].className == 'tdon') {
            // Move down
            y += speedY;
            if (y > 300) {
                y = 300;
            }
            redSquare.style.top = `${y}%`;
        }
    }
    // async function drawPose(pose) {
    //     const canvas = document.getElementById("canvas");
    //     const ctx = canvas.getContext("2d");
    //     if (webcam.canvas) {
    //         ctx.drawImage(webcam.canvas, 0, 0);
    //         // draw the keypoints and skeleton
    //         if (pose) {
    //             const minPartConfidence = 0.5;
    //             tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
    //             tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
    //         }
    //     }
    // }