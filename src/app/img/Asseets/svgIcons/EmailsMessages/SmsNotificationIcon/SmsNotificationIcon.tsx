import { ISvg } from '../../SvgPropsType';

export const SmsNotificationIcon: React.FC<ISvg> = ({
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
              d="M22 10.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5L15.06 10.56"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
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
              d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
              fill="currentColor"
            />
            <path
              d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
              fill="currentColor"
            />
            <path
              d="M20.72 9.31C20.02 9.53 19.25 9.57 18.45 9.37C17.11 9.02 16.02 7.95 15.65 6.61C15.47 5.96 15.46 5.32 15.57 4.74C15.7 4.1 15.25 3.5 14.61 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V10.26C22 9.6 21.36 9.1 20.72 9.31ZM15.52 11.15L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L14.58 9.97C14.9 9.71 15.38 9.76 15.63 10.09C15.89 10.41 15.84 10.89 15.52 11.15Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M22 10.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5L15.06 10.56"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
              fill="currentColor"
            />
            <path
              d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M20.72 9.31001C21.35 9.11001 22 9.60002 22 10.27V15.51C22 19.01 20 20.51 17 20.51H7C4 20.51 2 19.01 2 15.51V8.51001C2 5.01001 4 3.51001 7 3.51001H14.61C15.26 3.51001 15.7 4.11002 15.58 4.74002C15.46 5.33002 15.48 5.96002 15.66 6.61002C16.03 7.95002 17.12 9.02001 18.46 9.37001C19.25 9.57001 20.02 9.53001 20.72 9.31001Z"
              fill="currentColor"
            />
            <path
              d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.58002C6.20978 9.32002 6.14978 8.85002 6.40978 8.53002C6.66978 8.21002 7.13977 8.15003 7.45977 8.41003L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L14.5798 9.97002C14.8998 9.71002 15.3798 9.76002 15.6298 10.09C15.8898 10.41 15.8398 10.89 15.5098 11.14L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2 8.5C2 5 4 3.5 7 3.5H14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 10.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V12.98"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5L15.06 10.56"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
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
