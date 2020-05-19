function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M36 8H0v2h36V8zM24 0l-3.5 3.5L24 7V0zM36 16V2l7 7-7 7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3h-5v3h5a6 6 0 000-12h-2zM12 0L8.5 3.5 12 7V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3H9v3h5a6 6 0 000-12h-2z"
}));

export default SvgComponent;