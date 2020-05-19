function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 10l.719-.719-7-7L0 3l7 7zM9.281 7.719L10 7 3 0l-.719.719 7 7zM16 10l-.719-.719 7-7L23 3l-7 7zM13.719 7.719L13 7l7-7 .719.719-7 7z"
}));

export default SvgComponent;