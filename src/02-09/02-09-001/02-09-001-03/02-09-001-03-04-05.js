function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.406 0l3.875 3.719C8.54 6.976 13.03 7 18 7c4.97 0 9.461-.024 12.719-3.281l1.593-1.406 1.376 1.374-1.532 1.47A19.958 19.958 0 0118 11 19.958 19.958 0 013.844 5.156L0 1.406 1.406 0z"
}));

export default SvgComponent;