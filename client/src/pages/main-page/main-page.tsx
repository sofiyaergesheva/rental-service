import { Link } from "react-router-dom";
import { CitiesCardList } from "../../components/cities-card-list/CitiesCardList";
import { OffersList } from "../../types/offer";
import { useAppSelector } from "../../hooks";
import { useState } from "react";
import { CitiesList } from "../../components/cities-list/citiesList";

// TODO ошибки 

function MainPage() {
    const selectedCity = useAppSelector((state) => state.city);
    const offersList = useAppSelector((state) => state.offers);
    const selectedCityOffers = getOffersByCity(selectedCity?.name, offersList);
    const rentalOffersCount = selectedCityOffers.length;
    const [selectedOffer, setSelectedOffer] = useState<OffersList | undefined>(undefined);
    const handleListItemHover = (offerId: string) => {
        const currentOffer = offersList.find((offer) => offer.id === offerId);
        setSelectedOffer(currentOffer);
    };

    return (
        <div className="page page--gray page--main">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <Link className="header__logo-link header__logo-link--active" to="/">
                                <img className="header__logo" src="img/logo.svg" alt="Rent service logo" width="81" height="41" />
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

            <main className="page__main page__main--index">
                <h1 className="visually-hidden">Cities</h1>
                <div className="tabs">
                    <section className="locations container">
                        <CitiesList selectedCity={selectedCity}/>
                    </section>
                </div>
                <div className="cities">
                    <div className="cities__places-container container">
                        <section className="cities__places places">
                            <h2 className="visually-hidden">Places</h2>
                            <b className="places__found">{rentalOffersCount} places to stay in Amsterdam</b>
                            <form className="places__sorting" action="#" method="get">
                                <span className="places__sorting-caption">Sort by</span>
                                <span className="places__sorting-type" tabIndex={0}>
                                    Popular
                                    <svg className="places__sorting-arrow" width="7" height="4">
                                        <use href="#icon-arrow-select"></use>
                                    </svg>
                                </span>
                                <ul className="places__options places__options--custom places__options--opened">
                                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                                    <li className="places__option" tabIndex={0}>Top rated first</li>
                                </ul>
                            </form>
                            <div className="cities__places-list places__list tabs__content">
                                <CitiesCardList offersList={offersList} />
                            </div>
                        </section>
                        <div className="cities__right-section">
                            <section className="cities__map map"></section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export { MainPage };
