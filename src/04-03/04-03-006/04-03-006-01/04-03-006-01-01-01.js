function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 13H8v-3h2v3zm0-5H8V5h2v3zm0-5H8V0h2v3zM13.932 13.518L12 13l.776-2.898 1.932.518-.776 2.898zm1.294-4.83l-1.932-.518.777-2.897 1.931.517-.776 2.898zm1.294-4.83l-1.932-.517.777-2.898 1.931.518-.776 2.897zM6 13l-1.932.518-.776-2.898 1.932-.518L6 13zM4.706 8.17l-1.932.518-.776-2.898 1.931-.517.777 2.897zM3.412 3.34l-1.932.518L.704.961 2.635.443l.777 2.898z"
}));

export default SvgComponent;