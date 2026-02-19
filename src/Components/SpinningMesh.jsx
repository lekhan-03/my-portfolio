import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const SpinningMesh = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      
      {/* 3D Shape Geometry (Box) */}
      <boxGeometry args={[1, 1, 1]} />
      
      {/* Material (Color/Texture) */}
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default SpinningMesh;