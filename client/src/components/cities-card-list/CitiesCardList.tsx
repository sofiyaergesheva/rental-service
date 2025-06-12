import { OffersList } from "../../types/offer";
import { CitiesCard } from "../cities-card/cities-card";

type CitiesCardListProps = {
    offersList: OffersList[];
    block: string;
    onListItemHover: (id: string) => void;
};

function CitiesCardList({ offersList, block, onListItemHover }: CitiesCardListProps) {
    return (
        <div className={`places__list ${block}`}>
            {offersList.map((item) => (
                <CitiesCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    type={item.type}
                    price={item.price}
                    previewImage={item.previewImage}
                    isPremium={item.isPremium}
                    rating={item.rating}
                    onHover={onListItemHover}
                />
            ))}
        </div>
    );
}

export { CitiesCardList };