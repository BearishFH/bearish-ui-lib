import { IFileTypeIcon } from '../FileTypeIconType';

export const FileVideoTwoIcon: React.FC<IFileTypeIcon> = ({ iconType = 'default', w = 24 }) => {
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
            <g clip-path="url(#clip0_1414_97046)">
              <path
                d="M20 31.5C24.1421 31.5 27.5 28.1421 27.5 24C27.5 19.8579 24.1421 16.5 20 16.5C15.8579 16.5 12.5 19.8579 12.5 24C12.5 28.1421 15.8579 31.5 20 31.5Z"
                stroke="#7B8C9F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.125 21.724C18.125 21.366 18.125 21.1871 18.1998 21.0871C18.265 21.0001 18.3648 20.9456 18.4733 20.9378C18.5978 20.9289 18.7483 21.0257 19.0495 21.2193L22.5899 23.4953C22.8512 23.6633 22.9818 23.7472 23.027 23.854C23.0664 23.9474 23.0664 24.0526 23.027 24.146C22.9818 24.2527 22.8512 24.3367 22.5899 24.5047L19.0495 26.7807C18.7483 26.9743 18.5978 27.0711 18.4733 27.0622C18.3648 27.0544 18.265 26.9999 18.1998 26.9129C18.125 26.8129 18.125 26.634 18.125 26.276V21.724Z"
                stroke="#7B8C9F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1414_97046">
                <rect width="18" height="18" fill="white" transform="translate(11 15)" />
              </clipPath>
            </defs>
          </>
        );

      case 'gray':
        return (
          <>
            <mask
              id="mask0_1414_97052"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="0"
              width="32"
              height="40"
            >
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="url(#paint0_linear_1414_97052)"
              />
            </mask>
            <g mask="url(#mask0_1414_97052)">
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="#F4F1EB"
              />
            </g>
            <path d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F8F7F4" />
            <g clip-path="url(#clip0_1414_97052)">
              <path
                d="M20 30.6666C23.6819 30.6666 26.6667 27.6818 26.6667 23.9999C26.6667 20.318 23.6819 17.3333 20 17.3333C16.3181 17.3333 13.3334 20.318 13.3334 23.9999C13.3334 27.6818 16.3181 30.6666 20 30.6666Z"
                stroke="#3C3C3C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.3334 21.9768C18.3334 21.6586 18.3334 21.4995 18.3999 21.4107C18.4578 21.3333 18.5465 21.2849 18.643 21.278C18.7536 21.2701 18.8875 21.3561 19.1551 21.5282L22.3022 23.5513C22.5344 23.7006 22.6506 23.7753 22.6907 23.8702C22.7257 23.9531 22.7257 24.0467 22.6907 24.1297C22.6506 24.2246 22.5344 24.2992 22.3022 24.4485L19.1551 26.4717C18.8875 26.6437 18.7536 26.7298 18.643 26.7218C18.5465 26.715 18.4578 26.6665 18.3999 26.5891C18.3334 26.5003 18.3334 26.3412 18.3334 26.023V21.9768Z"
                stroke="#3C3C3C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1414_97052"
                x1="20"
                y1="0"
                x2="20"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0.4" />
                <stop offset="1" />
              </linearGradient>
              <clipPath id="clip0_1414_97052">
                <rect width="16" height="16" fill="white" transform="translate(12 16)" />
              </clipPath>
            </defs>
          </>
        );

      case 'solid':
        return (
          <>
            <path
              d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
              fill="#7B8C9F"
            />
            <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F4F1EB" />
            <g clip-path="url(#clip0_1414_97060)">
              <path
                d="M20 30.6666C23.6819 30.6666 26.6667 27.6818 26.6667 23.9999C26.6667 20.318 23.6819 17.3333 20 17.3333C16.3181 17.3333 13.3334 20.318 13.3334 23.9999C13.3334 27.6818 16.3181 30.6666 20 30.6666Z"
                stroke="#F4F1EB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.3334 21.9768C18.3334 21.6586 18.3334 21.4995 18.3999 21.4107C18.4578 21.3333 18.5465 21.2849 18.643 21.278C18.7536 21.2701 18.8875 21.3561 19.1551 21.5282L22.3022 23.5513C22.5344 23.7006 22.6506 23.7753 22.6907 23.8702C22.7257 23.9531 22.7257 24.0467 22.6907 24.1297C22.6506 24.2246 22.5344 24.2992 22.3022 24.4485L19.1551 26.4717C18.8875 26.6437 18.7536 26.7298 18.643 26.7218C18.5465 26.715 18.4578 26.6665 18.3999 26.5891C18.3334 26.5003 18.3334 26.3412 18.3334 26.023V21.9768Z"
                stroke="#F4F1EB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1414_97060">
                <rect width="16" height="16" fill="white" transform="translate(12 16)" />
              </clipPath>
            </defs>
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
