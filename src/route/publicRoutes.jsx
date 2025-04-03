import { GoogleOAuthProvider } from "@react-oauth/google"
import AdminLogin from "../pages/admin/admin-login"
import UserLogin from "../pages/user/user-login"
import UserSignUp from "../pages/user/user-signup"
import LandingPage from "../pages/landing"
import ResetPassword from "../pages/user/reset-password"
import ResetPassRequest from "../pages/user/resetPass"
import PrivacyPolicy from "../pages/user/privacy-policy"
import ForgotPassword from "../pages/forgotPassword"
import Contact from "../pages/contact"
import Navbar from "../components/navbar"
import Carrier from "../pages/carrier"
import Tender from "../pages/tender"
import VenderLogin from "../pages/vender/login"
import Blog from "../pages/blog"
import Gallery from "../pages/gallery"
import AboutUs from "../pages/about-us"
import Art from "../pages/Departments/Art"
import Counselling from "../pages/Departments/Counselling"
import Dance from "../pages/Departments/Dance"
import Occupational from "../pages/Departments/Occupational"
import Prosthetics from "../pages/Departments/Prosthetics"
import SignLanguage from "../pages/Departments/SignLanguage"
import SpecialE from "../pages/Departments/SpecialE"
import Vocational from "../pages/Departments/Vocational"
import Physiotherapy from "../pages/Departments/Physiotherapy"
import Psychology from "../pages/Departments/Psychology"
import Audio from "../pages/Departments/Audio"

export const publicRoutes = [
    {
        path:'/art',
        element:<Navbar><Art/></Navbar>
    },
    {
        path:'/dance',
        element:<Navbar><Dance/></Navbar>
    },
    {
        path:'/audio',
        element:<Navbar><Audio/></Navbar>
    },
    {
        path:'/counselling',
        element:<Navbar><Counselling/></Navbar>
    },
    {
        path:'/occupational',
        element:<Navbar><Occupational/></Navbar>
    },
    {
        path:'/prosthetics',
        element:<Navbar><Prosthetics/></Navbar>
    },
    {
        path:'/sign-language',
        element:<Navbar><SignLanguage/></Navbar>
    },
    {
        path:'/special-education',
        element:<Navbar><SpecialE/></Navbar>
    },
    {
        path:'/vocational',
        element:<Navbar><Vocational/></Navbar>
    },
    {
        path:'/psychology',
        element:<Navbar><Psychology/></Navbar>
    },
    {
        path:'/physiotherapy',
        element:<Navbar><Physiotherapy/></Navbar>
    },{
        path:'/',
        element:<LandingPage/>
    },
    {
        path:'/*',
        element:<div>404 Page Not Found</div>
    },
    {
        path:'/forgot-password',
        element:<ForgotPassword/>
    },
    {
        path:'/privacy-policy',
        element:<PrivacyPolicy/>
    },
    {
        path:'/contact-us',
        element:<Navbar><Contact/></Navbar>
    }, 
    {
        path:'/about-us',
        element:<Navbar><AboutUs/></Navbar>
    }, 
    {
        path:'/career',
        element:<Navbar><Carrier/></Navbar>
    } ,
    {
        path:'/tender',
        element:<Navbar><Tender/></Navbar>
    },
    {
        path:'/blog',
        element:<Navbar><Blog/></Navbar>
    },
    {
        path:'/gallery',
        element:<Navbar><Gallery/></Navbar>
    },
    

]

export const authRoutes = [
    {
        path:'/user-login',
        element:<GoogleOAuthProvider clientId='628932087895-3derv1ft2t9lq3uvie425s9ulmgni5a4.apps.googleusercontent.com'><UserLogin /></GoogleOAuthProvider>
    },
    {
        path:'/admin-login',
        element:<AdminLogin/>
    },
    {
        path:'/user-signup',
        element:<GoogleOAuthProvider clientId='628932087895-3derv1ft2t9lq3uvie425s9ulmgni5a4.apps.googleusercontent.com'><UserSignUp /></GoogleOAuthProvider>
    },
    {
        path:'/vender-login',
        element:<VenderLogin/>
    },
]