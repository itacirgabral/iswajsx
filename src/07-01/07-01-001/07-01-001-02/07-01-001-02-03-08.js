function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 58
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26.344 32h11.312l19.625 19.625-5.656 5.656L26.344 32z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.344 21h11.312l11 11H26.344l-11-11z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.375.719L26.656 21H15.344L.719 6.375 6.375.719zM27.5 23c-3.666 0-6.724 2.568-7.5 6h1.156a6.729 6.729 0 016.344-4.5 6.729 6.729 0 016.344 4.5H35c-.776-3.432-3.834-6-7.5-6z"
}));

export default SvgComponent;