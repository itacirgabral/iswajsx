function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 7
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 3.5L3.5 7l-.719-.719L5.594 3.5 2.78.719 3.5 0 7 3.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 5H0V4h4v1zM4 3H0V2h4v1z"
}));

export default SvgComponent;