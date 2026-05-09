import {
  AccumulativeShadows,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import { type DirectionalLight, type Mesh } from "three";

export const Experience = () => {
  const cube = useRef<Mesh>(null);
  const directionalLight = useRef<DirectionalLight>(null!);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (cube.current) {
      cube.current.rotation.y += delta * 0.2;
      cube.current.position.x = Math.sin(time) + 2;
    }
  });

  // useHelper(directionalLight, DirectionalLightHelper, 1);

  return (
    <>
      <color attach="background" args={["ivory"]} />
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        ref={directionalLight}
        position={[1, 2, 3]}
        intensity={4.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
      <ambientLight intensity={1.5} />

      {/* <BakeShadows /> */}
      {/* <SoftShadows size={25} samples={10} focus={0} /> */}
      <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        opacity={0.8}
        color="#316d39"
        frames={Infinity}
        temporal
        blend={100}
      >
        <RandomizedLight
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={3}
          position={[1, 2, 3]}
          bias={0.001}
        />
      </AccumulativeShadows>

      <mesh position-x={-2} castShadow>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh ref={cube} position-x={2} scale={1.5} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};
