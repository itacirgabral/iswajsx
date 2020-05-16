import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={20} {...props}>
    <path d="M19 5h9.9L19 14.9V5zm1.016 1.016v6.453l6.453-6.453h-6.453z" />
    <path d="M2.03.757l6.098 6.1a3.5 3.5 0 114.066 4.066l6.099 6.098a3 3 0 004.243 0c1.171-1.172.855-3.388-.708-4.95l4.243-4.243a6 6 0 010 8.486l-2.121 2.121a5 5 0 01-7.071 0L.615 2.172 2.03.757zm8.131 5.304a2 2 0 102.829 2.828 2 2 0 00-2.829-2.828z" />
    <path d="M20.016 6.016h6.453l-6.453 6.453V6.016z" fill="#fff" />
  </svg>
);

export default SvgComponent;
