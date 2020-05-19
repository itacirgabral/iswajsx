function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v5H5V1H1V0h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.531 1.75L.72 4.594l.687.687L4.25 2.47l-.719-.719z"
}));

export default SvgComponent;