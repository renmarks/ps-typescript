import {Get, Controller, startApp, Inject, Injectable} from './framework'; 

@Injectable(`CitiesDB`)
class CitiesDB {
    public getCities() {
        console.log(`ClassDB - Getting a list of cities`);
        return [`New York`, `Los Angeles`, `Chicago`];
    }
}
@Controller('/api')
class WeatherController {
    @Get('/forecast')
    public getForecast() {
        return({
            apiVersion: `v1`,
            temperature: 25,
            humidity: 60,
            city: `New York`
        })
    }
}
@Controller('/api')
class CitiesController {
    @Inject(`CitiesDB`)
    private citiesDB: CitiesDB;
    @Get('/cities')
    public getCities() {
        return({
            cities: this.citiesDB.getCities()
        })
    }
}

startApp()