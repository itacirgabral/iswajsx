function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M31 0a4 4 0 014 4v1h-1V4a3 3 0 00-3-3h-1c-1.657 0-3 1.79-3 4v9c0 3.283 4 9 4 9H21s4-5.717 4-9V5a5 5 0 015-5h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M40 5l-5.5 5.5L29 5h2l3.5 3.5L38 5h2zM40 13v1H28v-1h12zm-16 0v1H14v-1h10zM8 13v1H0v-1h8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 0a4 4 0 00-4 4v6c0 2.539-3 7-3 7h8s-3-4.461-3-7V4a2 2 0 014 0v4h2V4a4 4 0 00-4-4zM18 17l-7 7-7-7h2l5 5 5-5h2z"
}));

export default SvgComponent;