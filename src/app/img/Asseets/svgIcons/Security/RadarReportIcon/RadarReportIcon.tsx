import { ISvg } from '../../SvgPropsType';

export const RadarReportIcon: React.FC<ISvg> = ({
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
              d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 18C21.26 16.33 22 14.25 22 12C22 9.75 21.26 7.67 20 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6C2.74 7.67 2 9.75 2 12C2 14.25 2.74 16.33 4 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.7998 15.5999C17.5498 14.5999 17.9998 13.3499 17.9998 11.9999C17.9998 10.6499 17.5498 9.3999 16.7998 8.3999"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.20001 8.3999C6.45001 9.3999 6 10.6499 6 11.9999C6 13.3499 6.45001 14.5999 7.20001 15.5999"
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
              d="M12.0001 14.3801C13.3146 14.3801 14.3801 13.3146 14.3801 12.0001C14.3801 10.6857 13.3146 9.62012 12.0001 9.62012C10.6857 9.62012 9.62012 10.6857 9.62012 12.0001C9.62012 13.3146 10.6857 14.3801 12.0001 14.3801Z"
              fill="currentColor"
            />
            <path
              d="M20.0003 18.7498C19.8403 18.7498 19.6903 18.6998 19.5503 18.5998C19.2203 18.3498 19.1503 17.8798 19.4003 17.5498C20.6103 15.9398 21.2503 14.0198 21.2503 11.9998C21.2503 9.97978 20.6103 8.05978 19.4003 6.44978C19.1503 6.11978 19.2203 5.64978 19.5503 5.39978C19.8803 5.14978 20.3503 5.21978 20.6003 5.54978C22.0103 7.41978 22.7503 9.64978 22.7503 11.9998C22.7503 14.3498 22.0103 16.5798 20.6003 18.4498C20.4503 18.6498 20.2303 18.7498 20.0003 18.7498Z"
              fill="currentColor"
            />
            <path
              d="M4 18.7498C3.77 18.7498 3.55 18.6498 3.4 18.4498C1.99 16.5798 1.25 14.3498 1.25 11.9998C1.25 9.64978 1.99 7.41978 3.4 5.54978C3.65 5.21978 4.12 5.14978 4.45 5.39978C4.78 5.64978 4.85 6.11978 4.6 6.44978C3.39 8.05978 2.75 9.97978 2.75 11.9998C2.75 14.0198 3.39 15.9398 4.6 17.5498C4.85 17.8798 4.78 18.3498 4.45 18.5998C4.32 18.6998 4.16 18.7498 4 18.7498Z"
              fill="currentColor"
            />
            <path
              d="M16.8001 16.3502C16.6401 16.3502 16.4901 16.3002 16.3501 16.2002C16.0201 15.9502 15.9501 15.4802 16.2001 15.1502C16.8901 14.2402 17.2501 13.1502 17.2501 12.0002C17.2501 10.8502 16.8901 9.76018 16.2001 8.85018C15.9501 8.52018 16.0201 8.05018 16.3501 7.80018C16.6801 7.55018 17.1501 7.62017 17.4001 7.95017C18.2801 9.13017 18.7501 10.5302 18.7501 12.0002C18.7501 13.4702 18.2801 14.8802 17.4001 16.0502C17.2501 16.2502 17.0301 16.3502 16.8001 16.3502Z"
              fill="currentColor"
            />
            <path
              d="M7.2 16.3502C6.97 16.3502 6.75 16.2502 6.6 16.0502C5.72 14.8802 5.25 13.4702 5.25 12.0002C5.25 10.5302 5.72 9.12017 6.6 7.95017C6.85 7.62017 7.32 7.55018 7.65 7.80018C7.98 8.05018 8.05 8.52018 7.8 8.85018C7.11 9.76018 6.75 10.8502 6.75 12.0002C6.75 13.1502 7.11 14.2402 7.8 15.1502C8.05 15.4802 7.98 15.9502 7.65 16.2002C7.52 16.3002 7.36 16.3502 7.2 16.3502Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              opacity="0.4"
              d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 18C21.26 16.33 22 14.25 22 12C22 9.75 21.26 7.67 20 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6C2.74 7.67 2 9.75 2 12C2 14.25 2.74 16.33 4 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M16.7998 15.5999C17.5498 14.5999 17.9998 13.3499 17.9998 11.9999C17.9998 10.6499 17.5498 9.3999 16.7998 8.3999"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M7.20001 8.3999C6.45001 9.3999 6 10.6499 6 11.9999C6 13.3499 6.45001 14.5999 7.20001 15.5999"
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
              d="M12.0001 14.3801C13.3146 14.3801 14.3801 13.3146 14.3801 12.0001C14.3801 10.6857 13.3146 9.62012 12.0001 9.62012C10.6857 9.62012 9.62012 10.6857 9.62012 12.0001C9.62012 13.3146 10.6857 14.3801 12.0001 14.3801Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M20.0003 18.7498C19.8403 18.7498 19.6903 18.6998 19.5503 18.5998C19.2203 18.3498 19.1503 17.8798 19.4003 17.5498C20.6103 15.9398 21.2503 14.0198 21.2503 11.9998C21.2503 9.97979 20.6103 8.05981 19.4003 6.44981C19.1503 6.11981 19.2203 5.64979 19.5503 5.39979C19.8803 5.14979 20.3503 5.21978 20.6003 5.54978C22.0103 7.41978 22.7503 9.64979 22.7503 11.9998C22.7503 14.3498 22.0103 16.5798 20.6003 18.4498C20.4503 18.6498 20.2303 18.7498 20.0003 18.7498Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M4 18.7498C3.77 18.7498 3.54999 18.6498 3.39999 18.4498C1.98999 16.5798 1.25 14.3498 1.25 11.9998C1.25 9.64979 1.98999 7.41978 3.39999 5.54978C3.64999 5.21978 4.12001 5.14979 4.45001 5.39979C4.78001 5.64979 4.85001 6.11981 4.60001 6.44981C3.39001 8.05981 2.75 9.97979 2.75 11.9998C2.75 14.0198 3.39001 15.9398 4.60001 17.5498C4.85001 17.8798 4.78001 18.3498 4.45001 18.5998C4.32001 18.6998 4.16 18.7498 4 18.7498Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M16.8001 16.3502C16.6401 16.3502 16.4901 16.3002 16.3501 16.2002C16.0201 15.9502 15.9501 15.4802 16.2001 15.1502C16.8901 14.2402 17.2501 13.1502 17.2501 12.0002C17.2501 10.8502 16.8901 9.76018 16.2001 8.85018C15.9501 8.52018 16.0201 8.05017 16.3501 7.80017C16.6801 7.55017 17.1501 7.62019 17.4001 7.95019C18.2801 9.13019 18.7501 10.5302 18.7501 12.0002C18.7501 13.4702 18.2801 14.8802 17.4001 16.0502C17.2501 16.2502 17.0301 16.3502 16.8001 16.3502Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M7.20001 16.3502C6.97001 16.3502 6.75001 16.2502 6.60001 16.0502C5.72001 14.8702 5.25 13.4702 5.25 12.0002C5.25 10.5302 5.72001 9.12019 6.60001 7.95019C6.85001 7.62019 7.31999 7.55017 7.64999 7.80017C7.97999 8.05017 8.04999 8.52018 7.79999 8.85018C7.10999 9.76018 6.75 10.8502 6.75 12.0002C6.75 13.1502 7.10999 14.2402 7.79999 15.1502C8.04999 15.4802 7.97999 15.9502 7.64999 16.2002C7.51999 16.3002 7.36001 16.3502 7.20001 16.3502Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 18C21.26 16.33 22 14.25 22 12C22 9.75 21.26 7.67 20 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 17.9999C2.74 16.3299 2 14.2499 2 11.9999C2 11.7899 2.00999 11.5799 2.01999 11.3799"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6C3.62 6.51 3.28 7.06001 3 7.64001"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.7998 15.5999C17.5498 14.5999 17.9998 13.3499 17.9998 11.9999C17.9998 10.6499 17.5498 9.3999 16.7998 8.3999"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.20001 8.3999C6.45001 9.3999 6 10.6499 6 11.9999C6 13.3499 6.45001 14.5999 7.20001 15.5999"
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
