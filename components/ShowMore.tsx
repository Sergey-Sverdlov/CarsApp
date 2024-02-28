"use client"
import React from 'react';
import {useRouter} from "next/navigation";
import {ShowMoreProps} from "../types/index";
import CustomButton from "./CustomButton";
import {updateSearchParams} from "../utils/index";

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter()
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        const newPathName = updateSearchParams('limit', String(newLimit))
        router.push(newPathName, {scroll: false})
    }
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title="Далее"
                    btnType='button'
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>

    );
};

export default ShowMore;
