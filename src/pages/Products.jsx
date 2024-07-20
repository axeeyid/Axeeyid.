import React from "react";
import putih from "../asset/PUTIH.svg";
import biru from "../asset/BIRU.svg";
import ijo from "../asset/IJO.svg";

const Products = () => {
  return (
    <div className="bg-kedua  font-primary">
      <div className="py-32 px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-white ">
            Selamat datang di AxeeyBootcamp
          </h2>
          <p className="mb-5  text-ketiga sm:text-xl dark:text-gray-400">
            Choose your contract
          </p>
          <div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center font-bold text-ketiga">
                <h3 className="mb-4 text-2xl font-semibold">BEGINER</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Best option for PEMULA.
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <div className="flex justify-center gap-5 py-">
                    <img
                      src={putih}
                      alt="contoh"
                      className="w-[800px] h-[280px] rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-5 py-1">
                  <a
                    href="/search"
                    className="text-primary font-semibold text-white bg-ketiga py-3 px-8
     rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    id="Service"
                  >
                    benefit
                  </a>
                </div>
              </div>
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center font-bold text-ketiga">
                <h3 className="mb-4 text-2xl font-semibold">STUDENT</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Best option for purchase.
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <div className="flex justify-center gap-5 py-">
                    <img
                      src={biru}
                      alt="contoh"
                      className="w-[800px] h-[280px] rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-5 py-1">
                  <a
                    href="/search"
                    className="text-primary font-semibold text-white bg-ketiga py-3 px-8
     rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    id="Service"
                  >
                    benefit
                  </a>
                </div>
              </div>
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center font-bold text-ketiga">
                <h3 className="mb-4 text-2xl font-semibold">BOOTCAMP</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Best option for recomended.
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <div className="flex justify-center gap-5 py-">
                    <img
                      src={ijo}
                      alt="contoh"
                      className="w-[800px] h-[280px] rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-5 py-1">
                  <a
                    href="/search"
                    className="text-primary font-semibold text-white bg-ketiga py-3 px-8
     rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    id="Service"
                  >
                    benefit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
