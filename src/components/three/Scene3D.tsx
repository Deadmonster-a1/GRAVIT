import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Preload, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, SMAA, Noise, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
import { useScrollStore } from '../../store/useScrollStore';
import Galaxy from '../Galaxy';

function CameraRig() {
  const { camera, pointer } = useThree();
  const progress = useScrollStore((s) => s.progress);
  
  // Define a camera path that moves deep into the scene on scroll and reacts to mouse
  useFrame(() => {
    // 1. Deep Space Flight (Scroll)
    // The camera starts at z=6 and flies deep (z=-20) as progress goes 0 -> 1
    const targetZ = 6 - progress * 26; 
    const targetYScroll = -progress * 2;
    
    // 2. Cursor Parallax (Pointer)
    // Add subtle panning based on mouse pointer (-1 to 1)
    const pointerX = pointer.x * 0.5;
    const pointerY = pointer.y * 0.5;
    
    // Smoothly interpolate position
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointerX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetYScroll + pointerY, 0.05);
    
    // Look ahead into the depth, slightly offset by pointer
    const targetLookAt = new THREE.Vector3(pointerX * 0.2, targetYScroll + pointerY * 0.2, targetZ - 5);
    
    const currentLook = new THREE.Vector3();
    camera.getWorldDirection(currentLook);
    
    // We manually interpolate rotation using lookAt for smooth dampening
    // To do it perfectly, we could use quaternions, but lookAt every frame with a lerped position works well
    camera.lookAt(targetLookAt);
  });
  
  return null;
}

function FloatingShapes() {
  const progress = useScrollStore((s) => s.progress);
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      // Group rotates and floats upward as we scroll down
      const targetRotationY = progress * Math.PI * 2;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      
      const targetPositionY = progress * 5;
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetPositionY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[-3, 1, -2]}>
        <mesh castShadow receiveShadow>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#2F3336" wireframe={true} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1} position={[3, -2, -1]}>
        <mesh castShadow receiveShadow>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#ffffff" wireframe={true} />
        </mesh>
      </Float>
      
      <Float speed={3} rotationIntensity={0.5} floatIntensity={3} position={[-2, -5, -4]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#2F3336" metalness={0.8} roughness={0.2} wireframe={true} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#000000]">
      <div className="absolute inset-0 z-0">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.5}
          twinkleIntensity={0}
          repulsionStrength={0.6}
          starSpeed={0.4}
          saturation={0}
          glowIntensity={0.6}
          hueShift={0}
          rotationSpeed={0.03}
          autoCenterRepulsion={0}
          speed={0.3}
          transparent={false}
        />
      </div>
      <Canvas
        className="absolute inset-0 z-10"
        camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, 6] }}
        gl={{
          antialias: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          outputColorSpace: THREE.SRGBColorSpace,
          powerPreference: 'high-performance',
          alpha: true
        }}
        dpr={[1, 2]}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />

        <FloatingShapes />
        <CameraRig />

        <EffectComposer autoClear={false} disableNormalPass multisampling={0}>
          <SMAA />
          <Bloom
            luminanceThreshold={0.8}
            luminanceSmoothing={0.9}
            intensity={1.5}
            mipmapBlur
          />
          <ChromaticAberration 
            offset={new THREE.Vector2(0.002, 0.002)}
            radialModulation={true}
          />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>

        <Preload all />
      </Canvas>
    </div>
  );
}
