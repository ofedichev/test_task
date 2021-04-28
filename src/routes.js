import { CARD_ROUTE, MAIN_ROUTE } from "./utils/consts"
import CardPage from "./pages/CardPage";
import MainPage from "./pages/MainPage";

export const routes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: CARD_ROUTE + '/:characterId',
        Component: CardPage
    }
]