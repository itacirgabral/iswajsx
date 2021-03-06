function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v18l15 15 1.406-1.406L2 17.187V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v17.188l14.406 14.406L15 33 0 18v1.438l6 6-2.125 2.125 1.5 1.5c-1.248 1.973-.91 4.745.969 6.625.6.6 1.303 1.027 2.031 1.312h3.969c.222-.096.418-.213.625-.344l.344.344h2.312l.969-.969L15 34.438l2-2V30.75l-14-14V0H2zm4 26.844l9.188 9.187-.688.719-1.438-1.406c-1.562 1.562-4.242 1.382-6-.375-1.757-1.758-1.905-4.438-.343-6L5.28 27.562 6 26.845zm1.781 3.187c-.976.977-.828 2.735.344 3.907 1.172 1.171 2.899 1.32 3.875.343l-4.219-4.25z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.293 27.56l1.414 1.414c-1.562 1.562-1.404 4.253.354 6.01 1.757 1.757 4.448 1.916 6.01.354l1.414 1.414.707-.707L6 26.852l-.707.707zm2.475 2.474l4.242 4.243c-.976.976-2.717.818-3.889-.354-1.171-1.171-1.33-2.912-.353-3.889z"
}));

export default SvgComponent;