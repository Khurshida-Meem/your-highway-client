import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PlaceIcon from "@mui/icons-material/Place";
import BookIcon from "@mui/icons-material/Book";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import KayakingIcon from "@mui/icons-material/Kayaking";
import ApartmentIcon from "@mui/icons-material/Apartment";
import StarsIcon from "@mui/icons-material/Stars";
import LuggageIcon from "@mui/icons-material/Luggage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";

export const menu = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    link: "/dashboard/user",
  },
  {
    name: "Packages",
    icon: SupportAgentIcon,
    link: "/dashboard/support",
  },
  {
    name: "My Bookings",
    icon: PeopleAltIcon,
    link: "/",
  },
  {
    name: "My Luggage",
    icon: LuggageIcon,
    link: "/dashboard/luggage",
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
    name: "Bookings",
    icon: BookIcon,
    link: "/",
    access: "admin",
  },
  {
    name: "Make Admin",
    icon: AdminPanelSettingsIcon,
    link: "/dashboard/make-admin",
    access: "admin",
  },
  {
    name: "Guides",
    icon: KayakingIcon,
    link: "/",
    access: "admin",
  },
  {
    name: "Hotels",
    icon: ApartmentIcon,
    link: "/dashboard/hotels",
    access: "admin",
  },
  {
    name: "Users",
    icon: PeopleAltIcon,
    link: "/",
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
];