function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.504.658L.968 4.194l.707.707 2.829-2.828L7.332 4.9l.707-.707L4.504.658zM6.183 7.818A4.006 4.006 0 014.99 4.99h1.016a3.009 3.009 0 003.005 3.005H11l.022.994-2.01.022a4.006 4.006 0 01-2.83-1.193z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.769 9.232A5.99 5.99 0 013 4.99h1.016a4.99 4.99 0 004.994 4.994H11V11H9.011A5.99 5.99 0 014.77 9.232z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 10a5 5 0 01-5-5h1a4 4 0 004 4h2v1H9z",
  fill: "#fff"
}));

export default SvgComponent;