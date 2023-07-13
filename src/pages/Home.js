import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Horizontal from "../components/Horizontal/Horizontal";
import datas from "../constants/tvSectiosData.json";
import Accordition from "../components/Accordition/Accordition";
import Footer from "../components/Footer/Footer";
import Tvsection from "../components/Tvsection/Tvsection";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Horizontal />
      {datas ? (
        datas.map((data, index) => {
          const left = index % 2 === 0 ? true : false;
          return <Tvsection data={data} position={left} key={index} />;
        })
      ) : (
        <>
          <div>
            <p>no datas</p>
          </div>
        </>
      )}

      <Accordition />
      <Horizontal />
      <Footer />
    </div>
  );
};

export default Home;
