function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 1H8v3h2V1zm0 5H8v3h2V6zm0 5H8v3h2v-3zM13.932.482L12 1l.776 2.898 1.932-.518-.776-2.898zm1.294 4.83l-1.932.518.777 2.897 1.931-.517-.776-2.898zm1.294 4.83l-1.932.517.777 2.898 1.931-.518-.776-2.897zM6 1L4.068.482 3.292 3.38l1.932.518L6 1zM4.706 5.83l-1.932-.518-.776 2.898 1.931.517.777-2.897zm-1.294 4.83l-1.932-.518-.776 2.897 1.931.518.777-2.898z"
}));

export default SvgComponent;