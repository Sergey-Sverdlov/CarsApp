"use client"

import React from 'react';
import {useState} from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import {calculateCarRent} from "../utils/index";
import CarDetails from "./CarDetails";

interface CarCardProps {
    car: CarCardProps
}

const CarCard: React.FC<CarCardProps> = ({car}: CarCardProps) => {
    const {city_mpg, year, make, model, transmission, drive} = car
    const [isOpen, setIsOpen] = React.useState(false)
    const carRent = calculateCarRent(city_mpg, year)
    return (
        <div className="car-card">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>
            <p className="flex mt-6 text-[32px] font-extrabold ">
                <span className="self-start text-[14px] font-semibold ">
                    $
                </span>
                {carRent}
                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image src="/hero.png" alt="car Image"
                       fill priority className="object-contain"/>
            </div>
            <div className="relative flex w-full mt-2 group">
                <div className="flex group-hover:invisible w-full justify-between
                text-gray-500">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/steering-wheel.svg" alt="steering wheel"
                               width={20} height={20}/>
                        <p className="text-[14px]">
                            {transmission === 'a' ? "АКПП" : "МКПП"}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/tire.svg" alt="steering wheel"
                               width={20} height={20}/>
                        <p className="text-[14px]">
                            {drive.toUpperCase() === 'FWD' ? "Полный привод" : "Передний привод"}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/gas.svg" alt="steering wheel"
                               width={20} height={20}/>
                        <p className="text-[14px]">
                            {Math.trunc(city_mpg / 2)} л / 100км
                        </p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <CustomButton
                        title="Посмотреть больше"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue border-2"
                        textStyles="text-white text-[14px] leading=[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <CarDetails
                isOpen={isOpen}
                closeModel={() => setIsOpen(false)} car={car}
            />
        </div>
    );
};

export default CarCard;
