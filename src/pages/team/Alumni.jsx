import React from 'react'
import { Link } from 'react-router-dom'
import "./Team.scss"
import { SocialIcon } from 'react-social-icons';

const ALumni = () => {
  return (
    <div className="w-full ">

      <div className="text-3xl font-semibold text-center text-white bg-[#2e2d2d] p-6 ">Alumni's</div>
      <div className="text-2xl font-semibold text-center text-black  underline mt-12">Our Inspiration</div>
      <div className="flex justify-center">

        <div className="text-black text-left w-[70%] text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione suscipit, amet voluptatum ea aliquid qui! Saepe porro error provident doloremque, enim voluptatem hic consectetur dicta nisi reiciendis ipsum veritatis?</div>
      </div>
      <div className="mx-0">
        <div className="grid grid-cols-3 my-12 grid-rows-3 gap-16 place-items-center">
          <div role="main">
            <div class="product">
              <figure>
                <img src="https://images.unsplash.com/photo-1466853817435-05b43fe45b39?dpr=1&auto=compress,format&fit=crop&w=1199&h=871&q=80&cs=tinysrgb&crop=" alt="Product Image" class="product-image" />
              </figure>

              <div class="product-description w-full">

                <div class="info">
                  <h1>Bhushan Bisen</h1>
                  <h2>Mentor</h2>
                  <p>
                    Lorem Ipsum is simply dummy
                    printing and typesetting industry
                  </p>
                </div>

              </div>

              <div class="product-sidebar">
                <button class="buy">
                  <SocialIcon network="twitter" style={{ height: 25, width: 25 }} url="https://linkedin.com" />
                </button>

                <button class="info">
                  <SocialIcon network="google" style={{ height: 25, width: 25 }} url="https://gmail.com" />
                </button>

                <button class="size">
                  <SocialIcon network="github" style={{ height: 25, width: 25 }} url="https://github.com" />
                </button>


              </div>
            </div>
          </div>
          <div role="main">
            <div class="product">
              <figure>
                <img src="https://images.unsplash.com/photo-1466853817435-05b43fe45b39?dpr=1&auto=compress,format&fit=crop&w=1199&h=871&q=80&cs=tinysrgb&crop=" alt="Product Image" class="product-image" />
              </figure>

              <div class="product-description w-full">

                <div class="info">
                  <h1>Bhushan Bisen</h1>
                  <h2>Mentor</h2>
                  <p>
                    Lorem Ipsum is simply dummy
                    printing and typesetting industry
                  </p>
                </div>

              </div>

              <div class="product-sidebar">
                <button class="buy">
                  <SocialIcon network="twitter" style={{ height: 25, width: 25 }} url="https://linkedin.com" />
                </button>

                <button class="info">
                  <SocialIcon network="google" style={{ height: 25, width: 25 }} url="https://gmail.com" />
                </button>

                <button class="size">
                  <SocialIcon network="github" style={{ height: 25, width: 25 }} url="https://github.com" />
                </button>


              </div>
            </div>
          </div>
          <div role="main">
            <div class="product">
              <figure>
                <img src="https://images.unsplash.com/photo-1466853817435-05b43fe45b39?dpr=1&auto=compress,format&fit=crop&w=1199&h=871&q=80&cs=tinysrgb&crop=" alt="Product Image" class="product-image" />
              </figure>

              <div class="product-description w-full">

                <div class="info">
                  <h1>Bhushan Bisen</h1>
                  <h2>Mentor</h2>
                  <p>
                    Lorem Ipsum is simply dummy
                    printing and typesetting industry
                  </p>
                </div>

              </div>

              <div class="product-sidebar">
                <button class="buy">
                  <SocialIcon network="twitter" style={{ height: 25, width: 25 }} url="https://linkedin.com" />
                </button>

                <button class="info">
                  <SocialIcon network="google" style={{ height: 25, width: 25 }} url="https://gmail.com" />
                </button>

                <button class="size">
                  <SocialIcon network="github" style={{ height: 25, width: 25 }} url="https://github.com" />
                </button>


              </div>
            </div>
          </div>
          <div role="main">
            <div class="product">
              <figure>
                <img src="https://images.unsplash.com/photo-1466853817435-05b43fe45b39?dpr=1&auto=compress,format&fit=crop&w=1199&h=871&q=80&cs=tinysrgb&crop=" alt="Product Image" class="product-image" />
              </figure>

              <div class="product-description w-full">

                <div class="info">
                  <h1>Bhushan Bisen</h1>
                  <h2>Mentor</h2>
                  <p>
                    Lorem Ipsum is simply dummy
                    printing and typesetting industry
                  </p>
                </div>

              </div>

              <div class="product-sidebar">
                <button class="buy">
                  <SocialIcon network="twitter" style={{ height: 25, width: 25 }} url="https://linkedin.com" />
                </button>

                <button class="info">
                  <SocialIcon network="google" style={{ height: 25, width: 25 }} url="https://gmail.com" />
                </button>

                <button class="size">
                  <SocialIcon network="github" style={{ height: 25, width: 25 }} url="https://github.com" />
                </button>


              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}

export default ALumni