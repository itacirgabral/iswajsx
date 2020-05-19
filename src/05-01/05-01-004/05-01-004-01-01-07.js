function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 54,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3h42v4H0V3zM54 5l-5 5-.719-.719L52.563 5 48.28.719 49 0l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M50 5.5v-1h-6v1h6z"
}));

export default SvgComponent;