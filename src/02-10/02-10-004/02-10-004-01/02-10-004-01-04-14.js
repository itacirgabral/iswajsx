function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 12V4.222L10.778 12H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.99 19.667c-1.358-1.358-.862-4.113.95-6.828l1.326 1.326c-1.596 2.14-2.292 4.072-1.57 4.795.977.976 4.143-.606 7.072-3.535l5.657-5.657c2.929-2.93 4.511-6.095 3.535-7.071-.767-.768-2.898.072-5.193 1.878l-1.37-1.37c2.854-2.051 5.84-2.645 7.27-1.215l1.414 1.414c1.758 1.757.492 5.873-2.828 9.192l-5.657 5.657c-3.32 3.32-7.435 4.586-9.192 2.828L.99 19.667z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 8V.222L14.778 8H7z"
}));

export default SvgComponent;