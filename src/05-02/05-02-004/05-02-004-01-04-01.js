function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0C2.239 0 0 2.686 0 6s2.239 6 5 6 5-2.686 5-6-2.239-6-5-6zm0 2c1.657 0 3 1.79 3 4s-1.343 4-3 4-3-1.79-3-4 1.343-4 3-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.906 0C1.138.54.493 1.285 0 2.156V6c0-3.314 2.239-6 5-6H1.906zM5 0c2.761 0 5 2.686 5 6s-2.239 6-5 6h3.094C9.836 10.775 11 8.546 11 6S9.836 1.225 8.094 0H5zm0 12c-2.761 0-5-2.686-5-6v3.844c.493.871 1.138 1.616 1.906 2.156H5zM5 2C3.343 2 2 3.79 2 6s1.343 4 3 4 3-1.79 3-4-1.343-4-3-4zm0 1c1.105 0 2 1.343 2 3s-.895 3-2 3-2-1.343-2-3 .895-3 2-3z",
  fill: "#fff"
}));

export default SvgComponent;