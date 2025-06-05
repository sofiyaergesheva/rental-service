import { Review } from "../types/review";

const reviews: Review[] = [
    {
        'id': '1',
        'comment': 'The room was spacious and clean. The pool looked nothing like the photos.',
        'date': '2023-06-29T21:00:00.456Z',
        'rating': 4,
        'user': {
            'name': 'Alice',
            'avatarUrl': 'img/avatar-angelina.jpg',
            'isPro': true
        }
    }
];

export { reviews };