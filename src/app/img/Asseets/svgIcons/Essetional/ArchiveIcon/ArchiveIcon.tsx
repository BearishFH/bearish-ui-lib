import { ISvg } from '../../SvgPropsType';

export const ArchiveIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M19.5 10.22V19C19.5 21 19 22 16.5 22H7.5C5 22 4.5 21 4.5 19V10.22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 2H19C21 2 22 3 22 5V7C22 9 21 10 19 10H5C3 10 2 9 2 7V5C2 3 3 2 5 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.1802 14H13.8202"
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
              d="M22 5V7C22 8.83 21.17 9.82 19.5 9.97C19.34 9.99 19.17 10 19 10H5C4.83 10 4.66 9.99 4.5 9.97C2.83 9.82 2 8.83 2 7V5C2 3 3 2 5 2H19C21 2 22 3 22 5Z"
              fill="currentColor"
            />
            <path
              d="M5.5 11.25C4.95 11.25 4.5 11.7 4.5 12.25V19C4.5 21 5 22 7.5 22H16.5C19 22 19.5 21 19.5 19V12.25C19.5 11.7 19.05 11.25 18.5 11.25H5.5ZM13.82 15.75H10.18C9.77 15.75 9.43 15.41 9.43 15C9.43 14.59 9.77 14.25 10.18 14.25H13.82C14.23 14.25 14.57 14.59 14.57 15C14.57 15.41 14.23 15.75 13.82 15.75Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M19.5 10.22V19C19.5 21 19 22 16.5 22H7.5C5 22 4.5 21 4.5 19V10.22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 2H19C21 2 22 3 22 5V7C22 9 21 10 19 10H5C3 10 2 9 2 7V5C2 3 3 2 5 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.34"
              d="M10.1802 14H13.8202"
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
              d="M19.5 9.96997V19C19.5 21 19 22 16.5 22H7.5C5 22 4.5 21 4.5 19V9.96997C4.66 9.98997 4.83 9.99997 5 9.99997H19C19.17 9.99997 19.34 9.98997 19.5 9.96997Z"
              fill="currentColor"
            />
            <path
              d="M22 5V7C22 8.83 21.17 9.82 19.5 9.97C19.34 9.99 19.17 10 19 10H5C4.83 10 4.66 9.99 4.5 9.97C2.83 9.82 2 8.83 2 7V5C2 3 3 2 5 2H19C21 2 22 3 22 5Z"
              fill="currentColor"
            />
            <path
              d="M13.8202 14.75H10.1802C9.77018 14.75 9.43018 14.41 9.43018 14C9.43018 13.59 9.77018 13.25 10.1802 13.25H13.8202C14.2302 13.25 14.5702 13.59 14.5702 14C14.5702 14.41 14.2302 14.75 13.8202 14.75Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M4.5 13.01V10.22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.5 10.22V19C19.5 21 19 22 16.5 22H7.5C5 22 4.5 21 4.5 19V16.97"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 2H19C21 2 22 3 22 5V7C22 9 21 10 19 10H5C3 10 2 9 2 7V5C2 3 3 2 5 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.1802 14H13.8202"
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
