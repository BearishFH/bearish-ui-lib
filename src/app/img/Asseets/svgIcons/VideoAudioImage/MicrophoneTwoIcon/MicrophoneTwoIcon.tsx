import { ISvg } from '../../SvgPropsType';

export const MicrophoneTwoIcon: React.FC<ISvg> = ({
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
              d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.3501 9.65002V11.35C4.3501 15.57 7.7801 19 12.0001 19C16.2201 19 19.6501 15.57 19.6501 11.35V9.65002"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6099 6.43C11.5099 6.1 12.4899 6.1 13.3899 6.43"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.2002 8.55001C11.7302 8.41001 12.2802 8.41001 12.8102 8.55001"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19V22"
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
              d="M19.1202 9.11999C18.7302 9.11999 18.4202 9.42999 18.4202 9.81999V11.4C18.4202 14.94 15.5402 17.82 12.0002 17.82C8.46018 17.82 5.58018 14.94 5.58018 11.4V9.80999C5.58018 9.41999 5.27018 9.10999 4.88018 9.10999C4.49018 9.10999 4.18018 9.41999 4.18018 9.80999V11.39C4.18018 15.46 7.31018 18.81 11.3002 19.17V21.3C11.3002 21.69 11.6102 22 12.0002 22C12.3902 22 12.7002 21.69 12.7002 21.3V19.17C16.6802 18.82 19.8202 15.46 19.8202 11.39V9.80999C19.8102 9.42999 19.5002 9.11999 19.1202 9.11999Z"
              fill="currentColor"
            />
            <path
              d="M12.0001 2C9.56008 2 7.58008 3.98 7.58008 6.42V11.54C7.58008 13.98 9.56008 15.96 12.0001 15.96C14.4401 15.96 16.4201 13.98 16.4201 11.54V6.42C16.4201 3.98 14.4401 2 12.0001 2ZM13.3101 8.95C13.2401 9.21 13.0101 9.38 12.7501 9.38C12.7001 9.38 12.6501 9.37 12.6001 9.36C12.2101 9.25 11.8001 9.25 11.4101 9.36C11.0901 9.45 10.7801 9.26 10.7001 8.95C10.6101 8.64 10.8001 8.32 11.1101 8.24C11.7001 8.08 12.3201 8.08 12.9101 8.24C13.2101 8.32 13.3901 8.64 13.3101 8.95ZM13.8401 7.01C13.7501 7.25 13.5301 7.39 13.2901 7.39C13.2201 7.39 13.1601 7.38 13.0901 7.36C12.3901 7.1 11.6101 7.1 10.9101 7.36C10.6101 7.47 10.2701 7.31 10.1601 7.01C10.0501 6.71 10.2101 6.37 10.5101 6.27C11.4701 5.92 12.5301 5.92 13.4901 6.27C13.7901 6.38 13.9501 6.71 13.8401 7.01Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M10.6099 6.43C11.5099 6.1 12.4899 6.1 13.3899 6.43"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M11.2002 8.55001C11.7302 8.41001 12.2802 8.41001 12.8102 8.55001"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity="0.4">
              <path
                d="M4.34961 9.65039V11.3504C4.34961 15.5704 7.77961 19.0004 11.9996 19.0004C16.2196 19.0004 19.6496 15.5704 19.6496 11.3504V9.65039"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19V22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              opacity="0.4"
              d="M19.1202 9.11999C18.7302 9.11999 18.4202 9.42999 18.4202 9.81999V11.4C18.4202 14.94 15.5402 17.82 12.0002 17.82C8.46018 17.82 5.58018 14.94 5.58018 11.4V9.80999C5.58018 9.41999 5.27018 9.10999 4.88018 9.10999C4.49018 9.10999 4.18018 9.41999 4.18018 9.80999V11.39C4.18018 15.46 7.31018 18.81 11.3002 19.17V21.3C11.3002 21.69 11.6102 22 12.0002 22C12.3902 22 12.7002 21.69 12.7002 21.3V19.17C16.6802 18.82 19.8202 15.46 19.8202 11.39V9.80999C19.8102 9.42999 19.5002 9.11999 19.1202 9.11999Z"
              fill="currentColor"
            />
            <path
              d="M12.0001 2C9.56008 2 7.58008 3.98 7.58008 6.42V11.54C7.58008 13.98 9.56008 15.96 12.0001 15.96C14.4401 15.96 16.4201 13.98 16.4201 11.54V6.42C16.4201 3.98 14.4401 2 12.0001 2ZM13.3101 8.95C13.2401 9.21 13.0101 9.38 12.7501 9.38C12.7001 9.38 12.6501 9.37 12.6001 9.36C12.2101 9.25 11.8001 9.25 11.4101 9.36C11.0901 9.45 10.7801 9.26 10.7001 8.95C10.6101 8.64 10.8001 8.32 11.1101 8.24C11.7001 8.08 12.3201 8.08 12.9101 8.24C13.2101 8.32 13.3901 8.64 13.3101 8.95ZM13.8401 7.01C13.7501 7.25 13.5301 7.39 13.2901 7.39C13.2201 7.39 13.1601 7.38 13.0901 7.36C12.3901 7.1 11.6101 7.1 10.9101 7.36C10.6101 7.47 10.2701 7.31 10.1601 7.01C10.0501 6.71 10.2101 6.37 10.5101 6.27C11.4701 5.92 12.5301 5.92 13.4901 6.27C13.7901 6.38 13.9501 6.71 13.8401 7.01Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M7.99951 10.02V11.5C7.99951 13.71 9.78951 15.5 11.9995 15.5C14.2095 15.5 15.9995 13.71 15.9995 11.5V6C15.9995 3.79 14.2095 2 11.9995 2C9.78951 2 7.99951 3.79 7.99951 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.34961 9.65002V11.35C4.34961 15.57 7.77961 19 11.9996 19C16.2196 19 19.6496 15.57 19.6496 11.35V9.65002"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6094 6.43C11.5094 6.1 12.4894 6.1 13.3894 6.43"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.1997 8.55001C11.7297 8.41001 12.2797 8.41001 12.8097 8.55001"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9995 19V22"
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
