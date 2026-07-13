import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import MackbookModel16 from "../Models/Macbook-16";
import MackbookModel14 from "../Models/Macbook-14";

const ANIMATION_DURATION = 1.5;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group: THREE.Group | null, opacity: number) => {
  if (!group) return;

  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.transparent = true;
      gsap.to(child.material, {
        opacity,
        duration: ANIMATION_DURATION,
      });
    }
  });
};

const moveGroup = (group: THREE.Group | null, x: number) => {
  if (!group) return;

  gsap.to(group.position, {
    x,
    duration: ANIMATION_DURATION,
  });
};

const ModelSwitcher = ({
  scale,
  isMobile,
}: {
  scale: number;
  isMobile: boolean;
}) => {
  const smallMacbookRef = useRef<THREE.Group>(null);
  const largeMacbookRef = useRef<THREE.Group>(null);

  const showLargeMacbook = scale === 0.08 || scale === 0.05;

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacbookRef.current, 0);

      fadeMeshes(smallMacbookRef.current, 0);
      fadeMeshes(largeMacbookRef.current, 1);
    } else {
      moveGroup(smallMacbookRef.current, 0);
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacbookRef.current, 1);
      fadeMeshes(largeMacbookRef.current, 0);
    }
  }, [scale]);

  const controlConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity] as [number, number],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlConfig}>
        <group ref={largeMacbookRef}>
          <MackbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlConfig}>
        <group ref={smallMacbookRef}>
          <MackbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
