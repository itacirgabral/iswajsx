function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22 14V6.222L14.222 14H22z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M31.546 29.203c1.757-1.758.491-5.873-2.828-9.193l-5.657-5.656-1.415 1.414 5.657 5.657c2.93 2.929 3.805 5.387 2.829 6.364-.977.976-4.142.807-7.071-2.122L6.797 9.404C3.868 6.474 3.7 3.309 4.676 2.333c.976-.977 3.435-.1 6.364 2.828l5.303 5.303 1.414-1.414-5.303-5.303C9.134.427 5.02-.839 3.262.919L1.847 2.333C.09 4.09.65 8.913 3.97 12.233l16.263 16.263c3.32 3.32 8.142 3.878 9.9 2.121l1.414-1.414z"
}));

export default SvgComponent;