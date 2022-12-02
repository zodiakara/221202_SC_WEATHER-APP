import { useEffect } from "react"

function () {
const apiKey = '4c5e2d1e72b969caaf619ce5d0ff7e70'
const city= 'london'

const apiurl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`

useEffect(()=>{
    getWeather()
},[apiurl])

const getWeather = async () => {
    try {
        let response = await fetch(apiurl)

    if (response.ok) {
        let data = await response.json()
        console.log(data)
    }
    else {
        console.log('error fetching data')
    }
    }
    catch (e){
        console.log(e)
    }
}


    return (  );
}

export default ;