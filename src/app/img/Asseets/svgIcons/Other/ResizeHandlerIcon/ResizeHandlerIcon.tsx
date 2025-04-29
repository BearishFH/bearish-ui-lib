import { ISvg } from '../../SvgPropsType';

export const ResizeHandlerIcon: React.FC<ISvg> = ({
  color,
  className,
  iconType = 'linear',
  w = 12,
}) => {
  const renderIcon = () => {
    switch (iconType) {
      default:
        return (
          <>
            <path d="M10 2L2 10" stroke="currentColor" strokeLinecap="round" />
            <path d="M11 7L7 11" stroke="currentColor" strokeLinecap="round" />
          </>
        );
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={w}
      viewBox="0 0 12 12"
      fill="none"
      style={{ flexShrink: 0, color: color }}
      className={`bearishSvg ${className}`}
    >
      {renderIcon()}
    </svg>
  );
};
