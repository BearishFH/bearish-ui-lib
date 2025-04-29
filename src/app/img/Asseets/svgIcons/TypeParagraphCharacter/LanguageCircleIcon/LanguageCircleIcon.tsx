import { ISvg } from '../../SvgPropsType';

export const LanguageCircleIcon: React.FC<ISvg> = ({
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
              d="M16.9917 8.95996H7.01172"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.002 7.28003V8.96002"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.502 8.93994C14.502 13.2399 11.142 16.7199 7.00195 16.7199"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.0021 16.72C15.2021 16.72 13.6021 15.76 12.4521 14.25"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.002 22C17.5248 22 22.002 17.5228 22.002 12C22.002 6.47715 17.5248 2 12.002 2C6.47911 2 2.00195 6.47715 2.00195 12C2.00195 17.5228 6.47911 22 12.002 22Z"
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
              d="M12.002 2C6.48195 2 2.00195 6.48 2.00195 12C2.00195 17.52 6.48195 22 12.002 22C17.522 22 22.002 17.52 22.002 12C22.002 6.48 17.522 2 12.002 2ZM17.002 17.47C15.292 17.47 13.692 16.73 12.412 15.36C10.962 16.67 9.07195 17.47 7.00195 17.47C6.59195 17.47 6.25195 17.13 6.25195 16.72C6.25195 16.31 6.59195 15.97 7.00195 15.97C10.472 15.97 13.342 13.22 13.712 9.7H12.002H7.01195C6.60195 9.7 6.26195 9.36 6.26195 8.95C6.26195 8.54 6.60195 8.21 7.01195 8.21H11.252V7.28C11.252 6.87 11.592 6.53 12.002 6.53C12.412 6.53 12.752 6.87 12.752 7.28V8.21H14.442C14.462 8.21 14.482 8.2 14.502 8.2C14.522 8.2 14.542 8.21 14.562 8.21H16.992C17.402 8.21 17.742 8.55 17.742 8.96C17.742 9.37 17.402 9.71 16.992 9.71H15.212C15.062 11.42 14.422 12.99 13.442 14.27C14.442 15.38 15.692 15.98 17.002 15.98C17.412 15.98 17.752 16.32 17.752 16.73C17.752 17.14 17.412 17.47 17.002 17.47Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <g opacity="0.4">
              <path
                d="M16.9917 8.95996H7.01172"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.002 7.28003V8.96002"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.502 8.93994C14.502 13.2399 11.142 16.7199 7.00195 16.7199"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.0021 16.72C15.2021 16.72 13.6021 15.76 12.4521 14.25"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              d="M12.002 22C17.5248 22 22.002 17.5228 22.002 12C22.002 6.47715 17.5248 2 12.002 2C6.47911 2 2.00195 6.47715 2.00195 12C2.00195 17.5228 6.47911 22 12.002 22Z"
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
              d="M12.002 22C17.5248 22 22.002 17.5228 22.002 12C22.002 6.47715 17.5248 2 12.002 2C6.47911 2 2.00195 6.47715 2.00195 12C2.00195 17.5228 6.47911 22 12.002 22Z"
              fill="currentColor"
            />
            <path
              d="M17.0022 15.97C15.6922 15.97 14.4422 15.37 13.4422 14.26C14.4322 12.99 15.0722 11.42 15.2122 9.70004H16.9922C17.4022 9.70004 17.7422 9.36004 17.7422 8.95004C17.7422 8.54004 17.4022 8.20004 16.9922 8.20004H14.5622C14.5422 8.20004 14.5222 8.19003 14.5022 8.19003C14.4822 8.19003 14.4622 8.20004 14.4422 8.20004H12.7522V7.27002C12.7522 6.86002 12.4122 6.52002 12.0022 6.52002C11.5922 6.52002 11.2522 6.86002 11.2522 7.27002V8.20004H7.01221C6.60221 8.20004 6.26221 8.54004 6.26221 8.95004C6.26221 9.36004 6.60221 9.70004 7.01221 9.70004H12.0022H13.7022C13.3322 13.22 10.4722 15.97 6.99219 15.97C6.58219 15.97 6.24219 16.31 6.24219 16.72C6.24219 17.13 6.58219 17.47 6.99219 17.47C9.06219 17.47 10.9522 16.67 12.4022 15.36C13.6722 16.72 15.2822 17.47 16.9922 17.47C17.4022 17.47 17.7422 17.13 17.7422 16.72C17.7422 16.31 17.4122 15.97 17.0022 15.97Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M16.9917 8.95996H7.01172"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.002 7.28003V8.96002"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.502 8.93994C14.502 13.2399 11.142 16.7199 7.00195 16.7199"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.0021 16.72C15.2021 16.72 13.6021 15.76 12.4521 14.25"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.00195 6C2.75195 7.67 2.00195 9.75 2.00195 12C2.00195 17.52 6.48195 22 12.002 22C17.522 22 22.002 17.52 22.002 12C22.002 6.48 17.522 2 12.002 2C10.572 2 9.20195 2.29998 7.97195 2.84998"
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
