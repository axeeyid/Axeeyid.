import React from "react";
import saly from "../asset/Saly-10.svg";
import IMG1 from "../asset/IMG1.jpg";
import IMG2 from "../asset/IMG2.jpg";
import IMG3 from "../asset/IMG3.jpg";
import IMG4 from "../asset/IMG4.jpg";
import IMG5 from "../asset/IMG5.jpg";
import IMG6 from "../asset/IMG6.jpg";
import IMG7 from "../asset/IMG7.jpg";
import IMG8 from "../asset/IMG8.jpg";
import home from "../asset/MOBILE PHONE.svg";

const Home = () => {
  return (
    <div>
      <div>
        <div className="/" id="HomePage">
          <div className="w-full bg-kedua">
            <div className="header min-h-screen flex ">
              <div className="py-3 px-20">
                <div className="container mx-auto px-4">
                  <div className="header-box flex lg:flex-row flex-col items-center gap-10">
                    <div className="box lg:w-1/2 lg:order-1 order-2 lg:text-left text-center">
                      <h1 className="text-xl font-extrabold font-primary text-white">
                        Hello Buds
                        <span className="block font-extrabold text-ketiga text-4xl">
                          I am{" "}
                          <span className="text-white font-extrabold font-primary">
                            Axeey Student
                          </span>
                        </span>
                      </h1>
                      <h2 className="font-base text-ketiga text-lg mb-5">
                        Special Forex Analyst
                      </h2>
                      {/* button bawah  */}
                      <div className=" flex  gap-5 py-5">
                        <button>
                          <p className="">
                            <a
                              href="#About"
                              className="text-primary font-semibold text-white bg-ketiga py-3 px-8
                          rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out nav__link active-link"
                            >
                              READ MORE
                            </a>
                          </p>
                        </button>
                      </div>
                    </div>
                    <div className="box lg:w-1/2 lg:order-2 order-1 justify-between">
                      <img
                        src={saly}
                        alt="contoh"
                        className="xl:w-[500px]
                      lg:w-[400px] md:w-[300px] sm:w-[250px] block ml-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="/" id="About">
            <div className="w-full bg-kedua ">
              <div className="header min-h-screen flex ">
                <div className="py-32 px-20">
                  <div className="container mx-auto px-4">
                    <div className="header-box flex lg:flex-row flex-col items-center gap-10">
                      <div className="box lg:w-1/2 lg:order-1 order-2 lg:text-left text-center">
                        <h1 className="text-2xl font-extrabold font-primary text-white">
                          ABOUT
                          <span className="block font-extrabold text-ketiga text-xl">
                            Hello Selamat Datang Di{" "}
                            <span className="text-white font-extrabold font-primary">
                              AXEEYBOOTCAMP
                            </span>
                          </span>
                        </h1>
                        <h2 className="font-base text-ketiga text-lg mb-5">
                          Terimakasi sudah berpartisipasi join axeeybootcamp.
                          semoga adanya program ini bisa membuat kalian lebih
                          semangat dan mengerti, terimakasih sudah registrasi
                          dan akan bertemu selama 1 bulan kedepan ,dan berharap
                          akan mendapat ilmu dari saya.benefit yang kalian akan
                          dapatkan bergabung dengan program ini .
                        </h2>
                        {/* button bawah  */}
                        {/* <div>
            
            <button
              onClick={() => {
                navigate("/");
              }}
              className="text-primary font-semibold text-white bg-ketiga py-3 px-8
              rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">tentang saya</button>
          </div> */}
                      </div>
                      <div className="box lg:w-1/2 lg:order-2 order-1 justify-between">
                        <img
                          src={home}
                          alt="contoh"
                          className="xl:w-[350px]
lg:w-[250px] md:w-[150px] sm:w-[50px] block ml-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Project start*/}
              <div className="/" id="Project">
                <div className="w-full bg-kedua ">
                  <div className="project py-24">
                    <div className="container mx-auto px-4">
                      <section className=" font-primary">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                              Project
                            </h2>
                            <p className="mb-5  text-ketiga sm:text-xl dark:text-gray-400">
                              "Dalam analisis pasar XAU/USD yang berbasis pada
                              profesionalisme, dapat disimpulkan bahwa tren
                              harga emas terhadap dolar AS menunjukkan potensi
                              untuk pertumbuhan lebih lanjut dalam jangka
                              pendek, dengan faktor-faktor fundamental dan
                              teknis yang mendukung pergerakan tersebut."
                            </p>
                          </div>
                          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                            <div
                              className="flex flex-col p-6 mx-auto max-w-lg text-center font-bold text-ketiga bg-utama  backdrop-blur-md bg-opacity-5 rounded-lg 
      hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                            >
                              <h3 className="mb-4 text-2xl font-semibold">
                                ANALISA SAYA
                              </h3>
                              <p className="font-light text-cyan-300">
                                before after
                              </p>
                              <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-white text-1xl font-extrabold">
                                  $XAUUSD
                                </span>
                                <span className="" />
                              </div>
                              {/* List */}
                              <div className="flex justify-center gap-5 py-1">
                                <img
                                  src={IMG1}
                                  alt="contoh"
                                  className="w-[800px] h-[280px] rounded-xl"
                                />
                              </div>
                            </div>
                            <div
                              className="flex flex-col p-6 mx-auto max-w-lg text-center font-bold text-ketiga bg-utama  backdrop-blur-md bg-opacity-5 rounded-lg 
      hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                            >
                              <h3 className="mb-4 text-2xl font-semibold">
                                ANALISA SAYA
                              </h3>
                              <p className="font-light text-cyan-300">
                                before after
                              </p>
                              <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-white text-1xl font-extrabold">
                                  $XAUUSD
                                </span>
                                <span className="" />
                              </div>
                              {/* List */}
                              <div className="flex justify-center gap-5 py-1">
                                <img
                                  src={IMG2}
                                  alt="contoh"
                                  className="w-[600px] h-[280px] rounded-xl"
                                />
                              </div>
                            </div>
                            <div
                              className="flex flex-col p-6 mx-auto max-w-lg text-center font-bold text-ketiga bg-utama  backdrop-blur-md bg-opacity-5 rounded-lg 
      hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                            >
                              <h3 className="mb-4 text-2xl font-semibold">
                                ANALISA SAYA
                              </h3>
                              <p className="font-light text-cyan-300">
                                before after
                              </p>
                              <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-white text-1xl font-extrabold">
                                  $XAUUSD
                                </span>
                                <span className="" />
                              </div>
                              {/* List */}
                              <div className="flex justify-center gap-5 py-1">
                                <img
                                  src={IMG3}
                                  alt="contoh"
                                  className="w-[600px] h-[280px] rounded-xl "
                                />
                              </div>
                            </div>
                            <div
                              className="flex flex-col p-6 mx-auto max-w-lg text-center font-bold text-ketiga bg-utama  backdrop-blur-md bg-opacity-5 rounded-lg 
      hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                            >
                              <h3 className="mb-4 text-2xl font-semibold">
                                ANALISA SAYA
                              </h3>
                              <p className="font-light text-cyan-300">
                                before after
                              </p>
                              <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-white text-1xl font-extrabold">
                                  $XAUUSD
                                </span>
                                <span className="" />
                              </div>
                              {/* List */}
                              <div className="flex justify-center gap-5 py-1">
                                <img
                                  src={IMG4}
                                  alt="contoh"
                                  className="w-[600px] h-[280px] rounded-xl "
                                />
                              </div>
                            </div>
                            <div
                              className="flex flex-col p-6 mx-auto max-w-lg text-center font-bold text-ketiga bg-utama  backdrop-blur-md bg-opacity-5 rounded-lg 
      hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                            >
                              <h3 className="mb-4 text-2xl font-semibold">
                                ANALISA SAYA
                              </h3>
                              <p className="font-light text-cyan-300">
                                before after
                              </p>
                              <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-white text-1xl font-extrabold">
                                  $XAUUSD
                                </span>
                                <span className="" />
                              </div>
                              {/* List */}
                              <div className="flex justify-center gap-5 py-1">
                                <img
                                  src={IMG5}
                                  alt="contoh"
                                  className="w-[600px] h-[280px] rounded-xl"
                                />
                              </div>
                            </div>
                            <div
                              className="flex flex-col p-6 mx-auto max-w-lg text-center font-bold text-ketiga bg-utama  backdrop-blur-md bg-opacity-5 rounded-lg 
      hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                            >
                              <h3 className="mb-4 text-2xl font-semibold">
                                ANALISA SAYA
                              </h3>
                              <p className="font-light text-cyan-300">
                                before after
                              </p>
                              <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-white text-1xl font-extrabold">
                                  $XAUUSD
                                </span>
                                <span className="" />
                              </div>
                              {/* List */}
                              <div className="flex justify-center gap-5 py-1">
                                <img
                                  src={IMG6}
                                  alt="contoh"
                                  className="w-[600px] h-[280px] rounded-xl"
                                />
                              </div>
                            </div>
                            <div
                              className="flex flex-col p-6 mx-auto max-w-lg text-center font-bold text-ketiga bg-utama  backdrop-blur-md bg-opacity-5 rounded-lg 
      hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                            >
                              <h3 className="mb-4 text-2xl font-semibold">
                                ANALISA SAYA
                              </h3>
                              <p className="font-light text-cyan-300">
                                before after
                              </p>
                              <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-white text-1xl font-extrabold">
                                  $XAUUSD
                                </span>
                                <span className="" />
                              </div>
                              {/* List */}
                              <div className="flex justify-center gap-5 py-1">
                                <img
                                  src={IMG7}
                                  alt="contoh"
                                  className="w-[600px] h-[280px] rounded-xl "
                                />
                              </div>
                            </div>
                            <div
                              className="flex flex-col p-6 mx-auto max-w-lg text-center font-bold text-ketiga bg-utama  backdrop-blur-md bg-opacity-5 rounded-lg 
      hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                            >
                              <h3 className="mb-4 text-2xl font-semibold">
                                ANALISA SAYA
                              </h3>
                              <p className="font-light text-cyan-300">
                                before after
                              </p>
                              <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-white text-1xl font-extrabold">
                                  $XAUUSD
                                </span>
                                <span className="" />
                              </div>
                              {/* List */}
                              <div className="flex justify-center gap-5 py-1">
                                <img
                                  src={IMG8}
                                  alt="contoh"
                                  className="w-[600px] h-[280px] rounded-xl "
                                />
                              </div>
                            </div>
                          </div>
                          <p className="lg:w-3/4 w-full text-ketiga mx-auto md:text-base text-xs font-semibold py-5">
                            ini adalah beberapa hasil analisa saya dan entri an
                            saya ,masih banyak bebrapa lagi cuman saya tidak
                            bisa menaruh semua disini,disini adalah spesialis
                            pair xauusd only .dan di contoh di atas ada beberapa
                            analisa news yang kami berhasil saya analisa dan
                            sesuai pergerakan news .
                          </p>

                          <div className="flex justify-center gap-5 py-1">
                            <button
                              className="text-primary font-semibold text-white bg-ketiga py-3 px-8
                    rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                            >
                              tentang saya
                            </button>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
                {/* project end */}
              </div>
              <div className="bg-kedua ">
                {/* service start */}
                <div className="/" id="Services">
                  <div className="w-full ">
                    <div className="Service py-6">
                      <div className="container mx-auto px-4">
                        <div className="Service-box">
                          <div className="box text-center">
                            <section className=" font-primary" />
                            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                              <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
                                  Service
                                </h2>
                                <p className="mb-5  text-ketiga sm:text-xl dark:text-ketiga">
                                  ini adalah yang kalian dapatkan jika kalian
                                  mengikuti axeeybootcamp selama 1 bulan{" "}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                            {/* Pricing Card */}
                            <div
                              className="flex flex-col p-1 mx-auto max-w-lg text-center font-bold text-gray-900 bg-white backdrop-blur-md bg-opacity-5 rounded-lg border  xl:p-1
    hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                            >
                              <h3 className="mb-4 text-2xl font-semibold" />
                              <p className="font-light text-ketiga sm:text-lg dark:text-ketiga" />
                              <div className="flex justify-center items-baseline my-1">
                                <span className="mr-2 text-xl font-extrabold" />
                                <span className="text-ketiga dark:text-ketiga" />
                              </div>
                              {/* List */}
                              <ul
                                role="list"
                                className="mb-8 space-y-4 text-left"
                              >
                                <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="text-ketiga">
                                    1-1 untuk mencoba analisa market bersama
                                    selama 2 jam sesuai pilihan anda
                                  </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="text-ketiga">
                                    merubah mindset yang salah saat bertrading{" "}
                                  </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="text-ketiga">
                                    akan di ajarkan metode trading model ict
                                    dari awal sampai bisa dalam 1 bulan
                                    <span className="font-semibold" />
                                  </span>
                                </li>
                              </ul>
                            </div>
                            {/* button end  */}
                            {/* Pricing Card */}
                            <div
                              className="flex flex-col p-6 mx-auto max-w-lg text-center font-bold bg-white backdrop-blur-md bg-opacity-5 rounded-lg border  xl:p-1
    hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                            >
                              <h3 className="mb-4 text-2xl font-semibold" />
                              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400" />
                              <div className="flex justify-center items-baseline my-1">
                                <span className="mr-2 text-5xl font-extrabold" />
                                <span className="text-gray-500 dark:text-gray-400" />
                              </div>
                              {/* List */}
                              <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-ketiga">
                                  breakdown analisa yang berfungsi untuk tau
                                  kesalahan atau kekurangan analisa dalam 1
                                  minggu yang di lewati
                                  <span className="font-semibold" />
                                </span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-ketiga">
                                  exclusif daily weekly forecast
                                  <span className="font-semibold" />
                                </span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-ketiga">
                                  help chat selama 24 jam
                                  <span className="font-semibold" />
                                </span>
                              </li>
                            </div>
                            {/* button end  */}
                            {/* Pricing Card */}
                            <div
                              className="flex flex-col p-6 mx-auto max-w-lg text-center font-bold text-gray-900 bg-white backdrop-blur-md bg-opacity-5 rounded-lg border  xl:p-1  
    hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                            >
                              <h3 className="mb-4 text-2xl font-semibold" />
                              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400" />
                              <div className="flex justify-center items-baseline my-1">
                                <span className="mr-2 text-5xl font-extrabold" />
                                <span className="text-gray-500 dark:text-gray-400" />
                              </div>
                              {/* List */}
                              <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-ketiga">
                                  memberikan PR analisa setelah mengajarkan
                                  materi bertujuan lebih paham
                                  <span className="font-semibold" />
                                </span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-ketiga">
                                  JANGAN HARAP SAYA SHARE SIGNAL BUY/SELL
                                  <span className="font-semibold" />
                                </span>
                              </li>
                            </div>
                          </div>
                          {/* button start */}
                          <div className="flex justify-center gap-5 py-5">
                            <button
                              className="text-primary font-semibold text-white bg-ketiga py-3 px-8
                    rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                            >
                              tentang saya
                            </button>
                          </div>
                          {/* button end  */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* service end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
