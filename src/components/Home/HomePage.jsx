import React from "react";
import "./homePage.css";

import sushi1 from "/src/assets/suhsi1.png";
import leaf1 from "/src/assets/banana-leaf1.png";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col xxs:pt-20 items-center font-Spartan text-orange h-[calc(100%-184px)] relative ">
        <div className="flex flex-col items-center absolute z-10 lg:w-full">
          <p className="font-semibold text-[34px] lg:text-[44px] outlined-text single-line-animation">
            <span className="animated-text">
              Welcome! Bienvenida! Willkommen! 欢迎 Benvenuto! ようこそ Hoş
              Geldiniz Welcome! Bienvenida! Willkommen! 欢迎 Benvenuto! ようこそ
              Hoş Geldiniz
            </span>
          </p>
          <div>
            <h1 className="font-bold xxs:text-center xxs:text-[40px] lg:text-[60px] xxs:mt-4 xxs:leading-none">
              Fresh Sashimi Tuna <br /> and Healthy Sushi
            </h1>
            <p className="xxs:text-center mx-4 leading-tight mt-4 lg:text-[26px]">
              Enjoy and it’s gonna be the best Sashimi <br /> and Sushi you ever
              taste!
            </p>
          </div>
          <div className="mt-8">
            <button className="button-shadow cursor-pointer px-10 py-2 rounded-[20px] gradient-button text-[18px] text-white ">
              Let's eat!
            </button>
          </div>
        </div>
        <div className="absolute z-0 xxs:bottom-0 xxs:right-[-50px] lg:right-[20px]">
          <img className="w-[200px] lg:w-[350px]" src={sushi1} alt="" />
        </div>
        <div className="absolute z-0 xxs:bottom-0 xxs:left-[-50px]">
          <img
            className="w-[250px] lg:w-[350px] transform scale-x-[-1]"
            src={leaf1}
            alt="leaf"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
