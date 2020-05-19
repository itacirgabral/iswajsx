function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v16a4 4 0 004 4c3.866 0 7-2.686 7-6H9c0 2.21-2.239 4-5 4a2 2 0 01-2-2v-4.625a3.5 3.5 0 100-5.75V0H0zm4 6.5a2 2 0 110 4 2 2 0 010-4z"
}));

export default SvgComponent;