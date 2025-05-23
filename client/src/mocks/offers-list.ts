import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
    {
        'id': '1',
        'title': 'Уютная квартира в центре Парижа',
        'type': 'apartment',
        'price': 200,
        'previewImage': 'apartment1_1.jpg',
        'city': {
            'name': 'Paris',
            'location': {
                'latitude': 48.85661,
                'longitude': 2.351499,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 48.8566,
            'longitude': 2.3522,
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
        'previewImage': 'apartment3_1.jpg',
        'city': {
            'name': 'Cologne',
            'location': {
                'latitude': 50.938361,
                'longitude': 6.959974,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 50.939,
            'longitude': 6.96,
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
        'previewImage': 'apartment6_1.jpg',
        'city': {
            'name': 'Brussels',
            'location': {
                'latitude': 50.846557,
                'longitude': 4.351697,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 50.847,
            'longitude': 4.352,
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
        'previewImage': 'apartment8_1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 52.371,
            'longitude': 4.896,
            'zoom': 16
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 3.7
    }
]