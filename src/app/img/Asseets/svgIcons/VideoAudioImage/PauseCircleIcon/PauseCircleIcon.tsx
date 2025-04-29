import { ISvg } from '../../SvgPropsType';

export const PauseCircleIcon: React.FC<ISvg> = ({
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
              d="M11.9702 22C17.4931 22 21.9702 17.5228 21.9702 12C21.9702 6.47715 17.4931 2 11.9702 2C6.44737 2 1.97021 6.47715 1.97021 12C1.97021 17.5228 6.44737 22 11.9702 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.72 14.53V9.46999C10.72 8.98999 10.52 8.79999 10.01 8.79999H8.71C8.2 8.79999 8 8.98999 8 9.46999V14.53C8 15.01 8.2 15.2 8.71 15.2H10C10.52 15.2 10.72 15.01 10.72 14.53Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 14.53V9.46999C16 8.98999 15.8 8.79999 15.29 8.79999H14C13.49 8.79999 13.29 8.98999 13.29 9.46999V14.53C13.29 15.01 13.49 15.2 14 15.2H15.29C15.8 15.2 16 15.01 16 14.53Z"
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
              d="M11.9702 2C6.45021 2 1.97021 6.48 1.97021 12C1.97021 17.52 6.45021 22 11.9702 22C17.4902 22 21.9702 17.52 21.9702 12C21.9702 6.48 17.5002 2 11.9702 2ZM10.7202 15.03C10.7202 15.51 10.5202 15.7 10.0102 15.7H8.71021C8.20021 15.7 8.00021 15.51 8.00021 15.03V8.97C8.00021 8.49 8.20021 8.3 8.71021 8.3H10.0002C10.5102 8.3 10.7102 8.49 10.7102 8.97V15.03H10.7202ZM16.0002 15.03C16.0002 15.51 15.8002 15.7 15.2902 15.7H14.0002C13.4902 15.7 13.2902 15.51 13.2902 15.03V8.97C13.2902 8.49 13.4902 8.3 14.0002 8.3H15.2902C15.8002 8.3 16.0002 8.49 16.0002 8.97V15.03Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M11.9702 22C17.4931 22 21.9702 17.5228 21.9702 12C21.9702 6.47715 17.4931 2 11.9702 2C6.44737 2 1.97021 6.47715 1.97021 12C1.97021 17.5228 6.44737 22 11.9702 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M10.72 14.53V9.47005C10.72 8.99005 10.52 8.80005 10.01 8.80005H8.71C8.2 8.80005 8 8.99005 8 9.47005V14.53C8 15.01 8.2 15.2 8.71 15.2H10C10.52 15.2 10.72 15.01 10.72 14.53Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M16 14.53V9.47005C16 8.99005 15.8 8.80005 15.29 8.80005H14C13.49 8.80005 13.29 8.99005 13.29 9.47005V14.53C13.29 15.01 13.49 15.2 14 15.2H15.29C15.8 15.2 16 15.01 16 14.53Z"
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
              d="M11.9702 22C17.4931 22 21.9702 17.5228 21.9702 12C21.9702 6.47715 17.4931 2 11.9702 2C6.44737 2 1.97021 6.47715 1.97021 12C1.97021 17.5228 6.44737 22 11.9702 22Z"
              fill="currentColor"
            />
            <path
              d="M10.72 15.03V8.97005C10.72 8.49005 10.52 8.30005 10.01 8.30005H8.71C8.2 8.30005 8 8.49005 8 8.97005V15.03C8 15.51 8.2 15.7 8.71 15.7H10C10.52 15.7 10.72 15.51 10.72 15.03Z"
              fill="currentColor"
            />
            <path
              d="M16 15.03V8.97005C16 8.49005 15.8 8.30005 15.29 8.30005H14C13.49 8.30005 13.29 8.49005 13.29 8.97005V15.03C13.29 15.51 13.49 15.7 14 15.7H15.29C15.8 15.7 16 15.51 16 15.03Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.75 14.43V9.36995C10.75 8.88995 10.55 8.69995 10.04 8.69995H8.75004C8.24004 8.69995 8.04004 8.88995 8.04004 9.36995V14.43C8.04004 14.91 8.24004 15.1 8.75004 15.1H10.04C10.55 15.1 10.75 14.91 10.75 14.43Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.0298 14.43V9.36995C16.0298 8.88995 15.8298 8.69995 15.3198 8.69995H14.0298C13.5198 8.69995 13.3198 8.88995 13.3198 9.36995V14.43C13.3198 14.91 13.5198 15.1 14.0298 15.1"
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
