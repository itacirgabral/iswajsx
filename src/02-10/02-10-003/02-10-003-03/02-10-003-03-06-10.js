function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.219 11l1.5 1.5H12.5v4.781l1.5 1.5V11H6.219z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M29.203 1.454C27.445-.303 23.33.963 20.01 4.282L14.354 9.94l1.414 1.415 5.657-5.657c2.929-2.93 5.387-3.805 6.364-2.829.976.977.807 4.142-2.122 7.071L9.404 26.203c-2.93 2.929-6.095 3.097-7.071 2.121-.977-.976-.1-3.435 2.828-6.364l5.303-5.303-1.414-1.414-5.303 5.303C.427 23.866-.839 27.98.919 29.738l1.414 1.415c1.757 1.757 6.58 1.198 9.9-2.122l16.263-16.263c3.32-3.32 3.878-8.142 2.121-9.9l-1.414-1.414z"
}));

export default SvgComponent;