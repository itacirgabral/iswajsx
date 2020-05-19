function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 17h15v13H5zM5 0h2v15H5zM13 5c3 0 3 3 3 3v2h-2V8c0-1-1-1-1-1h-1c-1 0-1 1-1 1v7H9V8c0-2.803 2.532-2.988 2.875-3H13zM20 10c3 0 3 3 3 3v3h-2v-3c0-1-1-1-1-1h-2c-1 0-1 1-1 1v2h-2v-2c0-3 3-3 3-3h2zM1.719 18.344L4 22.312v3.97l-4-6.938 1.719-1z"
}));

export default SvgComponent;