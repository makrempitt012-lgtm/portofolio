"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";

function ParticleGroup({ count, size, color, speedMultiplier }) {
  const ref = useRef();
  const scrollY = useRef(0);

  // Generasi partikel acak native
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 16;     // Sumbu X (Lebar)
      pos[i + 1] = (Math.random() - 0.5) * 30; // Sumbu Y (Tinggi)
      pos[i + 2] = (Math.random() - 0.5) * 10; // Sumbu Z (Kedalaman)
    }
    return pos;
  });

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    
    // Set initial offset on mount
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Kombinasikan waktu alami (elapsedTime) dengan nilai scroll interaktif
      const timeOffset = state.clock.getElapsedTime() / (20 * speedMultiplier);
      const scrollYOffset = scrollY.current * 0.0005 * speedMultiplier;
      
      // Rotasi Sumbu Y murni
      ref.current.rotation.y = timeOffset + scrollYOffset;

      // Kunci koordinat posisi dan kemiringan X/Z agar bidang partikel tetap sejajar dengan layar
      ref.current.position.set(0, 0, 0);
      ref.current.rotation.x = 0;
      ref.current.rotation.z = 0;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points frustumCulled={false} positions={positions} ref={ref} stride={3}>
        <PointMaterial
          color={color}
          depthWrite={false}
          opacity={0.8}
          size={size}
          sizeAttenuation={true}
          transparent
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712] select-none">
      <Canvas gl={{ antialias: false, alpha: true }} camera={{ position: [0, 0, 3] }}>
        {/* Layer Partikel Kecil */}
        <ParticleGroup color="#818cf8" count={1500} size={0.015} speedMultiplier={1} />
        {/* Layer Partikel Sedang */}
        <ParticleGroup color="#c084fc" count={500} size={0.035} speedMultiplier={1.6} />
      </Canvas>
    </div>
  );
}
