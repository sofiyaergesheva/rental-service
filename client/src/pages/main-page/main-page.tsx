import { Link } from "react-router-dom";
import { CitiesCardList } from "../../components/cities-card-list/CitiesCardList";
import { OffersList } from "../../types/offer";
import Map from "../../components/map/map";
import React, { useState } from 'react';
import { useAppSelector } from "../../hooks";
import { SortOffer } from "../../types/sort";
import { SortOptions } from "../../components/sort-options/sort-options";
import { sortOffersByType } from "../../utils";
import { BlockName } from "../../const";
import { CitiesList } from "../../components/cities-list/CitiesList";
import { getOffersByCity } from "../../utils";

function MainPage() {
    const selectedCity = useAppSelector((state) => state.city);
    const offersList = useAppSelector((state) => state.offers);
    const selectedCityOffers = getOffersByCity(selectedCity?.name, offersList);
    const rentalOffersCount = selectedCityOffers.length;

    const [activeSort, setActiveSort] = useState<SortOffer>('Popular');

    const [selectedOffer, setSelectedOffer] = useState<OffersList | null>(null);
    const handleOfferHover = (id: string) => {
        const offer = offersList.find((o) => o.id === id) || null;
        setSelectedOffer(offer);
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
                        <CitiesList selectedCity={selectedCity} />
                    </section>
                </div>
                <div className="cities">
                    <div className="cities__places-container container">
                        <section className="cities__places places">
                            <h2 className="visually-hidden">Places</h2>
                            <b className="places__found">{rentalOffersCount} places to stay in {selectedCity?.name}</b>
                            <SortOptions activeSorting={activeSort} onChange={(newSorting) => setActiveSort(newSorting)} />
                            <CitiesCardList block={BlockName.AllPages} offersList={sortOffersByType(selectedCityOffers, activeSort)}
                                onListItemHover={handleOfferHover} />
                        </section>
                        <div className="cities__right-section">
                            <section className="cities__map map">
                                {selectedCity && (
                                    <Map
                                        city={selectedCity}
                                        offers={offersList}
                                        selectedOffer={selectedOffer}
                                        onMarkerClick={handleOfferHover}
                                    />
                                )}
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export { MainPage };
