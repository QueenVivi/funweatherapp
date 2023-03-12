interface WeatherData {
  current: {
    condition: {
      code: number;
      text: string;
    };
    last_updated: string;
    temp_c: number;
    temp_f: number;
    wind_kph: number;
    humidity: number;
    precip_mm: number;
  };
  location: {
    name: string;
  };
}

export default WeatherData;
