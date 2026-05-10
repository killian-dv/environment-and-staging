import { OrbitControls, Stage, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import {
  DirectionalLightHelper,
  type DirectionalLight,
  type Mesh,
} from "three";

export const Experience = () => {
  const cube = useRef<Mesh>(null);
  const directionalLight = useRef<DirectionalLight>(null!);

  useFrame((_state, delta) => {
    // const time = state.clock.getElapsedTime();
    if (cube.current) {
      cube.current.rotation.y += delta * 0.2;
      // cube.current.position.x = Math.sin(time) + 2;
    }
  });

  useHelper(directionalLight, DirectionalLightHelper, 1);

  // const { sunPosition } = useControls("sky", {
  //   sunPosition: {
  //     value: [1, 2, 3],
  //   },
  // });

  const { envMapIntensity } = useControls("environment map", {
    envMapIntensity: {
      value: 1,
      min: 0,
      max: 10,
    },
  });

  return (
    <>
      {/* <Environment
        files={[
          "./environmentMaps/2/px.jpg",
          "./environmentMaps/2/nx.jpg",
          "./environmentMaps/2/py.jpg",
          "./environmentMaps/2/ny.jpg",
          "./environmentMaps/2/pz.jpg",
          "./environmentMaps/2/nz.jpg",
        ]}
        environmentIntensity={envMapIntensity}
        background
      /> */}
      {/* <color attach="background" args={["ivory"]} /> */}
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <directionalLight
        ref={directionalLight}
        position={sunPosition}
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
      <ambientLight intensity={1.5} /> */}

      {/* <Sky sunPosition={sunPosition} /> */}

      {/* <BakeShadows /> */}
      {/* <SoftShadows size={25} samples={10} focus={0} /> */}
      {/* <AccumulativeShadows
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
      </AccumulativeShadows> */}
      {/* <ContactShadows
        position={[0, -0.99, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
        frames={1}
      /> */}

      <Stage
        shadows={{
          type: "contact",
          opacity: 0.5,
          blur: 3,
        }}
        environment="sunset"
        preset="portrait"
        intensity={envMapIntensity}
      >
        <mesh position-x={-2} castShadow>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

        <mesh ref={cube} position-x={2} scale={1.5} castShadow>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </Stage>

      {/* <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh> */}
    </>
  );
};
