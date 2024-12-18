import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
/*<div className="absolute top-28 left-0 right-0 z-10">HI</div>*/

const Home = () => {
  return (
    <section className="w-full h-screen relative ">
      <Canvas
        className="w-full h-full relative bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}></Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
