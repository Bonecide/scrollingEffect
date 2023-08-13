import { CameraControls, Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1}/>
      <Environment preset="sunset"/>
      <OrbitControls enableZoom={false}/>
        <ScrollControls pages={3} damping={1.5}>
          <Overlay/>
        <Office/>
        </ScrollControls>
    </>
  );
};
