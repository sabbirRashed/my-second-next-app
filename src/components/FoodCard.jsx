import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodCard = ({ food }) => {
    console.log(food);
    const { id, dish_name, image_link, category, price, rating } = food
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className='p-4'>
                <Image
                    src={image_link}
                    alt={dish_name}
                    width={200}
                    height={200}
                    className=' h-50'></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {dish_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Category : {category}</p>
                <p>Price : {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                    <Link href={`/food/${id}`}>
                        <button className="btn btn-ghost">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;