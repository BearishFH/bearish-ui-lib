import { IFileTypeIcon } from '../FileTypeIconType';

export const FileSpreadsheetIcon: React.FC<IFileTypeIcon> = ({ iconType = 'default', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'default':
      default:
        return (
          <>
            <path
              d="M4.75 4C4.75 2.20508 6.20508 0.75 8 0.75H24C24.1212 0.75 24.2375 0.798159 24.3232 0.883885L35.1161 11.6768C35.2018 11.7625 35.25 11.8788 35.25 12V36C35.25 37.7949 33.7949 39.25 32 39.25H8C6.20507 39.25 4.75 37.7949 4.75 36V4Z"
              stroke="#B3A89A"
              strokeWidth="1.5"
            />
            <path
              d="M24 0.5V8C24 10.2091 25.7909 12 28 12H35.5"
              stroke="#B3A89A"
              strokeWidth="1.5"
            />
            <path
              d="M11.9 24.9H28.1M11.9 24.9V21.3C11.9 20.3059 12.7059 19.5 13.7 19.5H17.3M11.9 24.9V28.5C11.9 29.4941 12.7059 30.3 13.7 30.3H17.3M28.1 24.9V28.5C28.1 29.4941 27.2941 30.3 26.3 30.3H17.3M28.1 24.9V21.3C28.1 20.3059 27.2941 19.5 26.3 19.5H17.3M17.3 19.5V30.3"
              stroke="#6B8E23"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'gray':
        return (
          <>
            <mask
              id="mask0_1414_97132"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="0"
              width="32"
              height="40"
            >
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="url(#paint0_linear_1414_97132)"
              />
            </mask>
            <g mask="url(#mask0_1414_97132)">
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="#F4F1EB"
              />
            </g>
            <path d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F8F7F4" />
            <path
              d="M12.8 24.8H27.2M12.8 24.8V21.6C12.8 20.7163 13.5164 20 14.4 20H17.6M12.8 24.8V28C12.8 28.8837 13.5164 29.6 14.4 29.6H17.6M27.2 24.8V28C27.2 28.8837 26.4837 29.6 25.6 29.6H17.6M27.2 24.8V21.6C27.2 20.7163 26.4837 20 25.6 20H17.6M17.6 20V29.6"
              stroke="#3C3C3C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1414_97132"
                x1="20"
                y1="0"
                x2="20"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0.4" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </>
        );

      case 'solid':
        return (
          <>
            <path
              d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
              fill="#6B8E23"
            />
            <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F4F1EB" />
            <path
              d="M12.8 24.8H27.2M12.8 24.8V21.6C12.8 20.7163 13.5164 20 14.4 20H17.6M12.8 24.8V28C12.8 28.8837 13.5164 29.6 14.4 29.6H17.6M27.2 24.8V28C27.2 28.8837 26.4837 29.6 25.6 29.6H17.6M27.2 24.8V21.6C27.2 20.7163 26.4837 20 25.6 20H17.6M17.6 20V29.6"
              stroke="#F4F1EB"
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
      viewBox="0 0 40 40"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      {renderIcon()}
    </svg>
  );
};
