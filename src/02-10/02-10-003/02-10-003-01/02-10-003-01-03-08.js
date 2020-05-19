function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 9l1.375 1.375H15.5V16l1.5 1.5V9H8.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.768.868C17.01-.889 12.895.378 9.575 3.697L3.92 9.354c-3.32 3.319-4.586 7.435-2.829 9.192l1.414 1.414c1.758 1.758 5.873.491 9.193-2.828l1.767-1.768-2.828-2.828-1.768 1.767c-2.929 2.93-6.094 4.512-7.07 3.536-.977-.976.606-4.142 3.535-7.071L10.99 5.11c2.929-2.929 6.094-4.512 7.07-3.536.768.768-.072 2.898-1.878 5.193l2.785 2.784c2.05-2.853 2.645-5.84 1.215-7.27L18.768.868z"
}));

export default SvgComponent;