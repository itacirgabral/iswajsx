function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 9v2h3V9H7zm6 0v2h13V9H13zm16 0v2h9V9h-9zM7 17l-7-7 7-7v2.844L2.844 10 7 14.156V17zM23 5L27.5.5 32 5h-1.406L27.5 1.906 24.406 5H23z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28 5v10c0 1.105.672 2 1.5 2s1.5-.895 1.5-2v-1h5v1c0 2.21-2.015 4-4.5 4S27 17.21 27 15V5h1zM14 16l4.5-4.5L23 16h-1.406L18.5 12.906 15.406 16H14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1v15a2 2 0 004 0h5c0 2.21-2.239 4-5 4s-5-1.79-5-4V1h1z"
}));

export default SvgComponent;