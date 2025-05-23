import { FullOffer } from '../types/offer';

const offers: FullOffer[] = [
    {
        id: '1',
        title: 'Уютная квартира в центре Парижа',
        description: 'Светлая и современная квартира рядом с Лувром и Сенной. Отличный вариант для пары или небольшой семьи.',
        type: 'apartment',
        price: 200,
        images: ['apartment1_1.jpg', 'apartment1_2.jpg', 'apartment1_3.jpg', 'apartment1_4.jpg', 'apartment1_5.jpg', 'apartment1_6.jpg',],
        city: {
            name: 'Paris',
            location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
            }
        },
        location: {
            latitude: 48.8566,
            longitude: 2.3522,
            zoom: 16
        },
        goods: ['Breakfast', 'Laptop friendly workspace', 'Towels'],
        host: {
            isPro: false,
            name: 'Sofiya',
            avatarUrl: 'avatar_sofiya.png'
        },
        isPremium: true,
        isFavorite: false,
        rating: 4.7,
        bedrooms: 2,
        maxAdults: 4,
    },
    {
        id: '3',
        title: 'Современный дом рядом с Рейном',
        description: 'Просторный дом с видом на реку. Подходит для семей и деловых путешественников. До центра 15 минут пешком.',
        type: 'house',
        price: 180,
        images: ['apartment3_1.jpg', 'apartment3_2.jpg', 'apartment3_3.jpg', 'apartment3_4.jpg', 'apartment3_5.jpg', 'apartment3_6.jpg'],
        city: {
            name: 'Cologne',
            location: {
                latitude: 50.938361,
                longitude: 6.959974,
                zoom: 13
            }
        },
        location: {
            latitude: 50.939,
            longitude: 6.96,
            zoom: 16
        },
        goods: ['Breakfast', 'Air conditioning', 'Laptop friendly workspace', 'Baby seat'],
        host: {
            isPro: false,
            name: 'Bob',
            avatarUrl: 'avatar_bob.png'
        },
        isPremium: true,
        isFavorite: true,
        rating: 4.6,
        bedrooms: 3,
        maxAdults: 5,
    },
    {
        id: '6',
        title: 'Квартира в историческом здании',
        description: 'Уникальная квартира с аутентичным интерьером. Высокие потолки, паркет, камин. В шаге — Гран-Плас и шоколадные бутики.',
        type: 'apartment',
        price: 145,
        images: ['apartment6_1.jpg', 'apartment6_2.jpg', 'apartment6_3.jpg', 'apartment6_4.jpg', 'apartment6_5.jpg', 'apartment6_6.jpg'],
        city: {
            name: 'Brussels',
            location: {
                latitude: 50.846557,
                longitude: 4.351697,
                zoom: 13
            }
        },
        location: {
            latitude: 50.847,
            longitude: 4.352,
            zoom: 16
        },
        goods: ['Baby seat', 'Washer'],
        host: {
            isPro: false,
            name: 'Bob',
            avatarUrl: 'avatar_bob.png'
        },
        isPremium: false,
        isFavorite: true,
        rating: 4.3,
        bedrooms: 1,
        maxAdults: 2,
    },
    {
        id: '8',
        title: 'Семейный дом в Амстердаме',
        description: 'Трёхкомнатный дом в спокойном районе недалеко от музеев. В доме есть охраняемая парковка. Идеально для семьи с детьми.',
        type: 'house',
        price: 320,
        images: ['apartment8_1.jpg', 'apartment8_2.jpg', 'apartment8_3.jpg', 'apartment8_4.jpg', 'apartment8_5.jpg', 'apartment8_6.jpg',],
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.370216,
                longitude: 4.895168,
                zoom: 13
            }
        },
        location: {
            latitude: 52.371,
            longitude: 4.896,
            zoom: 16
        },
        goods: ['Air conditioning', 'Baby seat', 'Washer', 'Fridge'],
        host: {
            isPro: true,
            name: 'Alice',
            avatarUrl: 'avatar_Alice.png'
        },
        isPremium: true,
        isFavorite: true,
        rating: 3.7,
        bedrooms: 3,
        maxAdults: 6,
    }
];
