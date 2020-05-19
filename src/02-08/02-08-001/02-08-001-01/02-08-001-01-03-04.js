function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7.1V17h9.9l-1.415-1.414h-7.07V8.515L0 7.1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.092 2.15a4 4 0 00-5.657 0L9.192 6.394c-1.114 1.115-3.468 1.88-5.17 2.343L2.828 9.929l4.243 4.243 1.193-1.194c.463-1.702 1.228-4.056 2.343-5.17l4.242-4.243a2 2 0 012.829 0 1 1 0 010 1.414l-4.243 4.243 1.414 1.414 4.243-4.243a3 3 0 000-4.242z"
}));

export default SvgComponent;