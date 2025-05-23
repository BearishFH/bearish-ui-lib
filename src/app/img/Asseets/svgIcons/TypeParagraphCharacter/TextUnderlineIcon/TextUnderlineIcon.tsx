import { ISvg } from '../../SvgPropsType';

export const TextUnderlineIcon: React.FC<ISvg> = ({
  color,
  className,
  iconType = 'linear',
  w = 24,
}) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M5.00146 21H19.0015"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.00146 3V10C5.00146 13.87 8.13146 17 12.0015 17C15.8715 17 19.0015 13.87 19.0015 10V3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M20.9515 4.13C20.6615 3.71 20.2915 3.34 19.8715 3.05C18.9215 2.36 17.6815 2 16.1915 2H7.81146C7.61146 2 7.41146 2.01 7.22146 2.03C3.94146 2.24 2.00146 4.37 2.00146 7.81V16.19C2.00146 17.68 2.36146 18.92 3.05146 19.87C3.34146 20.29 3.71147 20.66 4.13146 20.95C4.95146 21.55 5.99146 21.9 7.22146 21.98C7.41146 21.99 7.61146 22 7.81146 22H16.1915C19.8315 22 22.0015 19.83 22.0015 16.19V7.81C22.0015 6.32 21.6415 5.08 20.9515 4.13ZM16.8315 18.96H7.17146C6.76147 18.96 6.42146 18.62 6.42146 18.21C6.42146 17.8 6.76147 17.46 7.17146 17.46H16.8415C17.2515 17.46 17.5915 17.8 17.5915 18.21C17.5915 18.62 17.2515 18.96 16.8315 18.96ZM17.5815 10.62C17.5815 13.7 15.0815 16.2 12.0015 16.2C8.92146 16.2 6.42146 13.7 6.42146 10.62V5.79C6.42146 5.38 6.76147 5.04 7.17146 5.04C7.58146 5.04 7.92146 5.38 7.92146 5.79V10.62C7.92146 12.87 9.75146 14.7 12.0015 14.7C14.2515 14.7 16.0815 12.87 16.0815 10.62V5.79C16.0815 5.38 16.4215 5.04 16.8315 5.04C17.2415 5.04 17.5815 5.38 17.5815 5.79V10.62Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              opacity="0.4"
              d="M5.00146 21H19.0015"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.00146 3V10C5.00146 13.87 8.13146 17 12.0015 17C15.8715 17 19.0015 13.87 19.0015 10V3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              opacity="0.4"
              d="M22.0015 7.81V16.19C22.0015 19.83 19.8315 22 16.1915 22H7.81146C7.61146 22 7.41146 21.99 7.22146 21.98C5.99146 21.9 4.95146 21.55 4.13146 20.95C3.71147 20.66 3.34146 20.29 3.05146 19.87C2.36146 18.92 2.00146 17.68 2.00146 16.19V7.81C2.00146 4.37 3.94146 2.24 7.22146 2.03C7.41146 2.01 7.61146 2 7.81146 2H16.1915C17.6815 2 18.9215 2.36 19.8715 3.05C20.2915 3.34 20.6615 3.71 20.9515 4.13C21.6415 5.08 22.0015 6.32 22.0015 7.81Z"
              fill="currentColor"
            />
            <path
              d="M16.8314 18.96H7.17139C6.76139 18.96 6.42139 18.62 6.42139 18.21C6.42139 17.8 6.76139 17.46 7.17139 17.46H16.8414C17.2514 17.46 17.5914 17.8 17.5914 18.21C17.5914 18.62 17.2514 18.96 16.8314 18.96Z"
              fill="currentColor"
            />
            <path
              d="M12.0014 16.2C8.92139 16.2 6.42139 13.7 6.42139 10.62V5.79004C6.42139 5.38004 6.76139 5.04004 7.17139 5.04004C7.58139 5.04004 7.92139 5.38004 7.92139 5.79004V10.62C7.92139 12.87 9.75139 14.7 12.0014 14.7C14.2514 14.7 16.0814 12.87 16.0814 10.62V5.79004C16.0814 5.38004 16.4214 5.04004 16.8314 5.04004C17.2414 5.04004 17.5814 5.38004 17.5814 5.79004V10.62C17.5814 13.7 15.0814 16.2 12.0014 16.2Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M5.00146 21H19.0015"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0015 17C15.8715 17 19.0015 13.87 19.0015 10V3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.00146 3V10C5.00146 12.17 5.98147 14.1 7.53147 15.38"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={w}
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0, color: color }}
      className={`bearishSvg ${className}`}
    >
      {renderIcon()}
    </svg>
  );
};
