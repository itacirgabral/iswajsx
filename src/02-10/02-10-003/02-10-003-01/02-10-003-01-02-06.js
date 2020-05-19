function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 8.5L3.5 17H12V8.5zm-1 2.438V16H5.937L11 10.937z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.132 18.768c1.757-1.758.49-5.873-2.829-9.193L11.646 3.92C8.327.599 4.211-.667 2.454 1.09L1.04 2.504C-.718 4.262.549 8.377 3.868 11.697l1.768 1.767 2.828-2.828-1.767-1.768C3.767 5.94 2.185 2.774 3.16 1.798c.976-.977 4.142.606 7.071 3.535l5.657 5.657c2.929 2.929 4.512 6.094 3.536 7.07-.768.768-2.898-.072-5.193-1.878l-2.784 2.785c2.853 2.05 5.84 2.645 7.27 1.215l1.414-1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 10.938L5.937 16H11v-5.063z",
  fill: "#fff"
}));

export default SvgComponent;