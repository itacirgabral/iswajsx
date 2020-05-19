function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 31,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.494.536l10.253 10.253a1.5 1.5 0 002.121 0c.293-.293.442-.677.442-1.061l-.022-7.712 9.833 9.833a2 2 0 002.829 0 6 6 0 000-8.485l1.414-1.414a8 8 0 010 11.313 4 4 0 01-5.657 0L16.3 6.855v2.873a3.48 3.48 0 01-1.017 2.475 3.5 3.5 0 01-4.95 0L.08 1.95 1.494.536z"
}));

export default SvgComponent;