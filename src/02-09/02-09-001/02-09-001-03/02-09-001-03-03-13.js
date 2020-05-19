function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 39,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0l-1.5 1.5h-9v9L0 12V0h12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M37.594 3l-3.875 3.719C30.46 9.976 25.97 10 21 10c-4.97 0-9.461-.024-12.719-3.281L6.687 5.312 5.313 6.688l1.532 1.47A19.958 19.958 0 0021 14a19.958 19.958 0 0014.156-5.844L39 4.406 37.594 3z"
}));

export default SvgComponent;