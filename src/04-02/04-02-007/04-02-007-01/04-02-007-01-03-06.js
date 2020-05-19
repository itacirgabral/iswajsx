function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 8V2.344H7V7H2.344v1H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.586 3.757L3.05.222l-.707.707L5.88 4.464l.707-.707zM4.464 5.879L.93 2.343l-.707.707 3.535 3.536.707-.707z"
}));

export default SvgComponent;