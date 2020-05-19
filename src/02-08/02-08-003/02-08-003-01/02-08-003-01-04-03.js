function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.05 3.1a4 4 0 000 5.657l.707.707.707-.707-.707-.707a3 3 0 010-4.242l.707-.707c1.172-1.172 3.388-.855 4.95.707l3.823 3.822a2.98 2.98 0 00-1.348.774 3 3 0 004.243 4.242 2.98 2.98 0 00.773-1.347l7.358 7.358 1.415-1.414-14.85-14.85a5 5 0 00-7.07 0l-.708.708zm9.9 6.364a1.5 1.5 0 112.121 2.122 1.5 1.5 0 01-2.121-2.122z"
}));

export default SvgComponent;