function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 0v5h1V1h4V0H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.469 1.75l-.719.719L7.594 5.28l.687-.687L5.47 1.75zM6 11V6H5v4H1v1h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.406 5.719l-.687.687L3.53 9.25l.719-.719L1.406 5.72z"
}));

export default SvgComponent;