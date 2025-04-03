import { lazy } from "react"
const Competition = lazy(()=>import("../pages/admin/competitions"))
import Sidebar from "../pages/admin/sidebar"
const Users = lazy(()=>import("../pages/admin/users"));
const CompetetionDetail = lazy(()=>import("../pages/admin/competetionDetail"))
const Submission = lazy(()=>import("../pages/admin/submission"))
import UserSidebar from "../pages/user/sidebar"
import UserCompetition from "../pages/user/competetion"
import Setting from "../pages/user/setting"
import Result from "../pages/user/result"
const Feedback = lazy(()=>import("../pages/admin/feedbacks"))
const Vender = lazy(()=>import("../pages/admin/vender"))
const Tender = lazy(()=>import("../pages/admin/tender"))
const TenderSubmission =  lazy(()=>import("../pages/admin/tender-submission"))
import Profile from "../pages/vender/profile"
import ActiveTender from "../pages/vender/active-tender"
import TenderSubmissionPage from "../pages/vender/submission"
const AdminGallery = lazy(()=>import("../pages/admin/gallery"));
const AdminBlog = lazy(()=>import("../pages/admin/blog"));
const AdminCarrier = lazy(()=>import("../pages/admin/carrier"));
const AdminSetting = lazy(()=>import("../pages/admin/setting"))

export const adminRoutes = [
    {
        path:'/dashboard',
        element:<Sidebar><Users/></Sidebar>,
    },
    {
        path:'/competition',
        element:<Sidebar><Competition/></Sidebar>,
    },
    {
        path:'/competition/:id',
        element:<Sidebar><CompetetionDetail/></Sidebar>
    },
    {
        path:'/submission',
        element:<Sidebar><Submission/></Sidebar>,
    },
    {
        path:'/feedback',
        element:<Sidebar><Feedback/></Sidebar>,
    },
    {
        path:'/vendors',
        element:<Sidebar><Vender/></Sidebar>,
    },
    {
        path:'/tenders',
        element:<Sidebar><Tender/></Sidebar>,
    },
    {
        path:'/tender-submission',
        element:<Sidebar><TenderSubmission/></Sidebar>,
    },
    {
        path:'/setting',
        element:<Sidebar><AdminSetting/></Sidebar>,
    },
    {
        path:'/admin/career',
        element:<Sidebar><AdminCarrier/></Sidebar>,
    },
    {
        path:'/admin/blog',
        element:<Sidebar><AdminBlog/></Sidebar>,
    },
    {
        path:'/admin/gallery',
        element:<Sidebar><AdminGallery/></Sidebar>,
    },
]

export const userRoutes = [
    {
        path:'/dashboard',
        element:<UserSidebar type="user"><UserCompetition/></UserSidebar>,
    },
    {
        path:'/setting',
        element:<UserSidebar type="user"><Setting/></UserSidebar>,
    },
    {
        path:'/result',
        element:<UserSidebar type="user"><Result/></UserSidebar>,
    },
]

export const venderRoutes = [
    {
        path:'/dashboard',
        element:<UserSidebar type="vender"><Profile /></UserSidebar>,
    },
    {
        path:'/active-tender',
        element:<UserSidebar type="vender"><ActiveTender /></UserSidebar>,
    },
    {
        path:'/submission',
        element:<UserSidebar type="vender"><TenderSubmissionPage /></UserSidebar>,
    }
]
