import React from 'react';

const History = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Background Section */}
            <div className="absolute inset-0 h-screen md:h-[160vh] lg:h-[80vh] 2xl:h-[90vh] bg-gradient-to-b from-[#FFC700] to-[#FFF280] xl:rotate-2 xl:-mt-6 xl:w-[200%] xl:-ml-3">
            </div>

            {/* Top Badge */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-5 h-5 w-24 bg-[#FFF6A1] flex items-center justify-center rounded-2xl"></div>

            {/* Content Section */}
            <div className="relative flex flex-col lg:flex-row w-full gap-10 px-6 py-14">

                {/* Image of History */}
                <img
                    src="/assets/historyImg.png"
                    alt="History Image"
                    className="w-[60vw] md:w-[45vw] lg:w-[40vw] xl:w-[40vw] mx-auto"
                />

                {/* Text and Second Image */}
                <div>
                    <img
                        src="/assets/historyText.png"
                        alt="History Text"
                        className="w-[50vw] md:w-[40vw] lg:w-[40vw] xl:w-[40vw] mx-auto"
                    />
                    <p className="font-kumbh font-bold text-center md:text-xl xl:text-3xl 2xl:text-4xl lg:w-[38vw] xl:w-[35vw] pt-5 lg:text-right xl:ml-20">
                        The Central Asian Shepherd Dog, commonly called Alabay, has served as a protector of livestock and property for centuries. Originating in Central Asia, these dogs are well known for their bravery, strength, and unwavering loyalty.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default History;
