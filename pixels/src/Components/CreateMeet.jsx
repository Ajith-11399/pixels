import React, { useState } from 'react';
import meetBg from '../assets/bg-createMeet.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { MdPhotoCameraFront } from 'react-icons/md';
import { FaRegKeyboard } from 'react-icons/fa6';

// Swiper slider
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from '../assets/meet-img-1.jpg';
import img2 from '../assets/meet-img-2.jpg';
import img3 from '../assets/meet-img-3.jpg';
import img4 from '../assets/meet-img-4.jpg';


const CreateMeet = () => {
    const navigate = useNavigate();
    const [meetId, setMeetId] = useState('');

    const generateAlphabetSeries = () => {
        const randomSegment = (length) =>
            Array.from({ length }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('');

        const part1 = randomSegment(3);
        const part2 = randomSegment(4);
        const part3 = randomSegment(3);

        return `${part1}-${part2}-${part3}`;
    };

    const handleCreateMeet = () => {
        const id = generateAlphabetSeries();
        navigate(`/meeting/${id}`);
    };


    const handleJoinSubmit = (e) => {
        e.preventDefault();
        if (!meetId.trim()) return;
        navigate(`/meeting/${meetId.trim()}`);
    };

    const slides = [
        {
            id: 1,
            img: img1,
            title: "Plan and Schedule with Ease",
            desc: "Create structured meeting agendas and manage invites effortlessly to stay organized and on track."
        },
        {
            id: 2,
            img: img2,
            title: "Join Video Meetings Instantly",
            desc: "Seamlessly connect with your team from anywhere through high-quality, real-time video conferencing."
        },
        {
            id: 3,
            img: img3,
            title: "Share Ideas and Collaborate",
            desc: "Use interactive tools to exchange thoughts, share files, and communicate better during your meetings."
        },
        {
            id: 4,
            img: img4,
            title: "Feel Closer, Even Remotely",
            desc: "Build stronger connections with lifelike video calls that replicate the warmth of in-person conversations."
        }
    ]

    return (

        <>  

            <div>
                <div className='w-full flex justify-between items-center fixed top-0 left-0 z-50 px-20 py-3'>
                    <p className='text-3xl font-bold text-blue-950 hover:scale-105 hover:transition-all hover:duration-300'>Pixels</p>
                    <button
                        onClick={handleCreateMeet}
                        className="text-xs bg-blue-900 hover:bg-blue-800 text-white px-4 py-3 rounded-4xl shadow-lg font-medium flex items-center my-5 gap-2"
                    > 
                        <MdPhotoCameraFront size={20} /> New Meeting
                    </button>
                </div>
            </div>

            <div
                className="w-screen h-screen bg-black p-4 relative"
                style={{
                    backgroundImage: `url(${meetBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">

                    <div className='w-full grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 items-center gap-5 px-25'>

                        {/* Create Meeting */}
                        <div>

                            <div className='w-full md:w-[70%]'>
                                <h1 className='text-[40px] leading-none py-3'>
                                    Hassle-free video conferencing, anytime.
                                </h1>
                                <p className='text-xl text-gray-600 leading-normal'>
                                    Host or join secure video calls in seconds smooth, stable, and always accessible.
                                </p>
                            </div>

                            <div className='w-full lg:flex items-center py-3 gap-4'>

                                {/* Create Meeting */}
                                <button
                                    onClick={handleCreateMeet}
                                    className="w-[200px] text-xs bg-blue-900 hover:bg-blue-800 text-white px-4 py-3 rounded-4xl shadow-lg font-medium flex items-center my-5 gap-2"
                                > 
                                    <MdPhotoCameraFront size={20} /> New Meeting
                                </button>

                                {/* Join meeting */}
                                <form onSubmit={handleJoinSubmit} className="w-full rounded-2xl flex">

                                    <div className='w-full rounded-xl outline-1 outline-gray-500 hover:outline-2 hover:outline-blue-800 hover:text-blue-800 flex items-center px-4 py-3 gap-2'>

                                        <FaRegKeyboard size={20} />
                                        <input
                                            type="text"
                                            value={meetId}
                                            onChange={(e) => setMeetId(e.target.value)}
                                            placeholder="Enter Meeting ID"
                                            className="w-full text-xs outline-0 block"
                                            required
                                        />

                                    </div>

                                    <button type="submit" className="w-full text-xs text-start px-3">Join</button>

                                </form>

                            </div>

                        </div>

                        {/* Carousel */}
                        <div>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                }}
                                navigation
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    430: { slidesPerView: 1 },
                                    768: { slidesPerView: 1 },
                                    1024: { slidesPerView: 1 },
                                    1199: { slidesPerView: 1 },
                                }}
                                className='w-[65%]'
                            >
                                {slides.map((slides) => (
                                    <SwiperSlide key={slides.id}>
                                        <div className="from-white/30 to-white/10 backdrop-blur-md transition-transform ease-in-out duration-300 p-6 rounded-2xl flex flex-col items-center text-center h-full">
                                            <img src={slides.img} alt={slides.title} className="w-[65%] rounded-full object-contain mb-4" />
                                            <h3 className="font-bold text-xl text-black tracking-wide">{slides.title}</h3>
                                            <p className="text-sm text-black/80 mt-2">{slides.desc}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>

                </div>

            </div>

        </>

    );
};

export default CreateMeet;
