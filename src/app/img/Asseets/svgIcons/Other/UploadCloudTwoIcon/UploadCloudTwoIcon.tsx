import { ISvg } from '../../SvgPropsType';

export const UploadCloudTwoIcon: React.FC<ISvg> = ({
  color,
  className,
  iconType = 'linear',
  w = 24,
}) => {
  const renderIcon = () => {
    switch (iconType) {
      default:
        return (
          <>
            <path
              d="M5.33325 10.6667L7.99992 8M7.99992 8L10.6666 10.6667M7.99992 8V14M13.3333 11.1619C14.1476 10.4894 14.6666 9.47196 14.6666 8.33333C14.6666 6.30829 13.025 4.66667 10.9999 4.66667C10.8542 4.66667 10.718 4.59066 10.644 4.46516C9.77463 2.98989 8.16954 2 6.33325 2C3.57183 2 1.33325 4.23858 1.33325 7C1.33325 8.3774 1.89022 9.62472 2.79122 10.529"
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
      viewBox="0 0 16 16"
      fill="none"
      style={{ flexShrink: 0, color: color }}
      className={`bearishSvg ${className}`}
    >
      {renderIcon()}
    </svg>
  );
};
