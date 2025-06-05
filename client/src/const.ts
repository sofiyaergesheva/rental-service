import { CityOffer } from "./types/offer";

const Setting = {
    rentOffersCount: 312,
}

const AppRoute = {
    Main: '/',
    Login: '/login',
    Favorites: '/favorites',
    Offer: '/offer/:id'
} as const;

const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN'
}

const STARS_COUNT = 5;

const CITIES_LOCATION: CityOffer[] = [
    {
        name: 'Paris',
        location: {
            latitude: 48.5112,
            longitude: 2.2055,
            zoom: 8
        }
    },
    {
        name: 'Cologne',
        location: {
            latitude: 50.9375,
            longitude: 6.9603,
            zoom: 8
        }
    },
    {
        name: 'Brussels',
        location: {
            latitude: 50.8503,
            longitude: 4.3517,
            zoom: 8
        }
    },
    {
        name: 'Amsterdam',
        location: {
            latitude: 52.2226,
            longitude: 4.5322,
            zoom: 8
        }
    },
    {
        name: 'Hamburg',
        location: {
            latitude: 53.5511,
            longitude: 9.9937,
            zoom: 8
        }
    },
    {
        name: 'Dusseldorf',
        location: {
            latitude: 51.2277,
            longitude: 6.7735,
            zoom: 8
        }
    },
];


export { Setting, AppRoute, AuthorizationStatus, STARS_COUNT, CITIES_LOCATION };