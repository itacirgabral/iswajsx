function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0a5 5 0 00-5 5v3h2V5a3 3 0 013-3h1a4 4 0 014 4v14h2v-4a3 3 0 016 0v17h2V16a5 5 0 00-5-5 4.946 4.946 0 00-3 1V6a6 6 0 00-6-6H5z"
}));

export default SvgComponent;