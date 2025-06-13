import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
    {
        'id': '1',
        'title': 'Уютная квартира в центре Парижа',
        'type': 'apartment',
        'price': 200,
        'previewImage': '/img/apartment1_1.jpg',
        'city': {
            'name': 'Paris',
            'location': {
                'latitude': 48.857961940958674,
                'longitude': 2.3487029334470035,
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
    },
    {
        'id': '3',
        'title': 'Современный дом рядом с Рейном',
        'type': 'house',
        'price': 180,
        'previewImage': '/img/apartment3_1.jpg',
        'city': {
            'name': 'Cologne',
            'location': {
                'latitude': 50.9375,
                'longitude': 6.9603,
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
        'id': '4',
        'title': 'Уютная студия в Кёльне',
        'type': 'hotel',
        'price': 100,
        'previewImage': '/img/apartment4_1.jpg',
        'city': {
            'name': 'Cologne',
            'location': {
                'latitude': 50.9375,
                'longitude': 6.9603,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 50.938,
            'longitude': 6.959,
            'zoom': 16
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.1
    },
    {
        'id': '5',
        'title': 'Апартаменты рядом с Европарламентом',
        'type': 'apartment',
        'price': 200,
        'previewImage': '/img/apartment5_1.jpg',
        'city': {
            'name': 'Brussels',
            'location': {
                'latitude': 50.8503,
                'longitude': 4.3517,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 50.8466,
            'longitude': 4.3516,
            'zoom': 16
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.8
    },
    {
        'id': '6',
        'title': 'Квартира в историческом здании',
        'type': 'apartment',
        'price': 145,
        'previewImage': '/img/apartment6_1.jpg',
        'city': {
            'name': 'Brussels',
            'location': {
                'latitude': 50.8503,
                'longitude': 4.3517,
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
        'id': '7',
        'title': 'Современный лофт с видом на канал',
        'type': 'hotel',
        'price': 215,
        'previewImage': '/img/apartment7_1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.36922706697589,
                'longitude': 4.906007720330443,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 52.3702,
            'longitude': 4.8952,
            'zoom': 16
        },
        'isPremium': false,
        'isFavorite': false,
        'rating': 3.9
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
    },
    {
        'id': '9',
        'title': 'Квартира у озера Альстер',
        'type': 'room',
        'price': 155,
        'previewImage': '/img/apartment9_1.jpg',
        'city': {
            'name': 'Hamburg',
            'location': {
                'latitude': 53.5511,
                'longitude': 9.9937,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 53.55,
            'longitude': 10.001,
            'zoom': 16
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.0
    },
    {
        'id': '10',
        'title': 'Бюджетная квартира в Гамбурге',
        'type': 'hotel',
        'price': 200,
        'previewImage': '/img/apartment10_1.jpg',
        'city': {
            'name': 'Hamburg',
            'location': {
                'latitude': 53.5511,
                'longitude': 9.9937,
                'zoom': 10
            }
        },
        'location': {
            'latitude': 53.55,
            'longitude': 10.001,
            'zoom': 16
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 4.6
    }
]