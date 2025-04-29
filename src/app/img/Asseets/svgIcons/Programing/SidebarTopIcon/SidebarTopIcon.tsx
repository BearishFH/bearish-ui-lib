import { ISvg } from '../../SvgPropsType';

export const SidebarTopIcon: React.FC<ISvg> = ({
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
              d="M21.9697 15V9C21.9697 4 19.9697 2 14.9697 2H8.96973C3.96973 2 1.96973 4 1.96973 9V15C1.96973 20 3.96973 22 8.96973 22H14.9697C19.9697 22 21.9697 20 21.9697 15Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 8.5H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5604 15.4999L12.0004 12.9399L9.44043 15.4999"
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
              d="M20.9503 4.13C20.6603 3.71 20.2903 3.34 19.8703 3.05C18.9203 2.36 17.6803 2 16.1903 2H7.81027C4.37027 2 2.24027 3.94 2.03027 7.22H21.9803C21.9003 5.99 21.5503 4.95 20.9503 4.13Z"
              fill="currentColor"
            />
            <path
              d="M2 16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C5.08 21.64 6.32 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V8.71997H2V16.19ZM8.91 14.44L11.47 11.88C11.76 11.59 12.24 11.59 12.53 11.88L15.09 14.44C15.24 14.59 15.31 14.78 15.31 14.97C15.31 15.16 15.24 15.35 15.09 15.5C14.8 15.79 14.32 15.79 14.03 15.5L12 13.48L9.97 15.5C9.68 15.79 9.2 15.79 8.91 15.5C8.62 15.21 8.62 14.74 8.91 14.44Z"
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
              d="M22 8.5H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M14.5604 15.4999L12.0004 12.9399L9.44043 15.4999"
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
              d="M7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 7.61 21.99 7.41 21.98 7.22C21.9 5.99 21.55 4.95 20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C4.37 2 2.24 3.94 2.03 7.22C2.01 7.41 2 7.61 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C5.08 21.64 6.32 22 7.81 22Z"
              fill="currentColor"
            />
            <path
              d="M2 8.71997H22V7.80997C22 7.60997 21.99 7.40997 21.98 7.21997H2.03C2.01 7.40997 2 7.60997 2 7.80997V8.71997Z"
              fill="currentColor"
            />
            <path
              d="M15.3099 14.9701C15.3099 14.7801 15.2399 14.5901 15.0899 14.4401L12.5299 11.8801C12.2399 11.5901 11.7599 11.5901 11.4699 11.8801L8.90988 14.4401C8.61988 14.7301 8.61988 15.2101 8.90988 15.5001C9.19988 15.7901 9.67988 15.7901 9.96988 15.5001L11.9999 13.4801L14.0299 15.5101C14.3199 15.8001 14.7999 15.8001 15.0899 15.5101C15.2399 15.3601 15.3099 15.1701 15.3099 14.9701Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M22 8.5H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5604 15.4999L12.0004 12.9399L9.44043 15.4999"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.96973 12.98V15C1.96973 20 3.96973 22 8.96973 22H14.9697C19.9697 22 21.9697 20 21.9697 15V9C21.9697 4 19.9697 2 14.9697 2H8.96973C3.96973 2 1.96973 4 1.96973 9"
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
