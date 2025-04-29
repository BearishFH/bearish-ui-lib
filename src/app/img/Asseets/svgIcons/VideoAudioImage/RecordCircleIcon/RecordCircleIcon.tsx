import { ISvg } from '../../SvgPropsType';

export const RecordCircleIcon: React.FC<ISvg> = ({
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9995 16.23C14.3357 16.23 16.2295 14.3362 16.2295 12C16.2295 9.66386 14.3357 7.77002 11.9995 7.77002C9.66337 7.77002 7.76953 9.66386 7.76953 12C7.76953 14.3362 9.66337 16.23 11.9995 16.23Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M11.9697 2C6.44973 2 1.96973 6.48 1.96973 12C1.96973 17.52 6.44973 22 11.9697 22C17.4897 22 21.9697 17.52 21.9697 12C21.9697 6.48 17.4997 2 11.9697 2ZM11.9997 16.23C9.65973 16.23 7.76973 14.34 7.76973 12C7.76973 9.66 9.65973 7.77 11.9997 7.77C14.3397 7.77 16.2297 9.66 16.2297 12C16.2297 14.34 14.3397 16.23 11.9997 16.23Z"
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M11.9995 16.23C14.3357 16.23 16.2295 14.3362 16.2295 12C16.2295 9.66386 14.3357 7.77002 11.9995 7.77002C9.66337 7.77002 7.76953 9.66386 7.76953 12C7.76953 14.3362 9.66337 16.23 11.9995 16.23Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              d="M11.9995 16.23C14.3357 16.23 16.2295 14.3362 16.2295 12C16.2295 9.66386 14.3357 7.77002 11.9995 7.77002C9.66337 7.77002 7.76953 9.66386 7.76953 12C7.76953 14.3362 9.66337 16.23 11.9995 16.23Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M16.2295 12C16.2295 9.66002 14.3395 7.77002 11.9995 7.77002C9.65953 7.77002 7.76953 9.66002 7.76953 12C7.76953 14.34 9.65953 16.23 11.9995 16.23C12.5695 16.23 13.1095 16.12 13.5995 15.92"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
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
