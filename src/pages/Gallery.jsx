import React from 'react'
import "./Gallery.scss"

const Gallery = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-6xl bg-[#2e2d2d] text-white p-6">Gallery</div>
      <div className="carousel w-[80%] mx-auto mt-12">
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
            <a href="#slide2" className="btn btn-circle">❮</a>
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
      <div class="grid">
        <div class="item" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1439209306665-700c9bca794c?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)" }}></div>

        <div class="item" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1466853817435-05b43fe45b39?dpr=1&auto=compress,format&fit=crop&w=1199&h=871&q=80&cs=tinysrgb&crop=)" }}></div>

        <div class="item" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1488572384981-eac03dfeb6b9?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=)" }}></div>

        <div class="item" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1470091688026-38b51162c8df?dpr=1&auto=compress,format&fit=crop&w=1199&h=750&q=80&cs=tinysrgb&crop=)" }}></div>

        <div class="item" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1475139450941-3b6464b2dde3?dpr=1&auto=compress,format&fit=crop&w=1199&h=673&q=80&cs=tinysrgb&crop=)" }}></div>
      </div>
    </div>

  )
}

export default Gallery