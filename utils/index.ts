const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '08a0e3e8ccmshe2fbf2db8a1b700p14fadfjsnb08de93c545c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '08a0e3e8ccmshe2fbf2db8a1b700p14fadfjsnb08de93c545c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers,
    });
    
    const result = await response.json()
    return result
}