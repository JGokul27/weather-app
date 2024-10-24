const { default: axios } = require('axios')
const express = require('express')
const cors = require('cors')
const router = express.Router()

router.get('/:city', async(req,res) => {
    const city = req.params.city
    const apikey = process.env.WEATHER_API_KEY;

    try{
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
        )
        const weatherData = response.data;
        res.json(weatherData)
    } catch(error){
        res.status(500).json({ message: `Error fetching weather data` })
    }
})

module.exports = router