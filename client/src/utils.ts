import { CityOffer } from './types/offer';

export function getCity(cityName: string, cities: CityOffer[]): CityOffer | undefined {
  return cities.find((city) => city.name === cityName);
}
