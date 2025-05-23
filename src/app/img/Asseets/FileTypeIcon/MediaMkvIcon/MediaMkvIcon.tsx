import { IFileTypeIcon } from '../FileTypeIconType';

export const MediaMkvIcon: React.FC<IFileTypeIcon> = ({ iconType = 'default', w = 24 }) => {
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
            <rect x="1" y="18" width="30" height="16" rx="2" fill="#7B8C9F" />
            <path
              d="M4.86941 22.7273H6.76571L8.76855 27.6136H8.85378L10.8566 22.7273H12.7529V30H11.2615V25.2663H11.2011L9.31898 29.9645H8.30336L6.42125 25.2486H6.36088V30H4.86941V22.7273ZM14.0198 30V22.7273H15.5574V25.9339H15.6533L18.2705 22.7273H20.1135L17.4147 25.9837L20.1455 30H18.306L16.3138 27.0099L15.5574 27.9332V30H14.0198ZM22.2282 22.7273L23.9861 28.2528H24.0535L25.8149 22.7273H27.5194L25.0123 30H23.0308L20.5202 22.7273H22.2282Z"
              fill="#F4F1EB"
            />
          </>
        );

      case 'gray':
        return (
          <>
            <mask
              id="mask0_1414_97496"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="0"
              width="32"
              height="40"
            >
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="url(#paint0_linear_1414_97496)"
              />
            </mask>
            <g mask="url(#mask0_1414_97496)">
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="#F4F1EB"
              />
            </g>
            <path d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F8F7F4" />
            <path
              d="M9.98247 25.4545H11.6891L13.4917 29.8523H13.5684L15.371 25.4545H17.0776V32H15.7353V27.7397H15.681L13.9871 31.968H13.073L11.3791 27.7237H11.3248V32H9.98247V25.4545ZM18.2178 32V25.4545H19.6017V28.3406H19.688L22.0435 25.4545H23.7022L21.2732 28.3853L23.731 32H22.0754L20.2824 29.3089L19.6017 30.1399V32H18.2178ZM25.6054 25.4545L27.1875 30.4276H27.2482L28.8334 25.4545H30.3675L28.1111 32H26.3277L24.0681 25.4545H25.6054Z"
              fill="#3C3C3C"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1414_97496"
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
              d="M9.98247 25.4545H11.6891L13.4917 29.8523H13.5684L15.371 25.4545H17.0776V32H15.7353V27.7397H15.681L13.9871 31.968H13.073L11.3791 27.7237H11.3248V32H9.98247V25.4545ZM18.2178 32V25.4545H19.6017V28.3406H19.688L22.0435 25.4545H23.7022L21.2732 28.3853L23.731 32H22.0754L20.2824 29.3089L19.6017 30.1399V32H18.2178ZM25.6054 25.4545L27.1875 30.4276H27.2482L28.8334 25.4545H30.3675L28.1111 32H26.3277L24.0681 25.4545H25.6054Z"
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
