function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.485 9L4 17.485V9h8.485z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.94 1.575c1.757-1.757 5.872-.49 9.192 2.829l5.657 5.657c3.319 3.32 4.585 7.435 2.828 9.192l-1.414 1.414c-1.43 1.43-4.417.836-7.27-1.215l2.784-2.784c2.295 1.806 4.425 2.645 5.193 1.878.976-.976-.607-4.142-3.536-7.071l-5.656-5.657c-2.93-2.929-6.095-4.512-7.072-3.536-.677.678-.102 2.4 1.282 4.376L2.166 9.42C.586 6.842.238 4.277 1.526 2.99l1.413-1.415z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.728 13.243l-8.485 8.485v-8.485h8.485z"
}));

export default SvgComponent;