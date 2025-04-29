import { ISvg } from '../../SvgPropsType';

export const CloseIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      default:
        return (
          <>
            <path
              d="M5.00098 5L19 18.9991"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.99996 18.9991L18.999 5"
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.81 2H16.19C19.83 2 22 4.17 21.99 7.81V16.19C21.99 19.83 19.82 22 16.18 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2ZM15.7123 16.7729L12 13.0606L8.28769 16.7729C7.99778 17.0628 7.51694 17.0628 7.22703 16.7729C6.93711 16.483 6.93711 16.0021 7.22703 15.7122L10.9393 11.9999L7.22703 8.28761C6.93712 7.9977 6.93712 7.51686 7.22703 7.22695C7.51694 6.93704 7.99778 6.93704 8.28769 7.22695L12 10.9393L15.7123 7.22695C16.0022 6.93704 16.4831 6.93704 16.773 7.22695C17.0629 7.51686 17.0629 7.9977 16.773 8.28761L13.0607 11.9999L16.773 15.7122C17.0629 16.0021 17.0629 16.483 16.773 16.7729C16.4831 17.0628 16.0022 17.0628 15.7123 16.7729Z"
              fill="currentColor"
            />
          </>
        );

      case 'outline':
        return (
          <>
            <path
              d="M15.7123 16.7729L7.22699 8.28765C6.93708 7.99773 6.93708 7.5169 7.22699 7.22699C7.51691 6.93707 7.99774 6.93707 8.28765 7.22699L16.7729 15.7123C17.0628 16.0022 17.0628 16.483 16.7729 16.7729C16.483 17.0628 16.0022 17.0628 15.7123 16.7729Z"
              fill="currentColor"
            />
            <path
              d="M7.22706 16.7729C6.93715 16.483 6.93715 16.0022 7.22706 15.7123L15.7123 7.22699C16.0023 6.93707 16.4831 6.93707 16.773 7.22699C17.0629 7.5169 17.0629 7.99773 16.773 8.28765L8.28772 16.7729C7.99781 17.0628 7.51698 17.0628 7.22706 16.7729Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity="0.4">
              <path
                d="M9.16992 14.8299L14.8299 9.16992"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.8299 14.8299L9.16992 9.16992"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
              fill="currentColor"
            />
            <path
              d="M16.773 15.7124L13.0607 12L16.773 8.28773C17.0629 7.99782 17.0629 7.51699 16.773 7.22707C16.4831 6.93716 16.0022 6.93716 15.7123 7.22707L12 10.9394L8.28769 7.22707C7.99778 6.93716 7.51694 6.93716 7.22703 7.22707C6.93712 7.51699 6.93712 7.99782 7.22703 8.28773L10.9393 12L7.22703 15.7124C6.93712 16.0023 6.93712 16.4831 7.22703 16.773C7.51694 17.0629 7.99778 17.0629 8.28769 16.773L12 13.0607L15.7123 16.773C16.0022 17.0629 16.4831 17.0629 16.773 16.773C17.0629 16.4831 17.0629 16.0023 16.773 15.7124Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M12 18V6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 12H18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 12H11.66"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18V6"
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
