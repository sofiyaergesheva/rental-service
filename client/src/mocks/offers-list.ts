import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
    {
        'id': '1',
        'title': 'Уютная квартира в центре Парижа',
        'type': 'apartment',
        'price': 200,
        'previewImage': '/img/apartment1_1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.36922706697589,
                'longitude': 4.906007720330443,
                'zoom': 12
            }
        },
        'location': {
            'latitude': 52.3909553943508,
            'longitude': 4.85309666406198,
            'zoom': 16
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.7
    },
    {
        'id': '3',
        'title': 'Современный дом рядом с Рейном',
        'type': 'house',
        'price': 180,
        'previewImage': '/img/apartment3_1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.36922706697589,
                'longitude': 4.906007720330443,
                'zoom': 10
            }
        },
        'location': {
            'latitude': 52.3609553943508,
            'longitude': 4.85309666406198,
            'zoom': 16
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 4.6
    },
    {
        'id': '6',
        'title': 'Квартира в историческом здании',
        'type': 'apartment',
        'price': 145,
        'previewImage': '/img/apartment6_1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.36922706697589,
                'longitude': 4.906007720330443,
                'zoom': 10
            }
        },
        'location': {
            'latitude': 52.3909553943508,
            'longitude': 4.929309666406198,
            'zoom': 16
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.3
    },
    {
        'id': '8',
        'title': 'Семейный дом в Амстердаме',
        'type': 'house',
        'price': 320,
        'previewImage': '/img/apartment8_1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.36922706697589,
                'longitude': 4.906007720330443,
                'zoom': 10
            }
        },
        'location': {
            'latitude': 52.3809553943508,
            'longitude': 4.939309666406198,
            'zoom': 16
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 3.7
    },
    {
        'id': '2',
        'title': 'Студия у Монмартра',
        'type': 'room',
        'price': 120,
        'previewImage': '/img/apartment2_1.jpg',
        'city': {
            'name': 'Paris',
            'location': {
                'latitude': 48.857961940958674,
                'longitude': 2.3487029334470035,
                'zoom': 11
            }
        },
        'location': {
            'latitude': 48.857,
            'longitude': 2.348,
            'zoom': 11
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.3
    }
]