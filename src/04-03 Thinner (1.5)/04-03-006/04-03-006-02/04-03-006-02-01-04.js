function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.44 3.146l-9.193 9.192 1.415 1.415 9.192-9.193zM12.025 0L.767 6.5l1 1.732 11.258-6.5zM17.268 5.975l-6.5 11.258 1.732 1L19 6.975z"
}));

export default SvgComponent;