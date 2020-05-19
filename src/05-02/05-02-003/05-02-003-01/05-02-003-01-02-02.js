function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.862.755L.998 1.79l4.141 15.455 3.864-1.035L4.862.755z"
}));

export default SvgComponent;