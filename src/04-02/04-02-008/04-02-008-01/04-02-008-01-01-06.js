function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M27 17v-5.657h-1.016l.022 4.663-4.663-.022V17H27z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 10.281l-.719.719 3.532 3.531.718-.719L21 10.283zM16 17v-5.657h-1.016l.022 4.663-4.663-.022V17H16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 10.281L9.281 11l3.531 3.531.72-.719L10 10.283z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}));

export default SvgComponent;