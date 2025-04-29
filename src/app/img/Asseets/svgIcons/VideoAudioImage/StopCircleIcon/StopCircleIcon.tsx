import { ISvg } from '../../SvgPropsType';

export const StopCircleIcon: React.FC<ISvg> = ({
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
              d="M11.9702 22C17.4931 22 21.9702 17.5228 21.9702 12C21.9702 6.47715 17.4931 2 11.9702 2C6.44737 2 1.97021 6.47715 1.97021 12C1.97021 17.5228 6.44737 22 11.9702 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.73 16.23H13.27C15.39 16.23 16.23 15.38 16.23 13.27V10.73C16.23 8.61002 15.38 7.77002 13.27 7.77002H10.73C8.61002 7.77002 7.77002 8.62002 7.77002 10.73V13.27C7.77002 15.38 8.62002 16.23 10.73 16.23Z"
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
              d="M11.9702 2C6.45021 2 1.97021 6.48 1.97021 12C1.97021 17.52 6.45021 22 11.9702 22C17.4902 22 21.9702 17.52 21.9702 12C21.9702 6.48 17.5002 2 11.9702 2ZM16.2302 13.23C16.2302 14.89 14.8902 16.23 13.2302 16.23H10.7702C9.11022 16.23 7.77022 14.89 7.77022 13.23V10.77C7.77022 9.11 9.11022 7.77 10.7702 7.77H13.2302C14.8902 7.77 16.2302 9.11 16.2302 10.77V13.23Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M11.9702 22C17.4931 22 21.9702 17.5228 21.9702 12C21.9702 6.47715 17.4931 2 11.9702 2C6.44737 2 1.97021 6.47715 1.97021 12C1.97021 17.5228 6.44737 22 11.9702 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M10.73 16.23H13.27C15.39 16.23 16.23 15.38 16.23 13.27V10.73C16.23 8.61002 15.38 7.77002 13.27 7.77002H10.73C8.61002 7.77002 7.77002 8.62002 7.77002 10.73V13.27C7.77002 15.38 8.62002 16.23 10.73 16.23Z"
              stroke="currentColor"
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
              d="M11.9702 22C17.4931 22 21.9702 17.5228 21.9702 12C21.9702 6.47715 17.4931 2 11.9702 2C6.44737 2 1.97021 6.47715 1.97021 12C1.97021 17.5228 6.44737 22 11.9702 22Z"
              fill="currentColor"
            />
            <path
              d="M10.77 16.23H13.23C14.89 16.23 16.23 14.89 16.23 13.23V10.77C16.23 9.11002 14.89 7.77002 13.23 7.77002H10.77C9.11002 7.77002 7.77002 9.11002 7.77002 10.77V13.23C7.77002 14.89 9.11002 16.23 10.77 16.23Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M16.23 13.27V10.73C16.23 8.61002 15.38 7.77002 13.27 7.77002H10.73C8.61002 7.77002 7.77002 8.62002 7.77002 10.73V13.27C7.77002 15.39 8.62002 16.23 10.73 16.23H12.51"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
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
