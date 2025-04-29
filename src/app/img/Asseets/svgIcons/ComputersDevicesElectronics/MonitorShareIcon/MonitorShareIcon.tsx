import { ISvg } from '../../SvgPropsType';

export const MonitorShareIcon: React.FC<ISvg> = ({
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
              d="M6.44 2H17.55C21.11 2 22 2.89 22 6.44V12.77C22 16.33 21.11 17.21 17.56 17.21H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 17.22V22"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 13H22"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 22H16.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M17.56 2H6.41C3.98 2 2 3.98 2 6.41V12.91V13.11C2 15.55 3.98 17.52 6.41 17.52H10.25C10.8 17.52 11.25 17.97 11.25 18.52V19.49C11.25 20.04 10.8 20.49 10.25 20.49H7.83C7.42 20.49 7.08 20.83 7.08 21.24C7.08 21.65 7.41 22 7.83 22H16.18C16.59 22 16.93 21.66 16.93 21.25C16.93 20.84 16.59 20.5 16.18 20.5H13.76C13.21 20.5 12.76 20.05 12.76 19.5V18.53C12.76 17.98 13.21 17.53 13.76 17.53H17.57C20.01 17.53 21.98 15.55 21.98 13.12V12.92V6.42C21.97 3.98 19.99 2 17.56 2Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M6.44 2H17.55C21.11 2 22 2.89 22 6.44V12.77C22 16.33 21.11 17.21 17.56 17.21H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M12 17.22V22"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M2 13H22"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 22H16.5"
              stroke="currentColor"
              stroke-width="1.5"
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
              d="M21.97 6.41V12.91H2V6.41C2 3.98 3.98 2 6.41 2H17.56C19.99 2 21.97 3.98 21.97 6.41Z"
              fill="currentColor"
            />
            <path
              d="M2 12.9199V13.1199C2 15.5599 3.98 17.5299 6.41 17.5299H10.25C10.8 17.5299 11.25 17.9799 11.25 18.5299V19.4999C11.25 20.0499 10.8 20.4999 10.25 20.4999H7.83C7.42 20.4999 7.08 20.8399 7.08 21.2499C7.08 21.6599 7.41 21.9999 7.83 21.9999H16.18C16.59 21.9999 16.93 21.6599 16.93 21.2499C16.93 20.8399 16.59 20.4999 16.18 20.4999H13.76C13.21 20.4999 12.76 20.0499 12.76 19.4999V18.5299C12.76 17.9799 13.21 17.5299 13.76 17.5299H17.57C20.01 17.5299 21.98 15.5499 21.98 13.1199V12.9199H2Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M22 10.63V12.78C22 16.34 21.11 17.22 17.56 17.22H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2H17.55C21.11 2 22 2.89 22 6.44"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 17.22V22"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 13H22"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 22H16.5"
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
