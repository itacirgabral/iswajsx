function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 43
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 4A8.5 8.5 0 005 12.5a8.501 8.501 0 005 7.75V23H7a7 7 0 00-7 7v13h2V30a5 5 0 015-5h8V4.156A8.57 8.57 0 0013.5 4zM19 6.031V19a8.5 8.5 0 003-6.5c0-2.593-1.17-4.91-3-6.469zM19 23v2h1a5 5 0 015 5v13h2V30a7 7 0 00-7-7h-1zM6 30v13h3V30H6zm13 0v13h2V30h-2zM16 43V0h2v43h-2z"
}));

export default SvgComponent;