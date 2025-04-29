import { ISvg } from '../../SvgPropsType';

export const SidebarLeftIcon: React.FC<ISvg> = ({
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
              d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7m-14-13v20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.97 9.44 12.41 12l2.56 2.56"
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
              d="M2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03V2.03C3.94 2.24 2 4.37 2 7.81m18.95-3.68c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H8.72v20h7.47c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68m-5.45 9.9c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.56-2.56a.754.754 0 0 1 0-1.06l2.56-2.56c.29-.29.77-.29 1.06 0s.29.77 0 1.06L13.48 12z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity=".4"
              d="M7.97 2v20m7-12.56L12.41 12l2.56 2.56"
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
              d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z"
              fill="currentColor"
            />
            <path
              d="M8.71973 2V22H7.80973C7.60973 22 7.40973 21.99 7.21973 21.98V2.03C7.40973 2.01 7.60973 2 7.80973 2H8.71973Z"
              fill="currentColor"
            />
            <path
              d="M14.9696 15.3099C14.7796 15.3099 14.5896 15.2399 14.4396 15.0899L11.8796 12.5299C11.5896 12.2399 11.5896 11.7599 11.8796 11.4699L14.4396 8.90988C14.7296 8.61988 15.2096 8.61988 15.4996 8.90988C15.7896 9.19988 15.7896 9.67988 15.4996 9.96988L13.4796 11.9999L15.5096 14.0299C15.7996 14.3199 15.7996 14.7999 15.5096 15.0899C15.3596 15.2399 15.1696 15.3099 14.9696 15.3099Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M7.96973 2V22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.9702 9.43994L12.4102 11.9999L14.9702 14.5599"
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
