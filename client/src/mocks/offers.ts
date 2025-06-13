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
            name: 'Paris',
            location: {
                latitude: 48.857961940958674,
                longitude: 2.3487029334470035,
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
            avatarUrl: '/img/avatar_sofiya.png'
        },
        isPremium: true,
        isFavorite: false,
        rating: 4.7,
        bedrooms: 2,
        maxAdults: 4,
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
    },
    {
        id: '3',
        title: 'Современный дом рядом с Рейном',
        description: 'Просторный дом с видом на реку. Подходит для семей и деловых путешественников. До центра 15 минут пешком.',
        type: 'house',
        price: 180,
        images: ['/img/apartment3_1.jpg', '/img/apartment3_2.jpg', '/img/apartment3_3.jpg', '/img/apartment3_4.jpg', '/img/apartment3_5.jpg', '/img/apartment3_6.jpg'],
        city: {
            name: 'Cologne',
            location: {
                latitude: 50.9375,
                longitude: 6.9603,
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
            avatarUrl: '/img/avatar_bob.png'
        },
        isPremium: true,
        isFavorite: true,
        rating: 4.6,
        bedrooms: 3,
        maxAdults: 5,
    },
    {
        id: '4',
        title: 'Уютная студия в Кёльне',
        description: 'Номер идеально подходит для одного или пары. Вся инфраструктура в шаговой доступности. Стильный интерьер, тихий район.',
        type: 'hotel',
        price: 100,
        images: ['/img/apartment4_1.jpg', '/img/apartment4_2.jpg', '/img/apartment4_3.jpg', '/img/apartment4_4.jpg', '/img/apartment4_5.jpg', '/img/apartment4_6.jpg'],
        city: {
            name: 'Cologne',
            location: {
                latitude: 50.9375,
                longitude: 6.9603,
                zoom: 13
            }
        },
        location: {
            latitude: 50.938,
            longitude: 6.959,
            zoom: 16
        },
        goods: ['Towels', 'Fridge'],
        host: {
            isPro: false,
            name: 'Sofiya',
            avatarUrl: '/img/avatar_sofiya.png'
        },
        isPremium: false,
        isFavorite: true,
        rating: 4.1,
        bedrooms: 1,
        maxAdults: 2,
    },
    {
        id: '5',
        title: 'Апартаменты рядом с Европарламентом',
        description: 'Просторная квартира с отдельной спальней и рабочей зоной. Отлично подойдёт для командировки. В 10 минутах — метро и кафе.',
        type: 'apartment',
        price: 200,
        images: ['/img/apartment5_1.jpg', '/img/apartment5_2.jpg', '/img/apartment5_3.jpg', '/img/apartment5_4.jpg', '/img/apartment5_5.jpg', '/img/apartment5_6.jpg'],
        city: {
            name: 'Brussels',
            location: {
                latitude: 50.8503,
                longitude: 4.3517,
                zoom: 13
            }
        },
        location: {
            latitude: 50.8466,
            longitude: 4.3516,
            zoom: 16
        },
        goods: ['Laptop friendly workspace', 'Air conditioning', 'Fridge'],
        host: {
            isPro: false,
            name: 'Alice',
            avatarUrl: '/img/avatar_alice.png'
        },
        isPremium: true,
        isFavorite: false,
        rating: 4.8,
        bedrooms: 2,
        maxAdults: 3,
    },
    {
        id: '6',
        title: 'Квартира в историческом здании',
        description: 'Уникальная квартира с аутентичным интерьером. Высокие потолки, паркет, камин. В шаге — Гран-Плас и шоколадные бутики.',
        type: 'apartment',
        price: 145,
        images: ['/img/apartment6_1.jpg', '/img/apartment6_2.jpg', '/img/apartment6_3.jpg', '/img/apartment6_4.jpg', '/img/apartment6_5.jpg', '/img/apartment6_6.jpg'],
        city: {
            name: 'Brussels',
            location: {
                latitude: 50.8503,
                longitude: 4.3517,
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
            avatarUrl: '/img/avatar_bob.png'
        },
        isPremium: false,
        isFavorite: true,
        rating: 4.3,
        bedrooms: 1,
        maxAdults: 2,
    },
    {
        id: '7',
        title: 'Современный лофт с видом на канал',
        description: 'Лофт в центре города с панорамными окнами и деревянными балками. Отличный выбор для молодёжной пары. Есть кухня и велопарковка.',
        type: 'hotel',
        price: 215,
        images: ['/img/apartment7_1.jpg', '/img/apartment7_2.jpg', '/img/apartment7_3.jpg', '/img/apartment7_4.jpg', '/img/apartment7_5.jpg', '/img/apartment7_6.jpg'],
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.36922706697589,
                longitude: 4.906007720330443,
                zoom: 13
            }
        },
        location: {
            latitude: 52.3702,
            longitude: 4.8952,
            zoom: 16
        },
        goods: ['Towels', 'Fridge'],
        host: {
            isPro: false,
            name: 'Sofiya',
            avatarUrl: '/img/avatar_sofiya.png'
        },
        isPremium: false,
        isFavorite: false,
        rating: 3.9,
        bedrooms: 1,
        maxAdults: 1,
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
            latitude: 52.371,
            longitude: 4.896,
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
        id: '9',
        title: 'Квартира у озера Альстер',
        description: 'Светлые апартаменты с видом на воду. Пешком можно дойти до центра города и железнодорожного вокзала. Полностью оборудованная кухня, Wi-Fi и место для работы.',
        type: 'room',
        price: 155,
        images: ['/img/apartment9_1.jpg', '/img/apartment9_2.jpg', '/img/apartment9_3.jpg', '/img/apartment9_4.jpg', '/img/apartment9_5.jpg', '/img/apartment9_6.jpg',],
        city: {
            name: 'Hamburg',
            location: {
                latitude: 53.5511,
                longitude: 9.9937,
                zoom: 13
            }
        },
        location: {
            latitude: 53.55,
            longitude: 10.001,
            zoom: 16
        },
        goods: ['Washer', 'Fridge', 'Laptop friendly workspace'],
        host: {
            isPro: true,
            name: 'Bob',
            avatarUrl: '/img/avatar_bob.png'
        },
        isPremium: true,
        isFavorite: false,
        rating: 4.0,
        bedrooms: 1,
        maxAdults: 2,
    },
    {
        id: '10',
        title: 'Бюджетная квартира в Гамбурге',
        description: 'Уютная квартира с базовым набором удобств, идеально подойдёт для студентов и экономных путешественников. Расположена рядом с остановками и супермаркетом.',
        type: 'hotel',
        price: 200,
        images: ['/img/apartment10_1.jpg', '/img/apartment10_2.jpg', '/img/apartment10_3.jpg', '/img/apartment10_4.jpg', '/img/apartment10_5.jpg', '/img/apartment10_6.jpg',],
        city: {
            name: 'Hamburg',
            location: {
                latitude: 53.5511,
                longitude: 9.9937,
                zoom: 13
            }
        },
        location: {
            latitude: 53.551,
            longitude: 10.002,
            zoom: 16
        },
        goods: ['Breakfast', 'Laptop friendly workspace', 'Fridge'],
        host: {
            isPro: true,
            name: 'Sofiya',
            avatarUrl: '/img/avatar_sofiya.png'
        },
        isPremium: true,
        isFavorite: true,
        rating: 5.0,
        bedrooms: 2,
        maxAdults: 2,
    }
];

export { offers };