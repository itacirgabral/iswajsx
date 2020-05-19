function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 41
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8l7 7 7-7h-2l-5 5-5-5H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0a5 5 0 00-5 5v3h2V5a3 3 0 013-3 4 4 0 014 4v12h2v-3a3 3 0 016 0v13h2v-3a3 3 0 016 0v5c0 4.028-5 11-5 11h12s-5-6.972-5-11v-5a5 5 0 00-5-5 4.946 4.946 0 00-3 1v-6a5 5 0 00-5-5 4.946 4.946 0 00-3 1V6a6 6 0 00-6-6z"
}));

export default SvgComponent;