function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8zM17.719 0L17 .719l2.125 2.156L17 5l2.125 2.125L17 9.281l.719.719 2.843-2.844L18.438 5l2.125-2.156L17.72 0zM3.282 0L4 .719 1.875 2.875 4 5 1.875 7.125 4 9.281 3.282 10 .438 7.156 2.563 5 .438 2.844 3.282 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 5a2 2 0 11-4 0 2 2 0 114 0z"
}));

export default SvgComponent;