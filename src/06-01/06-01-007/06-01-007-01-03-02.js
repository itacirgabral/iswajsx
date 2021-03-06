function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 0v22l15 15 1.406-1.406L3 21.187V5h22V0H1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v22.438l2 2-2 2v.25l1.375 1.375c-1.248 1.973-.91 4.745.969 6.625 1.88 1.879 4.651 2.217 6.625.968L10.344 37h.312l1.938-1.969 2 1.969H16L1 22V0H0zm16 37h1.438l1.406-1.406L4 20.75V6h21V5H3v16.188l14.406 14.406L16 37zM2 25.844l9.188 9.187-.688.719-1.438-1.406c-1.562 1.562-4.242 1.382-6-.375-1.757-1.758-1.905-4.438-.343-6L1.28 26.562 2 25.845zm1.781 3.187c-.976.977-.828 2.735.344 3.907 1.172 1.171 2.899 1.32 3.875.343l-4.219-4.25z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.293 26.56l1.414 1.414c-1.562 1.562-1.404 4.253.354 6.01 1.757 1.757 4.448 1.916 6.01.354l1.414 1.414.707-.707L2 25.852l-.707.707zm2.475 2.474l4.242 4.243c-.976.976-2.717.818-3.889-.354-1.171-1.171-1.33-2.912-.353-3.889z"
}));

export default SvgComponent;