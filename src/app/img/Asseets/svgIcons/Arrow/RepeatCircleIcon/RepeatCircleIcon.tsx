import { ISvg } from '../../SvgPropsType';

export const RepeatCircleIcon: React.FC<ISvg> = ({
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
              d="M7.5 8.34h7.4c.89 0 1.6.72 1.6 1.6v1.77"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.19 6.66 7.5 8.34l1.69 1.69m7.31 5.63H9.1c-.89 0-1.6-.72-1.6-1.6v-1.77"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m14.81 17.34 1.69-1.68-1.69-1.69"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
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
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.19 15.94C17.15 16.03 17.1 16.11 17.03 16.18L15.34 17.87C15.19 18.02 15 18.09 14.81 18.09C14.62 18.09 14.43 18.02 14.28 17.87C13.99 17.58 13.99 17.1 14.28 16.81L14.69 16.4H9.1C7.8 16.4 6.75 15.34 6.75 14.05V12.28C6.75 11.87 7.09 11.53 7.5 11.53C7.91 11.53 8.25 11.87 8.25 12.28V14.05C8.25 14.52 8.63 14.9 9.1 14.9H14.69L14.28 14.49C13.99 14.2 13.99 13.72 14.28 13.43C14.57 13.14 15.05 13.14 15.34 13.43L17.03 15.12C17.1 15.19 17.15 15.27 17.19 15.36C17.27 15.55 17.27 15.76 17.19 15.94ZM17.25 11.72C17.25 12.13 16.91 12.47 16.5 12.47C16.09 12.47 15.75 12.13 15.75 11.72V9.95C15.75 9.48 15.37 9.1 14.9 9.1H9.31L9.72 9.5C10.01 9.79 10.01 10.27 9.72 10.56C9.57 10.71 9.38 10.78 9.19 10.78C9 10.78 8.81 10.71 8.66 10.56L6.97 8.87C6.9 8.8 6.85 8.72 6.81 8.63C6.73 8.45 6.73 8.24 6.81 8.06C6.85 7.97 6.9 7.88 6.97 7.81L8.66 6.12C8.95 5.83 9.43 5.83 9.72 6.12C10.01 6.41 10.01 6.89 9.72 7.18L9.31 7.59H14.9C16.2 7.59 17.25 8.65 17.25 9.94V11.72Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <g
              opacity=".4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7.5 8.34h7.4c.89 0 1.6.72 1.6 1.6v1.77" />
              <path d="M9.19 6.66 7.5 8.34l1.69 1.69m7.31 5.63H9.1c-.89 0-1.6-.72-1.6-1.6v-1.77" />
              <path d="m14.81 17.34 1.69-1.68-1.69-1.69" />
            </g>
            <path
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
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
              opacity=".4"
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
              fill="currentColor"
            />
            <path
              d="M14.9 7.59H9.31l.41-.41c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0L6.97 7.81c-.07.07-.12.15-.16.24-.08.18-.08.39 0 .57.04.09.09.17.16.24l1.69 1.69c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-.41-.41h5.59c.47 0 .85.38.85.85v1.77c0 .41.34.75.75.75s.75-.34.75-.75V9.93c0-1.28-1.06-2.34-2.35-2.34m2.29 7.78a.8.8 0 0 0-.16-.24l-1.69-1.69a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.41.41H9.1a.85.85 0 0 1-.85-.85v-1.77c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.77c0 1.3 1.06 2.35 2.35 2.35h5.59l-.41.41c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.69-1.69c.07-.07.12-.15.16-.24a.73.73 0 0 0 0-.58"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M7.5 8.33984H14.9C15.79 8.33984 16.5 9.05982 16.5 9.93982V11.7098"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.19 6.65991L7.5 8.33997L9.19 10.03"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 15.66H9.10001C8.21001 15.66 7.5 14.9401 7.5 14.0601V12.29"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.8096 17.34L16.4996 15.66L14.8096 13.97"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.29998 7.97 2.84998"
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
