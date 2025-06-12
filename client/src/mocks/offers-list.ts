import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
    {
        'id': '1',
        'title': 'Уютная квартира в центре Парижа',
        'type': 'apartment',
        'price': 200,
        'previewImage': 'img/apartment1_1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
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
        'previewImage': 'img/apartment3_1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
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
        'previewImage': 'img/apartment6_1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
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
        'previewImage': 'img/apartment8_1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
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
    }
]