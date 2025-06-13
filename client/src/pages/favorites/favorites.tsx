import { Link } from "react-router-dom";
import { FavoriteCardList } from "../../components/favorite-card-list/FavoriteCardList";
import { OffersList } from "../../types/offer";

type FavoritesProps = {
    offersList: OffersList[];
};

function Favorites({ offersList }: FavoritesProps) {
    return (
        <div className="page">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <Link className="header__logo-link" to="/">
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

            <main className="page__main page__main--favorites">
                <div className="page__favorites-container container">
                    <section className="favorites">
                        <h1 className="favorites__title">Saved listing</h1>
                        <FavoriteCardList offersList={offersList} />
                    </section>
                </div>
            </main>
            <footer className="footer container">
                <Link className="header__logo-link" to="/">
                    <img className="header__logo" src="img/logo.svg" alt="Rent service logo" width="64" height="33" />
                </Link>
            </footer>
        </div>
    );
}

export { Favorites };