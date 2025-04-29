import { ISvg } from '../../SvgPropsType';

export const TrushSquareIcon: React.FC<ISvg> = ({
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
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.9001 9.04997C15.7201 8.82997 13.5201 8.71997 11.3301 8.71997C10.0301 8.71997 8.73009 8.78997 7.44009 8.91997L6.1001 9.04997"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.70996 8.39L9.84996 7.53C9.94996 6.91 10.03 6.44 11.14 6.44H12.86C13.97 6.44 14.0499 6.93 14.1499 7.53L14.2899 8.38"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.49 9.13L16.06 15.73C15.99 16.76 15.93 17.56 14.1 17.56H9.89C8.06 17.56 7.99999 16.76 7.92999 15.73L7.5 9.13"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.76 15.76C15.7 16.61 15.63 17.67 13.71 17.67H10.29C8.38 17.67 8.3 16.61 8.24 15.76L7.93 11.8C7.91 11.54 8 11.29 8.17 11.1C8.34 10.91 8.59 10.81 8.84 10.81H15.16C15.41 10.81 15.66 10.92 15.83 11.1C16 11.29 16.09 11.54 16.07 11.79L15.76 15.76ZM16.8 9.82C16.78 9.82 16.76 9.82 16.74 9.82C15.7 9.72 14.75 9.65 13.84 9.61C12.62 9.55 11.4 9.53 10.17 9.58C9.57 9.61 8.96 9.65 8.36 9.71L7.27 9.82C7.25 9.82 7.22 9.82 7.2 9.82C6.85 9.82 6.55 9.56 6.52 9.2C6.48 8.83 6.76 8.49 7.13 8.46L8.22 8.35C8.65 8.31 9.07 8.28 9.5 8.26L9.58 7.79C9.66 7.29 9.81 6.33 11.31 6.33H12.7C14.21 6.33 14.36 7.32 14.43 7.8L14.51 8.28C15.26 8.32 16.03 8.38 16.87 8.46C17.25 8.5 17.52 8.83 17.49 9.21C17.45 9.56 17.15 9.82 16.8 9.82Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity="0.4">
              <path
                d="M17.9001 9.04997C15.7201 8.82997 13.5201 8.71997 11.3301 8.71997C10.0301 8.71997 8.73009 8.78997 7.44009 8.91997L6.1001 9.04997"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.70996 8.38994L9.84996 7.52994C9.94996 6.90994 10.03 6.43994 11.14 6.43994H12.86C13.97 6.43994 14.0499 6.92994 14.1499 7.52994L14.2899 8.37994"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.49 9.12988L16.06 15.7299C15.99 16.7599 15.93 17.5599 14.1 17.5599H9.89C8.06 17.5599 7.99999 16.7599 7.92999 15.7299L7.5 9.12988"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              opacity="0.4"
              d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
              fill="currentColor"
            />
            <path
              d="M16.8598 8.45995C16.0198 8.37995 15.2498 8.32995 14.4998 8.27995L14.4198 7.79995C14.3498 7.31995 14.1998 6.32996 12.6898 6.32996H11.2998C9.80979 6.32996 9.6498 7.27996 9.5698 7.78996L9.4898 8.25995C9.0598 8.28995 8.6398 8.30995 8.2098 8.34995L7.11979 8.45995C6.73979 8.49995 6.46979 8.82995 6.50979 9.20995C6.54979 9.55995 6.83979 9.82996 7.18979 9.82996C7.20979 9.82996 7.23979 9.82996 7.25979 9.82996L8.33979 9.71996C8.93979 9.66996 9.54979 9.61995 10.1498 9.58995C11.3698 9.53995 12.5898 9.55995 13.8198 9.61995C14.7298 9.65995 15.6798 9.72996 16.7198 9.82996C16.7398 9.82996 16.7598 9.82996 16.7798 9.82996C17.1298 9.82996 17.4298 9.55995 17.4598 9.20995C17.5098 8.82995 17.2398 8.48995 16.8598 8.45995Z"
              fill="currentColor"
            />
            <path
              d="M15.83 11.1001C15.66 10.9101 15.41 10.8101 15.16 10.8101H8.84C8.59 10.8101 8.34 10.9201 8.17 11.1001C8 11.2901 7.91 11.5401 7.93 11.7901L8.24001 15.7501C8.30001 16.6001 8.37 17.6601 10.29 17.6601H13.71C15.63 17.6601 15.7 16.6001 15.76 15.7501L16.07 11.7901C16.09 11.5401 16 11.2901 15.83 11.1001Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2 13.05V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.9001 9.04997C15.7201 8.82997 13.5201 8.71997 11.3301 8.71997C10.0301 8.71997 8.73009 8.78997 7.44009 8.91997L6.1001 9.04997"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.70996 8.38994L9.84996 7.52994C9.94996 6.90994 10.03 6.43994 11.14 6.43994H12.86C13.97 6.43994 14.0499 6.92994 14.1499 7.52994L14.2899 8.37994"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.49 9.12988L16.06 15.7299C15.99 16.7599 15.93 17.5599 14.1 17.5599H9.89C8.06 17.5599 7.99999 16.7599 7.92999 15.7299L7.5 9.12988"
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
