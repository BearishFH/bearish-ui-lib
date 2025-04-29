import { ISvg } from '../../SvgPropsType';

export const LockCircleIcon: React.FC<ISvg> = ({
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
              d="M9 11V10C9 8.34 9.5 7 12 7C14.5 7 15 8.34 15 10V11"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0004 14.5999C12.3317 14.5999 12.6003 14.3313 12.6003 13.9999C12.6003 13.6685 12.3317 13.3999 12.0004 13.3999C11.669 13.3999 11.4004 13.6685 11.4004 13.9999C11.4004 14.3313 11.669 14.5999 12.0004 14.5999Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 17H9.5C7.5 17 7 16.5 7 14.5V13.5C7 11.5 7.5 11 9.5 11H14.5C16.5 11 17 11.5 17 13.5V14.5C17 16.5 16.5 17 14.5 17Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke='currentColor'
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
              d="M12 7.75C10.11 7.75 9.75 8.54 9.75 10V10.62H14.25V10C14.25 8.54 13.89 7.75 12 7.75Z"
              fill='currentColor'
            />
            <path
              d="M12.0004 15.0999C12.6079 15.0999 13.1004 14.6074 13.1004 13.9999C13.1004 13.3924 12.6079 12.8999 12.0004 12.8999C11.3929 12.8999 10.9004 13.3924 10.9004 13.9999C10.9004 14.6074 11.3929 15.0999 12.0004 15.0999Z"
              fill='currentColor'
            />
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.38 14.5C17.38 16.7 16.7 17.38 14.5 17.38H9.5C7.3 17.38 6.62 16.7 6.62 14.5V13.5C6.62 11.79 7.03 11 8.25 10.73V10C8.25 9.07 8.25 6.25 12 6.25C15.75 6.25 15.75 9.07 15.75 10V10.73C16.97 11 17.38 11.79 17.38 13.5V14.5Z"
              fill='currentColor'
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <g opacity="0.4">
              <path
                d="M9 11V10C9 8.34 9.5 7 12 7C14.5 7 15 8.34 15 10V11"
                stroke='currentColor'
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0004 14.5999C12.3317 14.5999 12.6003 14.3313 12.6003 13.9999C12.6003 13.6685 12.3317 13.3999 12.0004 13.3999C11.669 13.3999 11.4004 13.6685 11.4004 13.9999C11.4004 14.3313 11.669 14.5999 12.0004 14.5999Z"
                stroke='currentColor'
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5 17H9.5C7.5 17 7 16.5 7 14.5V13.5C7 11.5 7.5 11 9.5 11H14.5C16.5 11 17 11.5 17 13.5V14.5C17 16.5 16.5 17 14.5 17Z"
                stroke='currentColor'
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke='currentColor'
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
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill='currentColor'
            />
            <path
              d="M15.7501 10.73V10C15.7501 9.07 15.7501 6.25 12.0001 6.25C8.25012 6.25 8.25012 9.07 8.25012 10V10.73C7.03012 11 6.62012 11.79 6.62012 13.5V14.5C6.62012 16.7 7.30012 17.38 9.50012 17.38H14.5001C16.7001 17.38 17.3801 16.7 17.3801 14.5V13.5C17.3801 11.79 16.9701 11 15.7501 10.73ZM12.0001 15.1C11.3901 15.1 10.9001 14.61 10.9001 14C10.9001 13.39 11.3901 12.9 12.0001 12.9C12.6101 12.9 13.1001 13.39 13.1001 14C13.1001 14.61 12.6101 15.1 12.0001 15.1ZM14.2501 10.62H9.75012V10C9.75012 8.54 10.1101 7.75 12.0001 7.75C13.8901 7.75 14.2501 8.54 14.2501 10V10.62Z"
              fill='currentColor'
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M9 11V10C9 8.34 9.5 7 12 7C14.5 7 15 8.34 15 10V11"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0004 14.5999C12.3317 14.5999 12.6003 14.3313 12.6003 13.9999C12.6003 13.6685 12.3317 13.3999 12.0004 13.3999C11.669 13.3999 11.4004 13.6685 11.4004 13.9999C11.4004 14.3313 11.669 14.5999 12.0004 14.5999Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 17H9.5C7.5 17 7 16.5 7 14.5V13.5C7 11.5 7.5 11 9.5 11H14.5C16.5 11 17 11.5 17 13.5V14.5C17 16.5 16.5 17 14.5 17Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.19997 2.30001 7.96997 2.85001"
              stroke='currentColor'
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
