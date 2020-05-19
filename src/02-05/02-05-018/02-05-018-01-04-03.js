function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M38 9v2h-9V9h9zM26 9v2H14V9h12zM11 9v2H7V9h4zM23 5L27.5.5 32 5h-9zM7 3v14l-7-7 7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28 5v10c0 1.105.672 2 1.5 2s1.5-.895 1.5-2v-1h5v1c0 2.21-2.015 4-4.5 4S27 17.21 27 15V5h1zM15 16l4.5-4.5L24 16h-9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 1v15a2 2 0 004 0h5c0 2.21-2.239 4-5 4s-5-1.79-5-4V1h1z"
}));

export default SvgComponent;