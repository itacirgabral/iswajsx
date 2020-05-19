function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 17h15v13H5zM8 4h2v11H8zM12 0h2v15h-2zM16 4h2v11h-2zM1.719 18.344l-1.719 1 4 6.937v-3.968l-2.281-3.97z"
}));

export default SvgComponent;