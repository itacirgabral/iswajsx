function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 7
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0v5.656h-1V1h-4.656V0H18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.812 2.469L11.282 6l.718.719 3.531-3.532-.719-.718zM7 0v5.656H6V1H1.344V0H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.812 2.469L.282 6 1 6.719 4.53 3.187l-.719-.718z"
}));

export default SvgComponent;