function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 3.5L4.5 0 3.78.719 6.593 3.5 3.781 6.281 4.5 7 8 3.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 3v5h1V4h4V3H0zM21 3.5L17.5 0l-.719.719L19.594 3.5 16.78 6.281 17.5 7 21 3.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 3v5h1V4h4V3h-5z"
}));

export default SvgComponent;