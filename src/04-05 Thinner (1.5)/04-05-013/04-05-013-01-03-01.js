function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 47
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 44.438l1.656 1.624L5.5 42.22 8.781 45.5l2.031-5.469L18.189 42l-1.97-7.281 6.47-1.75-5.032-5.032L22 26.782V24l-2.656-2.656L23 15h-5.875L18 9h-7V0L3.906 6.406 0 2.5v1.438l3.875 3.874.031-.03L10 2.25V10h6.844L16 16h5.25l-3.156 5.5L21 24.438V26l-5.281 1.438 5 5L15 34l1.781 6.594-6.593-1.75-1.782 4.843L5.5 40.782l-3.875 3.844L0 43v1.438z"
}));

export default SvgComponent;