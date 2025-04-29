import { ISvg } from '../../SvgPropsType';

export const CodeCircleIcon: React.FC<ISvg> = ({
  color,
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
              d="M8 10L6 12L8 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 10L18 12L16 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 9.66992L11 14.33"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.53 13.47C8.82 13.76 8.82 14.24 8.53 14.53C8.38 14.68 8.19 14.75 8 14.75C7.81 14.75 7.62 14.68 7.47 14.53L5.47 12.53C5.18 12.24 5.18 11.76 5.47 11.47L7.47 9.47C7.76 9.18 8.24 9.18 8.53 9.47C8.82 9.76 8.82 10.24 8.53 10.53L7.06 12L8.53 13.47ZM13.69 9.96L11.69 14.63C11.57 14.91 11.29 15.08 11 15.08C10.9 15.08 10.8 15.06 10.71 15.02C10.33 14.86 10.15 14.42 10.32 14.03L12.32 9.36C12.48 8.98 12.92 8.8 13.3 8.97C13.68 9.14 13.85 9.58 13.69 9.96ZM18.53 12.53L16.53 14.53C16.38 14.68 16.19 14.75 16 14.75C15.81 14.75 15.62 14.68 15.47 14.53C15.18 14.24 15.18 13.76 15.47 13.47L16.94 12L15.47 10.53C15.18 10.24 15.18 9.76 15.47 9.47C15.76 9.18 16.24 9.18 16.53 9.47L18.53 11.47C18.82 11.76 18.82 12.24 18.53 12.53Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              opacity="0.4"
              d="M8 10L6 12L8 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M16 10L18 12L16 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M13 9.66992L11 14.33"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
              d="M8.00043 14.75C7.81043 14.75 7.62043 14.68 7.47043 14.53L5.47043 12.53C5.18043 12.24 5.18043 11.7599 5.47043 11.4699L7.47043 9.46994C7.76043 9.17994 8.24043 9.17994 8.53043 9.46994C8.82043 9.75994 8.82043 10.24 8.53043 10.53L7.06043 12L8.53043 13.4699C8.82043 13.7599 8.82043 14.24 8.53043 14.53C8.38043 14.68 8.19043 14.75 8.00043 14.75Z"
              fill="currentColor"
            />
            <path
              d="M16.0004 14.75C15.8104 14.75 15.6204 14.68 15.4704 14.53C15.1804 14.24 15.1804 13.7599 15.4704 13.4699L16.9404 12L15.4704 10.53C15.1804 10.24 15.1804 9.75994 15.4704 9.46994C15.7604 9.17994 16.2404 9.17994 16.5304 9.46994L18.5304 11.4699C18.8204 11.7599 18.8204 12.24 18.5304 12.53L16.5304 14.53C16.3804 14.68 16.1904 14.75 16.0004 14.75Z"
              fill="currentColor"
            />
            <path
              d="M11.0001 15.0801C10.9001 15.0801 10.8001 15.0601 10.7101 15.0201C10.3301 14.8601 10.1501 14.4201 10.3201 14.0301L12.3201 9.36004C12.4801 8.98004 12.9201 8.80002 13.3001 8.97002C13.6801 9.13002 13.8601 9.57008 13.6901 9.96008L11.6901 14.6301C11.5701 14.9101 11.2901 15.0801 11.0001 15.0801Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M8 10L6 12L8 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 10L18 12L16 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 9.66992L11 14.33"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
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
