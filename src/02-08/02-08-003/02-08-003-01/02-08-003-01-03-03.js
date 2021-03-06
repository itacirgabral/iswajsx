function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.05 3.1a4 4 0 000 5.657l.707.707.707-.707-.707-.707a3 3 0 010-4.242l.707-.707c1.172-1.172 3.388-.855 4.95.707l3.823 3.822a2.98 2.98 0 00-1.348.774 3 3 0 004.243 4.242 2.98 2.98 0 00.773-1.347l.994.994c2.322 2.321 3.536 9.192 3.536 9.192l7.071-7.07s-6.87-1.215-9.192-3.536l-8.486-8.486a5 5 0 00-7.07 0l-.708.708zm9.9 6.364a1.5 1.5 0 112.121 2.122 1.5 1.5 0 01-2.121-2.122z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.222 13H8V5.222L6.586 6.636v4.95h-4.95L.222 13z"
}));

export default SvgComponent;