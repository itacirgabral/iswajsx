function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 7
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 6V0h-6v1h5v5h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.719 1L0 1.719 1.344 3.03C3.176 4.864 5.772 7 8.5 7c2.728 0 5.324-2.136 7.156-3.969L16 2.687 15.25 2l-.313.313C13.287 3.962 11.02 4 8.5 4c-2.52 0-4.786-.036-6.438-1.688L.72 1z"
}));

export default SvgComponent;