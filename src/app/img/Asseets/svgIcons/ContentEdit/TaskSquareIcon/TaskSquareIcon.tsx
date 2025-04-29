import { ISvg } from '../../SvgPropsType';

export const TaskSquareIcon: React.FC<ISvg> = ({
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
              d="M12.3701 8.87988H17.6201"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.37988 8.87988L7.12988 9.62988L9.37988 7.37988"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.3701 15.8799H17.6201"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.37988 15.8799L7.12988 16.6299L9.37988 14.3799"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.97 14.9L7.72 17.15C7.57 17.3 7.38 17.37 7.19 17.37C7 17.37 6.8 17.3 6.66 17.15L5.91 16.4C5.61 16.11 5.61 15.63 5.91 15.34C6.2 15.05 6.67 15.05 6.97 15.34L7.19 15.56L8.91 13.84C9.2 13.55 9.67 13.55 9.97 13.84C10.26 14.13 10.26 14.61 9.97 14.9ZM9.97 7.9L7.72 10.15C7.57 10.3 7.38 10.37 7.19 10.37C7 10.37 6.8 10.3 6.66 10.15L5.91 9.4C5.61 9.11 5.61 8.63 5.91 8.34C6.2 8.05 6.67 8.05 6.97 8.34L7.19 8.56L8.91 6.84C9.2 6.55 9.67 6.55 9.97 6.84C10.26 7.13 10.26 7.61 9.97 7.9ZM17.56 16.62H12.31C11.9 16.62 11.56 16.28 11.56 15.87C11.56 15.46 11.9 15.12 12.31 15.12H17.56C17.98 15.12 18.31 15.46 18.31 15.87C18.31 16.28 17.98 16.62 17.56 16.62ZM17.56 9.62H12.31C11.9 9.62 11.56 9.28 11.56 8.87C11.56 8.46 11.9 8.12 12.31 8.12H17.56C17.98 8.12 18.31 8.46 18.31 8.87C18.31 9.28 17.98 9.62 17.56 9.62Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              opacity="0.4"
              d="M12.3701 8.87988H17.6201"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M6.37988 8.87988L7.12988 9.62988L9.37988 7.37988"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M12.3701 15.8799H17.6201"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M6.37988 15.8799L7.12988 16.6299L9.37988 14.3799"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
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
              d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.19C0 17.83 2.17 20 5.81 20H14.19C17.83 20 20 17.83 20 14.19V5.81C20 2.17 17.83 0 14.19 0Z"
              fill="currentColor"
            />
            <path
              d="M16.3096 6.87012C16.3096 7.28012 15.9796 7.62012 15.5596 7.62012H10.3096C9.89957 7.62012 9.55957 7.28012 9.55957 6.87012C9.55957 6.46012 9.89957 6.12012 10.3096 6.12012H15.5596C15.9796 6.12012 16.3096 6.46012 16.3096 6.87012Z"
              fill="currentColor"
            />
            <path
              d="M7.96957 5.90006L5.71957 8.15006C5.56957 8.30006 5.37957 8.37006 5.18957 8.37006C4.99957 8.37006 4.79957 8.30006 4.65957 8.15006L3.90957 7.40006C3.60957 7.11006 3.60957 6.63006 3.90957 6.34006C4.19957 6.05006 4.66957 6.05006 4.96957 6.34006L5.18957 6.56006L6.90957 4.84006C7.19957 4.55006 7.66957 4.55006 7.96957 4.84006C8.25957 5.13006 8.25957 5.61006 7.96957 5.90006Z"
              fill="currentColor"
            />
            <path
              d="M16.3096 13.8701C16.3096 14.2801 15.9796 14.6201 15.5596 14.6201H10.3096C9.89957 14.6201 9.55957 14.2801 9.55957 13.8701C9.55957 13.4601 9.89957 13.1201 10.3096 13.1201H15.5596C15.9796 13.1201 16.3096 13.4601 16.3096 13.8701Z"
              fill="currentColor"
            />
            <path
              d="M7.96957 12.9001L5.71957 15.1501C5.56957 15.3001 5.37957 15.3701 5.18957 15.3701C4.99957 15.3701 4.79957 15.3001 4.65957 15.1501L3.90957 14.4001C3.60957 14.1101 3.60957 13.6301 3.90957 13.3401C4.19957 13.0501 4.66957 13.0501 4.96957 13.3401L5.18957 13.5601L6.90957 11.8401C7.19957 11.5501 7.66957 11.5501 7.96957 11.8401C8.25957 12.1301 8.25957 12.6101 7.96957 12.9001Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M12.3701 8.87988H17.6201"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.37988 8.87988L7.12988 9.62988L9.37988 7.37988"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.3701 15.8799H17.6201"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.37988 15.8799L7.12988 16.6299L9.37988 14.3799"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12.95V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
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
