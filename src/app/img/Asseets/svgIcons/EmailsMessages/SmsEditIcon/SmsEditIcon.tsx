import { ISvg } from '../../SvgPropsType';

export const SmsEditIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M12 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V11.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.21 14.77L15.6701 18.31C15.5301 18.45 15.4 18.71 15.37 18.9L15.18 20.25C15.11 20.74 15.45 21.0801 15.94 21.0101L17.29 20.82C17.48 20.79 17.75 20.66 17.88 20.52L21.4201 16.9801C22.0301 16.3701 22.3201 15.6601 21.4201 14.7601C20.5301 13.8701 19.82 14.16 19.21 14.77Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.7002 15.28C19.0002 16.36 19.8402 17.2 20.9202 17.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M17 3H7C4 3 2 4.5 2 8V15C2 18.5 4 20 7 20H10.57C11.16 20 11.64 19.48 11.56 18.89C11.46 18.18 11.48 17.44 11.63 16.68C12.16 14.08 14.3 12.01 16.92 11.58C18.23 11.37 19.48 11.55 20.58 12.03C21.25 12.32 22 11.86 22 11.13V8C22 4.5 20 3 17 3ZM17.47 8.59L14.34 11.09C13.68 11.62 12.84 11.88 12 11.88C11.16 11.88 10.31 11.62 9.66 11.09L6.53 8.59C6.21 8.33 6.16 7.86 6.41 7.53C6.67 7.21 7.14 7.15 7.46 7.41L10.59 9.91C11.35 10.52 12.64 10.52 13.4 9.91L16.53 7.41C16.85 7.15 17.33 7.2 17.58 7.53C17.84 7.86 17.79 8.33 17.47 8.59Z"
              fill="currentColor"
            />
            <path
              d="M18 13C15.24 13 13 15.23 13 18C13 20.76 15.24 23 18 23C20.77 23 23 20.76 23 18C23 15.23 20.77 13 18 13ZM20.05 17.55L19.68 17.91L17.5 20.1C17.4 20.19 17.21 20.29 17.07 20.31L16.09 20.45C15.74 20.5 15.49 20.25 15.54 19.9L15.68 18.92C15.7 18.78 15.79 18.59 15.89 18.49L18.07 16.32L18.43 15.95C18.67 15.71 18.94 15.55 19.22 15.55C19.46 15.55 19.73 15.66 20.03 15.95C20.7 16.6 20.49 17.11 20.05 17.55Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M12 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V11.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g opacity="0.4">
              <path
                d="M19.21 14.77L15.6701 18.31C15.5301 18.45 15.4 18.71 15.37 18.9L15.18 20.25C15.11 20.74 15.45 21.0801 15.94 21.0101L17.29 20.82C17.48 20.79 17.75 20.66 17.88 20.52L21.4201 16.9801C22.0301 16.3701 22.3201 15.6601 21.4201 14.7601C20.5301 13.8701 19.82 14.16 19.21 14.77Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.7002 15.28C19.0002 16.36 19.8402 17.2 20.9202 17.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              opacity="0.4"
              d="M7 3H17C20 3 22 4.5 22 8V11.14C22 11.87 21.25 12.33 20.58 12.04C19.48 11.56 18.23 11.38 16.92 11.59C14.3 12.02 12.16 14.09 11.63 16.69C11.48 17.45 11.46 18.19 11.56 18.9C11.64 19.49 11.16 20.01 10.57 20.01H7C4 20.01 2 18.51 2 15.01V8.01001C2 4.50001 4 3 7 3Z"
              fill="currentColor"
            />
            <path
              d="M11.9998 11.87C11.1598 11.87 10.3098 11.61 9.65978 11.08L6.52978 8.57996C6.20978 8.31996 6.14978 7.84997 6.40978 7.52997C6.66978 7.20997 7.13977 7.14997 7.45977 7.40997L10.5898 9.90997C11.3498 10.52 12.6398 10.52 13.3998 9.90997L16.5298 7.40997C16.8498 7.14997 17.3298 7.19997 17.5798 7.52997C17.8398 7.84997 17.7898 8.32996 17.4598 8.57996L14.3298 11.08C13.6898 11.61 12.8398 11.87 11.9998 11.87Z"
              fill="currentColor"
            />
            <path
              d="M18 13C15.24 13 13 15.23 13 18C13 20.76 15.24 23 18 23C20.77 23 23 20.76 23 18C23 15.23 20.77 13 18 13ZM20.05 17.55L19.68 17.91L17.51 20.09C17.41 20.18 17.22 20.28 17.08 20.3L16.1 20.44C15.75 20.49 15.5 20.24 15.55 19.89L15.69 18.91C15.71 18.77 15.8 18.58 15.9 18.48L18.08 16.31L18.44 15.94C18.68 15.7 18.95 15.54 19.23 15.54C19.47 15.54 19.74 15.65 20.04 15.94C20.7 16.6 20.49 17.11 20.05 17.55Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V11.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 20.5H7C4 20.5 2 19 2 15.5V12.47"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.21 14.77L15.6701 18.31C15.5301 18.45 15.4 18.71 15.37 18.9L15.18 20.25C15.11 20.74 15.45 21.0801 15.94 21.0101L17.29 20.82C17.48 20.79 17.75 20.66 17.88 20.52L21.4201 16.9801C22.0301 16.3701 22.3201 15.6601 21.4201 14.7601C20.5301 13.8701 19.82 14.16 19.21 14.77Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.7002 15.28C19.0002 16.36 19.8402 17.2 20.9202 17.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
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
