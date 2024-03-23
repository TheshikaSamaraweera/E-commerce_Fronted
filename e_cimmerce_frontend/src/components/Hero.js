import React from 'react'

const Hero = () => {

let settings ={
  dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1
}

const slideData = [
  {
    id:0,
    img : "/baner1.jpg",
    title: "Trending Items",
    mainTitle: "WOMENS LATEST FASHION SALE",
    price: "$20",
  },

  {
    id:1,
    img : "/baner2.jpg",
    title: "Trending gift",
    mainTitle: "WOMENS LATEST FASHION SALE",
    price: "$20",
  },

  {
    id:2,
    img : "/baner3.jpg",
    title: "Trending bags",
    mainTitle: "WOMENS LATEST FASHION SALE",
    price: "$20",
  }
]

  return (
    <div>Hero</div>
  )
}

export default Hero