const iconSources = (fileNames) =>
  fileNames.flatMap((name) => [
    `/childcareservices/${name}.svg`,
    `/personalcareservices/${name}.svg`,
  ]);

export const CHILD_CARE_ICONS = {
  fullTimeNannies: iconSources(['fulltimenanies', 'fulltimenannies']),
  partTimeNannies: iconSources(['parttimenanies', 'parttimenannies']),
  liveInNannies: iconSources(['liveinnnanies', 'liveinnannies', 'live-in-nannies']),
  babysitters: iconSources(['babysitters']),
  inHomeSupport: iconSources(['inhomesupport', 'in-home-support']),
};

export const CHILD_CARE_IMAGES = {
  hero: '/childhero.webp',
  happyChildren: '/happychild.webp',
};

export const SERVICE_PHOTO_RADIUS =
  'rounded-tl-2xl rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-2xl';
