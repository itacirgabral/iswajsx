function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v11.314l1.414-1.415V1.414H9.9L11.314 0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.95 6.364l19.799 19.799a4 4 0 005.657 0l2.828-2.828a8 8 0 000-11.314l-7.071 7.07 2.121 2.122c1.172 1.172 1.488 2.755.707 3.536a2 2 0 01-2.828 0l-4.64-4.64c.66-.177 1.293-.499 1.812-1.017a4 4 0 10-5.657-5.657c-.519.518-.84 1.152-1.017 1.812l-2.21-2.21c.66-.176 1.294-.498 1.812-1.016a4 4 0 10-5.656-5.657c-.519.518-.84 1.152-1.017 1.812L6.364 4.95 4.95 6.364zm7.07 1.414a2 2 0 112.83 2.829 2 2 0 01-2.83-2.829zm7.072 7.071a2 2 0 112.828 2.829 2 2 0 01-2.828-2.829z"
}));

export default SvgComponent;