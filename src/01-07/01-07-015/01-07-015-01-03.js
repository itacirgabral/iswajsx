function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 11C0 11 0 19 0 19c0 7 12 7 12 7h8V11h-8zm0 4v9c-9 0-9-4-9-4 0-5 9-5 9-5zM17 0h2v11h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.656 5.344l1.407 1.406L20 11.813 18 11l5.656-5.656z"
}));

export default SvgComponent;