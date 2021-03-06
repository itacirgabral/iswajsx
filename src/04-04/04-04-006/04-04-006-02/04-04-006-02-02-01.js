function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.688.125l-.875.5 2 3.469.875-.5-2-3.469zm5.625 0l-2 3.469.874.5 2-3.469-.874-.5zM1.25 1.813l-.5.875 2.594 1.5.5-.875-2.594-1.5zm12.5 0l-2.594 1.5.5.874 2.594-1.5-.5-.874zM0 5.5v1h3v-1H0zm12 0v1h3v-1h-3zM3.344 7.813L.75 9.313l.5.874 2.594-1.5-.5-.874zm8.312 0l-.5.875 2.594 1.5.5-.876-2.594-1.5zm-5.844.093l-2 3.469.876.5 2-3.469-.875-.5zm3.375 0l-.874.5 2 3.469.874-.5-2-3.469z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 3v6h9V3H3zm1 2h7v2H4V5z"
}));

export default SvgComponent;