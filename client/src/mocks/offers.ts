import { FullOffer } from '../types/offer';

const offers: FullOffer[] = [
    {
        id: '1',
        title: 'Уютная квартира в центре Парижа',
        description: 'Светлая и современная квартира рядом с Лувром и Сенной. Отличный вариант для пары или небольшой семьи.',
        type: 'apartment',
        price: 200,
        images: ['/img/apartment1_1.jpg', '/img/apartment1_2.jpg', '/img/apartment1_3.jpg', '/img/apartment1_4.jpg', '/img/apartment1_5.jpg', '/img/apartment1_6.jpg',],
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.36922706697589,
                longitude: 4.906007720330443,
                zoom: 13
            }
        },
        location: {
            latitude: 52.3909553943508,
            longitude: 4.85309666406198,
            zoom: 16
        },
        goods: ['Breakfast', 'Laptop friendly workspace', 'Towels'],
        host: {
            isPro: false,
            name: 'Sofiya',
            avatarUrl: '/img/avatar_sofiya.png'
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
        images: ['/img/apartment3_1.jpg', '/img/apartment3_2.jpg', '/img/apartment3_3.jpg', '/img/apartment3_4.jpg', '/img/apartment3_5.jpg', '/img/apartment3_6.jpg'],
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.36922706697589,
                longitude: 4.906007720330443,
                zoom: 13
            }
        },
        location: {
            latitude: 52.3609553943508,
            longitude: 4.85309666406198,
            zoom: 16
        },
        goods: ['Breakfast', 'Air conditioning', 'Laptop friendly workspace', 'Baby seat'],
        host: {
            isPro: false,
            name: 'Bob',
            avatarUrl: '/img/avatar_bob.png'
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
        images: ['/img/apartment6_1.jpg', '/img/apartment6_2.jpg', '/img/apartment6_3.jpg', '/img/apartment6_4.jpg', '/img/apartment6_5.jpg', '/img/apartment6_6.jpg'],
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.36922706697589,
                longitude: 4.906007720330443,
                zoom: 13
            }
        },
        location: {
            latitude: 52.3909553943508,
            longitude: 4.929309666406198,
            zoom: 16
        },
        goods: ['Baby seat', 'Washer'],
        host: {
            isPro: false,
            name: 'Bob',
            avatarUrl: '/img/avatar_bob.png'
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
        images: ['/img/apartment8_1.jpg', '/img/apartment8_2.jpg', '/img/apartment8_3.jpg', '/img/apartment8_4.jpg', '/img/apartment8_5.jpg', '/img/apartment8_6.jpg',],
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.36922706697589,
                longitude: 4.906007720330443,
                zoom: 13
            }
        },
        location: {
            latitude: 52.3809553943508,
            longitude: 4.939309666406198,
            zoom: 16
        },
        goods: ['Air conditioning', 'Baby seat', 'Washer', 'Fridge'],
        host: {
            isPro: true,
            name: 'Alice',
            avatarUrl: '/img/avatar_alice.png'
        },
        isPremium: true,
        isFavorite: true,
        rating: 3.7,
        bedrooms: 3,
        maxAdults: 6,
    },
    {
        id: '2',
        title: 'Студия у Монмартра',
        description: 'Компактная, но уютная студия в нескольких минутах ходьбы от базилики Сакре-Кёр. Идеально для романтической поездки.',
        type: 'room',
        price: 120,
        images: ['/img/apartment2_1.jpg', '/img/apartment2_2.jpg', '/img/apartment2_3.jpg', '/img/apartment2_4.jpg', '/img/apartment2_5.jpg', '/img/apartment2_6.jpg',],
        city: {
            name: 'Paris',
            location: {
                latitude: 48.857961940958674,
                longitude: 2.3487029334470035,
                zoom: 11
            }
        },
        location: {
            latitude: 48.857,
            longitude: 2.348,
            zoom: 11
        },
        goods: ['Washer', 'Towels', 'Fridge'],
        host: {
            isPro: true,
            name: 'Alice',
            avatarUrl: '/img/avatar_alice.png'
        },
        isPremium: false,
        isFavorite: true,
        rating: 4.3,
        bedrooms: 1,
        maxAdults: 2,
    }
];

export { offers };