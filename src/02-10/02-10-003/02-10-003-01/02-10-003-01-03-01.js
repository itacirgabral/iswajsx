function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 13l6-6 6 6h-2L9 9l-4 4H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 0C2.015 0 0 3.806 0 8.5v8C0 21.194 2.015 25 4.5 25h2c2.485 0 4.5-3.806 4.5-8.5V14H7v2.5C7 20.642 5.88 24 4.5 24S2 20.642 2 16.5v-8C2 4.358 3.12 1 4.5 1c1.085 0 1.998 2.1 2.344 5h3.937C10.214 2.532 8.522 0 6.5 0h-2z"
}));

export default SvgComponent;