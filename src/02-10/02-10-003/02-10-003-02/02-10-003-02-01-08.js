function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 13h-7.778L18 20.778V13z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.657.98c-1.953-1.953-7.335.263-12.021 4.949l-6.364 6.364C.976 16.589-1.08 21.496.676 23.253l1.414 1.414c2.148 2.148 8.005-.226 13.082-5.303l-3.58-3.58c-4.617 4.268-8.656 6.9-9.502 6.055-.976-.976 2.664-6.2 8.132-11.667 5.467-5.468 10.69-9.108 11.667-8.132.776.776-1.405 4.244-5.06 8.375l3.646 3.646C24.885 9.43 26.32 3.643 23.657.979z"
}));

export default SvgComponent;