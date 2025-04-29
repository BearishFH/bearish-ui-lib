import { ISvg } from '../../SvgPropsType';

export const CodeBoxIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M8.99953 13C8.33953 13.33 7.78953 13.82 7.37953 14.43C7.14953 14.78 7.14953 15.22 7.37953 15.57C7.78953 16.18 8.33953 16.67 8.99953 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.21 13C15.87 13.33 16.42 13.82 16.83 14.43C17.06 14.78 17.06 15.22 16.83 15.57C16.42 16.18 15.87 16.67 15.21 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.23047 8.01L21.4505 8"
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
              d="M21 10H3C2.45 10 2 10.45 2 11V16.19C2 16.39 2.01 16.59 2.03 16.79C2.23 19.87 4.13 21.77 7.21 21.97C7.41 21.99 7.61 22 7.81 22H16.19C16.39 22 16.59 21.99 16.79 21.97C19.87 21.77 21.77 19.87 21.97 16.79C21.99 16.59 22 16.39 22 16.19V11C22 10.45 21.55 10 21 10ZM8 16.15C8.34 16.65 8.8 17.06 9.33 17.33C9.71 17.51 9.86 17.96 9.67 18.34C9.54 18.6 9.27 18.75 9 18.75C8.89 18.75 8.77 18.72 8.67 18.67C7.89 18.29 7.23 17.7 6.76 16.99C6.36 16.39 6.36 15.61 6.76 15.01C7.23 14.3 7.89 13.71 8.67 13.33C9.04 13.14 9.49 13.29 9.67 13.66C9.86 14.04 9.71 14.49 9.33 14.67C8.8 14.94 8.34 15.35 8 15.85C7.94 15.94 7.94 16.06 8 16.15ZM17.45 16.99C16.97 17.7 16.31 18.29 15.54 18.67C15.43 18.72 15.32 18.75 15.21 18.75C14.93 18.75 14.67 18.6 14.54 18.34C14.35 17.96 14.5 17.51 14.87 17.33C15.41 17.06 15.87 16.65 16.2 16.15C16.27 16.06 16.27 15.94 16.2 15.85C15.87 15.35 15.41 14.94 14.87 14.67C14.5 14.49 14.35 14.04 14.54 13.66C14.72 13.29 15.17 13.14 15.54 13.33C16.31 13.71 16.97 14.3 17.45 15.01C17.85 15.61 17.85 16.39 17.45 16.99Z"
              fill="currentColor"
            />
            <path
              d="M22 7.81V8C22 8.55 21.55 9 21 9L3 9.01C2.45 9.01 2 8.56 2 8.01V7.81C2 7.61 2.01 7.41 2.03 7.21C2.23 4.13 4.13 2.23 7.21 2.03C7.41 2.01 7.61 2 7.81 2H16.19C16.39 2 16.59 2.01 16.79 2.03C19.87 2.23 21.77 4.13 21.97 7.21C21.99 7.41 22 7.61 22 7.81Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              opacity="0.4"
              d="M8.99953 13C8.33953 13.33 7.78953 13.82 7.37953 14.43C7.14953 14.78 7.14953 15.22 7.37953 15.57C7.78953 16.18 8.33953 16.67 8.99953 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M15.21 13C15.87 13.33 16.42 13.82 16.83 14.43C17.06 14.78 17.06 15.22 16.83 15.57C16.42 16.18 15.87 16.67 15.21 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M2.23047 8.01L21.4505 8"
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
              d="M22 8V16.19C22 19.83 19.83 22 16.19 22H7.81C4.17 22 2 19.83 2 16.19V8.01L22 8Z"
              fill="currentColor"
            />
            <path
              d="M8.99996 17.7499C8.88996 17.7499 8.76996 17.7199 8.66996 17.6699C7.89996 17.2799 7.23996 16.6999 6.75996 15.9799C6.35996 15.3799 6.35996 14.6099 6.75996 14.0099C7.23996 13.2899 7.89996 12.7099 8.66996 12.3299C9.03996 12.1399 9.48996 12.2999 9.67996 12.6699C9.86996 13.0399 9.71996 13.4899 9.33996 13.6799C8.79996 13.9499 8.33996 14.3599 8.00996 14.8599C7.94996 14.9499 7.94996 15.0699 8.00996 15.1699C8.33996 15.6699 8.79996 16.0799 9.33996 16.3499C9.70996 16.5399 9.85996 16.9899 9.67996 17.3599C9.53996 17.5999 9.26996 17.7499 8.99996 17.7499Z"
              fill="currentColor"
            />
            <path
              d="M15.2102 17.7499C14.9302 17.7499 14.6702 17.5999 14.5402 17.3399C14.3502 16.9699 14.5002 16.5199 14.8802 16.3299C15.4202 16.0599 15.8802 15.6499 16.2102 15.1499C16.2702 15.0599 16.2702 14.9399 16.2102 14.8399C15.8802 14.3399 15.4202 13.9299 14.8802 13.6599C14.5102 13.4699 14.3602 13.0199 14.5402 12.6499C14.7302 12.2799 15.1802 12.1299 15.5502 12.3099C16.3202 12.6999 16.9802 13.2799 17.4602 13.9999C17.8602 14.5999 17.8602 15.3699 17.4602 15.9699C16.9802 16.6899 16.3202 17.2699 15.5502 17.6499C15.4302 17.7199 15.3202 17.7499 15.2102 17.7499Z"
              fill="currentColor"
            />
            <path
              d="M22 7.81V8L2 8.01V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M8.99953 13C8.33953 13.33 7.78953 13.82 7.37953 14.43C7.14953 14.78 7.14953 15.22 7.37953 15.57C7.78953 16.18 8.33953 16.67 8.99953 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.21 13C15.87 13.33 16.42 13.82 16.83 14.43C17.06 14.78 17.06 15.22 16.83 15.57C16.42 16.18 15.87 16.67 15.21 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 13V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.23047 8.01L21.4505 8"
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
