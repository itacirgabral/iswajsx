function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.226.898l4.83 1.294-8.282 30.91-4.83-1.294L9.226.898z"
}));

export default SvgComponent;