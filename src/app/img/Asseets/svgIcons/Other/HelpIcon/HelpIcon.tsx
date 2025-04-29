import { ISvg } from '../../SvgPropsType';

export const HelpIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      default:
        return (
          <>
            <path
              d="M6.06 6a2 2 0 0 1 3.886.667c0 1.333-2 2-2 2M8 11.334h.006M14.666 8A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.333 0"
              stroke="currentColor"
              strokeWidth="1.333"
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
