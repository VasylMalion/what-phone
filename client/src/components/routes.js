// components
import UserCab from "./pages/user/user";
import YourPhones from "./pages/your-phones/your-phones";
import {Home} from "./pages/home/home";
import ChoosePhone from "./pages/choosePhone/choosePhone";
import {OnePhone} from "./pages/onePhone/onePhone";
import Auth from "./pages/auth/auth";
import Registration from "./pages/registration/registration";
import FoundedPhones from "./pages/foundedPhones/foundedPhones";

export const authRoutes = [
    {
        path: '/cabinet',
        Component: UserCab
    },
    {
        path: '/your-phones',
        Component: YourPhones
    }
]

export const publicRoutes = [
    {
        path: '/',
        Component: Home
    },
    {
        path: '/find-phone',
        Component: ChoosePhone
    },
    {
        path: '/find-phone:id',
        Component: OnePhone
    },
    {
        path: '/auth',
        Component: Auth
    },
    {
        path: '/registration',
        Component: Registration
    },
    {
        path: '/founded-phones',
        Component: FoundedPhones
    }
]