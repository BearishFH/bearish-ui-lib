import { ISvg } from '../../SvgPropsType';

export const LogoutIcon: React.FC<ISvg> = ({ color, iconType = 'linear', w = 24, className }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M17.4404 14.62L20.0004 12.06L17.4404 9.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.75977 12.0601H19.9298"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.7598 20C7.33977 20 3.75977 17 3.75977 12C3.75977 7 7.33977 4 11.7598 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M7.88023 12.07C7.88023 11.66 8.22023 11.32 8.63023 11.32H14.1102V2.86C14.1002 2.38 13.7202 2 13.2402 2C7.35023 2 3.24023 6.11 3.24023 12C3.24023 17.89 7.35023 22 13.2402 22C13.7102 22 14.1002 21.62 14.1002 21.14V12.81H8.63023C8.21023 12.82 7.88023 12.48 7.88023 12.07Z"
              fill="#3C3C3C"
            />
            <path
              d="M20.5396 11.5399L17.6996 8.68991C17.4096 8.39991 16.9296 8.39991 16.6396 8.68991C16.3496 8.97991 16.3496 9.45991 16.6396 9.74991L18.1996 11.3099H14.0996V12.8099H18.1896L16.6296 14.3699C16.3396 14.6599 16.3396 15.1399 16.6296 15.4299C16.7796 15.5799 16.9696 15.6499 17.1596 15.6499C17.3496 15.6499 17.5396 15.5799 17.6896 15.4299L20.5296 12.5799C20.8296 12.2999 20.8296 11.8299 20.5396 11.5399Z"
              fill="#3C3C3C"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <g opacity="0.4">
              <path
                d="M17.4395 14.62L19.9995 12.06L17.4395 9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.75977 12.0596H19.9298"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M11.7598 20C7.33977 20 3.75977 17 3.75977 12C3.75977 7 7.33977 4 11.7598 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
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
              d="M13.2402 2C13.7102 2 14.1002 2.38 14.1002 2.86V21.15C14.1002 21.62 13.7202 22.01 13.2402 22.01C7.35023 22.01 3.24023 17.9 3.24023 12.01C3.24023 6.12 7.36023 2 13.2402 2Z"
              fill="#3C3C3C"
            />
            <path
              d="M20.5399 11.5399L17.6999 8.68991C17.4099 8.39991 16.9299 8.39991 16.6399 8.68991C16.3499 8.97991 16.3499 9.45991 16.6399 9.74991L18.1999 11.3099H8.62988C8.21988 11.3099 7.87988 11.6499 7.87988 12.0599C7.87988 12.4699 8.21988 12.8099 8.62988 12.8099H18.1999L16.6399 14.3699C16.3499 14.6599 16.3499 15.1399 16.6399 15.4299C16.7899 15.5799 16.9799 15.6499 17.1699 15.6499C17.3599 15.6499 17.5499 15.5799 17.6999 15.4299L20.5399 12.5799C20.8299 12.2999 20.8299 11.8299 20.5399 11.5399Z"
              fill="#3C3C3C"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M17.44 14.5599L20 11.9999L17.44 9.43994"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.7597 12H19.9297"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.75973 12H11.7197"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.99 6.47998C4.75 7.83998 4 9.70998 4 12C4 17 7.58 20 12 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 4C10.95 4 9.95 4.17 9.03 4.49"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
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
