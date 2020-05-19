function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 39,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M39 12L27 0h12v12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.406 3l3.875 3.719C8.54 9.976 13.03 10 18 10c4.97 0 9.461-.024 12.719-3.281l1.593-1.407 1.376 1.375-1.532 1.47A19.958 19.958 0 0118 14 19.958 19.958 0 013.844 8.156L0 4.406 1.406 3z"
}));

export default SvgComponent;