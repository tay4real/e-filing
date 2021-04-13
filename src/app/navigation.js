const AdminMenu_Users = {
  title: { text: "Users" },
  submenu: [
    { text: "Users List", path: "/admin/users" },
    { text: "Add User", path: "/admin/new/user" },
  ],
};

const AdminMenu_Department = {
  title: { text: "Departments" },
  submenu: [
    { text: "Departments List", path: "/admin/departments" },
    { text: "Add Department", path: "/admin/new/department" },
  ],
};

const AdminMenu_Trash = {
  title: { text: "Trash Audit" },
  submenu: [{ text: "Trash Audit Trail", path: "/admin/trash/" }],
};

const UserMenu_Mails = {
  title: { text: "Mails" },
  submenu: [
    { text: "Mails List", path: "/users/mails" },
    { text: "New Mail", path: "/users/new/mail" },
  ],
};

const UserMenu_Files = {
  title: { text: "Files" },
  submenu: [
    { text: "Files List", path: "/users/files" },
    { text: "New File", path: "/users/new/file" },
  ],
};

const UserMenu_Profile = {
  title: { text: "User Profile" },
  submenu: [
    { text: "My Profile", path: "/user/profile/me" },
    { text: "Edit Profile", path: "/user/profile/edit/me" },
  ],
};

export const StandardMenu = [UserMenu_Mails, UserMenu_Files, UserMenu_Profile];

export const AdminMenu = [
  AdminMenu_Users,
  AdminMenu_Department,
  AdminMenu_Trash,
];
