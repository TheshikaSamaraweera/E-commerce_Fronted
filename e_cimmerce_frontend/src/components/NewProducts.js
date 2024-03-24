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
        img: "/trowsers.jpg",
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
        <div>
            <h2>New Products</h2>

            <div>
                {
                    productsData.map((item,index) =>{

                        return(
                            <ProductCard
                            key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.price}
                            />
                        )

                    })
                }
            </div>
        </div>
    </div>
  )
}

export default NewProducts