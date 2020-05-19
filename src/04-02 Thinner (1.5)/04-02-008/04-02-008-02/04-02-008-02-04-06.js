function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 6V1H5v4H1v1h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.406.719l-.687.687L3.53 4.25l.719-.719L1.406.72z"
}));

export default SvgComponent;