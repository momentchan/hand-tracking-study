import { OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import Utilities from "./r3f-gist/utility/Utilities";
import * as handTrack from 'handtrackjs'

const video = document.getElementById("myvideo");

let model = null;


function startVideo() {
    handTrack.startVideo(video).then(function (status) {
      console.log("video started", status);
      if (status) {
        console.log("Video started. Now tracking");
        // isVideo = true;
        // runDetection();
      } else {
        console.log("Please enable video");
      }
    });
  }

// Load the model.
handTrack.load().then((lmodel) => {
    // detect objects in the image.
    model = lmodel;
    console.log(model);
    startVideo()
    // updateNote.innerText = "Loaded Model!";
    // runDetectionImage(handimg);
    // trackButton.disabled = false;
    // nextImageButton.disabled = false;
  });
  

export default function App() {
    return <>
        <Canvas
            shadows
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [4, 2, 6]
            }}
            gl={{ preserveDrawingBuffer: true }}
        >

            <OrbitControls makeDefault />

            <mesh>
                <torusGeometry />
                <meshStandardMaterial />
            </mesh>

            <Utilities />

        </Canvas>
    </>
}