import { ISvg } from '../../SvgPropsType';

export const SidebarRightIcon: React.FC<ISvg> = ({
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
              d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7m-7-13v20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.97 9.44 10.53 12l-2.56 2.56"
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
              d="M7.81 2C6.32 2 5.08 2.36 4.13 3.05C3.71 3.34 3.34 3.71 3.05 4.13C2.36 5.08 2 6.32 2 7.81V16.19C2 19.83 4.17 22 7.81 22H15.28V2H7.81ZM12.12 12.53L9.56 15.09C9.41 15.24 9.22 15.31 9.03 15.31C8.84 15.31 8.65 15.24 8.5 15.09C8.21 14.8 8.21 14.32 8.5 14.03L10.52 12L8.5 9.97C8.2 9.68 8.2 9.2 8.5 8.91C8.8 8.62 9.27 8.62 9.56 8.91L12.12 11.47C12.41 11.76 12.41 12.24 12.12 12.53Z"
              fill="currentColor"
            />
            <path
              d="M16.7803 2.03003V21.98C18.0103 21.9 19.0503 21.55 19.8703 20.95C20.2903 20.66 20.6603 20.29 20.9503 19.87C21.6403 18.92 22.0003 17.68 22.0003 16.19V7.81003C22.0003 4.37003 20.0603 2.24003 16.7803 2.03003Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M21.9697 15V9C21.9697 4 19.9697 2 14.9697 2H8.96973C3.96973 2 1.96973 4 1.96973 9V15C1.96973 20 3.96973 22 8.96973 22H14.9697C19.9697 22 21.9697 20 21.9697 15Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M14.9697 2V22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M7.96973 9.43994L10.5297 11.9999L7.96973 14.5599"
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
              d="M2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C16.39 22 16.59 21.99 16.78 21.98C18.01 21.9 19.05 21.55 19.87 20.95C20.29 20.66 20.66 20.29 20.95 19.87C21.64 18.92 22 17.68 22 16.19V7.81C22 4.37 20.06 2.24 16.78 2.03C16.59 2.01 16.39 2 16.19 2H7.81C6.32 2 5.08 2.36 4.13 3.05C3.71 3.34 3.34 3.71 3.05 4.13C2.36 5.08 2 6.32 2 7.81Z"
              fill="currentColor"
            />
            <path
              d="M15.2803 2V22H16.1903C16.3903 22 16.5903 21.99 16.7803 21.98V2.03C16.5903 2.01 16.3903 2 16.1903 2H15.2803Z"
              fill="currentColor"
            />
            <path
              d="M9.02973 15.3099C9.21973 15.3099 9.40973 15.2399 9.55973 15.0899L12.1197 12.5299C12.4097 12.2399 12.4097 11.7599 12.1197 11.4699L9.55973 8.90988C9.26973 8.61988 8.78973 8.61988 8.49973 8.90988C8.20973 9.19988 8.20973 9.67988 8.49973 9.96988L10.5197 11.9999L8.49973 14.0299C8.20973 14.3199 8.20973 14.7999 8.49973 15.0899C8.63973 15.2399 8.82973 15.3099 9.02973 15.3099Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M1.96973 12.98V15C1.96973 20 3.96973 22 8.96973 22H14.9697C19.9697 22 21.9697 20 21.9697 15V9C21.9697 4 19.9697 2 14.9697 2H8.96973C3.96973 2 1.96973 4 1.96973 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.9697 2V22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.96973 9.43994L10.5297 11.9999L7.96973 14.5599"
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
