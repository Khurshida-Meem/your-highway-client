import DonutSmallRoundedIcon from '@mui/icons-material/DonutSmallRounded';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaidIcon from '@mui/icons-material/Paid';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export const menu = [
    {
        name: 'Dashboard',
        icon: DonutSmallRoundedIcon,
        link: '/dashboard'
    },
    {
        name: 'Places',
        icon: PaidIcon,
        link: '/dashboard/manage-places'
    },
    {
        name: 'Packages',
        icon: SupportAgentIcon,
        link: '/dashboard/support'
    },
    {
        name: 'Bookings',
        icon: MenuBookIcon,
        link: '/',
    },
    {
        name: 'My Bookings',
        icon: PeopleAltIcon,
        link: '/',
    },
    {
        name: 'Make Admin',
        icon: PeopleAltIcon,
        link: '/',
    },
    {
        name: 'Guides',
        icon: PeopleAltIcon,
        link: '/',
    },
    {
        name: 'Add Hotels',
        icon: PeopleAltIcon,
        link: '/',
    },
    {
        name: 'Users',
        icon: PeopleAltIcon,
        link: '/',
    },
    {
        name: 'My Luggage',
        icon: PeopleAltIcon,
        link: '/',
    },
]