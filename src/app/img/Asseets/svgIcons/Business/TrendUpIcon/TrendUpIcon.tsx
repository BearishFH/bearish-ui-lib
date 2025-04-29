import { ISvg } from '../../SvgPropsType';

export const TrendUpIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 9.5H16.5V11.5"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke='currentColor'
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.88 11.53C16.88 11.92 16.57 12.23 16.18 12.23C15.79 12.23 15.48 11.92 15.48 11.53V11.35L12.76 14.07C12.61 14.22 12.41 14.29 12.2 14.27C11.99 14.25 11.8 14.14 11.69 13.96L10.67 12.44L8.29 14.82C8.15 14.96 7.98 15.02 7.8 15.02C7.62 15.02 7.44 14.95 7.31 14.82C7.04 14.55 7.04 14.11 7.31 13.83L10.29 10.85C10.44 10.7 10.64 10.63 10.85 10.65C11.06 10.67 11.25 10.78 11.36 10.96L12.38 12.48L14.49 10.37H14.31C13.92 10.37 13.61 10.06 13.61 9.67C13.61 9.28 13.92 8.97 14.31 8.97H16.17C16.26 8.97 16.35 8.99 16.44 9.02C16.61 9.09 16.75 9.23 16.82 9.4C16.86 9.49 16.87 9.58 16.87 9.67V11.53H16.88Z"
              fill='currentColor'
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <g opacity="0.4">
              <path
                d="M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5"
                stroke='currentColor'
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5 9.5H16.5V11.5"
                stroke='currentColor'
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke='currentColor'
              strokeWidth="1.5"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
              fill='currentColor'
            />
            <path
              d="M16.8299 9.40998C16.7599 9.23998 16.6199 9.09998 16.4499 9.02998C16.3699 8.99998 16.2799 8.97998 16.1899 8.97998H14.3299C13.9399 8.97998 13.6299 9.28998 13.6299 9.67998C13.6299 10.07 13.9399 10.38 14.3299 10.38H14.5099L12.3999 12.49L11.3799 10.97C11.2599 10.8 11.0799 10.68 10.8699 10.66C10.6499 10.64 10.4599 10.71 10.3099 10.86L7.32994 13.84C7.05994 14.11 7.05994 14.55 7.32994 14.83C7.46994 14.97 7.63994 15.03 7.81994 15.03C7.99994 15.03 8.17994 14.96 8.30994 14.83L10.6899 12.45L11.7099 13.97C11.8299 14.14 12.0099 14.26 12.2199 14.28C12.4399 14.3 12.6299 14.23 12.7799 14.08L15.4999 11.36V11.54C15.4999 11.93 15.8099 12.24 16.1999 12.24C16.5899 12.24 16.8999 11.93 16.8999 11.54V9.66998C16.8799 9.57998 16.8699 9.48998 16.8299 9.40998Z"
              fill='currentColor'
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.17 11.9998L10.7 11.2998L7.5 14.4998"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 9.5L14.99 11.01L14 12"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 9.5H16.5V11.5"
              stroke='currentColor'
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
