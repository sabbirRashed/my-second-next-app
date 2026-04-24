import Image from 'next/image';
import React from 'react';

const FoodDetails = async ({ params }) => {

    const { foodId } = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();

    console.log(data.data)
    const { id, dish_name, image_link, category, cuisine, origin_and_popularity, price, rating } = data.data
    return (
        <div className="card card-side bg-base-100 shadow-sm flex mt-20">
            <figure className='bg-gray-400 flex-1 p-10'>
                <Image
                    src={image_link}
                    alt={dish_name}
                    width={300}
                    height={300}
                    className='w-80 h-auto'></Image>
            </figure>
            <div className="card-body flex-1">
                <p>Food id : {id}</p>
                <h2 className="card-title">{dish_name}</h2>
                <p>Category : {category}</p>
                <p>Type of cooking : {cuisine}</p>
                <p>Popularity : {origin_and_popularity}</p>

                <div className="card-actions justify-end">
                   <div className="badge badge-secondary">Price : {price}</div>
                   <div className="badge badge-info">Ratings : {rating}</div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;