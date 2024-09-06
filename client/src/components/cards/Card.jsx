import React from 'react';

function Card(props) {
    function handleClick() {
        window.open(props.link, "_blank");
    }

    return (
        <>
            <div>
                <div className="relative h-[400px] md:w-auto rounded-2xl sm:m-10 s:m-3 transform transition-transform duration-300 hover:scale-105">
                    <img
                        src={props.image}
                        alt="Project image"
                        className="z-0 h-full w-full rounded object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent rounded"></div>
                    <div className="absolute rounded-md bottom-4 left-4 text-left">
                        <h1 className="text-2xl text-[#cb7676] font-bold underline">{props.title}</h1>
                        <p className="mt-2 text-sm text-white">
                            {props.details}
                        </p>
                        <button 
                            className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-solid border-white border-2 p-1 hover:text-red-700 hover:bg-black rounded text-white transform transition-transform duration-300 hover:scale-105" 
                            onClick={handleClick}
                        >
                            View GitHub &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
