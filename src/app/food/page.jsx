

import FoodCard from '@/components/FoodCard';
import React from 'react';

const FoodPage = async() => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
    const data = await res.json();
    const foods = data.data;
    // console.log(foods);

    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-20'>
            
            {
                foods.map(food => {
                   return <FoodCard key={food.id} food={food}></FoodCard>
                })
            }
        </div>
    );
};

export default FoodPage;