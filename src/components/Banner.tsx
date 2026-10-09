import React from "react";
import Header from "./Header";
import logo from "../assets/image/logo.png";
import bgimage from "../assets/image/banner.jpeg";
import Button from "./icons/Button";
import MyList from "./icons/mylist";
function Banner() {
  return (
    <div
      className="text-black h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* <Header /> */}
      <div className=" h-full pt-80">
        <img src={logo} alt="logo" className="h-26 w-auto object-contain" />
        <h1>hi there</h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta libero
          debitis quaerat neque sint autem nostrum aliquid, ex commodi deserunt
          culpa reiciendis modi voluptatum consequuntur temporibus, omnis saepe
          eius animi.
        </h1>
        <div className="flex gap-16 ml-8">
          <Button />
          <MyList />
        </div>
      </div>
    </div>
  );
}

export default Banner;
