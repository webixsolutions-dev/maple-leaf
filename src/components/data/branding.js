import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const MONTESSORI_LOGO = logo;
export const HOMECARE_LOGO = '/homelogo.PNG';

export const MONTESSORI_LOGO_ALT = 'Maple Leaf Montessori Logo';
export const HOMECARE_LOGO_ALT = 'Maple Leaf Home Care Services Logo';

/** Routes that show the Maple Leaf Home Care Services logo in the navbar and footer. */
export const HOMECARE_SERVICE_ROUTES = [
  '/our-services',
  '/our-services/child-care',
  '/our-services/senior-personal-care',
  '/our-services/home-cleaning',
];

const normalizePath = (pathname) => {
  const path = pathname.split('?')[0].split('#')[0];
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path;
};

export const isHomecareServicesRoute = (pathname) =>
  HOMECARE_SERVICE_ROUTES.includes(normalizePath(pathname));

export const useBrandingLogo = () => {
  const { pathname } = useLocation();
  const isServicesPage = isHomecareServicesRoute(pathname);

  return {
    logoSrc: isServicesPage ? HOMECARE_LOGO : MONTESSORI_LOGO,
    logoAlt: isServicesPage ? HOMECARE_LOGO_ALT : MONTESSORI_LOGO_ALT,
    isServicesPage,
  };
};
