"use client"
import React from 'react';
import Image from "next/image";
import {CustomButtonProps} from "../types/index";

const CustomButton = ({title, containerStyle, handleClick}:CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={"button"}
            className={`custom-btn ${containerStyle}`}
            onClick={handleClick}
        >
            <span className={'flex-1'} >
                {title}
            </span>
        </button>
    );
};

export default CustomButton;
