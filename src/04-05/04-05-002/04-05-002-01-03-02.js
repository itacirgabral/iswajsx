function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 1.565c.361 1.848 1.514 3.669 1.635 5.613.06.977-.464 2.894-.464 2.894-.34 1.04-.12 2.223.707 3.05.827.826 2.01 1.046 3.05.707 0 0 1.917-.525 2.894-.464 1.944.12 3.814 1.143 5.613 1.635 1.382-3.729.632-8.075-2.364-11.07C8.075.932 3.729.182 0 1.564zm2.254 1.414c2.614-.43 5.386.348 7.402 2.365 2.017 2.016 2.795 4.788 2.365 7.402-1.215-.293-2.564-.677-3.867-.64-1.211.033-3.536.795-3.536.795a1.993 1.993 0 01-2.033-.486 1.993 1.993 0 01-.486-2.033s.762-2.325.796-3.536c.036-1.303-.36-2.65-.641-3.867z"
}));

export default SvgComponent;