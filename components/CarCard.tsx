"use client"
import React from 'react';
import { useState} from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

interface CarCardProps {
    car: CarCardProps
}
const CarCard:React.FC<CarCardProps> = ({car}:CarCardProps) => {
    console.log(car)
    return (
        <div>
            <h1>dsf</h1>
        </div>
    );
};

export default CarCard;
