function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7h2v2H0V7zm4 0h2v2H4V7zm4 0h2v2H8V7zM.372 13.463l1.902-.51.517 1.932-1.901.51-.518-1.932zm3.834-1.027l1.931-.518.518 1.932-1.932.518-.517-1.932zm3.863-1.035l1.962-.526.518 1.932-1.962.526-.518-1.932zM.89.605l1.901.51-.517 1.931-1.902-.51L.89.606zm3.833 1.027l1.932.518-.518 1.932-1.931-.518.517-1.932zm3.864 1.035l1.962.526-.518 1.932-1.962-.526.518-1.932z"
}));

export default SvgComponent;