import { ISvg } from '../../SvgPropsType';

export const CardCoinIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M2 17.0601H12"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.21997 13.5H9.78003C11.56 13.5 12 13.94 12 15.7V19.81C12 21.57 11.56 22.01 9.78003 22.01H4.21997C2.43997 22.01 2 21.57 2 19.81V15.7C2 13.94 2.43997 13.5 4.21997 13.5Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 11C20.9853 11 23 8.98528 23 6.5C23 4.01472 20.9853 2 18.5 2C16.0147 2 14 4.01472 14 6.5C14 8.98528 16.0147 11 18.5 11Z"
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
              d="M12 15.7V15.81C12 16.09 11.78 16.31 11.5 16.31H2.5C2.22 16.31 2 16.09 2 15.81V15.7C2 13.94 2.44 13.5 4.22 13.5H9.78C11.56 13.5 12 13.94 12 15.7Z"
              fill='currentColor'
            />
            <path
              d="M2.5 17.3101C2.22 17.3101 2 17.5301 2 17.8101V18.8101V19.8001C2 21.5601 2.44 22.0001 4.22 22.0001H9.78C11.56 22.0001 12 21.5601 12 19.8001V18.8101V17.8101C12 17.5301 11.78 17.3101 11.5 17.3101H2.5Z"
              fill='currentColor'
            />
            <path
              d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 11C20.9853 11 23 8.98528 23 6.5C23 4.01472 20.9853 2 18.5 2C16.0147 2 14 4.01472 14 6.5C14 8.98528 16.0147 11 18.5 11Z"
              fill='currentColor'
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M2 17.0601H12"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.21997 13.5H9.78003C11.56 13.5 12 13.94 12 15.7V19.81C12 21.57 11.56 22.01 9.78003 22.01H4.21997C2.43997 22.01 2 21.57 2 19.81V15.7C2 13.94 2.43997 13.5 4.21997 13.5Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 11C20.9853 11 23 8.98528 23 6.5C23 4.01472 20.9853 2 18.5 2C16.0147 2 14 4.01472 14 6.5C14 8.98528 16.0147 11 18.5 11Z"
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
              opacity=".4"
              d="M12 15.7v.61H2v-.61c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2"
              fill='currentColor'
            />
            <path
              d="M2 16.31v3.49c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-3.49z"
              fill='currentColor'
            />
            <path
              d="M22 14.25a.75.75 0 0 1 .75.75A7.745 7.745 0 0 1 15 22.75a.75.75 0 0 1-.643-1.136l1.05-1.75a.75.75 0 1 1 1.286.772l-.271.452A6.246 6.246 0 0 0 21.25 15a.75.75 0 0 1 .75-.75M7.578 2.912A6.246 6.246 0 0 0 2.75 9a.75.75 0 0 1-1.5 0A7.745 7.745 0 0 1 9 1.25a.75.75 0 0 1 .643 1.136l-1.05 1.75a.75.75 0 0 1-1.286-.772z"
              opacity=".4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill='currentColor'
            />
            <path
              opacity=".4"
              d="M23 6.5h-9c0 2.48 2.02 4.5 4.5 4.5A4.5 4.5 0 0 0 23 6.5"
              fill='currentColor'
            />
            <path d="M23 6.5a4.5 4.5 0 0 0-9 0z" fill='currentColor' />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2 17.0601H12"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.68976 22H4.22974C2.44974 22 2.00977 21.56 2.00977 19.8V15.7C2.00977 13.94 2.44974 13.5 4.22974 13.5H9.78973C11.5697 13.5 12.0098 13.94 12.0098 15.7V19.81C12.0098 21.57 11.5697 22.01 9.78973 22.01"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 11C20.99 11 23 8.99 23 6.5C23 4.01 20.99 2 18.5 2C16.01 2 14 4.01 14 6.5C14 7.09 14.11 7.65 14.32 8.16"
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
