import { ISvg } from '../../SvgPropsType';

export const RefreshCircleFollowUpIcon: React.FC<ISvg> = ({
  color ,
  className,
  iconType = 'linear',
  w = 24,
}) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.00977 14.5099C8.18977 14.8099 8.40976 15.09 8.65976 15.34C10.4998 17.18 13.4898 17.18 15.3398 15.34C16.0898 14.59 16.5198 13.6399 16.6598 12.6699"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.33984 11.3301C7.47984 10.3501 7.90985 9.41003 8.65985 8.66003C10.4999 6.82003 13.4898 6.82003 15.3398 8.66003C15.5998 8.92003 15.8098 9.20005 15.9898 9.49005"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.82031 17.18V14.51H10.4903"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.1797 6.82007V9.49005H13.5098"
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
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6.6 11.23C6.77 10.04 7.3 8.97 8.13 8.13C10.13 6.14 13.28 6.03 15.42 7.77V6.82C15.42 6.41 15.76 6.07 16.17 6.07C16.58 6.07 16.92 6.41 16.92 6.82V9.49C16.92 9.9 16.58 10.24 16.17 10.24H13.5C13.09 10.24 12.75 9.9 12.75 9.49C12.75 9.08 13.09 8.74 13.5 8.74H14.25C12.7 7.66 10.56 7.81 9.18 9.19C8.58 9.79 8.2 10.57 8.07 11.44C8.02 11.81 7.7 12.08 7.33 12.08C7.29 12.08 7.26 12.08 7.22 12.07C6.83 12.02 6.54 11.64 6.6 11.23ZM15.87 15.87C14.8 16.94 13.4 17.47 12 17.47C10.78 17.47 9.57 17.04 8.57 16.23V17.17C8.57 17.58 8.23 17.92 7.82 17.92C7.41 17.92 7.07 17.58 7.07 17.17V14.5C7.07 14.09 7.41 13.75 7.82 13.75H10.49C10.9 13.75 11.24 14.09 11.24 14.5C11.24 14.91 10.9 15.25 10.49 15.25H9.74C11.29 16.33 13.43 16.18 14.81 14.8C15.41 14.2 15.79 13.42 15.92 12.55C15.98 12.14 16.35 11.85 16.77 11.91C17.18 11.97 17.46 12.35 17.41 12.76C17.23 13.97 16.7 15.04 15.87 15.87Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity="0.4">
              <path
                d="M8.00977 14.5099C8.18977 14.8099 8.40976 15.09 8.65976 15.34C10.4998 17.18 13.4898 17.18 15.3398 15.34C16.0898 14.59 16.5198 13.6399 16.6598 12.6699"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.33984 11.3301C7.47984 10.3501 7.90985 9.41003 8.65985 8.66003C10.4999 6.82003 13.4898 6.82003 15.3398 8.66003C15.5998 8.92003 15.8098 9.20005 15.9898 9.49005"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.82031 17.18V14.51H10.4903"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.1797 6.82007V9.49005H13.5098"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              opacity="0.4"
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="currentColor"
            />
            <path
              d="M16.7606 11.9301C16.3406 11.8601 15.9706 12.1601 15.9106 12.5701C15.7906 13.4401 15.4005 14.2201 14.8005 14.8201C13.4205 16.2001 11.2806 16.3401 9.73056 15.2701H10.4806C10.8906 15.2701 11.2306 14.9301 11.2306 14.5201C11.2306 14.1101 10.8906 13.7701 10.4806 13.7701H7.81055C7.40055 13.7701 7.06055 14.1101 7.06055 14.5201V17.1901C7.06055 17.6001 7.40055 17.9401 7.81055 17.9401C8.22055 17.9401 8.56055 17.6001 8.56055 17.1901V16.2501C9.56055 17.0601 10.7705 17.4901 11.9905 17.4901C13.3905 17.4901 14.7905 16.9601 15.8605 15.8901C16.6905 15.0601 17.2206 13.9901 17.3906 12.7901C17.4606 12.3601 17.1706 11.9801 16.7606 11.9301Z"
              fill="currentColor"
            />
            <path
              d="M7.34042 12.0801C7.71042 12.0801 8.03041 11.8101 8.08041 11.4401C8.20041 10.5701 8.59042 9.79006 9.19042 9.19006C10.5704 7.81006 12.7104 7.67005 14.2604 8.74005H13.5104C13.1004 8.74005 12.7604 9.08005 12.7604 9.49005C12.7604 9.90005 13.1004 10.2401 13.5104 10.2401H16.1804C16.5904 10.2401 16.9304 9.90005 16.9304 9.49005V6.82007C16.9304 6.41007 16.5904 6.07007 16.1804 6.07007C15.7704 6.07007 15.4304 6.41007 15.4304 6.82007V7.76007C13.2804 6.02007 10.1304 6.13006 8.14043 8.12006C7.31043 8.95006 6.7804 10.02 6.6104 11.22C6.5504 11.63 6.84042 12.0101 7.25042 12.0701C7.27042 12.0801 7.31042 12.0801 7.34042 12.0801Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M8.00977 14.5099C8.18977 14.8099 8.40976 15.09 8.65976 15.34C10.4998 17.18 13.4898 17.18 15.3398 15.34C16.0898 14.59 16.5198 13.6399 16.6598 12.6699"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.33984 11.3301C7.47984 10.3501 7.90985 9.41003 8.65985 8.66003C10.4999 6.82003 13.4898 6.82003 15.3398 8.66003C15.5998 8.92003 15.8098 9.20005 15.9898 9.49005"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.82031 17.18V14.51H10.4903"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.1797 6.82007V9.49005H13.5098"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.29998 7.97 2.84998"
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
