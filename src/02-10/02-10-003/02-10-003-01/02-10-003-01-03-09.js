function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 13L6 7l-6 6h2l4-4 4 4h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 0C12.985 0 15 3.806 15 8.5v8c0 4.694-2.015 8.5-4.5 8.5h-2C6.015 25 4 21.194 4 16.5V14h4v2.5c0 4.142 1.12 7.5 2.5 7.5s2.5-3.358 2.5-7.5v-8C13 4.358 11.88 1 10.5 1 9.415 1 8.502 3.1 8.156 6H4.22C4.786 2.532 6.478 0 8.5 0h2z"
}));

export default SvgComponent;