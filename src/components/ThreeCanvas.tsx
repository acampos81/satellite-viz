import { Canvas } from "@react-three/fiber";

export default function ThreeCanvas() {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <sphereGeometry />
          <meshBasicMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
