import { ISvg } from '../../SvgPropsType';

export const LoginIcon: React.FC<ISvg> = ({
  color,
  iconType = 'linear',
  w = 24,
  className,
  direction = 'right',
}) => {
  const getRotation = () => {
    switch (direction) {
      case 'down':
        return 'rotate(90deg)';
      case 'left':
        return 'rotate(180deg)';
      case 'right':
        return 'rotate(0deg)';
      case 'up':
        return 'rotate(270deg)';
    }
  };

  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M11.6797 14.62L14.2397 12.06L11.6797 9.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12.0601H14.17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"
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
              d="M10.7604 2C10.2804 2 9.90039 2.38 9.90039 2.86V11.32H13.5704L12.0004 9.75C11.7104 9.46 11.7104 8.98 12.0004 8.69C12.2904 8.4 12.7704 8.4 13.0604 8.69L15.9004 11.54C16.1904 11.83 16.1904 12.31 15.9004 12.6L13.0604 15.45C12.9104 15.6 12.7204 15.67 12.5304 15.67C12.3404 15.67 12.1504 15.6 12.0004 15.45C11.7104 15.16 11.7104 14.68 12.0004 14.39L13.5604 12.83H9.90039V21.16C9.90039 21.63 10.2804 22.02 10.7604 22.02C16.6504 22.02 20.7604 17.91 20.7604 12.02C20.7604 6.13 16.6404 2 10.7604 2Z"
              fill="currentColor"
            />
            <path
              d="M3.99023 11.3201C3.58023 11.3201 3.24023 11.6601 3.24023 12.0701C3.24023 12.4801 3.58023 12.8201 3.99023 12.8201H9.89023V11.3201H3.99023Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <g opacity="0.4">
              <path
                d="M11.6797 14.62L14.2397 12.06L11.6797 9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12.0596H14.17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"
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
              d="M10.7604 2C10.2804 2 9.90039 2.38 9.90039 2.86V21.15C9.90039 21.62 10.2804 22.01 10.7604 22.01C16.6504 22.01 20.7604 17.9 20.7604 12.01C20.7604 6.12 16.6404 2 10.7604 2Z"
              fill="currentColor"
            />
            <path
              d="M15.9002 11.5399L13.0602 8.68991C12.7702 8.39991 12.2902 8.39991 12.0002 8.68991C11.7102 8.97991 11.7102 9.45991 12.0002 9.74991L13.5602 11.3099H3.99023C3.58023 11.3099 3.24023 11.6499 3.24023 12.0599C3.24023 12.4699 3.58023 12.8099 3.99023 12.8099H13.5602L12.0002 14.3799C11.7102 14.6699 11.7102 15.1499 12.0002 15.4399C12.1502 15.5899 12.3402 15.6599 12.5302 15.6599C12.7202 15.6599 12.9102 15.5899 13.0602 15.4399L15.9002 12.5899C16.2002 12.2999 16.2002 11.8299 15.9002 11.5399Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M11.6797 14.5599L14.2397 11.9999L11.6797 9.43994"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12H14.17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H5.96"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.01 6.47998C19.25 7.83998 20 9.70998 20 12C20 17 16.42 20 12 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 4C13.05 4 14.05 4.17 14.97 4.49"
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
      style={{
        flexShrink: 0,
        transform: getRotation(),
        transition: 'transform 0.3s ease',
        color: color,
      }}
      className={`bearishSvg ${className}`}
    >
      {renderIcon()}
    </svg>
  );
};
