function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6.364V0h6.364L0 6.364z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.828 3.536l9.193 9.192a4 4 0 005.657 0 5 5 0 000-7.071l-3.536 3.535c1.172 1.172 1.647 2.597 1.06 3.182-.585.586-2.01.111-3.181-1.06L3.536 2.828l-.708.708z"
}));

export default SvgComponent;