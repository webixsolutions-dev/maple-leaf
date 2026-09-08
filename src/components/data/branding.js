import { useLocation } from 'react-router-dom';

export const MONTESSORI_LOGO = '/favicon.svg';
export const MONTESSORI_LOGO_ALT = 'Maple Leaf Montessori Logo';

export const HOME_CARE_LOGO = '/homelogo.PNG';
export const HOME_CARE_LOGO_ALT = 'Maple Leaf Home Care Services Logo';

export const HOME_CARE_SERVICE_PATHS = [
  '/our-services/child-care',
  '/our-services/senior-personal-care',
  '/our-services/home-cleaning',
];

const isHomeCareServicePage = (pathname) =>
  HOME_CARE_SERVICE_PATHS.includes(pathname);

export const useBrandingLogo = () => {
  const { pathname } = useLocation();
  const useHomeCareLogo = isHomeCareServicePage(pathname);

  return {
    logoSrc: useHomeCareLogo ? HOME_CARE_LOGO : MONTESSORI_LOGO,
    logoAlt: useHomeCareLogo ? HOME_CARE_LOGO_ALT : MONTESSORI_LOGO_ALT,
  };
};
