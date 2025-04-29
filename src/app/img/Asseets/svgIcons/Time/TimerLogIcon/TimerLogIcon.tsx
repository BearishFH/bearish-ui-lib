import { ISvg } from '../../SvgPropsType';

export const TimerLogIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M20.75 13.25C20.75 18.08 16.83 22 12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8V13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 2H15"
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
              d="M12.0001 4.6499C7.22008 4.6499 3.33008 8.5399 3.33008 13.3199C3.33008 18.0999 7.22008 21.9999 12.0001 21.9999C16.7801 21.9999 20.6701 18.1099 20.6701 13.3299C20.6701 8.5499 16.7801 4.6499 12.0001 4.6499ZM12.7501 12.9999C12.7501 13.4099 12.4101 13.7499 12.0001 13.7499C11.5901 13.7499 11.2501 13.4099 11.2501 12.9999V7.9999C11.2501 7.5899 11.5901 7.2499 12.0001 7.2499C12.4101 7.2499 12.7501 7.5899 12.7501 7.9999V12.9999Z"
              fill="currentColor"
            />
            <path
              d="M14.8896 3.45H9.10965C8.70965 3.45 8.38965 3.13 8.38965 2.73C8.38965 2.33 8.70965 2 9.10965 2H14.8896C15.2896 2 15.6096 2.32 15.6096 2.72C15.6096 3.12 15.2896 3.45 14.8896 3.45Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M20.75 13.25C20.75 18.08 16.83 22 12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M12 8V13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M9 2H15"
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
              d="M12.0001 22.0002C16.7884 22.0002 20.6701 18.1185 20.6701 13.3302C20.6701 8.54185 16.7884 4.66016 12.0001 4.66016C7.21177 4.66016 3.33008 8.54185 3.33008 13.3302C3.33008 18.1185 7.21177 22.0002 12.0001 22.0002Z"
              fill="currentColor"
            />
            <path
              d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
              fill="currentColor"
            />
            <path
              d="M14.8896 3.45H9.10965C8.70965 3.45 8.38965 3.13 8.38965 2.73C8.38965 2.33 8.70965 2 9.10965 2H14.8896C15.2896 2 15.6096 2.32 15.6096 2.72C15.6096 3.12 15.2896 3.45 14.8896 3.45Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M12 8V13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 2H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 8C3.9 9.46 3.25 11.28 3.25 13.25C3.25 18.08 7.17 22 12 22C16.83 22 20.75 18.08 20.75 13.25C20.75 8.42 16.83 4.5 12 4.5C10.74 4.5 9.55 4.76 8.47 5.24"
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
