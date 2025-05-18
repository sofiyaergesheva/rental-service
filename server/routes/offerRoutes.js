import { Router } from "express";
import upload from '../middleware/upload.js';
import { createOffer, getAllOffers, getFullOffer, getFavoriteOffers, toggleFavorite } from "../controllers/offerController.js";

const router = new Router();
router.get('/offers', getAllOffers);
router.post('/offers', upload.fields([
    { name: 'previewImage', maxCount: 1 },
    { name: 'photos', maxCount: 6 }
]), createOffer);
router.get('/offers/:id', getFullOffer);
router.get('/favorite', getFavoriteOffers);
router.post('/favorite/:offerId/:status', toggleFavorite);

export default router;