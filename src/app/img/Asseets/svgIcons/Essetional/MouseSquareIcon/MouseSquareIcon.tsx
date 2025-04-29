import { ISvg } from '../../SvgPropsType';

export const MouseSquareIcon: React.FC<ISvg> = ({
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
              d="M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.9602 17.84L19.3302 18.39C18.8802 18.54 18.5202 18.89 18.3702 19.35L17.8202 20.98C17.3502 22.39 15.3702 22.36 14.9302 20.95L13.0802 15C12.7202 13.82 13.8102 12.72 14.9802 13.09L20.9402 14.94C22.3402 15.38 22.3602 17.37 20.9602 17.84Z"
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
              d="M21 7.52V13.4C21 13.74 20.67 13.98 20.35 13.88L16.42 12.66C15.34 12.33 14.18 12.61 13.39 13.4C12.59 14.2 12.3 15.37 12.64 16.45L13.85 20.35C13.95 20.67 13.71 21 13.37 21H7.52C4.07 21 2 18.94 2 15.48V7.52C2 4.06 4.07 2 7.52 2H15.48C18.93 2 21 4.06 21 7.52Z"
              fill="currentColor"
            />
            <path
              d="M21.9602 18.84L20.3302 19.39C19.8802 19.54 19.5202 19.89 19.3702 20.35L18.8202 21.98C18.3502 23.39 16.3702 23.36 15.9302 21.95L14.0802 16C13.7202 14.82 14.8102 13.72 15.9802 14.09L21.9402 15.94C23.3402 16.38 23.3602 18.37 21.9602 18.84Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M20.9602 17.84L19.3302 18.39C18.8802 18.54 18.5202 18.89 18.3702 19.35L17.8202 20.98C17.3502 22.39 15.3702 22.36 14.9302 20.95L13.0802 15C12.7202 13.82 13.8102 12.72 14.9802 13.09L20.9402 14.94C22.3402 15.38 22.3602 17.37 20.9602 17.84Z"
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
              d="M15.4798 2H7.52977C4.06977 2 2.00977 4.05999 2.00977 7.51999V15.47C2.00977 18.93 4.07977 20.99 7.52977 20.99H15.4798C18.9398 20.99 20.9998 18.93 20.9998 15.47V7.51999C20.9998 4.05999 18.9298 2 15.4798 2Z"
              fill="currentColor"
            />
            <path
              d="M21.9602 18.84L20.3302 19.39C19.8802 19.54 19.5202 19.89 19.3702 20.35L18.8202 21.98C18.3502 23.39 16.3702 23.36 15.9302 21.95L14.0802 16C13.7202 14.82 14.8102 13.72 15.9802 14.09L21.9402 15.94C23.3402 16.38 23.3602 18.37 21.9602 18.84Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2 13.02V15C2 20 4 22 9 22H12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.9602 17.84L19.3302 18.39C18.8802 18.54 18.5202 18.89 18.3702 19.35L17.8202 20.98C17.3502 22.39 15.3702 22.36 14.9302 20.95L13.0802 15C12.7202 13.82 13.8102 12.72 14.9802 13.09L20.9402 14.94C22.3402 15.38 22.3602 17.37 20.9602 17.84Z"
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
