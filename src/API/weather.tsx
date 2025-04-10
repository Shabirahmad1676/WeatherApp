import { API_CONFIG } from "./config";
import { Coordinates, ForecastData, GeocodingResponse, WeatherData } from "./types";

class WeatherAPI{
  private createUrl(endpoint:string, params:Record<string, string | number>){
    // Record==>it may be an object , containing string, string/number
    const searchParams = new URLSearchParams({
      appid:API_CONFIG.API_KEY,
      ...params,
    })

    return `${endpoint}?${searchParams.toString()}`
  }

  // <T> it may be dynamic data measn don;t know the type pf data and :Promise<T> means returning
  private async fetchData<T>(url:string):Promise<T>{
    const response = await fetch(url)

    if(!response.ok){
      throw new Error(`Weather API Error:${(response).statusText}`)
    }

    return response.json()
  }


  // public functions
  async getCurrentWeather({lat,lon}:Coordinates):Promise<WeatherData>{
    //  /weather api endspoint will be here
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`,{
      lat:lat.toString(),
      lon:lon.toString(),
      units:API_CONFIG.DEFAULT_PARAMS.units
    })
    return this.fetchData<WeatherData>(url)
  }

  async getForecast({lat,lon}:Coordinates):Promise<ForecastData>{
    //  /weather api endspoint will be here
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/forecast`,{
      lat:lat.toString(),
      lon:lon.toString(),
      units:API_CONFIG.DEFAULT_PARAMS.units
    })
    return this.fetchData<ForecastData>(url)
  }

  async reverseGeoCode({lat,lon}:Coordinates):Promise<GeocodingResponse>{
    //  /weather api endspoint will be here
    const url = this.createUrl(`${API_CONFIG.GEO}/reverse`,{
      lat:lat.toString(),
      lon:lon.toString(),
     limits:1,
    })
    return this.fetchData<GeocodingResponse>(url)
  }
}

export const weather = new WeatherAPI()



// Method	Purpose
// createUrl()	Builds complete API URLs
// fetchData<T>()	Generic fetch function for any endpoint
// getCurrentWeather()	Gets real-time weather for a location
// getForecast()	Gets forecast for next few days
// reverseGeoCode()	Converts lat/lon to city name
// weather	Exported instance for use in your app