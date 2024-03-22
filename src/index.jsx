import './style.css'
import * as handTrack from 'handtrackjs'

import { createRoot } from 'react-dom/client'
import App from './App'

const canvas = document.getElementById("canvas");
const video = document.getElementById("myvideo");
const context = canvas.getContext("2d");

let model = null;

const modelParams = {
    flipHorizontal: true, // flip e.g for video
    maxNumBoxes: 20, // maximum number of boxes to detect
    iouThreshold: 0.5, // ioU threshold for non-max suppression
    scoreThreshold: 0.6, // confidence threshold for predictions.
  };
  
function startVideo() {
    handTrack.startVideo(video).then(function (status) {
        console.log("video started", status);
        if (status) {
            console.log("Video started. Now tracking");
            // isVideo = true;
            runDetection();
        } else {
            console.log("Please enable video");
        }
    });
}

function runDetection() {
    model.detect(video).then((predictions) => {
        console.log("Predictions: ", predictions);
        model.renderPredictions(predictions, canvas, context, video);
        requestAnimationFrame(runDetection);
    });
}

// Load the model.
handTrack.load(modelParams).then((lmodel) => {
    model = lmodel;
    startVideo()
});

// createRoot(document.querySelector('#root')).render(<App />)