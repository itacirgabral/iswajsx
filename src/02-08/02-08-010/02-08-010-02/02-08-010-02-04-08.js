function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23.05 2.364L8.908 16.506a4 4 0 01-5.657 0 8 8 0 010-11.314l1.414 1.415a6 6 0 000 8.485 2 2 0 002.829 0l5.347-5.348c-.66-.176-1.293-.498-1.812-1.016a4 4 0 015.657-5.657c.519.518.84 1.152 1.017 1.812L21.636.95l1.414 1.414zm-7.778 2.121a2 2 0 10-2.828 2.829 2 2 0 002.828-2.829z"
}));

export default SvgComponent;