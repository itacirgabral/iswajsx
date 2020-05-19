function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25.781 11l-1.5 1.5H19.5v4.781l-1.5 1.5V11h7.781z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.797 1.454C4.555-.303 8.67.963 11.99 4.282l5.656 5.657-1.414 1.415-5.657-5.657c-2.929-2.93-5.387-3.805-6.364-2.829-.976.977-.807 4.142 2.122 7.071l16.263 16.264c2.93 2.929 6.095 3.097 7.071 2.121.977-.976.1-3.435-2.828-6.364l-5.303-5.303 1.414-1.414 5.303 5.303c3.32 3.32 4.586 7.435 2.828 9.192l-1.414 1.415c-1.757 1.757-6.58 1.198-9.9-2.122L3.505 12.768c-3.32-3.32-3.878-8.142-2.121-9.9l1.414-1.414z"
}));

export default SvgComponent;