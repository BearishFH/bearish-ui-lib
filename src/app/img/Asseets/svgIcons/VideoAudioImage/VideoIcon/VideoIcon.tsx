import { ISvg } from '../../SvgPropsType';

export const VideoIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M12.53 20.42H6.21C3.05 20.42 2 18.32 2 16.21V7.79002C2 4.63002 3.05 3.58002 6.21 3.58002H12.53C15.69 3.58002 16.74 4.63002 16.74 7.79002V16.21C16.74 19.37 15.68 20.42 12.53 20.42Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.5202 17.1L16.7402 15.15V8.84001L19.5202 6.89001C20.8802 5.94001 22.0002 6.52001 22.0002 8.19001V15.81C22.0002 17.48 20.8802 18.06 19.5202 17.1Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z"
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
              d="M21.15 6.17C20.74 5.95 19.88 5.72 18.71 6.54L17.24 7.58C17.13 4.47 15.78 3.25 12.5 3.25H6.5C3.08 3.25 1.75 4.58 1.75 8V16C1.75 18.3 3 20.75 6.5 20.75H12.5C15.78 20.75 17.13 19.53 17.24 16.42L18.71 17.46C19.33 17.9 19.87 18.04 20.3 18.04C20.67 18.04 20.96 17.93 21.15 17.83C21.56 17.62 22.25 17.05 22.25 15.62V8.38C22.25 6.95 21.56 6.38 21.15 6.17ZM11 11.38C9.97 11.38 9.12 10.54 9.12 9.5C9.12 8.46 9.97 7.62 11 7.62C12.03 7.62 12.88 8.46 12.88 9.5C12.88 10.54 12.03 11.38 11 11.38Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M12.53 20.42H6.21C3.05 20.42 2 18.32 2 16.21V7.79002C2 4.63002 3.05 3.58002 6.21 3.58002H12.53C15.69 3.58002 16.74 4.63002 16.74 7.79002V16.21C16.74 19.37 15.68 20.42 12.53 20.42Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M19.5202 17.1L16.7402 15.15V8.84001L19.5202 6.89001C20.8802 5.94001 22.0002 6.52001 22.0002 8.19001V15.81C22.0002 17.48 20.8802 18.06 19.5202 17.1Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z"
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
              d="M13 3.25H7C3.58 3.25 2.25 4.58 2.25 8V16C2.25 18.3 3.5 20.75 7 20.75H13C16.42 20.75 17.75 19.42 17.75 16V8C17.75 4.58 16.42 3.25 13 3.25Z"
              fill="currentColor"
            />
            <path
              d="M11.5001 11.38C12.5384 11.38 13.3801 10.5383 13.3801 9.5C13.3801 8.4617 12.5384 7.62 11.5001 7.62C10.4618 7.62 9.62012 8.4617 9.62012 9.5C9.62012 10.5383 10.4618 11.38 11.5001 11.38Z"
              fill="currentColor"
            />
            <path
              d="M21.6505 6.16999C21.2405 5.95999 20.3805 5.71999 19.2105 6.53999L17.7305 7.57999C17.7405 7.71999 17.7505 7.84999 17.7505 7.99999V16C17.7505 16.15 17.7305 16.28 17.7305 16.42L19.2105 17.46C19.8305 17.9 20.3705 18.04 20.8005 18.04C21.1705 18.04 21.4605 17.94 21.6505 17.84C22.0605 17.63 22.7505 17.06 22.7505 15.63V8.37999C22.7505 6.94999 22.0605 6.37999 21.6505 6.16999Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2 7.79002C2 4.63002 3.05 3.58002 6.21 3.58002H12.53C15.69 3.58002 16.74 4.63002 16.74 7.79002V16.21C16.74 19.37 15.69 20.42 12.53 20.42H6.21C3.05 20.42 2 18.32 2 16.21V12.12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.5202 17.1L16.7402 15.15V8.84001L19.5202 6.89001C20.8802 5.94001 22.0002 6.52001 22.0002 8.19001V15.81C22.0002 17.48 20.8802 18.06 19.5202 17.1Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 9.5C13 8.67 12.33 8 11.5 8C10.67 8 10 8.67 10 9.5C10 10.33 10.67 11 11.5 11"
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
