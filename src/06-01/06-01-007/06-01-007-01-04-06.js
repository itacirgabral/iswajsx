function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 0v18L2 33 .594 31.594 15 17.187V0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0v17.188L.594 31.593 2 33l15-15v1.438l-6 6 2.125 2.125-1.5 1.5c1.248 1.973.91 4.745-.969 6.625-.6.6-1.303 1.027-2.031 1.312H4.656a4.482 4.482 0 01-.625-.344L3.688 37H1.374l-.969-.969L2 34.438l-2-2V30.75l14-14V0h1zm-4 26.844L1.812 36.03l.688.719 1.438-1.406c1.562 1.562 4.242 1.382 6-.375 1.757-1.758 1.905-4.438.343-6l1.438-1.407-.719-.718zM9.219 30.03c.976.977.828 2.735-.344 3.907-1.172 1.171-2.899 1.32-3.875.343l4.219-4.25z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.707 27.56l-1.414 1.414c1.562 1.562 1.404 4.253-.354 6.01-1.757 1.757-4.448 1.916-6.01.354l-1.414 1.414-.707-.707L11 26.852l.707.707zm-2.475 2.474L4.99 34.277c.976.976 2.717.818 3.889-.354 1.171-1.171 1.33-2.912.353-3.889z"
}));

export default SvgComponent;