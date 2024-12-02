import * as React from "react";
import { SVGProps } from "react";
const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 16"
    width={18}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#FD7463"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.167 1C10.5 1 9 3.334 9 4.5 9 3.334 7.5 1 4.833 1 2.167 1 1.5 3.334 1.5 4.5 1.5 10.625 9 15 9 15s7.5-4.375 7.5-10.5c0-1.166-.667-3.5-3.333-3.5Z"
    />
  </svg>
);
export default HeartIcon;
