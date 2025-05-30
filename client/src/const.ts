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

export { Setting, AppRoute, AuthorizationStatus, STARS_COUNT };