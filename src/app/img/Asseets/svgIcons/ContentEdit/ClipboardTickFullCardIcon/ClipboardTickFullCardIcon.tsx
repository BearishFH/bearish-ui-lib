import { ISvg } from '../../SvgPropsType';

export const ClipboardTickFullCardIcon: React.FC<ISvg> = ({
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
              d="M9.30957 14.7L10.8096 16.2L14.8096 12.2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"
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
              d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z"
              fill="currentColor"
            />
            <path
              d="M17.24 4.81998C17.24 6.40998 15.94 7.70998 14.35 7.70998H9.65004C8.06004 7.70998 6.76004 6.40998 6.76004 4.81998C6.76004 4.25998 6.16004 3.90998 5.66004 4.16998C4.25004 4.91998 3.29004 6.40998 3.29004 8.11998V17.53C3.29004 19.99 5.30004 22 7.76004 22H16.24C18.7 22 20.71 19.99 20.71 17.53V8.11998C20.71 6.40998 19.75 4.91998 18.34 4.16998C17.84 3.90998 17.24 4.25998 17.24 4.81998ZM15.34 12.73L11.34 16.73C11.19 16.88 11 16.95 10.81 16.95C10.62 16.95 10.43 16.88 10.28 16.73L8.78004 15.23C8.49004 14.94 8.49004 14.46 8.78004 14.17C9.07004 13.88 9.55004 13.88 9.84004 14.17L10.81 15.14L14.28 11.67C14.57 11.38 15.05 11.38 15.34 11.67C15.63 11.96 15.63 12.44 15.34 12.73Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              opacity="0.4"
              d="M9.30957 14.7L10.8096 16.2L14.8096 12.2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"
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
              d="M16.24 3.6499H7.76004C5.29004 3.6499 3.29004 5.6599 3.29004 8.1199V17.5299C3.29004 19.9899 5.30004 21.9999 7.76004 21.9999H16.23C18.7 21.9999 20.7 19.9899 20.7 17.5299V8.1199C20.71 5.6499 18.7 3.6499 16.24 3.6499Z"
              fill="currentColor"
            />
            <path
              d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z"
              fill="currentColor"
            />
            <path
              d="M10.81 16.9499C10.62 16.9499 10.43 16.8799 10.28 16.7299L8.78 15.2299C8.49 14.9399 8.49 14.4599 8.78 14.1699C9.07 13.8799 9.55 13.8799 9.84 14.1699L10.81 15.1399L14.28 11.6699C14.57 11.3799 15.05 11.3799 15.34 11.6699C15.63 11.9599 15.63 12.4399 15.34 12.7299L11.34 16.7299C11.2 16.8799 11 16.9499 10.81 16.9499Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M9.30957 14.7L10.8096 16.2L14.8096 12.2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.96 2H10C9 2 8 2 8 4C8 6 9 6 10 6H14C16 6 16 5 16 4C16 2 15 2 14 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 10C3 5.44002 4.67 4.20002 8 4.02002"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V13.91"
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
