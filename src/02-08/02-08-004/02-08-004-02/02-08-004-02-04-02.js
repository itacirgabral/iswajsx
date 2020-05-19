function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 0v14a5 5 0 01-5 5 4.978 4.978 0 01-3.531-1.469L5.75 12.25c-.343-.456-1.002-.75-1.75-.75-1.105 0-2 .672-2 1.5v19H0V13a5 5 0 015-5c1.38 0 2.626.564 3.531 1.469l5.719 5.281c.343.456 1.002.75 1.75.75 1.105 0 2-.672 2-1.5V0h2z"
}));

export default SvgComponent;