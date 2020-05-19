function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 7
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6V0h6v1H1v5H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.281 1l.719.719-1.344 1.312C14.824 4.864 12.228 7 9.5 7 6.772 7 4.176 4.864 2.344 3.031L2 2.687 2.75 2l.313.313C4.713 3.962 6.98 4 9.5 4c2.52 0 4.786-.036 6.438-1.688L17.28 1z"
}));

export default SvgComponent;