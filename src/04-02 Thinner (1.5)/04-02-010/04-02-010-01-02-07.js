function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 1v5h1V2h4V1H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v2.5A3.5 3.5 0 015.5 6C3.758 6.005 2.798 4.81 2 3.719V3h.719c.737.524 1.487 1.034 2.781 1C6.88 4 8 3.328 8 2.5V0h1zM12 1v5h1V2h4V1h-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 0v2.5A3.5 3.5 0 0117.5 6c-1.742.005-2.702-1.19-3.5-2.281V3h.719c.737.524 1.487 1.034 2.781 1 1.38 0 2.5-.672 2.5-1.5V0h1z"
}));

export default SvgComponent;