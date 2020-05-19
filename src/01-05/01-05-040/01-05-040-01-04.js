function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 0v20c8 0 8-8 8-8V8c0-8-8-8-8-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.125v17.813C17.978 18.291 18 12 18 12V8c0-5.383-4.08-6.583-6-6.875z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 .156C2.012 1.25 2 8 2 8h2c0-2.597 2.93-3.493 5-3.813V.157zM0 18h9v2H0z"
}));

export default SvgComponent;