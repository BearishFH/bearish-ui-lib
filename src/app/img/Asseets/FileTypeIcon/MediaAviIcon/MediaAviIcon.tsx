import { IFileTypeIcon } from '../FileTypeIconType';

export const MediaAviIcon: React.FC<IFileTypeIcon> = ({ iconType = 'default', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'default':
      default:
        return (
          <>
            <path
              d="M7.75 4C7.75 2.20508 9.20508 0.75 11 0.75H27C27.1212 0.75 27.2375 0.798159 27.3232 0.883885L38.1161 11.6768C38.2018 11.7625 38.25 11.8788 38.25 12V36C38.25 37.7949 36.7949 39.25 35 39.25H11C9.20507 39.25 7.75 37.7949 7.75 36V4Z"
              stroke="#B3A89A"
              strokeWidth="1.5"
            />
            <path
              d="M27 0.5V8C27 10.2091 28.7909 12 31 12H38.5"
              stroke="#B3A89A"
              strokeWidth="1.5"
            />
            <rect x="1" y="18" width="23" height="16" rx="2" fill="#7B8C9F" />
            <path
              d="M5.95792 30H4.31019L6.82085 22.7273H8.80238L11.3095 30H9.66175L7.84002 24.3892H7.7832L5.95792 30ZM5.85494 27.1413H9.74698V28.3416H5.85494V27.1413ZM12.5906 22.7273L14.3484 28.2528H14.4158L16.1772 22.7273H17.8817L15.3746 30H13.3931L10.8825 22.7273H12.5906ZM20.2947 22.7273V30H18.7571V22.7273H20.2947Z"
              fill="#F4F1EB"
            />
          </>
        );

      case 'gray':
        return (
          <>
            <mask
              id="mask0_1414_97460"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="0"
              width="32"
              height="40"
            >
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="url(#paint0_linear_1414_97460)"
              />
            </mask>
            <g mask="url(#mask0_1414_97460)">
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="#F4F1EB"
              />
            </g>
            <path d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F8F7F4" />
            <path
              d="M14.1121 32H12.6292L14.8888 25.4545H16.6721L18.9285 32H17.4456L15.806 26.9503H15.7549L14.1121 32ZM14.0194 29.4272H17.5223V30.5075H14.0194V29.4272ZM20.0815 25.4545L21.6635 30.4276H21.7243L23.3095 25.4545H24.8436L22.5872 32H20.8038L18.5442 25.4545H20.0815ZM27.0153 25.4545V32H25.6314V25.4545H27.0153Z"
              fill="#3C3C3C"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1414_97460"
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
              fill="#7B8C9F"
            />
            <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F4F1EB" />
            <path
              d="M14.1121 32H12.6292L14.8888 25.4545H16.6721L18.9285 32H17.4456L15.806 26.9503H15.7549L14.1121 32ZM14.0194 29.4272H17.5223V30.5075H14.0194V29.4272ZM20.0815 25.4545L21.6635 30.4276H21.7243L23.3095 25.4545H24.8436L22.5872 32H20.8038L18.5442 25.4545H20.0815ZM27.0153 25.4545V32H25.6314V25.4545H27.0153Z"
              fill="#F4F1EB"
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
