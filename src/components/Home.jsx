import React from 'react';
import vg from "../assets/image.jpeg";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Techystar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems
            your face
            everyday. We are leading tech company whose aim is to
            increase the
            problem-solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3">
        <div>
          <h1>Who we are</h1>
          <p>
            We are your one and only solution to the tech problems
            your face
            everyday. We are leading tech company whose aim is to
            increase the
            problem-solving ability in children.
            We are your one and only solution to the tech problems
            your face
            everyday. We are leading tech company whose aim is to
            increase the
            problem-solving ability in children.
            We are your one and only solution to the tech problems
            your face
            everyday. We are leading tech company whose aim is to
            increase the
            problem-solving ability in children.
          </p>
        </div>
      </div>

      <div className='home4'>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay: "0.3s",
          }}>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>

          <div style={{
            animationDelay: "0.5s",
          }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>

          <div style={{
            animationDelay: "0.7s",
          }}>
            <AiFillYoutube />
            <p>Youtube</p>
          </div>

          <div style={{
            animationDelay: "1s",
          }}>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Home;
