import * as React from "react";
import { SVGProps } from "react";

export function WavesBackground(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height={140}
      viewBox="0 0 1430 280"
      fill="none"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        fill="#DC2626"
        d="m-2 272.335 24-16.817c24-16.818 72-50.453 120-57.723 48-7.161 96 11.936 144 12.695 48 .76 96-17.034 144-21.483 48-4.557 96 4.123 144 8.463 48 4.34 96 4.34 144 9.765 48 5.425 96 16.275 144 8.897 48-7.486 96-33.092 144-27.884 48 5.208 96 41.447 144 39.277 48-2.17 96-42.75 144-40.58 48 2.17 96 47.089 120 69.44l24 22.46V-1.085H-2v273.42Z"
      />
    </svg>
  );
}
