import { ISvg } from '../../SvgPropsType';

export const TagTwoIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M4.40524 15.5264L8.93524 20.0564C10.7952 21.9164 13.8152 21.9164 15.6852 20.0564L20.0752 15.6664C21.9352 13.8064 21.9352 10.7864 20.0752 8.91637L15.5352 4.39637C14.5852 3.44637 13.2752 2.93637 11.9352 3.00637L6.93524 3.24637C4.93524 3.33637 3.34524 4.92637 3.24524 6.91637L3.00524 11.9164C2.94524 13.2664 3.45524 14.5764 4.40524 15.5264Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.73535 12.2263C11.1161 12.2263 12.2354 11.107 12.2354 9.72632C12.2354 8.34561 11.1161 7.22632 9.73535 7.22632C8.35464 7.22632 7.23535 8.34561 7.23535 9.72632C7.23535 11.107 8.35464 12.2263 9.73535 12.2263Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M13.2354 17.2263L17.2354 13.2263"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M19.8319 8.70005L15.3019 4.17005C14.3519 3.22005 13.0419 2.71005 11.7019 2.78005L6.70193 3.02005C4.70193 3.11005 3.11193 4.70005 3.01193 6.69005L2.77193 11.69C2.71193 13.03 3.21193 14.34 4.16193 15.29L8.69193 19.82C10.5519 21.68 13.5719 21.68 15.4419 19.82L19.8319 15.43C21.7019 13.58 21.7019 10.56 19.8319 8.70005ZM9.50193 12.38C7.92193 12.38 6.62193 11.09 6.62193 9.50005C6.62193 7.91005 7.92193 6.62005 9.50193 6.62005C11.0819 6.62005 12.3819 7.91005 12.3819 9.50005C12.3819 11.09 11.0819 12.38 9.50193 12.38ZM17.5319 13.53L13.5319 17.53C13.3819 17.68 13.1919 17.75 13.0019 17.75C12.8119 17.75 12.6219 17.68 12.4719 17.53C12.1819 17.24 12.1819 16.76 12.4719 16.47L16.4719 12.47C16.7619 12.18 17.2419 12.18 17.5319 12.47C17.8219 12.76 17.8219 13.24 17.5319 13.53Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M4.40524 15.5264L8.93524 20.0564C10.7952 21.9164 13.8152 21.9164 15.6852 20.0564L20.0752 15.6664C21.9352 13.8064 21.9352 10.7864 20.0752 8.91637L15.5352 4.39637C14.5852 3.44637 13.2752 2.93637 11.9352 3.00637L6.93524 3.24637C4.93524 3.33637 3.34524 4.92637 3.24524 6.91637L3.00524 11.9164C2.94524 13.2664 3.45524 14.5764 4.40524 15.5264Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M9.73535 12.2263C11.1161 12.2263 12.2354 11.107 12.2354 9.72632C12.2354 8.34561 11.1161 7.22632 9.73535 7.22632C8.35464 7.22632 7.23535 8.34561 7.23535 9.72632C7.23535 11.107 8.35464 12.2263 9.73535 12.2263Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              opacity="0.4"
              d="M13.2354 17.2263L17.2354 13.2263"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
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
              d="M4.17038 15.3L8.70038 19.83C10.5604 21.6901 13.5804 21.6901 15.4504 19.83L19.8404 15.44C21.7004 13.58 21.7004 10.56 19.8404 8.69005L15.3004 4.17005C14.3504 3.22005 13.0404 2.71005 11.7004 2.78005L6.70038 3.02005C4.70038 3.11005 3.11038 4.70005 3.01038 6.69005L2.77038 11.69C2.71038 13.04 3.22038 14.35 4.17038 15.3Z"
              fill="currentColor"
            />
            <path
              d="M9.50061 12.3801C11.0912 12.3801 12.3806 11.0907 12.3806 9.50012C12.3806 7.90954 11.0912 6.62012 9.50061 6.62012C7.91003 6.62012 6.62061 7.90954 6.62061 9.50012C6.62061 11.0907 7.91003 12.3801 9.50061 12.3801Z"
              fill="currentColor"
            />
            <path
              d="M13.0004 17.7499C12.8104 17.7499 12.6204 17.6799 12.4704 17.5299C12.1804 17.2399 12.1804 16.7599 12.4704 16.4699L16.4704 12.4699C16.7604 12.1799 17.2404 12.1799 17.5304 12.4699C17.8204 12.7599 17.8204 13.2399 17.5304 13.5299L13.5304 17.5299C13.3804 17.6799 13.1904 17.7499 13.0004 17.7499Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M15.3005 4.17005C14.3505 3.22005 13.0405 2.71005 11.7005 2.78005L6.70046 3.02005C4.70046 3.11005 3.11046 4.70005 3.01046 6.69005L2.77046 11.69C2.71046 13.03 3.21046 14.34 4.16046 15.29L8.69046 19.82C10.5505 21.68 13.5705 21.68 15.4405 19.82L19.8305 15.43C21.6905 13.57 21.6905 10.55 19.8305 8.68005L18.7005 7.55005"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.51049 11.8C8.81049 11.93 9.15049 12 9.50049 12C10.8805 12 12.0005 10.88 12.0005 9.5C12.0005 8.12 10.8805 7 9.50049 7C8.12049 7 7.00049 8.12 7.00049 9.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M13.0005 17L17.0005 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
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
