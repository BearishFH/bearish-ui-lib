import { ISvg } from '../../SvgPropsType';

export const AlarmEscalateIcon: React.FC<ISvg> = ({
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
              d="M2 22H22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 6C7.03 6 3 10.03 3 15V22H21V15C21 10.03 16.97 6 12 6Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 2V3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 4L5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 4L19 5"
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
              d="M22 21.25H21V15C21 10.03 16.97 6 12 6C7.03 6 3 10.03 3 15V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25Z"
              fill="currentColor"
            />
            <path
              d="M12 3.75C11.59 3.75 11.25 3.41 11.25 3V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V3C12.75 3.41 12.41 3.75 12 3.75Z"
              fill="currentColor"
            />
            <path
              d="M5.00043 5.74994C4.81043 5.74994 4.62043 5.67994 4.47043 5.52994L3.47043 4.52994C3.18043 4.23994 3.18043 3.75994 3.47043 3.46994C3.76043 3.17994 4.24043 3.17994 4.53043 3.46994L5.53043 4.46994C5.82043 4.75994 5.82043 5.23994 5.53043 5.52994C5.38043 5.67994 5.19043 5.74994 5.00043 5.74994Z"
              fill="currentColor"
            />
            <path
              d="M19.0004 5.74994C18.8104 5.74994 18.6204 5.67994 18.4704 5.52994C18.1804 5.23994 18.1804 4.75994 18.4704 4.46994L19.4704 3.46994C19.7604 3.17994 20.2404 3.17994 20.5304 3.46994C20.8204 3.75994 20.8204 4.23994 20.5304 4.52994L19.5304 5.52994C19.3804 5.67994 19.1904 5.74994 19.0004 5.74994Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M2 22H22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 6C7.03 6 3 10.03 3 15V22H21V15C21 10.03 16.97 6 12 6Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M12 2V3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M4 4L5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M20 4L19 5"
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
              d="M22.75 22C22.75 22.41 22.41 22.75 22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22Z"
              fill="currentColor"
            />
            <path
              d="M21 15V21.25H3V15C3 10.03 7.03 6 12 6C16.97 6 21 10.03 21 15Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M12 3.75C11.59 3.75 11.25 3.41 11.25 3V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V3C12.75 3.41 12.41 3.75 12 3.75Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M5.00043 5.74994C4.81043 5.74994 4.62043 5.67994 4.47043 5.52994L3.47043 4.52994C3.18043 4.23994 3.18043 3.75994 3.47043 3.46994C3.76043 3.17994 4.24043 3.17994 4.53043 3.46994L5.53043 4.46994C5.82043 4.75994 5.82043 5.23994 5.53043 5.52994C5.38043 5.67994 5.19043 5.74994 5.00043 5.74994Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M19.0004 5.74994C18.8104 5.74994 18.6204 5.67994 18.4704 5.52994C18.1804 5.23994 18.1804 4.75994 18.4704 4.46994L19.4704 3.46994C19.7604 3.17994 20.2404 3.17994 20.5304 3.46994C20.8204 3.75994 20.8204 4.23994 20.5304 4.52994L19.5304 5.52994C19.3804 5.67994 19.1904 5.74994 19.0004 5.74994Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2 22H22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 16.03V15C21 10.03 16.97 6 12 6C10.56 6 9.21 6.34 8 6.94C7.26 7.31 6.58 7.77001 5.97 8.32001C4.15 9.97001 3 12.35 3 15V22H21V19.97"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 2V3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 4L5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 4L19 5"
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
