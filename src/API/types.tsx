export interface Coordinates {
  lat: number;
  lon: number;
}


export interface WeatherCondition{
  id:number;
  main:string;
  description:string;
  icon:string;
}


export interface WeatherData {
  coord:Coordinates;
  weather:WeatherCondition[];
  main:{
    temp:number;
    feels_like:number;
    temp_min: number;
    temp_max:number;
    pressure:number;
    humidity:number;
  };
  wind:{
    speed:number;
    deg:number;
  };
  sys:{
    sunrise:number;
    sunset:number;
    country:number;
  };
  name:string;
  dt:number;
}


export interface ForecastData {
  list: Array<{
    dt:number;
    main:WeatherData["main"];
    weather:WeatherData["weather"];
    eind:WeatherData["wind"];
    dt_txt:string;
  }>;
  city:{
    country:string;
    name:string;
    sunrise:string;
    sunset:string;
  };
}


export interface GeocodingResponse {
  name:string;
  local_names?:Record<string,string>;
  lat:number;
  lon:number;
  country:string;
  state?:string;
}