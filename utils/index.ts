import {FilterProps} from "../types/index";

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

export async function fetchCars(filters: FilterProps) {
    const {manufacturer, year, model, limit, fuel} = filters
    const headers = {
        'X-RapidAPI-Key': '08a0e3e8ccmshe2fbf2db8a1b700p14fadfjsnb08de93c545c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,
    });
    const result = await response.json()
    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    if (value === '' && type === 'year')
        searchParams.delete(type)
    else
        searchParams.set(type, value)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    return newPathname
}