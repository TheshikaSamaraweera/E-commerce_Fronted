import React from 'react'
import ProductCard from './ProductCard'



const productsData =[

    {
        img: "/jacket.jpg",
        title: "Jacket",
        desc:"MEN Yarn Fleece Full-Zip Jacket",
        rating: 5,
        price: "55.00",
    },
    {
        img: "/shirt.jpg",
        title: "Jacket",
        desc:"MEN Yarn Fleece Full-Zip Jacket",
        rating: 5,
        price: "55.00",
    },
    {
        img: "/trowsers.jpeg",
        title: "trowsers",
        desc:"MEN Yarn Fleece Full-Zip Jacket",
        rating: 5,
        price: "55.00",
    },
    {
        img: "/jacket.jpg",
        title: "Jacket",
        desc:"MEN Yarn Fleece Full-Zip Jacket",
        rating: 5,
        price: "55.00",
    },

]




const NewProducts = () => {
    return (
        <div>
          <div className='container pt-16'> 
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>
      
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
              {
                productsData.map((item, index) => {
                  return (
                    <ProductCard
                      key={index}
                      img={item.img}
                      title={item.title}
                      desc={item.desc}
                      rating={item.rating}
                      price={item.price}
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      );
      
}

export default NewProducts