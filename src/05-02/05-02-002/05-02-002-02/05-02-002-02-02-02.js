function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.774.898L.944 2.192l8.282 30.91 4.83-1.294L5.774.898z"
}));

export default SvgComponent;