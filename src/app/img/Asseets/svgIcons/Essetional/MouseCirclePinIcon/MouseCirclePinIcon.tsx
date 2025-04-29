import { ISvg } from '../../SvgPropsType';

export const MouseCirclePinIcon: React.FC<ISvg> = ({
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
              d="M20.9602 17.84L19.3302 18.39C18.8802 18.54 18.5202 18.89 18.3702 19.35L17.8202 20.98C17.3502 22.39 15.3702 22.36 14.9302 20.95L13.0802 15C12.7202 13.82 13.8102 12.72 14.9802 13.09L20.9402 14.94C22.3402 15.38 22.3602 17.37 20.9602 17.84Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
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
              d="M20.9602 17.84L19.3302 18.39C18.8802 18.54 18.5202 18.89 18.3702 19.35L17.8202 20.98C17.3502 22.39 15.3702 22.36 14.9302 20.95L13.0802 15C12.7202 13.82 13.8102 12.72 14.9802 13.09L20.9402 14.94C22.3402 15.38 22.3602 17.37 20.9602 17.84Z"
              fill="currentColor"
            />
            <path
              d="M20.9999 11.5C20.9999 11.93 20.9699 12.36 20.9199 12.78C20.8799 13.08 20.5699 13.26 20.2799 13.17L15.4299 11.66C14.3499 11.33 13.1999 11.61 12.3999 12.4C11.5999 13.2 11.3099 14.37 11.6499 15.45L13.1499 20.28C13.2399 20.57 13.0499 20.88 12.7499 20.92C12.3299 20.97 11.9199 21 11.4999 21C6.15991 21 1.85991 16.61 1.99991 11.23C2.13991 6.27003 6.26991 2.14003 11.2299 2.00003C16.6099 1.86003 20.9999 6.16003 20.9999 11.5Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              opacity="0.4"
              d="M20.9602 17.84L19.3302 18.39C18.8802 18.54 18.5202 18.89 18.3702 19.35L17.8202 20.98C17.3502 22.39 15.3702 22.36 14.9302 20.95L13.0802 15C12.7202 13.82 13.8102 12.72 14.9802 13.09L20.9402 14.94C22.3402 15.38 22.3602 17.37 20.9602 17.84Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
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
              d="M20.9602 17.84L19.3302 18.39C18.8802 18.54 18.5202 18.89 18.3702 19.35L17.8202 20.98C17.3502 22.39 15.3702 22.36 14.9302 20.95L13.0802 15C12.7202 13.82 13.8102 12.72 14.9802 13.09L20.9402 14.94C22.3402 15.38 22.3602 17.37 20.9602 17.84Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M20.9602 17.84L19.3302 18.39C18.8802 18.54 18.5202 18.89 18.3702 19.35L17.8202 20.98C17.3502 22.39 15.3702 22.36 14.9302 20.95L13.0802 15C12.7202 13.82 13.8102 12.72 14.9802 13.09L20.9402 14.94C22.3402 15.38 22.3602 17.37 20.9602 17.84Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.98 6.03003C2.74 7.70003 2 9.76003 2 12C2 17.52 6.48 22 12 22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.9998 12C21.9998 6.48 17.5198 2 11.9998 2C10.4798 2 9.04977 2.34 7.75977 2.94"
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
