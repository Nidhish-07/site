import React from 'react'

const Gallery = () => {

  const carouselHandler=(e)=>{
    e.preventDefault();
    
  }
  return (
    <div className="w-[80%] m-auto my-3">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle" onClick={carouselHandler}>❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div className="container md:px-32 px-10 py-8 mx-auto items-center">
        <div className="flex flex-wrap">
          <div className="md:w-full p-2">
            <div className="flex relative">
              <img
                src="https://images.unsplash.com/photo-1641810780723-8bc471f87245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center  opacity-75 hover:opacity-100" />
            </div>
          </div>
          <div className="md:w-1/2 p-2">
            <div className="flex relative">
              <img
                src="https://images.unsplash.com/photo-1641810780723-8bc471f87245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center  opacity-75 hover:opacity-100 " />
            </div>
          </div>
          <div className="md:w-1/2 p-2">
            <div className="flex relative">
              <img
                src="https://images.unsplash.com/photo-1641810780723-8bc471f87245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center  opacity-75 hover:opacity-100 " />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="hidden md:block md:w-1/2 px-4">
              <div className="h-full w-full bg-cover shadow-md" style={{ backgroundImage: 'url(https://source.unsplash.com/random/1280x720)' }}></div>
            </div>
            <div className="md:w-1/2 h-auto px-3">
              <div className="mb-8"><img className="shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
              <div><img className="shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery