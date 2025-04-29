import { ISvg } from '../../SvgPropsType';

export const ArrowRight: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.5 12H20.33"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.53 12.53L14.24 16.82C14.09 16.97 13.9 17.04 13.71 17.04C13.52 17.04 13.33 16.97 13.18 16.82C12.89 16.53 12.89 16.05 13.18 15.76L16.19 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H16.19L13.18 8.24C12.89 7.95 12.89 7.47 13.18 7.18C13.47 6.89 13.95 6.89 14.24 7.18L18.53 11.47C18.67 11.61 18.75 11.8 18.75 12C18.75 12.2 18.67 12.39 18.53 12.53Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M3.5 12H20.33"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              opacity="0.4"
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
              fill="currentColor"
            />
            <path
              d="M18.53 11.4699L14.24 7.1799C13.95 6.8899 13.47 6.8899 13.18 7.1799C12.89 7.4699 12.89 7.9499 13.18 8.2399L16.19 11.2499H6C5.59 11.2499 5.25 11.5899 5.25 11.9999C5.25 12.4099 5.59 12.7499 6 12.7499H16.19L13.18 15.7599C12.89 16.0499 12.89 16.5299 13.18 16.8199C13.33 16.9699 13.52 17.0399 13.71 17.0399C13.9 17.0399 14.09 16.9699 14.24 16.8199L18.53 12.5299C18.67 12.3899 18.75 12.1999 18.75 11.9999C18.75 11.7999 18.67 11.6099 18.53 11.4699Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.0098 12H20.3298"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.5 12H6.97"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
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
