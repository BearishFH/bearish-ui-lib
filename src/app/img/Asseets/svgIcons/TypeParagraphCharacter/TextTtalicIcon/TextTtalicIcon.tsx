import { ISvg } from '../../SvgPropsType';

export const TextTtalicIcon: React.FC<ISvg> = ({
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
              d="M9.62207 3H18.8721"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.12207 21H14.3721"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.252 3L9.75195 21"
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
              d="M20.952 4.13C20.662 3.71 20.292 3.34 19.872 3.05C18.922 2.36 17.682 2 16.192 2H7.81195C7.61195 2 7.41195 2.01 7.22195 2.03C3.94195 2.24 2.00195 4.37 2.00195 7.81V16.19C2.00195 17.68 2.36195 18.92 3.05195 19.87C3.34195 20.29 3.71195 20.66 4.13195 20.95C4.95195 21.55 5.99195 21.9 7.22195 21.98C7.41195 21.99 7.61195 22 7.81195 22H16.192C19.832 22 22.002 19.83 22.002 16.19V7.81C22.002 6.32 21.642 5.08 20.952 4.13ZM15.872 7.51H13.922L11.682 16.48H13.522C13.932 16.48 14.272 16.82 14.272 17.23C14.272 17.64 13.932 17.98 13.522 17.98H8.13195C7.72195 17.98 7.38195 17.64 7.38195 17.23C7.38195 16.82 7.72195 16.48 8.13195 16.48H10.132L12.372 7.51H10.482C10.072 7.51 9.73195 7.17 9.73195 6.76C9.73195 6.35 10.072 6.01 10.482 6.01H15.862C16.272 6.01 16.612 6.35 16.612 6.76C16.612 7.17 16.282 7.51 15.872 7.51Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M9.62207 3H18.8721"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.12207 21H14.3721"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M14.252 3L9.75195 21"
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
              d="M22.002 7.81V16.19C22.002 19.83 19.832 22 16.192 22H7.81195C7.61195 22 7.41195 21.99 7.22195 21.98C5.99195 21.9 4.95195 21.55 4.13195 20.95C3.71195 20.66 3.34195 20.29 3.05195 19.87C2.36195 18.92 2.00195 17.68 2.00195 16.19V7.81C2.00195 4.37 3.94195 2.24 7.22195 2.03C7.41195 2.01 7.61195 2 7.81195 2H16.192C17.682 2 18.922 2.36 19.872 3.05C20.292 3.34 20.662 3.71 20.952 4.13C21.642 5.08 22.002 6.32 22.002 7.81Z"
              fill="currentColor"
            />
            <path
              d="M15.8716 6.01001H10.4916C10.0816 6.01001 9.7416 6.35001 9.7416 6.76001C9.7416 7.17001 10.0816 7.51001 10.4916 7.51001H12.3816L10.1416 16.48H8.1416C7.7316 16.48 7.3916 16.82 7.3916 17.23C7.3916 17.64 7.7316 17.98 8.1416 17.98H13.5216C13.9316 17.98 14.2716 17.64 14.2716 17.23C14.2716 16.82 13.9316 16.48 13.5216 16.48H11.6816L13.9216 7.51001H15.8716C16.2816 7.51001 16.6216 7.17001 16.6216 6.76001C16.6216 6.35001 16.2816 6.01001 15.8716 6.01001Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M9.62207 3H18.8721"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.12207 21H14.3721"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.502 17.99L9.75195 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.252 3L11.502 14.01"
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
