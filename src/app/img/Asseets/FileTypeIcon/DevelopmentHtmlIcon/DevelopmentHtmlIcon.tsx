import { IFileTypeIcon } from '../FileTypeIconType';

export const DevelopmentHtmlIcon: React.FC<IFileTypeIcon> = ({ iconType = 'default', w = 24 }) => {
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
            <rect x="1" y="18" width="35" height="16" rx="2" fill="#7B8C9F" />
            <path
              d="M4.64968 30V22.7273H6.18732V25.728H9.30877V22.7273H10.8429V30H9.30877V26.9957H6.18732V30H4.64968ZM11.8336 23.995V22.7273H17.8066V23.995H15.5801V30H14.0602V23.995H11.8336ZM18.7903 22.7273H20.6866L22.6895 27.6136H22.7747L24.7775 22.7273H26.6738V30H25.1824V25.2663H25.122L23.2399 29.9645H22.2243L20.3422 25.2486H20.2818V30H18.7903V22.7273ZM27.9407 30V22.7273H29.4783V28.7322H32.5962V30H27.9407Z"
              fill="#F4F1EB"
            />
          </>
        );

      case 'gray':
        return (
          <>
            <mask
              id="mask0_1414_97568"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="0"
              width="32"
              height="40"
            >
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="url(#paint0_linear_1414_97568)"
              />
            </mask>
            <g mask="url(#mask0_1414_97568)">
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="#F4F1EB"
              />
            </g>
            <path d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F8F7F4" />
            <path
              d="M7.53471 32V25.4545H8.91859V28.1552H11.7279V25.4545H13.1086V32H11.7279V29.2962H8.91859V32H7.53471ZM14.0003 26.5955V25.4545H19.376V26.5955H17.3721V32H16.0042V26.5955H14.0003ZM20.2613 25.4545H21.968L23.7705 29.8523H23.8472L25.6498 25.4545H27.3564V32H26.0141V27.7397H25.9598L24.2659 31.968H23.3518L21.6579 27.7237H21.6036V32H20.2613V25.4545ZM28.4966 32V25.4545H29.8805V30.859H32.6866V32H28.4966Z"
              fill="#3C3C3C"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1414_97568"
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
              d="M7.53471 32V25.4545H8.91859V28.1552H11.7279V25.4545H13.1086V32H11.7279V29.2962H8.91859V32H7.53471ZM14.0003 26.5955V25.4545H19.376V26.5955H17.3721V32H16.0042V26.5955H14.0003ZM20.2613 25.4545H21.968L23.7705 29.8523H23.8472L25.6498 25.4545H27.3564V32H26.0141V27.7397H25.9598L24.2659 31.968H23.3518L21.6579 27.7237H21.6036V32H20.2613V25.4545ZM28.4966 32V25.4545H29.8805V30.859H32.6866V32H28.4966Z"
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
