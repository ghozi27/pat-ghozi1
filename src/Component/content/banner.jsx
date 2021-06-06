import React from 'react';
import ImgBanner from '../img/banner.png';

export default function Banner() {
    return(
        <React.Fragment>
            <div style={{background:"#FFF7ED"}} className="flex items-center justify-center px-24 py-5 rounded-xl">
                <div className=" h-full">
                    <img className="w-44 h-24" src={ImgBanner} alt={ImgBanner} />
                </div>
                <div style={{color:"#FB6D3A"}} className="ml-10 font-black h-full">
                    <p className="text-2xl font-extrablack">Promo Hari ini</p>
                    <p className="text-lg font-bold">Perut kenyang, hatipun senang</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <ul className="flex w-1/12 items-center justify-between mt-4">
                    <li className="">
                        <div className="w-2 h-2 rounded-full bg-red-200"></div>
                    </li>
                    <li className="">
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    </li>
                    <li className="">
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    </li>
                    <li className="">
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    </li>
                    <li className="">
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}