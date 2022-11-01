import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div>
      <div className={`hero min-h-screen ${styles.hero}`}>
        <div className="hero-content flex-col lg:flex-row w-[100%] p-0">
          <img src="https://placeimg.com/480/640/arch" className="max-w-sm  shadow-2xl" style={{ height: '800px', zIndex: "30" }} />
          <div>
            <h1 className="text-5xl font-bold">Student's Association <br /> of Information Technology</h1>
            <p className={`py-6 bg-gray-800 text-white  absolute ${styles.slogan}`}>
              <div className="word1 inline">Beyond </div>
              <div className="word1 inline">the </div>
              <div className="word1 inline">limitation </div>
              <div className="word1 inline">Next </div>
              <div className="word1 inline">to </div>
              <div className="word1 inline">Perfection </div>
            </p>
            {/* <button className="btn  rounded-none bg-[#2e2d2d] border-none hover:text-yellow-500">Get Started</button> */}
          </div>
        </div>
      </div>
      <div >
        <div class="w-full p-0.5 my-12 mx-auto bg-[#2e2d2d] lg:w-1/3"></div>


        <div class="z-30 relative items-center justify-center w-[80%]  overflow-auto m-auto">
          <div class="inset-0 h-[80%] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://wallpapercave.com/wp/wp6689710.jpg')"
            }}
          >
          </div>
          <div class="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
          <div class="absolute inset-0  z-30  flex flex-col items-center justify-center">
            <div class="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://wallpapercave.com/wp/wp6689710.jpg')"
              }}>

              <div class="grid grid-cols-12 gap-1">
                <div class="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                  <div class="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
                    <p class="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                      The Start
                    </p>
                  </div>
                  <div class="text-gray-400 font-semibold text-xl mb-4">07</div>
                  <div class="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                </div>
                <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                  <div class="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                    <div class="p-8">
                      <p class="text-white text-xs md:text-sm lg:text-xl mb-4">
                        SAIT (Students’ Association for Information Technology) is an association for students of IT Department. It was established in 2003
                      </p>
                      <div class="bottom-0 absolute p-2 right-0">
                        <button class="opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <Link to="/about">LEARN MORE</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="z-30 relative items-center justify-center  h-full overflow-auto m-auto w-[80%]">
          <div class="inset-0 h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://wallpapercave.com/wp/wp6689710.jpg')"
            }}
          >
          </div>
          <div class="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
          <div class="absolute inset-0  z-30  flex flex-col items-center justify-center">
            <div class="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://wallpapercave.com/wp/wp6689710.jpg')"
              }}>

              <div class="grid grid-cols-12 gap-1">
                <div class="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                  <div class="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
                    <p class="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                      The vision
                    </p>
                  </div>
                  <div class="text-gray-400 font-semibold text-xl mb-4">02</div>
                  <div class="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                </div>
                <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                  <div class="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                    <div class="p-8">
                      <p class="text-white text-xs md:text-sm lg:text-xl mb-4">
                        To introduce new technologies and ideas with the help of club service and also improve communication skill and management skill of club members through seminars and workshops.
                      </p>
                      <div class="bottom-0 absolute p-2 right-0">
                        <button class="opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>LEARN MORE</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="z-30 relative items-center justify-center m-auto w-[80%] h-full overflow-auto">
          <div class="inset-0 h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://wallpapercave.com/wp/wp6689710.jpg')"
            }}
          >
          </div>
          <div class="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
          <div class="absolute inset-0  z-30  flex flex-col items-center justify-center">
            <div class="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://wallpapercave.com/wp/wp6689710.jpg')"
              }}>

              <div class="grid grid-cols-12 gap-1">
                <div class="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                  <div class="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
                    <p class="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                      Members
                    </p>
                  </div>
                  <div class="text-gray-400 font-semibold text-xl mb-4">07</div>
                  <div class="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                </div>
                <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                  <div class="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                    <div class="p-8">
                      <p class="text-white text-xs md:text-sm lg:text-xl mb-4">
                        The overall functioning of this club is done by students of Information Technology Department

                      </p>
                      <div class="bottom-0 absolute p-2 right-0">
                        <button class="opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>LEARN MORE</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="z-30 relative items-center justify-center m-auto w-[80%] h-full overflow-auto">
          <div class="inset-0 h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://wallpapercave.com/wp/wp6689710.jpg')"
            }}
          >
          </div>
          <div class="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
          <div class="absolute inset-0  z-30  flex flex-col items-center justify-center">
            <div class="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://wallpapercave.com/wp/wp6689710.jpg')"
              }}>

              <div class="grid grid-cols-12 gap-1">
                <div class="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                  <div class="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
                    <p class="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                      Club Service
                    </p>
                  </div>
                  <div class="text-gray-400 font-semibold text-xl mb-4">07</div>
                  <div class="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                </div>
                <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                  <div class="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                    <div class="p-8">
                      <p class="text-white text-xs md:text-sm lg:text-xl mb-4">
                        We conduct weekly club services every Monday throughout the academic year which improves soft skills of the students
                      </p>
                      <div class="bottom-0 absolute p-2 right-0">
                        <button class="opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>LEARN MORE</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div >
  )
}

export default Home