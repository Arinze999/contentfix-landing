import { SVGProps } from 'react';

export function InfoAltDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="30"
      height="30"
      {...props}
    >
      <g fill="none">
        <circle
          cx="8"
          cy="8"
          r="8"
          fill="currentColor"
          fillOpacity=".25"
          transform="matrix(-1 0 0 1 20 4)"
        ></circle>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 10.5h.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h.5m-1-7h.01"
        ></path>
      </g>
    </svg>
  );
}
