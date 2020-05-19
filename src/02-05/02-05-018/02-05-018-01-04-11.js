function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 9v2h9V9H0zm12 0v2h12V9H12zm15 0v2h4V9h-4zM15 5L10.5.5 6 5h9zM31 3v14l7-7-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 5v10c0 1.105-.672 2-1.5 2S7 16.105 7 15v-1H2v1c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4V5h-1zM23 16l-4.5-4.5L14 16h9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 1v15a2 2 0 01-4 0h-5c0 2.21 2.239 4 5 4s5-1.79 5-4V1h-1z"
}));

export default SvgComponent;