import { useLocation } from 'react-router-dom';

// Cropped version of favicon.svg with the white plate and rounded edges removed,
// so the artwork sits flush against the navbar/footer background.
export const MONTESSORI_LOGO = '/montessorilogo.svg';
export const MONTESSORI_LOGO_ALT = 'Maple Leaf Montessori Logo';

export const HOME_CARE_LOGO = '/homelogo.png';
export const HOME_CARE_LOGO_ALT = 'Maple Leaf Home Care Services Logo';

export const HOME_CARE_SERVICE_PATHS = [
  '/our-services',
  '/our-services/child-care',
  '/our-services/senior-personal-care',
  '/our-services/home-cleaning',
];

const isHomeCareServicePage = (pathname) =>
  HOME_CARE_SERVICE_PATHS.includes(pathname);

export const NAVBAR_LOGO_CLASSES = {
  homeCare:
    'h-16 w-auto max-w-[180px] object-contain object-left sm:h-16 sm:w-auto sm:max-w-none md:h-20 md:w-auto',
  montessori:
    'h-[52px] w-auto object-contain object-left md:h-[66px] md:w-auto',
};

export const FOOTER_LOGO_CLASSES = {
  homeCare:
    'h-28 sm:h-32 md:h-36 w-auto object-contain max-w-[280px] md:max-w-[320px]',
  montessori:
    'h-[93px] sm:h-[106px] md:h-[119px] w-auto object-contain max-w-[280px] md:max-w-[320px]',
};

export const useBrandingLogo = () => {
  const { pathname } = useLocation();
  const useHomeCareLogo = isHomeCareServicePage(pathname);
  const logoVariant = useHomeCareLogo ? 'homeCare' : 'montessori';

  return {
    logoSrc: useHomeCareLogo ? HOME_CARE_LOGO : MONTESSORI_LOGO,
    logoAlt: useHomeCareLogo ? HOME_CARE_LOGO_ALT : MONTESSORI_LOGO_ALT,
    isHomeCareLogo: useHomeCareLogo,
    navbarLogoClassName: NAVBAR_LOGO_CLASSES[logoVariant],
    footerLogoClassName: FOOTER_LOGO_CLASSES[logoVariant],
  };
};
