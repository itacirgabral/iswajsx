function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.536 3.732l2-3.464 6.928 4-2 3.464-6.928-4z"
}));

export default SvgComponent;