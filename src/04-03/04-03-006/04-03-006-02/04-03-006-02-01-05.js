function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 1v13H8V1zM13.932.483l3.364 12.557-1.932.517L12 1zM6 1L2.635 13.557l-1.932-.518L4.068.482z"
}));

export default SvgComponent;