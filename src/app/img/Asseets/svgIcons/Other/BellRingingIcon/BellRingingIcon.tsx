import { ISvg } from '../../SvgPropsType';

export const BellRingingIcon: React.FC<ISvg> = ({
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
              d="M6.236 14c.47.415 1.088.667 1.764.667s1.294-.252 1.764-.667M1.529 3.88a2.67 2.67 0 0 1 1.355-2.347M14.468 3.88a2.67 2.67 0 0 0-1.355-2.347M12 5.333a4 4 0 0 0-8 0c0 2.06-.52 3.471-1.1 4.404-.49.787-.735 1.18-.726 1.29.01.122.036.168.134.24.088.066.487.066 1.285.066h8.815c.797 0 1.196 0 1.284-.065.098-.073.124-.12.134-.24.009-.11-.236-.504-.726-1.291-.58-.933-1.1-2.344-1.1-4.404"
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
