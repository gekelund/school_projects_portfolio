import { faHome, faUser, faGraduationCap, faHardHat, faAddressBook, faBrain, faHistory } from '@fortawesome/free-solid-svg-icons';

export const navLinks = [
    {
        text: 'Home',
        path: '/',
        icon: faHome
    },
    {
        text: 'About',
        path: '/aboutMe',
        icon: faUser
    },
    {
        text: 'Education',
        path: '/education',
        icon: faGraduationCap
    },
    {
        text: 'Experience',
        path: '/experience',
        icon: faHardHat
    },
    {
        text: 'Skills',
        path: '/skills',
        icon: faBrain
    },
    {
        text: 'History',
        path: '/history',
        icon: faHistory
    },
    {
        text: 'Contact',
        path: '/contact',
        icon: faAddressBook
    },
]