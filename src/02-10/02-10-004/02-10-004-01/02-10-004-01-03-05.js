function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 13l6 6 6-6h-2l-4 4-4-4H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 25C2.015 25 0 21.194 0 16.5v-8C0 3.806 2.015 0 4.5 0h2c2.022 0 3.714 2.532 4.281 6H6.844C6.498 3.1 5.585 1 4.5 1 3.12 1 2 4.358 2 8.5v8C2 20.642 3.12 24 4.5 24c.957 0 1.77-1.624 2.188-4h3.906c-.706 2.94-2.273 5-4.094 5h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 7l6 6 6-6h-2l-4 4-4-4H3z"
}));

export default SvgComponent;