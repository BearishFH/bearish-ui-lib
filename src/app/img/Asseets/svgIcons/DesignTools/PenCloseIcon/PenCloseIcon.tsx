import { ISvg } from '../../SvgPropsType';

export const PenCloseIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M21.1901 8.0399L18.0101 4.85991C16.8101 3.65991 15.1601 3.71993 14.3501 5.00993L12.5801 7.80992L18.2501 13.4799L21.0501 11.7099C22.2601 10.9399 22.3301 9.1699 21.1901 8.0399Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.2501 13.47L18.4901 17.59C18.7201 19.89 17.9201 20.69 15.7401 20.95L7.02011 21.98C5.18011 22.19 3.86011 20.87 4.08011 19.04L5.06011 10.76"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5801 7.80994L10.8301 7.69995"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.28027 20.7799L8.46028 17.5898"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 6.5C11 6.91 10.94 7.32001 10.83 7.70001C10.72 8.10001 10.56 8.47001 10.35 8.82001C10.11 9.22001 9.81001 9.58 9.46001 9.88C8.67001 10.58 7.64 11 6.5 11C5.99 11 5.51 10.92 5.06 10.76C4.04 10.42 3.18999 9.72001 2.64999 8.82001C2.23999 8.14001 2 7.34 2 6.5C2 5.08 2.65 3.80999 3.69 2.98999C4.46 2.36999 5.44 2 6.5 2C8.99 2 11 4.01 11 6.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.69981 7.68005L5.31982 5.30005"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.67979 5.32007L5.2998 7.70007"
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
              d="M15.9999 21.2899L6.63985 22.3899C5.98985 22.4699 5.40985 22.3699 4.91985 22.1299C4.39985 21.8699 3.98985 21.4699 3.72985 20.9399C3.48985 20.4499 3.39985 19.8799 3.46985 19.2399L4.31985 12.0899C4.39985 12.1199 4.47985 12.1499 4.55985 12.1699C5.16985 12.3899 5.81985 12.4999 6.49985 12.4999C7.95985 12.4999 9.36985 11.9699 10.4399 11.0199C10.8999 10.6199 11.3099 10.1399 11.6399 9.58991C11.9199 9.11991 12.1299 8.61991 12.2699 8.12991C12.3399 7.86991 12.3999 7.58991 12.4399 7.30991C12.4499 7.25991 12.4499 7.20991 12.4499 7.15991L12.6199 7.16991L18.6999 13.2599L18.9599 17.6799C19.2099 20.1599 18.3499 21.0199 15.9999 21.2899Z"
              fill="currentColor"
            />
            <path
              d="M6.5 2C5.44 2 4.46 2.37 3.69 2.99C2.65 3.81 2 5.08 2 6.5C2 7.34 2.24 8.14 2.65 8.82C3.09 9.55 3.73 10.15 4.51 10.53C4.68 10.62 4.87 10.7 5.06 10.76C5.51 10.92 5.99 11 6.5 11C7.64 11 8.67 10.58 9.46 9.88C9.81 9.58 10.11 9.22 10.35 8.82C10.56 8.47 10.72 8.1 10.83 7.7C10.89 7.5 10.93 7.29 10.96 7.07C10.99 6.88 11 6.69 11 6.5C11 4.01 8.99 2 6.5 2ZM8.23 8.21C8.09 8.35 7.89 8.43 7.7 8.43C7.51 8.43 7.32 8.35 7.17 8.21L6.51 7.55L5.83 8.23C5.68 8.38 5.49 8.45 5.3 8.45C5.11 8.45 4.91 8.38 4.77 8.23C4.48 7.94 4.48 7.46 4.77 7.17L5.46 6.48L4.79 5.83C4.5 5.54 4.5 5.06 4.79 4.77C5.08 4.48 5.56 4.48 5.85 4.77L6.51 5.43L7.14 4.8C7.43 4.51 7.91 4.51 8.2 4.8C8.49 5.09 8.49 5.57 8.2 5.86L7.57 6.49L8.23 7.15C8.53 7.44 8.53 7.91 8.23 8.21Z"
              fill="currentColor"
            />
            <path
              d="M22.0001 10.2799L19.9301 11.5899C19.5401 11.8299 19.0401 11.7799 18.7201 11.4499L14.2901 7.0199C13.9701 6.6999 13.9101 6.1999 14.1501 5.8099L15.4601 3.7399C16.2601 2.4799 17.8601 2.4199 19.0501 3.5899L22.1601 6.6999C23.2501 7.8099 23.1801 9.5299 22.0001 10.2799Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <g opacity="0.4">
              <path
                d="M21.1901 8.0399L18.0101 4.85991C16.8101 3.65991 15.1601 3.71993 14.3501 5.00993L12.5801 7.80992L18.2501 13.4799L21.0501 11.7099C22.2601 10.9399 22.3301 9.1699 21.1901 8.0399Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.2501 13.47L18.4901 17.59C18.7201 19.89 17.9201 20.69 15.7401 20.95L7.02011 21.98C5.18011 22.19 3.86011 20.87 4.08011 19.04L5.06011 10.76"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5801 7.80994L10.8301 7.69995"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.27979 20.7799L8.45979 17.5898"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M11 6.5C11 6.91 10.94 7.32001 10.83 7.70001C10.72 8.10001 10.56 8.47001 10.35 8.82001C10.11 9.22001 9.81001 9.58 9.46001 9.88C8.67001 10.58 7.64 11 6.5 11C5.99 11 5.51 10.92 5.06 10.76C4.04 10.42 3.18999 9.72001 2.64999 8.82001C2.23999 8.14001 2 7.34 2 6.5C2 5.08 2.65 3.80999 3.69 2.98999C4.46 2.36999 5.44 2 6.5 2C8.99 2 11 4.01 11 6.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.69981 7.68005L5.31982 5.30005"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.67979 5.32007L5.2998 7.70007"
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
              d="M21.7096 11.3499L18.6996 13.2499L12.6196 7.16993L14.5096 4.15992C15.3896 2.76992 17.1596 2.70995 18.4496 3.99995L21.8596 7.40992C23.0796 8.63992 22.9996 10.5299 21.7096 11.3499Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M15.9999 21.2898L6.63985 22.3898C5.98985 22.4698 5.40985 22.3698 4.91985 22.1298C4.39985 21.8698 3.98985 21.4698 3.72985 20.9398C3.48985 20.4498 3.39985 19.8798 3.46985 19.2398L4.50985 10.5298C4.67985 10.6198 4.86985 10.6998 5.05985 10.7598C5.50985 10.9198 5.98985 10.9998 6.49985 10.9998C7.63985 10.9998 8.66986 10.5798 9.45986 9.87982C9.80986 9.57982 10.1099 9.21982 10.3499 8.81982C10.5599 8.46982 10.7199 8.09983 10.8299 7.69983C10.8899 7.49983 10.9299 7.28982 10.9599 7.06982L12.6198 7.1698L18.6998 13.2598L18.9599 17.6798C19.2099 20.1598 18.3499 21.0198 15.9999 21.2898Z"
              fill="currentColor"
            />
            <path
              d="M8.77974 18.28L4.92973 22.13C4.39973 21.87 3.99975 21.47 3.73975 20.94L7.58974 17.09C7.92974 16.76 8.45974 16.76 8.77974 17.09C9.10974 17.42 9.10974 17.95 8.77974 18.28Z"
              fill="currentColor"
            />
            <path
              d="M6.5 2C5.44 2 4.46 2.36999 3.69 2.98999C2.65 3.80999 2 5.08 2 6.5C2 7.34 2.23999 8.14001 2.64999 8.82001C3.08999 9.55001 3.72999 10.15 4.50999 10.53C4.67999 10.62 4.87 10.7 5.06 10.76C5.51 10.92 5.99 11 6.5 11C7.64 11 8.67001 10.58 9.46001 9.88C9.81001 9.58 10.11 9.22001 10.35 8.82001C10.56 8.47001 10.72 8.10001 10.83 7.70001C10.89 7.50001 10.93 7.29001 10.96 7.07001C10.99 6.88001 11 6.69 11 6.5C11 4.01 8.99 2 6.5 2ZM8.23 8.21002C8.08 8.36002 7.89 8.42999 7.7 8.42999C7.51 8.42999 7.32 8.36002 7.17 8.21002L6.50999 7.54999L5.82001 8.23999C5.67001 8.38999 5.47999 8.46002 5.28999 8.46002C5.09999 8.46002 4.90999 8.38999 4.75999 8.23999C4.46999 7.94999 4.46999 7.46999 4.75999 7.17999L5.45 6.48999L4.78999 5.83002C4.49999 5.54002 4.49999 5.06002 4.78999 4.77002C5.07999 4.48002 5.56001 4.48002 5.85001 4.77002L6.50999 5.42999L7.14 4.79999C7.43 4.50999 7.91 4.50999 8.2 4.79999C8.49 5.08999 8.49 5.56999 8.2 5.85999L7.57001 6.48999L8.23 7.15002C8.53 7.44002 8.53 7.91002 8.23 8.21002Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M18.0203 4.85991C16.8203 3.65991 15.1703 3.71993 14.3603 5.00993L12.5903 7.80992L18.2603 13.4799L21.0603 11.7099C22.2703 10.9499 22.3403 9.17991 21.2003 8.04991"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.2901 21.48L7.02011 21.98C5.18011 22.19 3.86011 20.87 4.08011 19.04L5.06011 10.76"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.2502 13.47L18.4902 17.59C18.7202 19.89 17.9202 20.69 15.7402 20.95"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5801 7.80994L10.8301 7.69995"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.28027 20.7799L8.46028 17.5898"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 6.5C11 6.91 10.94 7.32001 10.83 7.70001C10.72 8.10001 10.56 8.47001 10.35 8.82001C10.11 9.22001 9.81001 9.58 9.46001 9.88C8.67001 10.58 7.64 11 6.5 11C5.99 11 5.51 10.92 5.06 10.76C4.04 10.42 3.18999 9.72001 2.64999 8.82001C2.23999 8.14001 2 7.34 2 6.5C2 5.08 2.65 3.80999 3.69 2.98999C4.46 2.36999 5.44 2 6.5 2C8.99 2 11 4.01 11 6.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.69981 7.68005L5.31982 5.30005"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.67979 5.32007L5.2998 7.70007"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
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
