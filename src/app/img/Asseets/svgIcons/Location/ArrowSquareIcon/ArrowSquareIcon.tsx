import { ISvg } from '../../SvgPropsType';

export const ArrowSquareIcon: React.FC<ISvg> = ({
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
              d="M12.1396 15.0701V13.11C12.1396 10.59 14.1797 8.54004 16.7097 8.54004H18.6696"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.61963 8.5498H7.57965C10.0997 8.5498 12.1497 10.5898 12.1497 13.1198V13.7698V17.2498"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.13983 6.75L5.33984 8.55L7.13983 10.35"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.8599 6.75L18.6599 8.55L16.8599 10.35"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM19.35 8.84C19.31 8.93 19.26 9.01 19.19 9.08L17.39 10.88C17.24 11.03 17.05 11.1 16.86 11.1C16.67 11.1 16.48 11.03 16.33 10.88C16.04 10.59 16.04 10.11 16.33 9.82L16.85 9.3H16.7C14.6 9.3 12.88 11.01 12.88 13.11V15.07V17.24C12.88 17.65 12.54 17.99 12.13 17.99C11.72 17.99 11.38 17.65 11.38 17.24V15.07V13.11C11.38 11.01 9.67 9.3 7.57 9.3H7.15L7.67 9.82C7.96 10.11 7.96 10.59 7.67 10.88C7.52 11.03 7.33 11.1 7.14 11.1C6.95 11.1 6.76 11.03 6.61 10.88L4.81 9.08C4.52 8.79 4.52 8.31 4.81 8.02L6.61 6.22C6.9 5.93 7.38 5.93 7.67 6.22C7.96 6.51 7.96 6.99 7.67 7.28L7.15 7.8H7.58C9.53 7.8 11.22 8.87 12.14 10.44C13.06 8.87 14.75 7.8 16.71 7.8H16.86L16.34 7.28C16.05 6.99 16.05 6.51 16.34 6.22C16.63 5.93 17.11 5.93 17.4 6.22L19.2 8.02C19.27 8.09 19.32 8.17 19.36 8.26C19.43 8.45 19.43 8.66 19.35 8.84Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <g opacity="0.4">
              <path
                d="M12.1401 15.0701V13.11C12.1401 10.59 14.1801 8.54004 16.7101 8.54004H18.6701"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.62012 8.5498H7.58014C10.1001 8.5498 12.1501 10.5898 12.1501 13.1198V13.7698V17.2498"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.13983 6.75L5.33984 8.55L7.13983 10.35"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.8599 6.75L18.6599 8.55L16.8599 10.35"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
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
              d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
              fill="currentColor"
            />
            <path
              d="M19.35 8.2702C19.31 8.1802 19.26 8.1002 19.19 8.0302L17.39 6.2302C17.1 5.9402 16.62 5.9402 16.33 6.2302C16.04 6.5202 16.04 7.00019 16.33 7.29019L16.85 7.8102H16.7C14.75 7.8102 13.06 8.8802 12.13 10.4502C11.21 8.8802 9.52004 7.8102 7.57004 7.8102H7.14005L7.66 7.29019C7.95 7.00019 7.95 6.5202 7.66 6.2302C7.37 5.9402 6.89001 5.9402 6.60001 6.2302L4.80002 8.0302C4.51002 8.3202 4.51002 8.8002 4.80002 9.0902L6.60001 10.8902C6.75001 11.0402 6.94004 11.1102 7.13004 11.1102C7.32004 11.1102 7.51 11.0402 7.66 10.8902C7.95 10.6002 7.95 10.1202 7.66 9.8302L7.14005 9.3102H7.56003C9.66003 9.3102 11.37 11.0202 11.37 13.1202V15.0802V17.2502C11.37 17.6602 11.71 18.0002 12.12 18.0002C12.53 18.0002 12.87 17.6602 12.87 17.2502V15.0802V13.1202C12.87 11.0202 14.58 9.3102 16.69 9.3102H16.8401L16.32 9.8302C16.03 10.1202 16.03 10.6002 16.32 10.8902C16.47 11.0402 16.66 11.1102 16.85 11.1102C17.04 11.1102 17.23 11.0402 17.38 10.8902L19.18 9.0902C19.25 9.0202 19.3001 8.94021 19.3401 8.85021C19.4301 8.66021 19.43 8.4502 19.35 8.2702Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M12.1396 15.0701V13.11C12.1396 10.59 14.1797 8.54004 16.7097 8.54004H18.6696"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.61963 8.5498H7.57965C10.0997 8.5498 12.1497 10.5898 12.1497 13.1198V13.7698V17.2498"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.13983 6.75L5.33984 8.55L7.13983 10.35"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.8599 6.75L18.6599 8.55L16.8599 10.35"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V13.02"
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
