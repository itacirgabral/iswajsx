import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={15} {...props}>
    <path d="M.375 1.19c.092.473.261.944.442 1.414C1.273 3.83 1.93 5.513 2.01 6.803c.06.977-.464 2.894-.464 2.894-.34 1.04-.12 2.223.707 3.05.827.826 2.01 1.046 3.05.707 0 0 1.917-.525 2.894-.464 1.284.08 3.001.717 4.22 1.171.47.172.939.34 1.393.464 1.382-3.729.632-8.075-2.364-11.07C8.45.557 4.104-.193.375 1.19zm1.812 1.016c2.867-.601 5.971.182 8.198 2.409 2.221 2.221 3.021 5.314 2.43 8.176-1.444-.463-3.378-1.086-4.286-1.06-1.211.033-3.536.795-3.536.795a1.993 1.993 0 01-2.033-.486 1.993 1.993 0 01-.486-2.033s.762-2.325.796-3.536c.025-.905-.621-2.822-1.083-4.265z" />
  </svg>
);

export default SvgComponent;
