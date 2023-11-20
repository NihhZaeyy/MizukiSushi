import React from "react";
import "./homePage.css";

import sushi1 from "/src/assets/suhsi1.png";
import leaf1 from "/src/assets/banana-leaf1.png";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col xxs:pt-10 items-center font-Spartan text-orange h-[calc(100%-184px)] relative">
        <div className="flex flex-col items-center absolute z-10">
          <p className="font-semibold text-[34px] outlined-text single-line-animation">
            <span class="animated-text">
              Welcome! Bienvenida! Willkommen! 欢迎 Benvenuto! ようこそ
            </span>
          </p>
          <div>
            <h1 className="font-bold xxs:text-center xxs:text-[30px] xxs:mt-4 xxs:leading-none">
              Fresh Sashimi Tuna <br /> and Healthy Sushi
            </h1>
            <p className="xxs:text-center mx-4 leading-tight mt-4">
              Enjoy and it’s gonna be the best Sashimi <br /> and Sushi you ever
              taste!
            </p>
          </div>
          <div className="mt-8">
            <button className="button-shadow cursor-pointer px-10 py-2 rounded-[20px] gradient-button text-[18px] text-white">
              Let's eat!
            </button>
          </div>
        </div>
        <div className="absolute z-0 xxs:bottom-[-40px] xxs:right-[-90px]">
          <img className="w-[200px]" src={sushi1} alt="" />
        </div>
        <div className="absolute z-0 xxs:bottom-0 xxs:left-[-50px]">
          <img
            className="w-[250px] transform scale-x-[-1]"
            src={leaf1}
            alt="leaf"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
