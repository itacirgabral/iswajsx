function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 12h12l-6 6-6-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 25C2.015 25 0 21.194 0 16.5v-8C0 3.806 2.015 0 4.5 0h2C8.985 0 11 3.806 11 8.5V11H7V8.5C7 4.358 5.88 1 4.5 1S2 4.358 2 8.5v8C2 20.642 3.12 24 4.5 24c1.085 0 1.998-2.1 2.344-5h3.937c-.567 3.468-2.259 6-4.281 6h-2z"
}));

export default SvgComponent;