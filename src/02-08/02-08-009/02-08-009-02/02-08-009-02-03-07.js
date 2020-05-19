function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22 0h11.314l-1.415 1.414h-8.485V9.9L22 11.314V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.494 3.536l10.253 10.253a1.5 1.5 0 002.121 0c.293-.293.442-.677.442-1.061l-.022-7.712 9.833 9.833a2 2 0 002.829 0c1.171-1.171.222-4.02-2.122-6.364l5.657-5.657a8 8 0 010 11.314l-2.121 2.121a4 4 0 01-5.657 0L16.3 9.855v2.873a3.48 3.48 0 01-1.017 2.475 3.5 3.5 0 01-4.95 0L.08 4.95l1.414-1.414z"
}));

export default SvgComponent;