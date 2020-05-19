function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 6.219l1.5 1.5V12.5h4.781l1.5 1.5H11V6.219z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.454 29.203C-.303 27.445.963 23.33 4.282 20.01l5.657-5.656 1.415 1.414-5.657 5.657c-2.93 2.929-3.805 5.387-2.829 6.364.977.976 4.142.807 7.071-2.122L26.203 9.404c2.929-2.93 3.097-6.095 2.121-7.071-.976-.977-3.435-.1-6.364 2.828l-5.303 5.303-1.414-1.414 5.303-5.303C23.866.427 27.98-.839 29.738.919l1.415 1.414c1.757 1.757 1.198 6.58-2.122 9.9L12.768 28.495c-3.32 3.32-8.142 3.878-9.9 2.121l-1.414-1.414z"
}));

export default SvgComponent;