function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v23a4 4 0 004 4 6 6 0 006-6H8a4 4 0 01-4 4 2 2 0 01-2-2v-4.625a3.5 3.5 0 100-5.75v-3.25a3.5 3.5 0 100-5.75V0H0zm4 4.5a2 2 0 110 4 2 2 0 010-4zm0 9a2 2 0 110 4 2 2 0 010-4z"
}));

export default SvgComponent;