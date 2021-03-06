function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 4h7.778L12 11.778V4zm1.016 1.016v4.331l4.331-4.33h-4.33z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.161.818c1.63-1.63 5.271-.63 8.441 2.166L10.21 4.376C7.504 1.904 4.763.63 3.868 1.526c-.976.975.607 4.141 3.536 7.07l5.657 5.657c2.929 2.929 6.094 4.512 7.07 3.536.977-.977-.606-4.143-3.535-7.071l-1.06-1.061 1.414-1.414 1.06 1.06c3.32 3.32 4.586 7.435 2.829 9.193l-1.414 1.414c-1.758 1.757-5.873.49-9.193-2.829l-5.657-5.656C1.255 8.105-.01 3.99 1.747 2.232L3.161.818z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.016 5.016h4.331l-4.33 4.331v-4.33z",
  fill: "#fff"
}));

export default SvgComponent;