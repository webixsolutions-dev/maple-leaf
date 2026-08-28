import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  { label: 'Instagram', href: '#', Icon: FaInstagram },
  { label: 'Facebook', href: '#', Icon: FaFacebookF },
  { label: 'YouTube', href: '#', Icon: FaYoutube },
];

const HomecareFooterBar = () => (
  <footer className="relative w-full shrink-0 mt-auto">
    <div className="relative flex h-[48px] w-full items-center justify-center sm:h-[54px]">
      <img
        src="/Bar.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-1/2 h-[72px] w-full -translate-y-1/2 object-cover object-center select-none sm:h-[80px]"
      />

      <p className="relative z-10 px-12 text-center text-[11px] font-medium leading-tight text-white sm:px-28 sm:text-sm">
        © 2025 Maple Leaf Montessori Homecare Services. All Rights Reserved.
      </p>

      <div className="absolute right-3 top-1/2 z-10 flex -translate-y-1/2 items-center gap-1.5 sm:right-5 sm:gap-2">
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c72a7a] text-white transition-colors hover:bg-[#b0256e] sm:h-8 sm:w-8"
          >
            <Icon className="text-[11px] sm:text-sm" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default HomecareFooterBar;
