import { adaptOfferToClient, adaptFullOfferToClient } from '../adapters/offerAdapter.js';
import { Offer } from '../models/offer.js'
import { User } from '../models/user.js';

async function getAllOffers(req, res, next) {
    try {
        const offers = await Offer.findAll();
        const adaptedOffers = offers.map(adaptOfferToClient);
        res.status(200).json(adaptedOffers);
    } catch (error) {
        console.error('Не удалось получить список предложений: ', error);
    }
}

async function getFullOffer(req, res, next) {
    try {
        const { id } = req.params;

        const offer = await Offer.findByPk(id, {
            include: {
                model: User,
                as: 'author'
            }
        });

        if (!offer) {
            return next(ApiError.badRequest('Offer not found'));
        }

        const adaptedOffer = adaptFullOfferToClient(offer, offer.author);
        res.status(200).json(adaptedOffer);
    } catch (error) {
        console.error('Ошибка при получении полного оффера: ', error);
        next(ApiError.internal('Ошибка при получении полного оффера'));
    }
}

export async function createOffer(req, res, next) {
    try {
        const {
            title, description, publishDate, city,
            isPremium, isFavorite, rating, type, rooms, guests, price,
            features, commentsCount, latitude, longitude, userId
        } = req.body;


        if (!req.files?.previewImage || req.files.previewImage.length === 0) {
            return next(ApiError.badRequest('Превью изображение обязательно для загрузки'));
        }

        const previewImagePath = `/static/${req.files.previewImage[0].filename}`;

        let processedPhotos = [];
        if (req.files?.photos) {
            processedPhotos = req.files.photos.map(file => `/static/${file.filename}`);
        }

        let parsedFeatures = [];
        if (features) {
            try {
                parsedFeatures = typeof features === 'string' ? JSON.parse(features) : features;
            } catch {
                parsedFeatures = features.split(',');
            }
        }

        const offer = await Offer.create({
            title,
            description,
            publishDate,
            city,
            previewImage: previewImagePath,
            photos: processedPhotos,
            isPremium,
            isFavorite,
            rating,
            type,
            rooms,
            guests,
            price,
            features: parsedFeatures,
            commentsCount,
            latitude,
            longitude,
            authorId: userId
        });

        return res.status(201).json(offer);
    } catch (error) {
        next(ApiError.internal('Не удалось добавить предложение: ' + error.message));
    }
}

const toggleFavorite = async (req, res, next) => {
    try {
        const { offerId, status } = req.params;

        const offer = await Offer.findByPk(offerId);
        if (!offer) {
            return next(ApiError.notFound('Предложение не найдено'));
        }

        offer.isFavorite = status === '1';
        await offer.save();

        res.json(offer);
    } catch (error) {
        next(ApiError.internal('Ошибка при обновлении статуса избранного'));
    }
};

const getFavoriteOffers = async (req, res, next) => {
    try {
        const favoriteOffers = await Offer.findAll({
            where: { isFavorite: true }
        });

        const adapted = favoriteOffers.map(adaptOfferToClient);
        res.json(adapted);
    } catch (error) {
        console.error(error);
        next(ApiError.internal('Не удалось получить избранные предложения'));
    }
};

export { getAllOffers, getFullOffer, getFavoriteOffers, toggleFavorite }