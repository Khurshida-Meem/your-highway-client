import PlaceIcon from "@mui/icons-material/Place";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import StarsIcon from "@mui/icons-material/Stars";
// import LuggageIcon from "@mui/icons-material/Luggage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import CommentIcon from "@mui/icons-material/Comment";
import StyleIcon from "@mui/icons-material/Style";

export const menu = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    link: "/dashboard/user",
  },
  {
    name: "Bookings",
    icon: StyleIcon,
    link: "/dashboard/bookings",
    access: "admin",
  },
  {
    name: "My Reviews",
    icon: StarsIcon,
    link: "/dashboard/my-reviews",
  },
  {
    name: "Blog",
    icon: DescriptionIcon,
    link: "/dashboard/blog",
  },
  {
    name: "My Comments",
    icon: CommentIcon,
    link: "/dashboard/comment",
  },
];

export const adminMenu = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    link: "/dashboard",
    access: "admin",
  },
  {
    name: "Places",
    icon: PlaceIcon,
    link: "/dashboard/manage-places",
    access: "admin",
  },
  {
    name: "Make Admin",
    icon: AdminPanelSettingsIcon,
    link: "/dashboard/make-admin",
    access: "admin",
  },
  {
    name: "Bookings",
    icon: StyleIcon,
    link: "/dashboard/bookings",
    access: "admin",
  },
  {
    name: "Reviews",
    icon: StarsIcon,
    link: "/dashboard/reviews",
    access: "admin",
  },
  {
    name: "Blog",
    icon: DescriptionIcon,
    link: "/dashboard/blog",
  },
  {
    name: "Comments",
    icon: CommentIcon,
    link: "/dashboard/comment",
  },
];