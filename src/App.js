import { Image, ScrollControls, Scroll } from '@react-three/drei';
import { useThree, Canvas } from '@react-three/fiber';
import './App.css';

function Images (){
  const {width, height} = useThree((state) => state.viewport);
  return (
    <group>
      <Image url="./img1.jpg" scale={[4,height,1]} position={[-1,0,1]}/>
      <Image url="./img2.jpg" scale={3} position={[2,0,1]}/>
      <Image url="./img3.jpg" scale={[1,3.5,1]} position={[-2.3,-height,2]}/>
      <Image url="./img4.jpg" scale={[1.4,2,1]} position={[-1.3,0,3.2]}/>
    </group>
  )
}

function App() {
  return (
    //Canvasタグで3D空間を作成
    <Canvas>
      <ScrollControls pages={3} damping={1}>　{/* 1行コメント */}
        <Scroll>
          <Images />
        </Scroll>
        <Scroll html>
            <h1 style={{ position: "absolute", top: "60vh", left: "1.5em" }}>
              Be
            </h1>
            <h1 style={{ position: "absolute", top: "140vh", left: "40vw" }}>
              Creative
            </h1>
          </Scroll>
      </ScrollControls>
    </Canvas>
  )
}

export default App;
