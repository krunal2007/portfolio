import { Points, PointMaterial } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as random from 'maath/random';
import { useState, useRef, Suspense } from 'react';

function StarField(props) {
  const ref = useRef(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000), { radius: 1.3 })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} stride={3} positions={sphere} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function StarsCanvas() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        inset: 0,
        zIndex: -10,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ pointerEvents: 'none' }}
        events={undefined}
      >
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
    </div>
  );
}
