import { MainPage } from "../../pages/main-page/main-page";
import { Favorites } from "../../pages/favorites/favorites";
import { Login } from "../../pages/login/login";
import { Offer } from "../../pages/offer/offer";
import { NotFound } from "../../pages/not-found/not-found";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { JSX } from "react";

function App({ rentalOffersCount }: AppMainPageProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Main} element={<MainPage rentalOffersCount={rentalOffersCount} />} />
                <Route path={AppRoute.Login} element={<Login />} />
                <Route path={AppRoute.Favorites} element={<Favorites />} />
                <Route path={AppRoute.Offer} element={<Offer />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export { App };