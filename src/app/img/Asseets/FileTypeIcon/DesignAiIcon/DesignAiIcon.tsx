import { IFileTypeIcon } from '../FileTypeIconType';

export const DesignAiIcon: React.FC<IFileTypeIcon> = ({ iconType = 'default', w = 24 }) => {
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
            <rect x="1" y="18" width="17" height="16" rx="2" fill="#C96F53" />
            <path
              d="M6.24405 30H4.59632L7.10698 22.7273H9.08851L11.5956 30H9.94789L8.12615 24.3892H8.06934L6.24405 30ZM6.14107 27.1413H10.0331V28.3416H6.14107V27.1413ZM14.0086 22.7273V30H12.471V22.7273H14.0086Z"
              fill="#F4F1EB"
            />
          </>
        );

      case 'gray':
        return (
          <>
            <mask
              id="mask0_1414_97352"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="0"
              width="32"
              height="40"
            >
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="url(#paint0_linear_1414_97352)"
              />
            </mask>
            <g mask="url(#mask0_1414_97352)">
              <path
                d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
                fill="#F4F1EB"
              />
            </g>
            <path d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F8F7F4" />
            <path
              d="M17.0696 32H15.5867L17.8463 25.4545H19.6297L21.8861 32H20.4031L18.7635 26.9503H18.7124L17.0696 32ZM16.977 29.4272H20.4798V30.5075H16.977V29.4272ZM24.0578 25.4545V32H22.6739V25.4545H24.0578Z"
              fill="#3C3C3C"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1414_97352"
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
              fill="#C96F53"
            />
            <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#F4F1EB" />
            <path
              d="M17.0696 32H15.5867L17.8463 25.4545H19.6297L21.8861 32H20.4031L18.7635 26.9503H18.7124L17.0696 32ZM16.977 29.4272H20.4798V30.5075H16.977V29.4272ZM24.0578 25.4545V32H22.6739V25.4545H24.0578Z"
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
