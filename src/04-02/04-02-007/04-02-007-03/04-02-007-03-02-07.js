function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 3.5L17.5 7l-.719-.719L19.594 3.5 16.78.719 17.5 0 21 3.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 5h-4V4h4v1zM18 3h-4V2h4v1zM13 9.5l3.5 3.5.719-.719L14.406 9.5l2.813-2.781L16.5 6 13 9.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 11h4v-1h-4v1zM16 9h4V8h-4v1zM8 3.5L4.5 7l-.719-.719L6.594 3.5 3.78.719 4.5 0 8 3.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 5H1V4h4v1zM5 3H1V2h4v1zM0 9.5L3.5 13l.719-.719L1.406 9.5 4.22 6.719 3.5 6 0 9.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 11h4v-1H3v1zM3 9h4V8H3v1z"
}));

export default SvgComponent;