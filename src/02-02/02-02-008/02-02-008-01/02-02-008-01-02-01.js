function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 .563l-6 6.03L1.406 8 6 3.437 10.594 8 12 6.594 6 .562zM20 .563l-6 6.03L15.406 8 20 3.437 24.594 8 26 6.594 20 .562z"
}));

export default SvgComponent;