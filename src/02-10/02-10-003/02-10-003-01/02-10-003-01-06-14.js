function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 2.219l1.5 1.5V8.5h4.781l1.5 1.5H4V2.219z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.818 18.839c-1.63-1.63-.63-5.271 2.166-8.441l1.392 1.392c-2.472 2.706-3.746 5.447-2.85 6.342.975.976 4.141-.607 7.07-3.536l5.657-5.657c2.929-2.929 4.512-6.094 3.536-7.07-.977-.977-4.143.606-7.071 3.535l-1.061 1.06L8.243 5.05l1.06-1.06c3.32-3.32 7.435-4.586 9.193-2.829l1.414 1.414c1.757 1.758.49 5.873-2.829 9.193l-5.656 5.657c-3.32 3.32-7.435 4.585-9.193 2.828L.818 18.839z"
}));

export default SvgComponent;