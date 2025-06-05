import { FavoriteCard } from "../favorite-card/favorite-card";
import { OffersList } from "../../types/offer";

type FavoritesCardListProps = {
    offersList: OffersList[];
};

function FavoriteCardList({ offersList }: FavoritesCardListProps) {
    const offersByCity = offersList.reduce<Record<string, OffersList[]>>((acc, offer) => {
        const city = offer.city.name;
        if (!acc[city]) {
            acc[city] = [];
        }
        acc[city].push(offer);
        return acc;
    }, {});

    return (
        <ul className="favorites__list">
            {Object.entries(offersByCity).map(([city, offers]) => (
                <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                            <a className="locations__item-link" href="#">
                                <span>{city}</span>
                            </a>
                        </div>
                    </div>
                    <div className="favorites__places">
                        {offers.map((offer) => (
                            <FavoriteCard
                                key={offer.id}
                                id={offer.id}
                                title={offer.title}
                                type={offer.type}
                                price={offer.price}
                                isPremium={offer.isPremium}
                                previewImage={offer.previewImage}
                                rating={offer.rating}
                            />
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export { FavoriteCardList };
