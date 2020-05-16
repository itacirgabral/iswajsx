import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={26} {...props}>
    <path d="M8 10c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8z" />
    <path d="M15 0c-1.656 0-3 1.344-3 3 0 1.3.842 2.397 2 2.813V18h2V5.812c1.158-.415 2-1.511 2-2.812 0-1.656-1.344-3-3-3z" />
    <path
      d="M8 12c-3 0-6 3-6 6s3 6 6 6c3.312 0 6-2.688 6-6 0-3-3-6-6-6z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
