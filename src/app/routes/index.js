import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";

import Login from "../view/auth/Login";

import Home from "../view/home/dashboard/Dashboard";
import Users from "../view/admin/users/Users";
import NewUser from "../view/admin/users/AddUser";
import UserDetail from "../view/admin/users/UserDetail";
import EditUser from "../view/admin/users/EditUser";
import Departments from "../view/admin/department/Departments";
import AddDepartment from "../view/admin/department/AddDepartment";
import EditDepartment from "../view/admin/department/EditDepartment";
import Trash from "../view/admin/trash/Trash";
import Files from "../view/users/files/Files";
import NewFile from "../view/users/files/NewFile";
import FileDetails from "../view/users/files/FileDetails";
import EditFile from "../view/users/files/EditFile";
import Mails from "../view/users/mails/Mails";
import IncomingMails from "../view/users/mails/IncomingMails";
import OutgoingMails from "../view/users/mails/OutgoingMails";
import MailDetails from "../view/users/mails/MailDetails";
import NewMail from "../view/users/mails/NewMail";
import EditMail from "../view/users/mails/EditMail";
import UserProfile from "../view/users/profile/UserProfile";
import EditUserProfile from "../view/users/profile/EditUser";
import ForgotPassword from "../view/users/profile/ForgotPassword";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/auth/login",
    component: Login,
    layout: BlankLayout,
    isProtected: false,
  },
  {
    path: "/auth/forgotpassword",
    component: ForgotPassword,
    layout: BlankLayout,
    isProtected: true,
  },

  {
    path: "/user/profile/me",
    component: UserProfile,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/user/profile/edit/me",
    component: EditUserProfile,
    layout: MainLayout,
    isProtected: true,
  },

  {
    path: "/admin/users",
    component: Users,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/admin/new/user",
    component: NewUser,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/admin/active/user/:user_id",
    component: UserDetail,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/admin/edit/user/:user_id",
    component: EditUser,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/admin/edit/user/:user_id",
    component: EditUser,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/admin/user/:user_id",
    component: UserDetail,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/admin/departments",
    component: Departments,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/admin/department/:id",
    component: Departments,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/admin/edit/department/:id",
    component: EditDepartment,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/admin/new/department",
    component: AddDepartment,
    layout: MainLayout,
    isProtected: true,
  },

  {
    path: "/users/files",
    component: Files,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/users/file/:id",
    component: FileDetails,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/users/edit/file/:id",
    component: EditFile,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/users/new/file",
    component: NewFile,
    layout: MainLayout,
    isProtected: true,
  },

  {
    path: "/users/mails",
    component: Mails,
    layout: MainLayout,
    isProtected: true,
  },

  {
    path: "/users/incoming/mails",
    component: IncomingMails,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/users/outgoing/mails",
    component: OutgoingMails,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/users/new/mail",
    component: NewMail,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/users/edit/mail/:id",
    component: EditMail,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/users/mail/:id",
    component: MailDetails,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/admin/trash/",
    component: Trash,
    layout: MainLayout,
    isProtected: true,
  },
];

export default routes;
