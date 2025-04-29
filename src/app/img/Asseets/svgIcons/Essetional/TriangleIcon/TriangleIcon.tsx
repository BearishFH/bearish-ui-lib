import { ISvg } from '../../SvgPropsType';

export const TriangleIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M11.9999 21.41H5.93993C2.46993 21.41 1.01993 18.93 2.69993 15.9L5.81993 10.28L8.75993 5.00003C10.5399 1.79003 13.4599 1.79003 15.2399 5.00003L18.1799 10.29L21.2999 15.91C22.9799 18.94 21.5199 21.42 18.0599 21.42H11.9999V21.41Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.4401 20L12.0001 13.39L2.56006 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 3V13.39"
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
              d="M11.2502 3.89998V12.92C11.2502 13.25 11.0902 13.55 10.8202 13.74L3.61017 18.79C3.02017 19.2 2.18017 18.88 2.05017 18.17C1.90017 17.31 2.10017 16.3 2.70017 15.21L5.82017 9.59998L8.76017 4.30998C8.99017 3.89998 9.24017 3.53998 9.50017 3.22998C10.1002 2.52998 11.2502 2.97998 11.2502 3.89998Z"
              fill="currentColor"
            />
            <path
              d="M20.39 18.79L13.18 13.74C12.91 13.55 12.75 13.25 12.75 12.92V3.89998C12.75 2.97998 13.9 2.52998 14.5 3.22998C14.76 3.53998 15.01 3.89998 15.24 4.30998L18.18 9.59998L21.3 15.21C21.9 16.3 22.1 17.31 21.95 18.17C21.82 18.88 20.98 19.2 20.39 18.79Z"
              fill="currentColor"
            />
            <path
              d="M5.26018 19.14L11.4102 15.04C11.7402 14.82 12.2802 14.82 12.6102 15.04L18.7602 19.14C20.3902 20.23 20.1202 21.12 18.1602 21.12H5.85018C3.90018 21.11 3.63018 20.22 5.26018 19.14Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M11.9999 21.41H5.93993C2.46993 21.41 1.01993 18.93 2.69993 15.9L5.81993 10.28L8.75993 5.00003C10.5399 1.79003 13.4599 1.79003 15.2399 5.00003L18.1799 10.29L21.2999 15.91C22.9799 18.94 21.5199 21.42 18.0599 21.42H11.9999V21.41Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity="0.4">
              <path
                d="M21.4405 19.9996L12.0005 13.3896L2.56055 19.9996"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 3V13.39"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              d="M12 2.58997V13.61L2.65 20.15C1.8 19.14 1.75 17.61 2.7 15.9L5.82 10.29L8.76 4.99997C9.65 3.39997 10.82 2.58997 12 2.58997Z"
              fill="currentColor"
            />
            <path
              opacity="0.6"
              d="M21.3499 20.15C20.6999 20.94 19.5699 21.41 18.0599 21.41H5.9399C4.4299 21.41 3.2999 20.94 2.6499 20.15L11.9999 13.61L21.3499 20.15Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M21.35 20.15L12 13.61V2.58997C13.18 2.58997 14.35 3.39997 15.24 4.99997L18.18 10.29L21.3 15.9C22.25 17.61 22.2 19.14 21.35 20.15Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M8.75993 5.00003C10.5399 1.79003 13.4599 1.79003 15.2399 5.00003L18.1799 10.29L21.2999 15.91C22.9799 18.94 21.5199 21.42 18.0599 21.42H11.9999H5.93993C2.46993 21.42 1.01993 18.94 2.69993 15.91L5.81993 10.29L6.40993 9.24003"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.4401 20L12.0001 13.39L2.56006 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 3V13.39"
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
