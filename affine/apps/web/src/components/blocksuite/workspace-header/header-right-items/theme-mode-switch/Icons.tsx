import type { CSSProperties, DOMAttributes } from 'react';
type IconProps = {
  style?: CSSProperties;
} & DOMAttributes<SVGElement>;

export const MoonIcon = ({ style = {}, ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.54893 3.31407C9.33328 3.08158 9.27962 2.74521 9.41255 2.45912C9.54547 2.17302 9.83936 1.99233 10.1595 1.99986C13.4456 2.07712 16.5114 4.08044 17.7359 7.29071C19.3437 11.5057 17.1672 16.2024 12.8744 17.781C9.60251 18.9843 6.04745 18.0285 3.82974 15.6428C3.61375 15.4104 3.55978 15.0739 3.69257 14.7876C3.82537 14.5014 4.11931 14.3205 4.43962 14.3279C5.27228 14.3474 6.12412 14.2171 6.94979 13.9135C10.415 12.6391 12.172 8.84782 10.8741 5.44537C10.5657 4.63692 10.1061 3.91474 9.54893 3.31407Z"
      />
    </svg>
  );
};

export const SunIcon = ({ style = {}, ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      style={style}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8002 2.5002C10.8002 2.05837 10.442 1.7002 10.0002 1.7002C9.55837 1.7002 9.2002 2.05837 9.2002 2.5002V3.33353C9.2002 3.77536 9.55837 4.13353 10.0002 4.13353C10.442 4.13353 10.8002 3.77536 10.8002 3.33353V2.5002ZM5.14921 4.01784C4.83679 3.70542 4.33026 3.70542 4.01784 4.01784C3.70542 4.33026 3.70542 4.83679 4.01784 5.14921L4.69627 5.82764C5.00869 6.14006 5.51522 6.14006 5.82764 5.82764C6.14006 5.51522 6.14006 5.00869 5.82764 4.69627L5.14921 4.01784ZM15.9825 5.1492C16.2949 4.83678 16.2949 4.33025 15.9825 4.01783C15.6701 3.70542 15.1636 3.70543 14.8511 4.01785L14.1727 4.69628C13.8603 5.00871 13.8603 5.51524 14.1728 5.82765C14.4852 6.14007 14.9917 6.14006 15.3041 5.82763L15.9825 5.1492ZM10.0002 5.86686C7.71742 5.86686 5.86686 7.71742 5.86686 10.0002C5.86686 12.283 7.71742 14.1335 10.0002 14.1335C12.283 14.1335 14.1335 12.283 14.1335 10.0002C14.1335 7.71742 12.283 5.86686 10.0002 5.86686ZM2.5002 9.2002C2.05837 9.2002 1.7002 9.55837 1.7002 10.0002C1.7002 10.442 2.05837 10.8002 2.5002 10.8002H3.33353C3.77536 10.8002 4.13353 10.442 4.13353 10.0002C4.13353 9.55837 3.77536 9.2002 3.33353 9.2002H2.5002ZM16.6669 9.2002C16.225 9.2002 15.8669 9.55837 15.8669 10.0002C15.8669 10.442 16.225 10.8002 16.6669 10.8002H17.5002C17.942 10.8002 18.3002 10.442 18.3002 10.0002C18.3002 9.55837 17.942 9.2002 17.5002 9.2002H16.6669ZM5.82623 15.309C6.13943 14.9973 6.14069 14.4908 5.82906 14.1776C5.51742 13.8644 5.01089 13.8631 4.69769 14.1748L4.01926 14.8498C3.70606 15.1615 3.70479 15.668 4.01643 15.9812C4.32807 16.2944 4.8346 16.2956 5.1478 15.984L5.82623 15.309ZM15.3027 14.1748C14.9895 13.8631 14.483 13.8644 14.1713 14.1776C13.8597 14.4908 13.861 14.9973 14.1742 15.3089L14.8526 15.984C15.1658 16.2956 15.6723 16.2944 15.9839 15.9812C16.2956 15.668 16.2943 15.1615 15.9811 14.8498L15.3027 14.1748ZM10.8002 16.6669C10.8002 16.225 10.442 15.8669 10.0002 15.8669C9.55837 15.8669 9.2002 16.225 9.2002 16.6669V17.5002C9.2002 17.942 9.55837 18.3002 10.0002 18.3002C10.442 18.3002 10.8002 17.942 10.8002 17.5002V16.6669Z"
      />
    </svg>
  );
};
