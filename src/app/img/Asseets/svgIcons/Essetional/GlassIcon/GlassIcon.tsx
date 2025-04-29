import { ISvg } from '../../SvgPropsType';

export const GlassIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M10 17.5H14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17.5V7.5C2 3.5 3 2.5 7 2.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 17.5V7.5C22 3.5 21 2.5 17 2.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 15.91V19.2C10 21.2 9.2 22 7.2 22H4.8C2.8 22 2 21.2 2 19.2V15.91C2 13.91 2.8 13.11 4.8 13.11H7.2C9.2 13.11 10 13.91 10 15.91Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 15.91V19.2C22 21.2 21.2 22 19.2 22H16.8C14.8 22 14 21.2 14 19.2V15.91C14 13.91 14.8 13.11 16.8 13.11H19.2C21.2 13.11 22 13.91 22 15.91Z"
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
              d="M17.7098 2H16.7598C16.3698 2 16.0498 2.32 16.0498 2.71C16.0498 3.11 16.3698 3.43 16.7598 3.43H17.7098C19.4198 3.43 20.8098 4.82 20.8098 6.52V12.4C20.4498 12.21 20.0498 12.11 19.6198 12.11H15.8098C14.3698 12.11 13.1898 13.28 13.1898 14.73V16.29H10.8098V14.73C10.8098 13.28 9.62977 12.11 8.18976 12.11H4.37977C3.94977 12.11 3.54977 12.21 3.18977 12.4V6.52C3.18977 4.82 4.57977 3.43 6.28977 3.43H7.23977C7.62977 3.43 7.94977 3.11 7.94977 2.71C7.94977 2.32 7.62977 2 7.23977 2H6.28977C3.78977 2 1.75977 4.03 1.75977 6.52V14.73V19.38C1.75977 20.83 2.93977 22 4.37977 22H8.18976C9.62977 22 10.8098 20.83 10.8098 19.38V17.71H13.1898V19.38C13.1898 20.83 14.3698 22 15.8098 22H19.6198C21.0598 22 22.2398 20.83 22.2398 19.38V14.73V6.52C22.2398 4.03 20.2098 2 17.7098 2Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              opacity="0.4"
              d="M10 17.5H14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M2 17.5V7.5C2 3.5 3 2.5 7 2.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M22 17.5V7.5C22 3.5 21 2.5 17 2.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 15.91V19.2C10 21.2 9.2 22 7.2 22H4.8C2.8 22 2 21.2 2 19.2V15.91C2 13.91 2.8 13.11 4.8 13.11H7.2C9.2 13.11 10 13.91 10 15.91Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 15.91V19.2C22 21.2 21.2 22 19.2 22H16.8C14.8 22 14 21.2 14 19.2V15.91C14 13.91 14.8 13.11 16.8 13.11H19.2C21.2 13.11 22 13.91 22 15.91Z"
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
            <path d="M13.1901 16.29H10.8101V17.71H13.1901V16.29Z" fill="currentColor" />
            <path
              d="M7.94977 2.71C7.94977 3.11 7.62977 3.43 7.23977 3.43H6.28977C4.57977 3.43 3.18977 4.82 3.18977 6.52V12.4C2.33977 12.83 1.75977 13.71 1.75977 14.73V6.52C1.75977 4.03 3.78977 2 6.28977 2H7.23977C7.62977 2 7.94977 2.32 7.94977 2.71Z"
              fill="currentColor"
            />
            <path
              d="M22.2398 6.52V14.73C22.2398 13.71 21.6598 12.83 20.8098 12.4V6.52C20.8098 4.82 19.4198 3.43 17.7098 3.43H16.7598C16.3698 3.43 16.0498 3.11 16.0498 2.71C16.0498 2.32 16.3698 2 16.7598 2H17.7098C20.2098 2 22.2398 4.03 22.2398 6.52Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M10.8098 14.73V19.38C10.8098 20.83 9.62977 22 8.18976 22H4.37977C2.93977 22 1.75977 20.83 1.75977 19.38V14.73C1.75977 13.71 2.33977 12.83 3.18977 12.4C3.54977 12.21 3.94977 12.11 4.37977 12.11H8.18976C9.62977 12.11 10.8098 13.28 10.8098 14.73Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M22.2399 14.73V19.38C22.2399 20.83 21.0599 22 19.6199 22H15.8099C14.3699 22 13.1899 20.83 13.1899 19.38V14.73C13.1899 13.28 14.3699 12.11 15.8099 12.11H19.6199C20.0499 12.11 20.4499 12.21 20.8099 12.4C21.6599 12.83 22.2399 13.71 22.2399 14.73Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M10 17.5H14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17.5V7.5C2 3.5 3 2.5 7 2.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 17.5V7.5C22 3.5 21 2.5 17 2.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 15.91V19.2C10 21.2 9.2 22 7.2 22H4.8C2.8 22 2 21.2 2 19.2V15.91C2 13.91 2.8 13.11 4.8 13.11H7.2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 15.91V19.2C22 21.2 21.2 22 19.2 22H16.8C14.8 22 14 21.2 14 19.2V15.91C14 13.91 14.8 13.11 16.8 13.11H19.2C21.2 13.11 22 13.91 22 15.91Z"
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
