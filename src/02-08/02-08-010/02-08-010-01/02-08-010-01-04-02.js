function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 0v16a4 4 0 01-4 4c-3.866 0-7-2.686-7-6h2c0 2.21 2.239 4 5 4a2 2 0 002-2v-4.625a3.5 3.5 0 110-5.75V0h2zM7 6.5a2 2 0 100 4 2 2 0 000-4z"
}));

export default SvgComponent;