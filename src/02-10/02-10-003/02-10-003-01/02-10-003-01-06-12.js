function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 2.219l-1.5 1.5V8.5h-4.781l-1.5 1.5H17V2.219z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.182 18.839c1.63-1.63.63-5.271-2.166-8.441l-1.392 1.392c2.472 2.706 3.746 5.447 2.85 6.342-.975.976-4.141-.607-7.07-3.536L6.747 8.94C3.818 6.01 2.235 2.845 3.211 1.87c.977-.977 4.143.606 7.071 3.535l1.061 1.06 1.414-1.414-1.06-1.06C8.377.67 4.262-.596 2.504 1.16L1.09 2.575C-.667 4.333.6 8.448 3.92 11.768l5.656 5.657c3.32 3.32 7.435 4.585 9.193 2.828l1.414-1.414z"
}));

export default SvgComponent;