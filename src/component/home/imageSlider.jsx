import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
  {
    url: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];

const properties = {
    prevArrow: <button className='text-[32px] text-white mx-3 ' ><HiChevronLeft/> </button>,
    nextArrow: <button className='text-[32px] text-white mx-3 '><HiChevronRight/> </button>,
    transitionDuration:700,
    duration:2000,
    pauseOnHover:true,
    canSwipe:true

}


export const Slideshow = () => {
  const navigate = useNavigate()
  const handlebuybtn = ()=>{
    navigate("/products")
  }
    return (
      <div className="slide-container relative">
        <Slide {...properties} >
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ 'backgroundImage': `url(${slideImage.url})` }} className="h-[80vh]  flex items-center justify-center bg-cover bg-no-repeat ease-in-out " ></div>
            </div>
          ))} 
        </Slide>
        <div className='absolute top-[50%] left-[5%] h-[auto] p-3 w-[auto] backdrop-blur '>
          <h1 className='text-[38px] font-semibold text-purple-950 ' >Welcome to E-Commerce.</h1>
          <p className='text-[18px] ml-4 mt-[-5px] font-normal text-[#1c1c8d] '>Buy your favourite item at lower price.</p>
          <button className='h-[auto] w-[auto] font-medium text-[20px] px-4 py-2 mt-5 ml-4 text-white bg-[#7700ff] rounded-full border border-transparent hover:scale-105 ' onClick={handlebuybtn} >Buy now</button>
        </div>
      </div>
    )
}