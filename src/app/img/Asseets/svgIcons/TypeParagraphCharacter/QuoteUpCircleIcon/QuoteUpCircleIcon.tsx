import { ISvg } from '../../SvgPropsType';

export const QuoteUpCircleIcon: React.FC<ISvg> = ({
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
              d="M17.0018 11.84H14.3218C13.6118 11.84 13.1318 11.3 13.1318 10.65V9.15997C13.1318 8.50997 13.6118 7.96997 14.3218 7.96997H15.8118C16.4618 7.96997 17.0018 8.50997 17.0018 9.15997V11.84Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.0021 11.8401C17.0021 14.6301 16.4821 15.1001 14.9121 16.0301"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.8622 11.84H8.18217C7.47217 11.84 6.99219 11.3 6.99219 10.65V9.15997C6.99219 8.50997 7.47217 7.96997 8.18217 7.96997H9.67218C10.3222 7.96997 10.8622 8.50997 10.8622 9.15997V11.84Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.8625 11.8401C10.8625 14.6301 10.3425 15.1001 8.77246 16.0301"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.002 22C17.5248 22 22.002 17.5228 22.002 12C22.002 6.47715 17.5248 2 12.002 2C6.47911 2 2.00195 6.47715 2.00195 12C2.00195 17.5228 6.47911 22 12.002 22Z"
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
              d="M12.002 2C6.48195 2 2.00195 6.48 2.00195 12C2.00195 17.52 6.48195 22 12.002 22C17.522 22 22.002 17.52 22.002 12C22.002 6.48 17.522 2 12.002 2ZM11.612 11.84C11.612 14.92 10.942 15.61 9.15195 16.67C9.03195 16.74 8.90195 16.77 8.77195 16.77C8.51195 16.77 8.26195 16.64 8.12195 16.4C7.91195 16.04 8.03195 15.58 8.38195 15.37C9.59195 14.65 10.012 14.39 10.092 12.58H8.19195C7.10195 12.58 6.25195 11.73 6.25195 10.64V9.16C6.25195 8.07 7.10195 7.22 8.19195 7.22H9.68195C10.752 7.22 11.622 8.09 11.622 9.16V11.84H11.612ZM17.752 11.84C17.752 14.92 17.082 15.61 15.292 16.67C15.172 16.74 15.042 16.77 14.912 16.77C14.652 16.77 14.402 16.64 14.262 16.4C14.052 16.04 14.172 15.58 14.522 15.37C15.732 14.65 16.152 14.39 16.232 12.58H14.322C13.232 12.58 12.382 11.73 12.382 10.64V9.16C12.382 8.07 13.232 7.22 14.322 7.22H15.812C16.882 7.22 17.752 8.09 17.752 9.16V11.84Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <g opacity="0.4">
              <path
                d="M17.0018 11.84H14.3218C13.6118 11.84 13.1318 11.3 13.1318 10.65V9.15997C13.1318 8.50997 13.6118 7.96997 14.3218 7.96997H15.8118C16.4618 7.96997 17.0018 8.50997 17.0018 9.15997V11.84Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.0021 11.8401C17.0021 14.6301 16.4821 15.1001 14.9121 16.0301"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8622 11.84H8.18217C7.47217 11.84 6.99219 11.3 6.99219 10.65V9.15997C6.99219 8.50997 7.47217 7.96997 8.18217 7.96997H9.67218C10.3222 7.96997 10.8622 8.50997 10.8622 9.15997V11.84Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8615 11.8401C10.8615 14.6301 10.3415 15.1001 8.77148 16.0301"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M12.002 22C17.5248 22 22.002 17.5228 22.002 12C22.002 6.47715 17.5248 2 12.002 2C6.47911 2 2.00195 6.47715 2.00195 12C2.00195 17.5228 6.47911 22 12.002 22Z"
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
              d="M12.002 22C17.5248 22 22.002 17.5228 22.002 12C22.002 6.47715 17.5248 2 12.002 2C6.47911 2 2.00195 6.47715 2.00195 12C2.00195 17.5228 6.47911 22 12.002 22Z"
              fill="currentColor"
            />
            <path
              d="M15.8118 7.21997H14.3218C13.2318 7.21997 12.3818 8.06997 12.3818 9.15997V10.65C12.3818 11.74 13.2318 12.59 14.3218 12.59H16.2318C16.1518 14.4 15.7318 14.67 14.5218 15.38C14.1618 15.59 14.0518 16.05 14.2618 16.41C14.4018 16.65 14.6518 16.78 14.9118 16.78C15.0418 16.78 15.1718 16.75 15.2918 16.68C17.0818 15.62 17.7518 14.93 17.7518 11.85V9.17999C17.7518 8.08999 16.8818 7.21997 15.8118 7.21997Z"
              fill="currentColor"
            />
            <path
              d="M9.68195 7.21997H8.19196C7.10196 7.21997 6.25195 8.06997 6.25195 9.15997V10.65C6.25195 11.74 7.10196 12.59 8.19196 12.59H10.102C10.022 14.4 9.60195 14.67 8.39195 15.38C8.03195 15.59 7.92196 16.05 8.13196 16.41C8.27196 16.65 8.52195 16.78 8.78195 16.78C8.91195 16.78 9.04196 16.75 9.16196 16.68C10.952 15.62 11.6219 14.93 11.6219 11.85V9.17999C11.6119 8.08999 10.7419 7.21997 9.68195 7.21997Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M17.0018 11.84H14.3218C13.6118 11.84 13.1318 11.3 13.1318 10.65V9.15997C13.1318 8.50997 13.6118 7.96997 14.3218 7.96997H15.8118C16.4618 7.96997 17.0018 8.50997 17.0018 9.15997V11.84Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.0021 11.8401C17.0021 14.6301 16.4821 15.1001 14.9121 16.0301"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.8622 11.84H8.18217C7.47217 11.84 6.99219 11.3 6.99219 10.65V9.15997C6.99219 8.50997 7.47217 7.96997 8.18217 7.96997H9.67218C10.3222 7.96997 10.8622 8.50997 10.8622 9.15997V11.84Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.8625 11.8401C10.8625 14.6301 10.3425 15.1001 8.77246 16.0301"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.00195 6C2.75195 7.67 2.00195 9.75 2.00195 12C2.00195 17.52 6.48195 22 12.002 22C17.522 22 22.002 17.52 22.002 12C22.002 6.48 17.522 2 12.002 2C10.572 2 9.20195 2.29998 7.97195 2.84998"
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
