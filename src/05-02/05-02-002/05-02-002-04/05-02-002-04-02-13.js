function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 45,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M44.535 5.165l-2.5-4.33-41.57 24 2.5 4.33 41.57-24z"
}));

export default SvgComponent;