const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '08a0e3e8ccmshe2fbf2db8a1b700p14fadfjsnb08de93c545c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });
    
    const result = await response.json()
    return result
}
