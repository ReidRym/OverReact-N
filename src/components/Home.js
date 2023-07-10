import React from "react";
import bgImage from "../video/space4.mp4";
function Home() {

  return (
    <div className="Home">
      <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4" />

      </video>
      <div className=" home text-wrapper">
<h1>Bring Your Vision to Life with Ryan Reid</h1>
<p>Are you looking for a full stack web developer who is passionate about creating innovative and engaging web applications? Look no further than Ryan Reid! With a strong background in web development, Ryan has the skills and experience to bring your project to life. From developing custom websites to creating dynamic user interfaces, Ryan has the expertise to make your vision a reality. Take a look at Ryan's portfolio and see what he can do for you!</p>
 </div>
</div>
  );
}

export default Home;
