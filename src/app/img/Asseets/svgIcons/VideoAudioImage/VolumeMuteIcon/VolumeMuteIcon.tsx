import { ISvg } from '../../SvgPropsType';

export const VolumeMuteIcon: React.FC<ISvg> = ({
  color,
  className,
  iconType = 'linear',
  w = 24,
}) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      case 'twoTone':
      default:
        return (
          <>
            <path
              d="M5.5 9.99997V14C5.5 16 6.5 17 8.5 17H9.93C10.3 17 10.67 17.11 10.99 17.3L13.91 19.13C16.43 20.71 18.5 19.56 18.5 16.59V7.40997C18.5 4.42997 16.43 3.28997 13.91 4.86997L10.99 6.69997C10.67 6.88997 10.3 6.99997 9.93 6.99997H8.5C6.5 6.99997 5.5 7.99997 5.5 9.99997Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M17.52 3.78003C16.4 3.16003 14.97 3.32003 13.51 4.23003L10.59 6.06003C10.39 6.18003 10.16 6.25003 9.93 6.25003H9H8.5C6.08 6.25003 4.75 7.58003 4.75 10V14C4.75 16.42 6.08 17.75 8.5 17.75H9H9.93C10.16 17.75 10.39 17.82 10.59 17.94L13.51 19.77C14.39 20.32 15.25 20.59 16.05 20.59C16.57 20.59 17.07 20.47 17.52 20.22C18.63 19.6 19.25 18.31 19.25 16.59V7.41003C19.25 5.69003 18.63 4.40003 17.52 3.78003Z"
              fill="currentColor"
            />
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              opacity="0.4"
              d="M19.25 7.41003V16.59C19.25 18.31 18.63 19.6 17.52 20.22C17.07 20.47 16.57 20.59 16.05 20.59C15.25 20.59 14.39 20.32 13.51 19.77L10.59 17.94C10.39 17.82 10.16 17.75 9.93 17.75H9V6.25003H9.93C10.16 6.25003 10.39 6.18003 10.59 6.06003L13.51 4.23003C14.97 3.32003 16.4 3.16003 17.52 3.78003C18.63 4.40003 19.25 5.69003 19.25 7.41003Z"
              fill="currentColor"
            />
            <path
              d="M9 6.25V17.75H8.5C6.08 17.75 4.75 16.42 4.75 14V10C4.75 7.58 6.08 6.25 8.5 6.25H9Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M18.5 7.40997C18.5 4.42997 16.43 3.28997 13.91 4.86997L10.99 6.69997C10.67 6.88997 10.3 6.99997 9.93 6.99997H8.5C6.5 6.99997 5.5 7.99997 5.5 9.99997V14C5.5 16 6.5 17 8.5 17H9.93C10.3 17 10.67 17.11 10.99 17.3L13.91 19.13C16.43 20.71 18.5 19.56 18.5 16.59V11.69"
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
