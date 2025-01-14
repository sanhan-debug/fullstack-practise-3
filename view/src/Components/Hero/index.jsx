import React from "react";

function Hero() {
    
    return (
        <div className="bg-gray-100 pb-12 overflow-y-hidden ms-auto" style={{ minHeight: 600, backgroundImage: "url('https://preview.colorlib.com/theme/immigration/img/header-img.png.webp')",backgroundRepeat:'no-repeat',backgroundAttachment:'fixed' }} >
            <div>
                <div className="bg-gray-100">
                    <div className="container ma-auto flex flex-col items-center py-12 sm:py-24">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                
                            {/* <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg"> */}
                           <h1> Get up to 30% Off New Arrivals</h1>
                            {/* </p> */}
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm bg-color-orange">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
