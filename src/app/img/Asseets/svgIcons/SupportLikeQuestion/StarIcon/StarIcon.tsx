import { ISvg } from '../../SvgPropsType';

export const StarIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M15.39 5.21L16.7999 8.02999C16.9899 8.41999 17.4999 8.78999 17.9299 8.86999L20.48 9.28999C22.11 9.55999 22.49 10.74 21.32 11.92L19.3299 13.91C18.9999 14.24 18.81 14.89 18.92 15.36L19.4899 17.82C19.9399 19.76 18.9 20.52 17.19 19.5L14.7999 18.08C14.3699 17.82 13.65 17.82 13.22 18.08L10.8299 19.5C9.11994 20.51 8.07995 19.76 8.52995 17.82L9.09996 15.36C9.20996 14.9 9.01995 14.25 8.68995 13.91L6.69996 11.92C5.52996 10.75 5.90996 9.56999 7.53996 9.28999L10.0899 8.86999C10.5199 8.79999 11.03 8.41999 11.22 8.02999L12.63 5.21C13.38 3.68 14.62 3.68 15.39 5.21Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 5H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 19H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H2"
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
              d="M15.3899 5.20979L16.7999 8.02979C16.9899 8.41979 17.4999 8.78979 17.9299 8.86979L20.4799 9.28979C22.1099 9.55979 22.4899 10.7398 21.3199 11.9198L19.3299 13.9098C18.9999 14.2398 18.8099 14.8898 18.9199 15.3598L19.4899 17.8198C19.9399 19.7598 18.8999 20.5198 17.1899 19.4998L14.7999 18.0798C14.3699 17.8198 13.6499 17.8198 13.2199 18.0798L10.8299 19.4998C9.11994 20.5098 8.07994 19.7598 8.52994 17.8198L9.09994 15.3598C9.18994 14.8798 8.99994 14.2298 8.66994 13.8998L6.67994 11.9098C5.50994 10.7398 5.88994 9.55979 7.51994 9.27979L10.0699 8.85979C10.4999 8.78979 11.0099 8.40979 11.1999 8.01979L12.6099 5.19979C13.3799 3.67979 14.6199 3.67979 15.3899 5.20979Z"
              fill="currentColor"
            />
            <path
              d="M8 5.75H2C1.59 5.75 1.25 5.41 1.25 5C1.25 4.59 1.59 4.25 2 4.25H8C8.41 4.25 8.75 4.59 8.75 5C8.75 5.41 8.41 5.75 8 5.75Z"
              fill="currentColor"
            />
            <path
              d="M5 19.75H2C1.59 19.75 1.25 19.41 1.25 19C1.25 18.59 1.59 18.25 2 18.25H5C5.41 18.25 5.75 18.59 5.75 19C5.75 19.41 5.41 19.75 5 19.75Z"
              fill="currentColor"
            />
            <path
              d="M3 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H3C3.41 11.25 3.75 11.59 3.75 12C3.75 12.41 3.41 12.75 3 12.75Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M15.39 5.21L16.7999 8.02999C16.9899 8.41999 17.4999 8.78999 17.9299 8.86999L20.48 9.28999C22.11 9.55999 22.49 10.74 21.32 11.92L19.3299 13.91C18.9999 14.24 18.81 14.89 18.92 15.36L19.4899 17.82C19.9399 19.76 18.9 20.52 17.19 19.5L14.7999 18.08C14.3699 17.82 13.65 17.82 13.22 18.08L10.8299 19.5C9.11994 20.51 8.07995 19.76 8.52995 17.82L9.09996 15.36C9.20996 14.9 9.01995 14.25 8.68995 13.91L6.69996 11.92C5.52996 10.75 5.90996 9.56999 7.53996 9.28999L10.0899 8.86999C10.5199 8.79999 11.03 8.41999 11.22 8.02999L12.63 5.21C13.38 3.68 14.62 3.68 15.39 5.21Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M8 5H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M5 19H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M3 12H2"
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
              d="M15.39 5.21L16.7999 8.03C16.9899 8.42 17.4999 8.79 17.9299 8.87L20.48 9.29C22.11 9.56 22.49 10.74 21.32 11.92L19.3299 13.91C18.9999 14.24 18.81 14.89 18.92 15.36L19.4899 17.82C19.9399 19.76 18.9 20.52 17.19 19.5L14.7999 18.08C14.3699 17.82 13.65 17.82 13.22 18.08L10.8299 19.5C9.11994 20.51 8.07995 19.76 8.52995 17.82L9.09996 15.36C9.20996 14.9 9.01995 14.25 8.68995 13.91L6.69996 11.92C5.52996 10.75 5.90996 9.57 7.53996 9.29L10.0899 8.87C10.5199 8.8 11.03 8.42 11.22 8.03L12.63 5.21C13.38 3.68 14.62 3.68 15.39 5.21Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M8 5.75H2C1.59 5.75 1.25 5.41 1.25 5C1.25 4.59 1.59 4.25 2 4.25H8C8.41 4.25 8.75 4.59 8.75 5C8.75 5.41 8.41 5.75 8 5.75Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M5 19.75H2C1.59 19.75 1.25 19.41 1.25 19C1.25 18.59 1.59 18.25 2 18.25H5C5.41 18.25 5.75 18.59 5.75 19C5.75 19.41 5.41 19.75 5 19.75Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M3 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H3C3.41 11.25 3.75 11.59 3.75 12C3.75 12.41 3.41 12.75 3 12.75Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M21.3202 11.9102C22.4902 10.7402 22.1102 9.56024 20.4802 9.28024L17.9302 8.86024C17.5002 8.79024 16.9902 8.41024 16.8002 8.02024L15.3902 5.20023C14.6302 3.67023 13.3802 3.67023 12.6202 5.20023L11.2102 8.02024C11.0202 8.41024 10.5102 8.78024 10.0802 8.86024L7.53019 9.28024C5.90019 9.55024 5.5202 10.7302 6.6902 11.9102L8.68019 13.9002C9.01019 14.2302 9.20019 14.8802 9.09019 15.3502L8.52018 17.8102C8.07018 19.7502 9.1102 20.5102 10.8202 19.4902L13.2102 18.0702C13.6402 17.8102 14.3602 17.8102 14.7902 18.0702L17.1802 19.4902C18.8902 20.5002 19.9302 19.7502 19.4802 17.8102L18.9102 15.3502"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 5H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 19H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H2"
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
