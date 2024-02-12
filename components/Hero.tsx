"use client"
import React from 'react';
import Image from "next/image"
import CustomButton from "./CustomButton";

const MyComponent = () => {
    const handleScroll = () => {

    }
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Найти, забронировать и арендовать автомобиль — ЭТО ПРОСТО!
                </h1>
                <p className="hero__subtitle">
                    Наш сервис поможет Вам забронировать понравившейся Вам автомобиль!
                </p>
                <CustomButton
                    title="Забронировать машину"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10 self-center"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain"/>
                    <div className="hero__image-overlay"></div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
