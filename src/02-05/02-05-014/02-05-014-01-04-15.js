function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 8h36v2H7V8zM14 0l-3.5 3.5L14 7V0zM7 16V2L0 9l7 7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3h-5v3h5a6 6 0 000-12h-2zM26 0l-3.5 3.5L26 7V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3h-5v3h5a6 6 0 000-12h-2z"
}));

export default SvgComponent;