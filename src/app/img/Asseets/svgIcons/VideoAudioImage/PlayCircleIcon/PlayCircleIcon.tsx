import { ISvg } from '../../SvgPropsType';

export const PlayCircleIcon: React.FC<ISvg> = ({
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
              d="M11.9697 22C17.4926 22 21.9697 17.5228 21.9697 12C21.9697 6.47715 17.4926 2 11.9697 2C6.44688 2 1.96973 6.47715 1.96973 12C1.96973 17.5228 6.44688 22 11.9697 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.74023 12.23V10.56C8.74023 8.48 10.2102 7.63 12.0102 8.67L13.4602 9.51L14.9102 10.35C16.7102 11.39 16.7102 13.09 14.9102 14.13L13.4602 14.97L12.0102 15.81C10.2102 16.85 8.74023 16 8.74023 13.92V12.23Z"
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
              d="M11.9697 2C6.44973 2 1.96973 6.48 1.96973 12C1.96973 17.52 6.44973 22 11.9697 22C17.4897 22 21.9697 17.52 21.9697 12C21.9697 6.48 17.4997 2 11.9697 2ZM14.9697 14.23L12.0697 15.9C11.7097 16.11 11.3097 16.21 10.9197 16.21C10.5197 16.21 10.1297 16.11 9.76973 15.9C9.04973 15.48 8.61973 14.74 8.61973 13.9V10.55C8.61973 9.72 9.04973 8.97 9.76973 8.55C10.4897 8.13 11.3497 8.13 12.0797 8.55L14.9797 10.22C15.6997 10.64 16.1297 11.38 16.1297 12.22C16.1297 13.06 15.6997 13.81 14.9697 14.23Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M11.9697 22C17.4926 22 21.9697 17.5228 21.9697 12C21.9697 6.47715 17.4926 2 11.9697 2C6.44688 2 1.96973 6.47715 1.96973 12C1.96973 17.5228 6.44688 22 11.9697 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M8.74023 12.23V10.56C8.74023 8.48 10.2102 7.63 12.0102 8.67L13.4602 9.51L14.9102 10.35C16.7102 11.39 16.7102 13.09 14.9102 14.13L13.4602 14.97L12.0102 15.81C10.2102 16.85 8.74023 16 8.74023 13.92V12.23Z"
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
              d="M11.9697 22C17.4926 22 21.9697 17.5228 21.9697 12C21.9697 6.47715 17.4926 2 11.9697 2C6.44688 2 1.96973 6.47715 1.96973 12C1.96973 17.5228 6.44688 22 11.9697 22Z"
              fill="currentColor"
            />
            <path
              d="M14.9704 10.23L12.0704 8.56C11.3504 8.14 10.4804 8.14 9.76035 8.56C9.04035 8.98 8.61035 9.72 8.61035 10.56V13.91C8.61035 14.74 9.04035 15.49 9.76035 15.91C10.1204 16.12 10.5204 16.22 10.9104 16.22C11.3104 16.22 11.7004 16.12 12.0604 15.91L14.9604 14.24C15.6804 13.82 16.1104 13.08 16.1104 12.24C16.1304 11.4 15.7004 10.65 14.9704 10.23Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M14.9102 14.12C16.7102 13.08 16.7102 11.38 14.9102 10.34L13.4602 9.49999L12.0102 8.65999C10.2102 7.61999 8.74023 8.46999 8.74023 10.55V12.22V13.89C8.74023 15.55 9.68023 16.43 10.9802 16.18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
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
