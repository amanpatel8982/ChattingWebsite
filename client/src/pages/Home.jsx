import React from 'react';
import chatVideo from "../assets/front.mp4";

const Home = () => {
  return (
    <>
      <div>

        <div className="flex justify-center mb-10 items-center p-1 min-h-screen bg-base-200">
         <video
           src={chatVideo}
           controls
           autoPlay
           muted
           loop
           className="w-300  max-w-3xl  rounded-xl shadow-lg"
         ></video>
       </div>

      </div>
    </>
  );
}

export default Home;
