import DonutSmallRoundedIcon from '@mui/icons-material/DonutSmallRounded';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaidIcon from '@mui/icons-material/Paid';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export const menu = [
  {
    name: "Dashboard",
    icon: DonutSmallRoundedIcon,
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
    icon: PeopleAltIcon,
    link: "/dashboard/luggage",
  },
  {
    name: "My Reviews",
    icon: PeopleAltIcon,
    link: "/dashboard/my-reviews",
  },
];

export const adminMenu = [
  {
    name: "Dashboard",
    icon: DonutSmallRoundedIcon,
    link: "/dashboard",
    access: "admin",
  },
  {
    name: "Places",
    icon: PaidIcon,
    link: "/dashboard/manage-places",
    access: "admin",
  },
  {
    name: "Bookings",
    icon: MenuBookIcon,
    link: "/",
    access: "admin",
  },
  {
    name: "Make Admin",
    icon: PeopleAltIcon,
    link: "/",
    access: "admin",
  },
  {
    name: "Guides",
    icon: PeopleAltIcon,
    link: "/",
    access: "admin",
  },
  {
    name: "Add Hotels",
    icon: PeopleAltIcon,
    link: "/",
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
    icon: PeopleAltIcon,
    link: "/dashboard/reviews",
    access: "admin",
  },
];