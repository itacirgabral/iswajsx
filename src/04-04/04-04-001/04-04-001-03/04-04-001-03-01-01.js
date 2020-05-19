function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 25v2h5v-2H9zm12 0v2h5v-2h-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.5 20v3.594l-2.531-2.532-1.406 1.407L16.093 26l-3.53 3.531 1.406 1.407 2.531-2.532V32h2v-3.594l2.531 2.532 1.407-1.407L18.905 26l3.532-3.531-1.407-1.407-2.531 2.532V20h-2z"
}));

export default SvgComponent;