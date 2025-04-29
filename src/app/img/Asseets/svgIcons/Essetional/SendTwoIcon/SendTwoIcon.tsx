import { ISvg } from '../../SvgPropsType';

export const SendTwoIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M7.40018 6.31997L15.8902 3.48997C19.7002 2.21997 21.7702 4.29997 20.5102 8.10997L17.6802 16.6C15.7802 22.31 12.6602 22.31 10.7602 16.6L9.92018 14.08L7.40018 13.24C1.69018 11.34 1.69018 8.22997 7.40018 6.31997Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.1099 13.65L13.6899 10.06"
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
              d="M16.1401 2.95998L7.11012 5.95998C1.04012 7.98998 1.04012 11.3 7.11012 13.32L9.79012 14.21L10.6801 16.89C12.7001 22.96 16.0201 22.96 18.0401 16.89L21.0501 7.86998C22.3901 3.81998 20.1901 1.60998 16.1401 2.95998ZM16.4601 8.33998L12.6601 12.16C12.5101 12.31 12.3201 12.38 12.1301 12.38C11.9401 12.38 11.7501 12.31 11.6001 12.16C11.3101 11.87 11.3101 11.39 11.6001 11.1L15.4001 7.27998C15.6901 6.98998 16.1701 6.98998 16.4601 7.27998C16.7501 7.56998 16.7501 8.04998 16.4601 8.33998Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M7.40018 6.31997L15.8902 3.48997C19.7002 2.21997 21.7702 4.29997 20.5102 8.10997L17.6802 16.6C15.7802 22.31 12.6602 22.31 10.7602 16.6L9.92018 14.08L7.40018 13.24C1.69018 11.34 1.69018 8.22997 7.40018 6.31997Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.34"
              d="M10.1099 13.65L13.6899 10.06"
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
              d="M7.1099 5.95997L16.1299 2.94997C20.1799 1.59997 22.3799 3.80997 21.0399 7.85997L18.0299 16.88C16.0099 22.95 12.6899 22.95 10.6699 16.88L9.7799 14.2L7.0999 13.31C1.0399 11.3 1.0399 7.98997 7.1099 5.95997Z"
              fill="currentColor"
            />
            <path d="M12.1201 11.63L15.9301 7.81L12.1201 11.63Z" fill="currentColor" />
            <path
              d="M12.1201 12.38C11.9301 12.38 11.7401 12.31 11.5901 12.16C11.3001 11.87 11.3001 11.39 11.5901 11.1L15.3901 7.28C15.6801 6.99 16.1601 6.99 16.4501 7.28C16.7401 7.57 16.7401 8.05 16.4501 8.34L12.6501 12.16C12.5001 12.3 12.3101 12.38 12.1201 12.38Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M15.8902 3.48997C19.7002 2.21997 21.7702 4.29997 20.5102 8.10997L17.6802 16.6C15.7802 22.31 12.6602 22.31 10.7602 16.6L9.92018 14.08L7.40018 13.24C1.69018 11.34 1.69018 8.22997 7.40018 6.31997L12.0002 4.78997"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.1099 13.65L13.6899 10.06"
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
