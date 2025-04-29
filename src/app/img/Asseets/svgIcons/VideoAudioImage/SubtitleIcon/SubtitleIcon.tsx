import { ISvg } from '../../SvgPropsType';

export const SubtitleIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5004 17.08H15.6504"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.97 17.08H6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.4997 13.3199H11.9697"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.27 13.3199H6.5"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM6.5 12.57H9.27C9.68 12.57 10.02 12.91 10.02 13.32C10.02 13.73 9.68 14.07 9.27 14.07H6.5C6.09 14.07 5.75 13.73 5.75 13.32C5.75 12.91 6.09 12.57 6.5 12.57ZM12.97 17.83H6.5C6.09 17.83 5.75 17.49 5.75 17.08C5.75 16.67 6.09 16.33 6.5 16.33H12.97C13.38 16.33 13.72 16.67 13.72 17.08C13.72 17.49 13.39 17.83 12.97 17.83ZM17.5 17.83H15.65C15.24 17.83 14.9 17.49 14.9 17.08C14.9 16.67 15.24 16.33 15.65 16.33H17.5C17.91 16.33 18.25 16.67 18.25 17.08C18.25 17.49 17.91 17.83 17.5 17.83ZM17.5 14.07H11.97C11.56 14.07 11.22 13.73 11.22 13.32C11.22 12.91 11.56 12.57 11.97 12.57H17.5C17.91 12.57 18.25 12.91 18.25 13.32C18.25 13.73 17.91 14.07 17.5 14.07Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M17.5004 17.08H15.6504"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M12.97 17.08H6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M17.4997 13.3199H11.9697"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M9.27 13.3199H6.5"
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
              d="M17.5004 17.83H15.6504C15.2404 17.83 14.9004 17.49 14.9004 17.08C14.9004 16.67 15.2404 16.33 15.6504 16.33H17.5004C17.9104 16.33 18.2504 16.67 18.2504 17.08C18.2504 17.49 17.9104 17.83 17.5004 17.83Z"
              fill="currentColor"
            />
            <path
              d="M12.97 17.83H6.5C6.09 17.83 5.75 17.49 5.75 17.08C5.75 16.67 6.09 16.33 6.5 16.33H12.97C13.38 16.33 13.72 16.67 13.72 17.08C13.72 17.49 13.39 17.83 12.97 17.83Z"
              fill="currentColor"
            />
            <path
              d="M17.4997 14.0699H11.9697C11.5597 14.0699 11.2197 13.7299 11.2197 13.3199C11.2197 12.9099 11.5597 12.5699 11.9697 12.5699H17.4997C17.9097 12.5699 18.2497 12.9099 18.2497 13.3199C18.2497 13.7299 17.9097 14.0699 17.4997 14.0699Z"
              fill="currentColor"
            />
            <path
              d="M9.27 14.0699H6.5C6.09 14.0699 5.75 13.7299 5.75 13.3199C5.75 12.9099 6.09 12.5699 6.5 12.5699H9.27C9.68 12.5699 10.02 12.9099 10.02 13.3199C10.02 13.7299 9.68 14.0699 9.27 14.0699Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5004 17.08H15.6504"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.97 17.08H6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.4997 13.3199H11.9697"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.27 13.3199H6.5"
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
