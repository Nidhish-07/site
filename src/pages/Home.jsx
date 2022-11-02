import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Home.css"
import { FcAbout } from "react-icons/fc"
import { GrLineChart } from 'react-icons/gr'
import { RiTeamFill } from 'react-icons/ri'
import { FaCalendar } from 'react-icons/fa'
import { HiPuzzle } from 'react-icons/hi'

const Home = () => {
  return (
    <div>
      <div className={`hero min-h-screen heroes`}>
        <div className="hero-content flex-col lg:flex-row w-[100%] p-0 gap-12">
          <img src="https://placeimg.com/480/640/arch" className="max-w-sm  shadow-2xl" style={{ height: '600px', zIndex: "30" }} />
          <div className="mr-12">
            <h1 className="text-5xl font-bold">Student's Association <br /> of Information Technology</h1>
            {/* <p className={`py-6 bg-gray-800 text-white  absolute slogan`}> */}

            <div className="deconstructed ">
              Beyond the limitation, Next to perfection.
              <div>
                Beyond the limitation, Next to perfection.</div>
              <div>
                Beyond the limitation, Next to perfection.</div>
              <div>
                Beyond the limitation, Next to perfection.</div>
              <div>
                Beyond the limitation, Next to perfection.</div>
            </div>
            {/* <button className="btn  rounded-none bg-[#2e2d2d] border-none hover:text-yellow-500">Get Started</button> */}
          </div>
        </div>
      </div>
      <div >
        {/* divider */}
        <div class="w-full p-0.5 my-12 mx-auto bg-[#2e2d2d] lg:w-1/3"></div>

        {/* Upcoming Activities */}

        <div className="flex flex-col items-center w-full ">
          <h1 className="text-4xl mb-16">Upcoming Activities</h1>

          <div class="hero-container">
            <div className="main-container">
              <div className="poster-container">
                <a href="#"><img src="https://placeimg.com/640/680/tech" className="poster" /></a>
              </div>
              <div className="ticket-container">
                <div className="ticket__content">
                  <h4 className="ticket__movie-title">Blockchain</h4>
                  <p className="ticket__movie-slogan">
                    Club service info
                  </p>
                  <button className="ticket__buy-btn">Learn More</button>
                </div>
              </div>
            </div>

            <div className="main-container">
              <div className="poster-container">
                <a href="#"><img src="https://placeimg.com/640/680/tech" class="poster" /></a>
              </div>
              <div className="ticket-container">
                <div className="ticket__content">
                  <h4 className="ticket__movie-title">AI/ML</h4>
                  <p className="ticket__movie-slogan">Club Service slogan</p>
                  <button className="ticket__buy-btn">Learn More</button>
                </div>
              </div>
            </div>
            <div className="main-container">
              <div className="poster-container">
                <a href="#"><img src="https://placeimg.com/640/680/tech" class="poster" /></a>
              </div>
              <div className="ticket-container">
                <div className="ticket__content">
                  <h4 className="ticket__movie-title">System Design</h4>
                  <p className="ticket__movie-slogan">CLuv service slogan</p>
                  <button className="ticket__buy-btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mb-12 btn-info text-white" to="/clubservices">Click here for more </Link>  
        </div>


        {/* divider */}


        <div class="w-full p-0.5 mb-12 mx-auto bg-[#2e2d2d] lg:w-1/3"></div>

        {/* about sait */}

        <div className="text-center mx-32 text-lg font-semibold text-black">
          <div>

            Student Association of Information Technology (SAIT) is a group formed by students of IT to conduct various technical activities for the benefits of the students. SAIT conducts weekly club services which includes programming, communication skill development, Quiz, aptitude test. SAIT also organizes state level events once per every semester to enhance their skill.
          </div>
          Resources: One staff Advisor(teacher), committee members functioning and execution as per the directives and advice of HOD and Dean.

        </div>
        <div className="grid grid-cols-4 grid-rows-2 mt-20 gap-x-3 ">
          <div className="pl-14">
            <FaCalendar size={150} color="#000"></FaCalendar>
          </div>

          <div>
          <div className="text-center text-2xl font-semibold mb-2">The Vision</div>
          To introduce new technologies and ideas with the help of club service and also improve communication skill and management skill of club members through seminars and workshops.
          </div>

          <div className="pl-14">
            <RiTeamFill size={150}></RiTeamFill>
          </div>
          <div>
          
          <div className="text-center text-2xl font-semibold mb-2">The Club Service</div>
          We conduct weekly club services every Monday throughout the academic year which improves soft skills of the students</div>
          <div>
          
          <div className="text-center text-2xl font-semibold mb-2">The Start</div>
          The overall functioning of this club is done by students of Information Technology Department</div>
          <div className="pl-14">
            <GrLineChart size={150}></GrLineChart>
          </div>
          <div>
          
          <div className="text-center text-2xl font-semibold mb-2">The Team</div>
          The overall functioning of this club is done by students of Information Technology Department</div>
          <div className="">
            <HiPuzzle size={150}></HiPuzzle>
          </div>
        </div>



      </div>

    </div >
  )
}

export default Home