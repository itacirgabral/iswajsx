function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8V2.344h1V7h4.656v1H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.243 6.586L7.778 3.05l-.707-.707L3.536 5.88l.707.707zM2.121 4.464L5.657.93 4.95.222 1.414 3.757l.707.707zM11 8V2.344h1V7h4.656v1H11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.243 6.586l3.535-3.536-.707-.707-3.535 3.536.707.707zM13.121 4.464L16.657.93 15.95.222l-3.536 3.535.707.707z"
}));

export default SvgComponent;