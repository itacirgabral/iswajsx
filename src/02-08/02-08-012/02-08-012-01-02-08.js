function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23 1v9.9L13.1 1H23zm-1.016 1.016l-6.475-.022 6.497 6.497-.022-6.475z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.757 6.657l-8.485 8.485a4 4 0 01-5.657 0l-1.414-1.414c-2.734-2.734-3.05-6.85-.707-9.192l4.95 4.95c-1.562 1.561-2.196 3.46-1.415 4.242a2 2 0 002.829 0l8.485-8.485 1.414 1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.293 18.678l-.707.707L3.2 1l.707-.707 18.385 18.385z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.984 2.016l.022 6.475-6.497-6.497 6.475.022z",
  fill: "#fff"
}));

export default SvgComponent;