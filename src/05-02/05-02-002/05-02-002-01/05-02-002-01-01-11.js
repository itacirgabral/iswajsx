function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.884.674L.384 22.325l1.732 1 12.5-21.65-1.732-1z"
}));

export default SvgComponent;