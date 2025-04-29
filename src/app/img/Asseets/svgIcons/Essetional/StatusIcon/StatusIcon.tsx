import { ISvg } from '../../SvgPropsType';

export const StatusIcon: React.FC<ISvg> = ({
  color,
  className,
  iconType = 'linear',
  w = 24,
  direction = 'up',
}) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M2.4502 14.97C3.5202 18.41 6.4002 21.06 9.9802 21.79"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.0498 10.98C2.5598 5.93 6.8198 2 11.9998 2C17.1798 2 21.4398 5.94 21.9498 10.98"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0098 21.8C17.5798 21.07 20.4498 18.45 21.5398 15.02"
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
              d="M9 14.22H3.92c-.61 0-1.17.31-1.49.83-.32.51-.35 1.12-.09 1.66a10.84 10.84 0 0 0 6.09 5.43c.18.06.38.1.57.1a1.764 1.764 0 0 0 1.75-1.76l.01-4.5c0-.47-.18-.91-.51-1.24A1.8 1.8 0 0 0 9 14.22M22.48 9.6C21.36 4.68 17.05 1.25 12 1.25S2.64 4.68 1.52 9.6c-.12.52 0 1.05.34 1.47s.84.66 1.38.66h17.53a1.735 1.735 0 0 0 1.71-2.13m-2.42 4.67L15 14.26a1.74 1.74 0 0 0-1.75 1.75l.01 4.48a1.764 1.764 0 0 0 1.75 1.76c.19 0 .38-.03.56-.1 2.62-.92 4.84-2.89 6.07-5.38a1.7 1.7 0 0 0-.08-1.65c-.33-.54-.89-.85-1.5-.85"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              opacity=".4"
              d="M2.45 14.97c1.07 3.44 3.95 6.09 7.53 6.82"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.05 10.98A9.996 9.996 0 0 1 12 2c5.18 0 9.44 3.94 9.95 8.98M14.01 21.8c3.57-.73 6.44-3.35 7.53-6.78"
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
              d="M10.2399 14.74C9.90987 14.41 9.46987 14.22 8.99987 14.22H3.91987C3.30987 14.22 2.74987 14.53 2.42987 15.05C2.10987 15.56 2.07987 16.17 2.33987 16.71C3.56987 19.23 5.78987 21.21 8.42987 22.14C8.60987 22.2 8.80987 22.24 8.99987 22.24C9.34987 22.24 9.69987 22.13 9.99987 21.92C10.4699 21.59 10.7499 21.05 10.7499 20.48L10.7599 15.98C10.7499 15.51 10.5699 15.07 10.2399 14.74Z"
              fill="currentColor"
            />
            <path
              d="M22.4799 9.6C21.3599 4.68 17.0499 1.25 11.9999 1.25C6.94993 1.25 2.63993 4.68 1.51993 9.6C1.39993 10.12 1.51993 10.65 1.85993 11.07C2.19993 11.49 2.69993 11.73 3.23993 11.73H20.7699C21.3099 11.73 21.8099 11.49 22.1499 11.07C22.4799 10.65 22.5999 10.11 22.4799 9.6Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M21.56 15.1C21.24 14.58 20.68 14.26 20.06 14.26L15 14.25C14.53 14.25 14.09 14.43 13.76 14.76C13.43 15.09 13.25 15.53 13.25 16L13.26 20.48C13.26 21.05 13.54 21.59 14.01 21.92C14.31 22.13 14.66 22.24 15.01 22.24C15.2 22.24 15.39 22.21 15.57 22.14C18.19 21.22 20.41 19.25 21.64 16.76C21.9 16.23 21.87 15.61 21.56 15.1Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2.45 14.97c1.07 3.44 3.95 6.09 7.53 6.82M2.05 10.98A9.996 9.996 0 0 1 12 2c5.18 0 9.44 3.94 9.95 8.98M14.01 21.8c3.57-.73 6.44-3.35 7.53-6.78"
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

  const getRotation = () => {
    switch (direction) {
      case 'up':
        return 'rotate(0deg)';
      case 'down':
        return 'rotate(180deg)';
      case 'left':
        return 'rotate(270deg)';
      case 'right':
        return 'rotate(90deg)';
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={w}
      viewBox="0 0 24 24"
      fill="none"
      style={{
        flexShrink: 0,
        color: color,
        transform: getRotation(),
        transition: 'transform 0.3s ease',
      }}
      className={`bearishSvg ${className}`}
    >
      {renderIcon()}
    </svg>
  );
};
