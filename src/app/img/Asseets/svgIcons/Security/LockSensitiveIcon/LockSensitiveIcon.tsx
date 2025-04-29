import { ISvg } from '../../SvgPropsType';

export const LockSensitiveIcon: React.FC<ISvg> = ({
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
              d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.9965 16H16.0054"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9955 16H12.0045"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.99451 16H8.00349"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M18.75 8V10.1C18.31 10.04 17.81 10.01 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.19 10.01 5.69 10.04 5.25 10.1V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8Z"
              fill="currentColor"
            />
            <path
              d="M18.75 10.1C18.31 10.04 17.81 10.01 17.25 10H6.75C6.19 10.01 5.69 10.04 5.25 10.1C2.7 10.41 2 11.66 2 15V17C2 21 3 22 7 22H17C21 22 22 21 22 17V15C22 11.66 21.3 10.41 18.75 10.1ZM8.71 16.71C8.52 16.89 8.26 17 8 17C7.87 17 7.74 16.97 7.62 16.92C7.49 16.87 7.39 16.8 7.29 16.71C7.11 16.52 7 16.26 7 16C7 15.87 7.03 15.74 7.08 15.62C7.13 15.5 7.2 15.39 7.29 15.29C7.39 15.2 7.49 15.13 7.62 15.08C7.99 14.92 8.43 15.01 8.71 15.29C8.8 15.39 8.87 15.5 8.92 15.62C8.97 15.74 9 15.87 9 16C9 16.26 8.89 16.52 8.71 16.71ZM12.92 16.38C12.87 16.5 12.8 16.61 12.71 16.71C12.52 16.89 12.26 17 12 17C11.73 17 11.48 16.89 11.29 16.71C11.2 16.61 11.13 16.5 11.08 16.38C11.03 16.26 11 16.13 11 16C11 15.73 11.11 15.48 11.29 15.29C11.66 14.92 12.33 14.92 12.71 15.29C12.89 15.48 13 15.73 13 16C13 16.13 12.97 16.26 12.92 16.38ZM16.71 16.71C16.52 16.89 16.26 17 16 17C15.74 17 15.48 16.89 15.29 16.71C15.11 16.52 15 16.27 15 16C15 15.73 15.11 15.48 15.29 15.29C15.67 14.92 16.34 14.92 16.71 15.29C16.75 15.34 16.79 15.39 16.83 15.45C16.87 15.5 16.9 15.56 16.92 15.62C16.95 15.68 16.97 15.74 16.98 15.8C16.99 15.87 17 15.94 17 16C17 16.26 16.89 16.52 16.71 16.71Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              opacity="0.4"
              d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M15.9965 16H16.0054"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M11.9955 16H12.0045"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M7.99451 16H8.00349"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              d="M18.75 8V10.1C18.31 10.04 17.81 10.01 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.19 10.01 5.69 10.04 5.25 10.1V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M22 15V17C22 21 21 22 17 22H7C3 22 2 21 2 17V15C2 11.66 2.7 10.41 5.25 10.1C5.69 10.04 6.19 10.01 6.75 10H17.25C17.81 10.01 18.31 10.04 18.75 10.1C21.3 10.41 22 11.66 22 15Z"
              fill="currentColor"
            />
            <path
              d="M8 16.9999C7.87 16.9999 7.74 16.9699 7.62 16.9199C7.49 16.8699 7.39001 16.7999 7.29001 16.7099C7.11001 16.5199 7 16.2599 7 15.9999C7 15.8699 7.02999 15.7399 7.07999 15.6199C7.12999 15.4999 7.20001 15.3899 7.29001 15.2899C7.39001 15.1999 7.49 15.1299 7.62 15.0799C7.99 14.9199 8.42999 15.0099 8.70999 15.2899C8.79999 15.3899 8.87001 15.4999 8.92001 15.6199C8.97001 15.7399 9 15.8699 9 15.9999C9 16.2599 8.88999 16.5199 8.70999 16.7099C8.51999 16.8899 8.26 16.9999 8 16.9999Z"
              fill="currentColor"
            />
            <path
              d="M12 17.0002C11.73 17.0002 11.48 16.8902 11.29 16.7102C11.2 16.6102 11.13 16.5002 11.08 16.3802C11.03 16.2602 11 16.1302 11 16.0002C11 15.7302 11.11 15.4802 11.29 15.2902C11.66 14.9202 12.33 14.9202 12.71 15.2902C12.89 15.4802 13 15.7302 13 16.0002C13 16.1302 12.97 16.2602 12.92 16.3802C12.87 16.5002 12.8 16.6102 12.71 16.7102C12.52 16.8902 12.26 17.0002 12 17.0002Z"
              fill="currentColor"
            />
            <path
              d="M16 17.0002C15.74 17.0002 15.48 16.8902 15.29 16.7102C15.11 16.5202 15 16.2702 15 16.0002C15 15.7302 15.11 15.4802 15.29 15.2902C15.67 14.9202 16.34 14.9202 16.71 15.2902C16.75 15.3402 16.79 15.3902 16.83 15.4502C16.87 15.5002 16.9 15.5602 16.92 15.6202C16.95 15.6802 16.97 15.7402 16.98 15.8002C16.99 15.8702 17 15.9402 17 16.0002C17 16.2602 16.89 16.5202 16.71 16.7102C16.52 16.8902 16.26 17.0002 16 17.0002Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 17V15C22 11 21 10 17 10H7C3 10 2 11 2 15V17C2 21 3 22 7 22H17C18.76 22 19.94 21.81 20.71 21.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.9965 16H16.0054"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9955 16H12.0045"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.99451 16H8.00349"
              stroke="currentColor"
              strokeWidth="2"
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
