import { ISvg } from '../../SvgPropsType';

export const BubbleCommandIcon: React.FC<ISvg> = ({
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
              d="M15.59 12.26C18.4232 12.26 20.72 9.96323 20.72 7.13C20.72 4.29678 18.4232 2 15.59 2C12.7567 2 10.46 4.29678 10.46 7.13C10.46 9.96323 12.7567 12.26 15.59 12.26Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M6.35977 19.44C8.06081 19.44 9.43979 18.0611 9.43979 16.36C9.43979 14.659 8.06081 13.28 6.35977 13.28C4.65873 13.28 3.27979 14.659 3.27979 16.36C3.27979 18.0611 4.65873 19.44 6.35977 19.44Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M16.6201 22C18.0339 22 19.1801 20.8539 19.1801 19.44C19.1801 18.0262 18.0339 16.88 16.6201 16.88C15.2062 16.88 14.0601 18.0262 14.0601 19.44C14.0601 20.8539 15.2062 22 16.6201 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M15.59 1.75C12.62 1.75 10.21 4.16 10.21 7.13C10.21 10.1 12.62 12.51 15.59 12.51C18.56 12.51 20.97 10.1 20.97 7.13C20.97 4.16 18.56 1.75 15.59 1.75Z"
              fill="currentColor"
            />
            <path
              d="M6.35979 13.03C4.52979 13.03 3.02979 14.52 3.02979 16.36C3.02979 18.2 4.51979 19.69 6.35979 19.69C8.18979 19.69 9.68979 18.2 9.68979 16.36C9.68979 14.52 8.18979 13.03 6.35979 13.03Z"
              fill="currentColor"
            />
            <path
              d="M16.6201 16.62C15.0701 16.62 13.8101 17.88 13.8101 19.43C13.8101 20.98 15.0701 22.24 16.6201 22.24C18.1701 22.24 19.4301 20.98 19.4301 19.43C19.4301 17.88 18.1701 16.62 16.6201 16.62Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M15.59 12.26C18.4232 12.26 20.72 9.96323 20.72 7.13C20.72 4.29678 18.4232 2 15.59 2C12.7567 2 10.46 4.29678 10.46 7.13C10.46 9.96323 12.7567 12.26 15.59 12.26Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              opacity="0.4"
              d="M6.35977 19.44C8.06081 19.44 9.43979 18.0611 9.43979 16.36C9.43979 14.659 8.06081 13.28 6.35977 13.28C4.65873 13.28 3.27979 14.659 3.27979 16.36C3.27979 18.0611 4.65873 19.44 6.35977 19.44Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              opacity="0.4"
              d="M16.6201 22C18.0339 22 19.1801 20.8539 19.1801 19.44C19.1801 18.0262 18.0339 16.88 16.6201 16.88C15.2062 16.88 14.0601 18.0262 14.0601 19.44C14.0601 20.8539 15.2062 22 16.6201 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              d="M15.59 1.75C12.62 1.75 10.21 4.16 10.21 7.13C10.21 10.1 12.62 12.51 15.59 12.51C18.56 12.51 20.97 10.1 20.97 7.13C20.97 4.16 18.56 1.75 15.59 1.75Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M6.35977 13.03C4.52977 13.03 3.02979 14.52 3.02979 16.36C3.02979 18.2 4.51977 19.69 6.35977 19.69C8.18977 19.69 9.68979 18.2 9.68979 16.36C9.68979 14.52 8.18977 13.03 6.35977 13.03Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M16.6201 16.62C15.0701 16.62 13.8101 17.88 13.8101 19.43C13.8101 20.98 15.0701 22.24 16.6201 22.24C18.1701 22.24 19.4301 20.98 19.4301 19.43C19.4301 17.88 18.1701 16.62 16.6201 16.62Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M15.59 12.26C18.42 12.26 20.72 9.96 20.72 7.13C20.72 4.3 18.42 2 15.59 2C12.76 2 10.46 4.3 10.46 7.13C10.46 8.43 10.94 9.60999 11.74 10.51"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.27979 16.36C3.27979 18.06 4.65977 19.44 6.35977 19.44C8.05977 19.44 9.43979 18.06 9.43979 16.36C9.43979 14.66 8.05977 13.28 6.35977 13.28"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.6201 22C18.0339 22 19.1801 20.8539 19.1801 19.44C19.1801 18.0262 18.0339 16.88 16.6201 16.88C15.2062 16.88 14.0601 18.0262 14.0601 19.44C14.0601 20.8539 15.2062 22 16.6201 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
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
