import { Link } from "react-router-dom";
import { FullOffer } from "../../types/offer";
import { useParams } from "react-router-dom";
import { NotFound } from "../not-found/not-found";
import { CommentForm } from "../../components/comment-form/comment-form";
import { ReviewList } from "../../components/review-list/ReviewList";
import { useState } from "react";
import { OffersList } from "../../types/offer";
import Map from "../../components/map/map";
import { CitiesCardList } from "../../components/cities-card-list/CitiesCardList";
import { BlockName } from "../../const";
import { useAppSelector } from "../../hooks";

type OfferProps = {
    offers: FullOffer[];
    offersList: OffersList[];
};

function Offer({ offers, offersList }: OfferProps) {
    const selectedCity = useAppSelector((state) => state.city);
    const params = useParams();
    const [selectedOffer, setSelectedOffer] = useState<OffersList | null>(null);
    const handleOfferHover = (id: string) => {
        const offer = offersList.find((o) => o.id === id) || null;
        setSelectedOffer(offer);
    };
    const offer = offers.find((item) => item.id === params.id);
    if (!offer) {
        return <NotFound />;
    }
    const offersListNearby = offersList
        .filter((item) =>
            item.city.name === offer.city.name &&
            item.id !== offer.id
        )
        .slice(0, 3);
    return (
        <div className="page">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <Link className="header__logo-link" to="/">
                                <img className="header__logo" src="/img/logo.svg" alt="Rent service logo" width="81" height="41" />
                            </Link>
                        </div>
                        <nav className="header__nav">
                            <ul className="header__nav-list">
                                <li className="header__nav-item user">
                                    <a className="header__nav-link header__nav-link--profile" href="#">
                                        <div className="header__avatar-wrapper user__avatar-wrapper">
                                        </div>
                                        <span className="header__user-name user__name">Myemail@gmail.com</span>
                                        <span className="header__favorite-count">3</span>
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a className="header__nav-link" href="#">
                                        <span className="header__signout">Sign out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="page__main page__main--offer">
                <section className="offer">
                    <div className="offer__gallery-container container">
                        <div className="offer__gallery">
                            {offer.images.map((image, index) => (
                                <div className="offer__image-wrapper" key={index}>
                                    <img className="offer__image" src={image} alt={`Photo ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="offer__container container">
                        <div className="offer__wrapper">
                            {offer.isPremium ? (
                                <div className="offer__mark">
                                    <span>Premium</span>
                                </div>) : null}
                            <div className="offer__name-wrapper">
                                <h1 className="offer__name">
                                    {offer.title}
                                </h1>
                                <button className="offer__bookmark-button button" type="button">
                                    <svg className="offer__bookmark-icon" width="31" height="33">
                                        <use href="#icon-bookmark"></use>
                                    </svg>
                                    <span className="visually-hidden">To bookmarks</span>
                                </button>
                            </div>
                            <div className="offer__rating rating">
                                <div className="offer__stars rating__stars">
                                    <span style={{ width: "80%" }}></span>
                                    <span className="visually-hidden">Rating</span>
                                </div>
                                <span className="offer__rating-value rating__value">{offer.rating}</span>
                            </div>
                            <ul className="offer__features">
                                <li className="offer__feature offer__feature--entire">
                                    {offer.type}
                                </li>
                                <li className="offer__feature offer__feature--bedrooms">
                                    {offer.bedrooms} Bedrooms
                                </li>
                                <li className="offer__feature offer__feature--adults">
                                    Max {offer.maxAdults} adults
                                </li>
                            </ul>
                            <div className="offer__price">
                                <b className="offer__price-value">&euro;{offer.price}</b>
                                <span className="offer__price-text">&nbsp;night</span>
                            </div>
                            <div className="offer__inside">
                                <h2 className="offer__inside-title">What&apos;s inside</h2>
                                <ul className="offer__inside-list">
                                    {offer.goods.map((item) => (
                                        <li className="offer__inside-item" key={item}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="offer__host">
                                <h2 className="offer__host-title">Meet the host</h2>
                                <div className="offer__host-user user">
                                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                                        <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74"
                                            alt="Host avatar" />
                                    </div>
                                    <span className="offer__user-name">
                                        {offer.host.name}
                                    </span>
                                    <span className="offer__user-status">
                                        {offer.host.isPro ? 'Pro' : ''}
                                    </span>
                                </div>
                                <div className="offer__description">
                                    <p className="offer__text">
                                        {offer.description}
                                    </p>
                                </div>
                            </div>
                            <section className="offer__reviews reviews">
                                <ReviewList />
                                <CommentForm />
                            </section>
                        </div>
                    </div>
                    <section className="offer__map map">
                        {selectedCity && (
                            <Map
                                city={selectedCity}
                                offers={offersList}
                                selectedOffer={selectedOffer}
                                onMarkerClick={handleOfferHover}
                            />
                        )}
                    </section>
                </section>
                <div className="container">
                    <section className="near-places places">
                        <h2 className="near-places__title">Other places in the neighbourhood</h2>
                        <div className="near-places__list places__list">
                            <CitiesCardList
                                offersList={offersListNearby}
                                block={BlockName.NearOfferList}
                                onListItemHover={handleOfferHover}
                            />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export { Offer };