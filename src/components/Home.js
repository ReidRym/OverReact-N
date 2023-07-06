import React from "react";
import bgImage from "../video/space4.mp4";
function Home() {

  return (
    <div className="Home">
      <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4" />

      </video>
      <div className=" home text-wrapper">
<h1>Resume with back ground video</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nisi voluptatem. Aspernatur eius in quibusdam, expedita ab, ratione at deserunt dicta cupiditate impedit amet facere, fugiat inventore possimus corporis eaque!</p>
 </div>
</div>
  );
}

export default Home;
