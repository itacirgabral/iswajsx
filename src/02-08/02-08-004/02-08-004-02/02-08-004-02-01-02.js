function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M33 8l-8-8-8 8h16zM26 8v14a5 5 0 01-5 5 4.978 4.978 0 01-3.531-1.469L11.75 20.25c-.343-.456-1.002-.75-1.75-.75-1.105 0-2 .672-2 1.5v8c0 4.177 6 11 6 11H0s6-6.823 6-11v-8a5 5 0 015-5c1.38 0 2.626.564 3.531 1.469l5.719 5.281c.343.456 1.002.75 1.75.75 1.105 0 2-.672 2-1.5V8h2z"
}));

export default SvgComponent;