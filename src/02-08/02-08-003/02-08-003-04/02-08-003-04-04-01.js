function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0a5 5 0 00-5 5v3h2V5a3 3 0 013-3h1a4 4 0 014 4v6.563A3.99 3.99 0 008 12a4 4 0 100 8c.73 0 1.41-.221 2-.563v3.125A3.99 3.99 0 008 22a4 4 0 100 8c.73 0 1.41-.221 2-.563V40h2V6a6 6 0 00-6-6H5zm3 14a2 2 0 110 4 2 2 0 010-4zm0 10a2 2 0 110 4 2 2 0 010-4z"
}));

export default SvgComponent;