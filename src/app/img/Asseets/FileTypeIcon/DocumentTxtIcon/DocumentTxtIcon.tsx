import { IFileTypeIcon } from '../FileTypeIconType';

export const DocumentTxtIcon: React.FC<IFileTypeIcon> = ({ iconType = 'default', w = 24 }) => {
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
            <rect x="1" y="18" width="27" height="16" rx="2" fill="#3C3C3C" />
            <path
              d="M4.60121 23.995V22.7273H10.5742V23.995H8.34766V30H6.82777V23.995H4.60121ZM12.9996 22.7273L14.4663 25.206H14.5231L15.9968 22.7273H17.7333L15.5138 26.3636L17.783 30H16.0146L14.5231 27.5178H14.4663L12.9748 30H11.2134L13.4897 26.3636L11.256 22.7273H12.9996ZM18.4293 23.995V22.7273H24.4023V23.995H22.1758V30H20.6559V23.995H18.4293Z"
              fill="#F4F1EB"
            />
          </>
        );

      case 'gray':
        return (
          <>
            <mask
              id="mask0_1414_97226"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="0"
              width="32"
              height="40"
            >
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="url(#paint0_linear_1414_97226)"
              />
            </mask>
            <g mask="url(#mask0_1414_97226)">
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="#F4F1EB"
              />
            </g>
            <path d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F8F7F4" />
            <path
              d="M11.0911 26.5955V25.4545H16.4668V26.5955H14.4629V32H13.095V26.5955H11.0911ZM18.6497 25.4545L19.9696 27.6854H20.0208L21.3471 25.4545H22.91L20.9125 28.7273L22.9547 32H21.3631L20.0208 29.766H19.9696L18.6273 32H17.0421L19.0907 28.7273L17.0804 25.4545H18.6497ZM23.5364 26.5955V25.4545H28.9121V26.5955H26.9082V32H25.5403V26.5955H23.5364Z"
              fill="#3C3C3C"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1414_97226"
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
              fill="#3C3C3C"
            />
            <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F4F1EB" />
            <path
              d="M11.0911 26.5955V25.4545H16.4668V26.5955H14.4629V32H13.095V26.5955H11.0911ZM18.6497 25.4545L19.9696 27.6854H20.0208L21.3471 25.4545H22.91L20.9125 28.7273L22.9547 32H21.3631L20.0208 29.766H19.9696L18.6273 32H17.0421L19.0907 28.7273L17.0804 25.4545H18.6497ZM23.5364 26.5955V25.4545H28.9121V26.5955H26.9082V32H25.5403V26.5955H23.5364Z"
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
