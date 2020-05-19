function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v5h1V1h4V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.469 1.75l-.719.719L4.594 5.28l.687-.687L2.47 1.75z"
}));

export default SvgComponent;