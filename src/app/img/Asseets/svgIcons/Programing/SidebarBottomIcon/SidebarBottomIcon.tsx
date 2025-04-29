import { ISvg } from '../../SvgPropsType';

export const SidebarBottomIcon: React.FC<ISvg> = ({
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
              d="M22 15.5H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5604 8.5L12.0004 11.06L9.44043 8.5"
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
              d="M3.04953 19.87C3.33953 20.29 3.70953 20.66 4.12953 20.95C5.07953 21.64 6.31953 22 7.80953 22H16.1895C19.6295 22 21.7595 20.06 21.9695 16.78H2.01953C2.09953 18.01 2.44953 19.05 3.04953 19.87Z"
              fill="currentColor"
            />
            <path
              d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V15.28H22V7.81C22 6.32 21.64 5.08 20.95 4.13ZM15.09 9.56L12.53 12.12C12.24 12.41 11.76 12.41 11.47 12.12L8.91 9.56C8.76 9.41 8.69 9.22 8.69 9.03C8.69 8.84 8.76 8.64 8.91 8.5C9.2 8.2 9.68 8.2 9.97 8.5L12 10.52L14.03 8.49C14.32 8.2 14.8 8.2 15.09 8.49C15.38 8.78 15.38 9.26 15.09 9.56Z"
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
              d="M22 15.5H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M14.5604 8.5L12.0004 11.06L9.44043 8.5"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 16.39 2.01 16.59 2.02 16.78C2.1 18.01 2.45 19.05 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C5.08 21.64 6.32 22 7.81 22H16.19C19.63 22 21.76 20.06 21.97 16.78C21.99 16.59 22 16.39 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2Z"
              fill="currentColor"
            />
            <path
              d="M22 15.28H2V16.19C2 16.39 2.01 16.59 2.02 16.78H21.97C21.99 16.59 22 16.39 22 16.19V15.28Z"
              fill="currentColor"
            />
            <path
              d="M8.69043 9.0299C8.69043 9.2199 8.76043 9.4099 8.91043 9.5599L11.4704 12.1199C11.7604 12.4099 12.2404 12.4099 12.5304 12.1199L15.0904 9.5599C15.3804 9.2699 15.3804 8.7899 15.0904 8.4999C14.8004 8.2099 14.3204 8.2099 14.0304 8.4999L12.0004 10.5199L9.97043 8.4999C9.68043 8.1999 9.20043 8.1999 8.91043 8.4999C8.76043 8.6399 8.69043 8.8299 8.69043 9.0299Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M22 15.5H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5604 8.5L12.0004 11.06L9.44043 8.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 15.5H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.96973 11.02V9C1.96973 4 3.96973 2 8.96973 2H14.9697C19.9697 2 21.9697 4 21.9697 9V15C21.9697 20 19.9697 22 14.9697 22H8.96973C3.96973 22 1.96973 20 1.96973 15"
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
