//assets
import homePageIcon from '../../assets/homepage-icon.svg';
import searchPageIcon from '../../assets/search-icon.svg';
import addMixPageIcon from '../../assets/addmixpage-icon.svg';
import notificationsPage from '../../assets/notificationspage-icon.svg';
import profilePage from '../../assets/progilepage-icon.svg';

const navbar1Items = [
  {
    id: 1,
    href: '/hookahMobile/',
    src: homePageIcon,
    alt: 'homepage'
  },
  {
    id: 2,
    href: '/hookahMobile/search',
    src: searchPageIcon,
    alt: 'search page'
  },
  {
    id: 3,
    href: '/hookahMobile/addmix',
    src: addMixPageIcon,
    alt: 'add mix page'
  },
  {
    id: 4,
    href: '/hookahMobile/notifications',
    src: notificationsPage,
    alt: 'notifications page'
  },
  {
    id: 5,
    href: '/hookahMobile/profile',
    src: profilePage,
    alt: ' profile page'
  },
];

export default navbar1Items;