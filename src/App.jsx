import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber'
import Utilities from "./r3f-gist/utility/Utilities";
import HandTrack from "./r3f-gist/sensor/HandTrack";
import { useRef } from "react";
import TrackUser from "./r3f-gist/sensor/TrackUser";

export default function App() {
    const tracker = useRef()

    return <>
        <HandTrack ref={tracker} />

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

            <TrackUser tracker={tracker} />
        </Canvas>
    </>
}