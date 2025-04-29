import { ISvg } from '../../SvgPropsType';

export const MaximizeIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M2 9.98V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 11L18.01 5.97998H14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0098 5.97998V9.98998"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
              fill="currentColor"
            />
            <path
              d="M16.48 2H8.52C5.47 2 3 4.47 3 7.52V10.5C3 11.05 3.45 11.5 4 11.5H8.5C10.71 11.5 12.5 13.29 12.5 15.5V20C12.5 20.55 12.95 21 13.5 21H16.48C19.93 21 22 18.94 22 15.48V7.52C22 4.47 19.53 2 16.48 2ZM18.76 9.99C18.76 10.4 18.42 10.74 18.01 10.74C17.6 10.74 17.26 10.4 17.26 9.99V7.79L13.53 11.53C13.38 11.68 13.19 11.75 13 11.75C12.81 11.75 12.62 11.68 12.47 11.53C12.18 11.24 12.18 10.76 12.47 10.47L16.2 6.72H14C13.58 6.72 13.25 6.39 13.25 5.97C13.25 5.56 13.58 5.22 14 5.22H18.01C18.1 5.22 18.19 5.25 18.27 5.28C18.3 5.29 18.32 5.3 18.34 5.31C18.4 5.34 18.45 5.37 18.5 5.42C18.52 5.43 18.54 5.45 18.56 5.47C18.61 5.53 18.65 5.59 18.69 5.66C18.69 5.67 18.7 5.68 18.7 5.69C18.74 5.77 18.75 5.86 18.75 5.95C18.76 5.96 18.76 5.96 18.76 5.97V9.99Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M2 9.98V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g opacity="0.4">
              <path
                d="M13 11.0005L18.01 5.98047H14"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.0098 5.98047V9.99047"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              opacity="0.4"
              d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
              stroke="currentColor"
              stroke-width="1.5"
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
              d="M16.48 2H8.52C5.07 2 3 4.06 3 7.52V15.47C3 18.94 5.07 21 8.52 21H16.47C19.93 21 21.99 18.94 21.99 15.48V7.52C22 4.06 19.93 2 16.48 2Z"
              fill="currentColor"
            />
            <path
              d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
              fill="currentColor"
            />
            <path
              d="M18.7504 5.95C18.7504 5.86 18.7304 5.78 18.7004 5.69C18.7004 5.68 18.6904 5.67 18.6904 5.67C18.6604 5.6 18.6104 5.53 18.5604 5.48C18.5404 5.46 18.5204 5.44 18.5004 5.43C18.4504 5.39 18.4004 5.35 18.3504 5.33C18.3304 5.32 18.3004 5.31 18.2804 5.3C18.2004 5.27 18.1104 5.25 18.0204 5.25H14.0004C13.5904 5.25 13.2504 5.59 13.2504 6C13.2504 6.41 13.5804 6.72 14.0004 6.72H16.2104L12.4704 10.47C12.1804 10.76 12.1804 11.24 12.4704 11.53C12.6204 11.68 12.8104 11.75 13.0004 11.75C13.1904 11.75 13.3804 11.68 13.5304 11.53L17.2604 7.79V9.99C17.2604 10.4 17.6004 10.74 18.0104 10.74C18.4204 10.74 18.7604 10.4 18.7604 9.99V5.97C18.7604 5.96 18.7604 5.96 18.7504 5.95Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2 9.98V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 11L18.01 5.97998H14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0098 5.97998V9.98998"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15"
              stroke="currentColor"
              stroke-width="1.5"
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
