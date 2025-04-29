import { IFileTypeIcon } from '../FileTypeIconType';

export const DevelopmentExeIcon: React.FC<IFileTypeIcon> = ({ iconType = 'default', w = 24 }) => {
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
            <rect x="1" y="18" width="26" height="16" rx="2" fill="#7B8C9F" />
            <path
              d="M4.93484 30V22.7273H9.8354V23.995H6.47248V25.728H9.58327V26.9957H6.47248V28.7322H9.84961V30H4.93484ZM12.4996 22.7273L13.9663 25.206H14.0231L15.4968 22.7273H17.2333L15.0138 26.3636L17.283 30H15.5146L14.0231 27.5178H13.9663L12.4748 30H10.7134L12.9897 26.3636L10.756 22.7273H12.4996ZM18.2063 30V22.7273H23.1069V23.995H19.744V25.728H22.8548V26.9957H19.744V28.7322H23.1211V30H18.2063Z"
              fill="#F4F1EB"
            />
          </>
        );

      case 'gray':
        return (
          <>
            <mask
              id="mask0_1414_97712"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="0"
              width="32"
              height="40"
            >
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="url(#paint0_linear_1414_97712)"
              />
            </mask>
            <g mask="url(#mask0_1414_97712)">
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="#F4F1EB"
              />
            </g>
            <path d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F8F7F4" />
            <path
              d="M11.8414 32V25.4545H16.2519V26.5955H13.2252V28.1552H16.0249V29.2962H13.2252V30.859H16.2646V32H11.8414ZM18.6497 25.4545L19.9696 27.6854H20.0208L21.3471 25.4545H22.91L20.9125 28.7273L22.9547 32H21.3631L20.0208 29.766H19.9696L18.6273 32H17.0421L19.0907 28.7273L17.0804 25.4545H18.6497ZM23.7857 32V25.4545H28.1962V26.5955H25.1696V28.1552H27.9693V29.2962H25.1696V30.859H28.209V32H23.7857Z"
              fill="#3C3C3C"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1414_97712"
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
              d="M11.8414 32V25.4545H16.2519V26.5955H13.2252V28.1552H16.0249V29.2962H13.2252V30.859H16.2646V32H11.8414ZM18.6497 25.4545L19.9696 27.6854H20.0208L21.3471 25.4545H22.91L20.9125 28.7273L22.9547 32H21.3631L20.0208 29.766H19.9696L18.6273 32H17.0421L19.0907 28.7273L17.0804 25.4545H18.6497ZM23.7857 32V25.4545H28.1962V26.5955H25.1696V28.1552H27.9693V29.2962H25.1696V30.859H28.209V32H23.7857Z"
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
