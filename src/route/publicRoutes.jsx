import { GoogleOAuthProvider } from "@react-oauth/google"


import LandingPage from "../pages/landing"


import Navbar from "../components/navbar"



export const publicRoutes = [
    {
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