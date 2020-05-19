function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 21.5L4 16h11l-5.5 5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 32c-2.761 0-5-5.373-5-12v-9C0 4.925 2.015 0 4.5 0h2c2.448 0 4.505 3.775 5.219 9H6.656C6.225 4.824 5.424 2 4.5 2 3.12 2 2 8.268 2 16s1.12 14 2.5 14c.96 0 1.773-3.047 2.188-7.5h5.156C11.172 27.929 8.366 32 5 32z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 15.5L4 10h11l-5.5 5.5z"
}));

export default SvgComponent;