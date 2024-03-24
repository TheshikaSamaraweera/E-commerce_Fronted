import React from 'react'
import Image from 'next/image'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const ProductCard = ({ img, title, desc, rating, price }) => {
  const renderRatingStars = () => {
    switch (rating) {
      case 1:
        return (
          <>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </>
        )
      case 2:
        return (
          <>
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </>
        )
      case 3:
        return (
          <>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </>
        )
      case 4:
        return (
          <>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </>
        )
      case 5:
        return (
          <>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </>
        )
      default:
        return null
    }
  }

  return (
    <div>
      <div>
        <Image src={img} width={200} height={300} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <div>{renderRatingStars()}</div>
      </div>
      <div>
        ${price}
        <del>${parseInt(price) + 50}.00</del>
      </div>
    </div>
  )
}

export default ProductCard
