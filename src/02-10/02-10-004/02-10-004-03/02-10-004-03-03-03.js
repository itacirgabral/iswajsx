function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 4v2l-3.5 3.5L20 13v2l-5.5-5.5L20 4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 4.5C0 2.015 3.806 0 8.5 0h23C36.194 0 40 2.015 40 4.5v2c0 2.485-3.806 5.5-8.5 5.5H27V7h4.5C35.642 7 38 5.88 38 4.5S35.642 2 31.5 2h-23C4.358 2 2 3.12 2 4.5S4.358 7 8.5 7h5v5h-5C3.806 12 0 8.985 0 6.5v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 4v2l-3.5 3.5L26 13v2l-5.5-5.5L26 4z"
}));

export default SvgComponent;