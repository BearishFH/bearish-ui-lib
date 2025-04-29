import { ISvg } from '../../SvgPropsType';

export const EmojiNormalIcon: React.FC<ISvg> = ({
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
              d="M7 8.25C8 9.25 9.63 9.25 10.64 8.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3599 8.25C14.3599 9.25 15.9899 9.25 16.9999 8.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.4 13H15.6C16.1 13 16.5 13.4 16.5 13.9C16.5 16.39 14.49 18.4 12 18.4C9.51 18.4 7.5 16.39 7.5 13.9C7.5 13.4 7.9 13 8.4 13Z"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM6.47 7.72C6.76 7.43 7.24 7.43 7.53 7.72C8.24 8.43 9.4 8.43 10.11 7.72C10.4 7.43 10.88 7.43 11.17 7.72C11.46 8.01 11.46 8.49 11.17 8.78C10.52 9.43 9.67 9.75 8.82 9.75C7.97 9.75 7.12 9.43 6.47 8.78C6.18 8.48 6.18 8.01 6.47 7.72ZM12 18.78C9.31 18.78 7.12 16.59 7.12 13.9C7.12 13.2 7.69 12.62 8.39 12.62H15.59C16.29 12.62 16.86 13.19 16.86 13.9C16.88 16.59 14.69 18.78 12 18.78ZM17.53 8.78C16.88 9.43 16.03 9.75 15.18 9.75C14.33 9.75 13.48 9.43 12.83 8.78C12.54 8.49 12.54 8.01 12.83 7.72C13.12 7.43 13.6 7.43 13.89 7.72C14.6 8.43 15.76 8.43 16.47 7.72C16.76 7.43 17.24 7.43 17.53 7.72C17.82 8.01 17.82 8.48 17.53 8.78Z"
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
            <path
              opacity="0.34"
              d="M7 8.25C8 9.25 9.63 9.25 10.64 8.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.34"
              d="M13.3599 8.25C14.3599 9.25 15.9899 9.25 16.9999 8.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.34"
              d="M8.4 13H15.6C16.1 13 16.5 13.4 16.5 13.9C16.5 16.39 14.49 18.4 12 18.4C9.51 18.4 7.5 16.39 7.5 13.9C7.5 13.4 7.9 13 8.4 13Z"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
              fill="currentColor"
            />
            <path
              d="M8.81994 9.74994C7.96994 9.74994 7.11994 9.42994 6.46994 8.77994C6.17994 8.48994 6.17994 8.00994 6.46994 7.71994C6.75994 7.42994 7.23994 7.42994 7.52994 7.71994C8.23994 8.42994 9.39994 8.42994 10.1099 7.71994C10.3999 7.42994 10.8799 7.42994 11.1699 7.71994C11.4599 8.00994 11.4599 8.48994 11.1699 8.77994C10.5199 9.41994 9.66994 9.74994 8.81994 9.74994Z"
              fill="currentColor"
            />
            <path
              d="M15.1798 9.74994C14.3298 9.74994 13.4798 9.42994 12.8298 8.77994C12.5398 8.48994 12.5398 8.00994 12.8298 7.71994C13.1198 7.42994 13.5998 7.42994 13.8898 7.71994C14.5998 8.42994 15.7598 8.42994 16.4698 7.71994C16.7598 7.42994 17.2398 7.42994 17.5298 7.71994C17.8198 8.00994 17.8198 8.48994 17.5298 8.77994C16.8798 9.41994 16.0298 9.74994 15.1798 9.74994Z"
              fill="currentColor"
            />
            <path
              d="M15.5999 12.62H8.39988C7.69988 12.62 7.12988 13.19 7.12988 13.9C7.12988 16.59 9.31988 18.78 12.0099 18.78C14.6999 18.78 16.8899 16.59 16.8899 13.9C16.8799 13.2 16.2999 12.62 15.5999 12.62Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2 13V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 8.25C8 9.25 9.63 9.25 10.64 8.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3599 8.25C14.3599 9.25 15.9899 9.25 16.9999 8.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.4 13H15.6C16.1 13 16.5 13.4 16.5 13.9C16.5 16.39 14.49 18.4 12 18.4C9.51 18.4 7.5 16.39 7.5 13.9C7.5 13.4 7.9 13 8.4 13Z"
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
