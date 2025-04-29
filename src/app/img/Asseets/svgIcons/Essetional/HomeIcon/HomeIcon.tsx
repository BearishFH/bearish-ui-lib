import { ISvg } from '../../SvgPropsType';

export const HomeIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M12 18V15"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.0698 2.81997L3.13978 8.36997C2.35978 8.98997 1.85978 10.3 2.02978 11.28L3.35978 19.24C3.59978 20.66 4.95978 21.81 6.39978 21.81H17.5998C19.0298 21.81 20.3998 20.65 20.6398 19.24L21.9698 11.28C22.1298 10.3 21.6298 8.98997 20.8598 8.36997L13.9298 2.82997C12.8598 1.96997 11.1298 1.96997 10.0698 2.81997Z"
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
              d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z"
              fill='currentColor'
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              opacity="0.34"
              d="M12 18V15"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.0698 2.81997L3.13978 8.36997C2.35978 8.98997 1.85978 10.3 2.02978 11.28L3.35978 19.24C3.59978 20.66 4.95978 21.81 6.39978 21.81H17.5998C19.0298 21.81 20.3998 20.65 20.6398 19.24L21.9698 11.28C22.1298 10.3 21.6298 8.98997 20.8598 8.36997L13.9298 2.82997C12.8598 1.96997 11.1298 1.96997 10.0698 2.81997Z"
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
              d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002Z"
              fill='currentColor'
            />
            <path
              d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
              fill='currentColor'
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M12 18V15"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.6398 19.24C20.3998 20.65 19.0298 21.81 17.5998 21.81H6.39978C4.95978 21.81 3.59978 20.66 3.35978 19.24L2.02978 11.28C1.85978 10.3 2.35978 8.98997 3.13978 8.36997L10.0698 2.81997C11.1298 1.96997 12.8598 1.96997 13.9298 2.82997L20.8598 8.36997C21.6298 8.98997 22.1298 10.3 21.9698 11.28L21.3498 15"
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
