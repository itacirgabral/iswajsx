function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 7v25h2V7H7zM1 7l7-7 7 7h-2.844L8 2.844 3.844 7H1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 12c-3.284 0-6.177 1.587-8 4.031l.781.625C2.421 14.446 5.036 13 8 13c2.964 0 5.579 1.446 7.219 3.656l.781-.625C14.177 13.587 11.284 12 8 12zM8 17c-3.284 0-6.177 1.587-8 4.031l.781.625C2.421 19.446 5.036 18 8 18c2.964 0 5.579 1.446 7.219 3.656l.781-.625C14.177 18.587 11.284 17 8 17zM8 22c-3.284 0-6.177 1.587-8 4.031l.781.625C2.421 24.446 5.036 23 8 23c2.964 0 5.579 1.446 7.219 3.656l.781-.625C14.177 23.587 11.284 22 8 22z"
}));

export default SvgComponent;