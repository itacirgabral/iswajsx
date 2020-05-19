function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.059 2.03C4.01.076 7.494.392 9.837 2.736l4.42 4.419c.047-1.134.436-2.205 1.237-3.005 1.953-1.953 5.435-1.636 7.778.707l7.778 7.778-1.414 1.414-7.778-7.778c-1.562-1.562-3.778-1.879-4.95-.707-1.171 1.172-.855 3.388.707 4.95l2.829 2.828-1.415 1.414L8.423 4.151c-1.562-1.562-3.778-1.879-4.95-.707-1.171 1.171-.855 3.387.707 4.95l2.829 2.828-1.415 1.414-2.828-2.828C.423 7.464.106 3.982 2.059 2.029z"
}));

export default SvgComponent;