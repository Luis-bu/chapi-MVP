const base = {
  viewBox: '0 0 48 48',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
}

const stroke = {
  stroke: 'currentColor',
  strokeWidth: 2.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconStar({ className, filled = true }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.6l2.76 6.28 6.84.6-5.18 4.56 1.57 6.7L12 17.4l-6 3.34 1.58-6.7-5.18-4.56 6.83-.6L12 2.6z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 1.6}
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconWhatsapp({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.001 2.667c-7.363 0-13.334 5.97-13.334 13.333 0 2.352.615 4.652 1.784 6.671L2.667 29.333l6.826-1.752a13.27 13.27 0 0 0 6.508 1.706h.006c7.362 0 13.333-5.97 13.333-13.333 0-3.56-1.387-6.907-3.905-9.425a13.24 13.24 0 0 0-9.434-3.862zm0 24.4h-.005a11.06 11.06 0 0 1-5.636-1.544l-.404-.24-4.05 1.04 1.08-3.947-.264-.406a11.05 11.05 0 0 1-1.69-5.903c0-6.113 4.976-11.088 11.093-11.088 2.963 0 5.748 1.154 7.842 3.25a11.02 11.02 0 0 1 3.245 7.844c0 6.113-4.977 11.088-11.093 11.088zm6.083-8.303c-.333-.167-1.97-.972-2.276-1.083-.305-.111-.527-.167-.75.167-.222.333-.86 1.083-1.055 1.305-.194.222-.388.25-.72.083-.334-.167-1.409-.52-2.685-1.657-.992-.885-1.663-1.978-1.858-2.312-.194-.333-.02-.514.146-.68.15-.15.334-.389.5-.583.167-.194.222-.333.334-.555.111-.223.055-.417-.028-.583-.083-.167-.75-1.807-1.028-2.474-.271-.65-.546-.562-.75-.573l-.639-.011c-.222 0-.583.083-.888.416-.305.334-1.166 1.14-1.166 2.78s1.194 3.226 1.361 3.448c.166.223 2.35 3.588 5.694 5.032.796.343 1.417.549 1.9.703.798.254 1.524.218 2.098.132.64-.095 1.97-.805 2.248-1.583.278-.777.278-1.444.194-1.583-.083-.14-.305-.222-.638-.389z" />
    </svg>
  )
}

export function IconInstagram({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <rect x="6" y="6" width="36" height="36" rx="10" {...stroke} />
      <circle cx="24" cy="24" r="9" {...stroke} />
      <circle cx="34" cy="14" r="2.2" fill="currentColor" />
    </svg>
  )
}

export function IconFacebook({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <rect x="6" y="6" width="36" height="36" rx="10" {...stroke} />
      <path d="M27 18h4v-5h-4c-3.3 0-6 2.7-6 6v3h-4v5h4v11h5V27h4l1-5h-5v-3c0-.6.4-1 1-1z" fill="currentColor" />
    </svg>
  )
}

export function IconPin({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path
        d="M24 44s14-12.6 14-22.5C38 12.9 31.7 6 24 6S10 12.9 10 21.5C10 31.4 24 44 24 44z"
        {...stroke}
      />
      <circle cx="24" cy="21" r="5.5" {...stroke} />
    </svg>
  )
}

export function IconClock({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <circle cx="24" cy="24" r="17" {...stroke} />
      <path d="M24 14v10l7 5" {...stroke} />
    </svg>
  )
}

export function IconLeaf({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path
        d="M11 37C7 22 18 9 37 9c1 15-9 26-26 28-2-3-3-7-3-9z"
        {...stroke}
      />
      <path d="M13 35C20 27 26 21 33 13" {...stroke} />
    </svg>
  )
}

export function IconBowl({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M7 22h34c0 8.8-7.6 16-17 16S7 30.8 7 22z" {...stroke} />
      <path d="M14 22c0-6 4.5-10 10-10s10 4 10 10" {...stroke} />
      <path d="M18 8c1 1.5 1 3 0 4M24 6c1 1.5 1 3 0 4M30 8c1 1.5 1 3 0 4" {...stroke} />
    </svg>
  )
}

export function IconPlatter({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <circle cx="24" cy="24" r="18" {...stroke} />
      <circle cx="24" cy="24" r="12.5" {...stroke} />
      <circle cx="18" cy="21" r="3.6" fill="currentColor" />
      <rect x="23" y="24" width="8" height="8" rx="2.2" fill="currentColor" />
      <path d="M18 26l4.5 8h-9L18 26z" fill="currentColor" />
    </svg>
  )
}

export function IconBurger({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M8 20c0-6.6 7.2-12 16-12s16 5.4 16 12H8z" {...stroke} />
      <path d="M6 24h36" {...stroke} />
      <path d="M8 24c0 2.4 1 4 3 4h26c2 0 3-1.6 3-4" {...stroke} />
      <path d="M9 31h30" {...stroke} />
      <path d="M8 31c0 3.9 2 6 16 6s16-2.1 16-6" {...stroke} />
    </svg>
  )
}

export function IconFries({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M11 20h26l-3 22H14l-3-22z" {...stroke} />
      <path d="M11 20l1.5-5h19l1.5 5" {...stroke} />
      <rect x="14" y="6" width="5" height="16" rx="1.5" {...stroke} transform="rotate(-8 16.5 14)" />
      <rect x="21.5" y="4" width="5" height="18" rx="1.5" {...stroke} />
      <rect x="29" y="6" width="5" height="16" rx="1.5" {...stroke} transform="rotate(8 31.5 14)" />
    </svg>
  )
}

export function IconHotDog({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <rect x="6" y="14" width="36" height="16" rx="8" {...stroke} />
      <rect x="9" y="21" width="30" height="11" rx="5.5" fill="currentColor" />
      <path d="M11 18c3-2 6-2 9 0s6 2 9 0 6-2 9 0" {...stroke} />
    </svg>
  )
}

export function IconPot({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M10 22h28l-2 12a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4l-2-12z" {...stroke} />
      <path d="M6 22h36" {...stroke} />
      <path d="M4 18h6M38 18h6" {...stroke} />
      <path d="M18 12c1-2 1-3 0-5M26 12c1-2 1-3 0-5" {...stroke} />
    </svg>
  )
}
