function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.344.5L.28 4.594 1.687 6l2.657-2.656L7 6h9l2.656-2.656L21.313 6l1.406-1.406L18.656.5 15.188 4H7.811L4.345.5z"
}));

export default SvgComponent;