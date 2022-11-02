import React from 'react'

const Contact = () => {
  return (
    <div className="w-screen">
    
    <div className="text-white p-12"></div>
      <div class="w-[40%]  m-auto flex justify-center items-center bg-[#2e2d2d] text-center ">
        <div class="w-5/6 h-5/6 m-auto ">
          <h1 class=" text-white text-center mt-4 mx-auto text-4xl font-semibold">Contact Us</h1>
          <div class=" mt-8 m-auto w-full md:flex">
            <span class="flex w-full">
              <h2 class="ml-2 text-xl text-white ">Name: </h2>
              <input aria-label="name" class="shadow-xl ml-4 mr-2 bg-transparent border-2 rounded-2xl text-white text-2xl pl-2 w-full outline-none" type="text" name="name" id="name" required />
            </span>
            <span class="flex w-full mt-8 md:mt-auto">
              <h2 class="ml-2 text-xl text-white ">Email: </h2>
              <input aria-label="email" class="shadow-xl ml-4 mr-2 bg-transparent border-2 rounded-2xl text-white text-2xl pl-2 w-full outline-none" type="email" name="email" id="email" required />
            </span>
          </div>
          <div class="flex mt-8 m-auto w-full ">
            <span class="flex w-full">
              <h2 class="ml-2 text-2xl text-white ">Phone: </h2>
              <input aria-label="contact" class="shadow-xl ml-4 mr-2 bg-transparent border-2 rounded-2xl text-white text-2xl pl-2 w-full outline-none" type="number" name="conatct-number" id="conatct-number" />
            </span>
          </div>
          <div class="flex mt-8 m-auto w-full ">
            <span class="w-full">
              <h2 class="ml-2 text-2xl text-white w-full">Message: </h2>
              <textarea aria-label="message" class="shadow-xl ml-4 mr-4 bg-transparent border-2 rounded-xl text-white text-2xl pl-2 mt-2  w-11/12 outline-none resize-none h-5/6" type="" name="message" id="message"></textarea>
            </span>
          </div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 mt-12 rounded-3xl mb-2">
            Submit
          </button>
        </div>
      </div>

      <div className="text-white p-12"></div>
    </div>
  )
}

export default Contact