import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12.5 9l-1.375 1.375H5.5V16L4 17.5V9h8.5z" />
    <path d="M2.232.868C3.99-.889 8.105.378 11.425 3.697l5.656 5.657c3.32 3.319 4.586 7.435 2.829 9.192l-1.414 1.414c-1.758 1.758-5.873.491-9.193-2.828l-1.767-1.768 2.828-2.828 1.768 1.767c2.929 2.93 6.094 4.512 7.07 3.536.977-.976-.606-4.142-3.535-7.071L10.01 5.11C7.081 2.182 3.916.599 2.94 1.575c-.768.768.072 2.898 1.878 5.193L2.033 9.552C-.017 6.7-.612 3.712.818 2.282L2.232.868z" />
  </svg>
);

export default SvgComponent;