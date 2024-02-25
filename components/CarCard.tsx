"use client"

import React from 'react';
import {useState} from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

interface CarCardProps {
    car: CarCardProps
}

const CarCard: React.FC<CarCardProps> = ({car}: CarCardProps) => {
    console.log(car)
    const {city_mpg, year, make, model, transmission, drive} = car
    return (
        <div className="car-card">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>
            <p>
                <span>
                    Стоимость
                </span>
            </p>
        </div>
    );
};

export default CarCard;
