function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.812.25L0 6.5l10.812 6.25c.77-2.008 1.046-4.12 1.187-6.25.027-2.152-.538-4.222-1.187-6.25zM9.937 2.5c.334 1.288.562 2.607.562 4 0 1.393-.228 2.712-.562 4l-6.906-4 6.906-4z"
}));

export default SvgComponent;