import { ISvg } from '../../SvgPropsType';

export const TextBlockIcon: React.FC<ISvg> = ({
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
              d="M9.00195 22H15.002C20.002 22 22.002 20 22.002 15V9C22.002 4 20.002 2 15.002 2H9.00195C4.00195 2 2.00195 4 2.00195 9V15C2.00195 20 4.00195 22 9.00195 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.00195 8.8899C10.152 7.3199 13.852 7.3199 17.002 8.8899"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.002 16.2999V7.92993"
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
              d="M16.192 2H7.81195C4.17195 2 2.00195 4.17 2.00195 7.81V16.18C2.00195 19.83 4.17195 22 7.81195 22H16.182C19.822 22 21.992 19.83 21.992 16.19V7.81C22.002 4.17 19.832 2 16.192 2ZM17.672 9.22C17.482 9.59 17.042 9.74 16.662 9.56C15.432 8.94 14.102 8.6 12.752 8.5V16.29C12.752 16.7 12.412 17.04 12.002 17.04C11.592 17.04 11.252 16.7 11.252 16.29V8.5C9.90195 8.6 8.57195 8.94 7.34195 9.56C7.23195 9.61 7.11195 9.63 7.00195 9.63C6.73195 9.63 6.46195 9.48 6.33195 9.22C6.14195 8.85 6.29195 8.4 6.66195 8.21C10.002 6.54 13.992 6.54 17.332 8.21C17.712 8.4 17.862 8.85 17.672 9.22Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M9.00195 22H15.002C20.002 22 22.002 20 22.002 15V9C22.002 4 20.002 2 15.002 2H9.00195C4.00195 2 2.00195 4 2.00195 9V15C2.00195 20 4.00195 22 9.00195 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity="0.4">
              <path
                d="M7.00195 8.89039C10.152 7.32039 13.852 7.32039 17.002 8.89039"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.002 16.2997V7.92969"
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
              d="M16.192 2H7.81195C4.17195 2 2.00195 4.17 2.00195 7.81V16.18C2.00195 19.83 4.17195 22 7.81195 22H16.182C19.822 22 21.992 19.83 21.992 16.19V7.81C22.002 4.17 19.832 2 16.192 2Z"
              fill="currentColor"
            />
            <path
              d="M17.3422 8.21002C14.0022 6.54002 10.0122 6.54002 6.67221 8.21002C6.29221 8.40002 6.14221 8.85002 6.33221 9.22002C6.46221 9.48002 6.73221 9.63002 7.00221 9.63002C7.11221 9.63002 7.23221 9.60002 7.34221 9.55002C8.57221 8.94002 9.90221 8.60002 11.2522 8.50002V16.29C11.2522 16.7 11.5922 17.04 12.0022 17.04C12.4122 17.04 12.7522 16.7 12.7522 16.29V8.50002C14.1022 8.60002 15.4322 8.94002 16.6622 9.55002C17.0322 9.73002 17.4822 9.59002 17.6722 9.21002C17.8622 8.85002 17.7122 8.40002 17.3422 8.21002Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2.00195 12.94V15C2.00195 20 4.00195 22 9.00195 22H15.002C20.002 22 22.002 20 22.002 15V9C22.002 4 20.002 2 15.002 2H9.00195C4.00195 2 2.00195 4 2.00195 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.00195 8.8899C10.152 7.3199 13.852 7.3199 17.002 8.8899"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.002 16.2999V7.92993"
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
