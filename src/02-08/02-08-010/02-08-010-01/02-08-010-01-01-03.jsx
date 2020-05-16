import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={18} {...props}>
    <path d="M0 9.9V0h9.9L0 9.9z" />
    <path d="M4.243 5.657l10.606 10.606a4 4 0 005.657 0l1.414-1.414c2.734-2.733 3.05-6.849.707-9.192l-4.95 4.95c1.563 1.562 2.196 3.461 1.415 4.242a2 2 0 01-2.829 0l-3.27-3.27a3.5 3.5 0 10-4.066-4.066l-3.27-3.27-1.414 1.414zm6.717 1.06a2 2 0 112.829 2.829 2 2 0 01-2.829-2.828z" />
  </svg>
);

export default SvgComponent;
