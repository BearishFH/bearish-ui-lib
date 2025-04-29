import { IFileTypeIcon } from '../FileTypeIconType';

export const ImageTiffIcon: React.FC<IFileTypeIcon> = ({ iconType = 'default', w = 24 }) => {
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
            <rect x="1" y="18" width="28" height="16" rx="2" fill="#8368A5" />
            <path
              d="M4.76429 23.995V22.7273H10.7373V23.995H8.51074V30H6.99086V23.995H4.76429ZM13.2586 22.7273V30H11.721V22.7273H13.2586ZM14.5237 30V22.7273H19.339V23.995H16.0613V25.728H19.0194V26.9957H16.0613V30H14.5237ZM20.3733 30V22.7273H25.1887V23.995H21.911V25.728H24.8691V26.9957H21.911V30H20.3733Z"
              fill="#F4F1EB"
            />
          </>
        );

      case 'gray':
        return (
          <>
            <mask
              id="mask0_1414_96906"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="0"
              width="32"
              height="40"
            >
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="url(#paint0_linear_1414_96906)"
              />
            </mask>
            <g mask="url(#mask0_1414_96906)">
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="#F4F1EB"
              />
            </g>
            <path d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F8F7F4" />
            <path
              d="M10.7879 26.5955V25.4545H16.1636V26.5955H14.1597V32H12.7918V26.5955H10.7879ZM18.4328 25.4545V32H17.0489V25.4545H18.4328ZM19.5713 32V25.4545H23.9051V26.5955H20.9552V28.1552H23.6175V29.2962H20.9552V32H19.5713ZM24.836 32V25.4545H29.1698V26.5955H26.2199V28.1552H28.8821V29.2962H26.2199V32H24.836Z"
              fill="#3C3C3C"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1414_96906"
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
              fill="#8368A5"
            />
            <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F4F1EB" />
            <path
              d="M10.7879 26.5955V25.4545H16.1636V26.5955H14.1597V32H12.7918V26.5955H10.7879ZM18.4328 25.4545V32H17.0489V25.4545H18.4328ZM19.5713 32V25.4545H23.9051V26.5955H20.9552V28.1552H23.6175V29.2962H20.9552V32H19.5713ZM24.836 32V25.4545H29.1698V26.5955H26.2199V28.1552H28.8821V29.2962H26.2199V32H24.836Z"
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
