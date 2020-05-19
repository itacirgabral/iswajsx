function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 3H4.222L12 10.778V3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.667.99c-1.358-1.358-4.113-.862-6.828.95l1.326 1.326c2.14-1.596 4.072-2.292 4.795-1.57.976.977-.606 4.143-3.535 7.072l-5.657 5.657c-2.93 2.929-6.095 4.511-7.071 3.535-.768-.767.072-2.898 1.878-5.193l-1.37-1.37c-2.051 2.854-2.645 5.84-1.215 7.27l1.414 1.414c1.757 1.758 5.873.492 9.192-2.828l5.657-5.657c3.32-3.32 4.586-7.435 2.828-9.192L19.667.99z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 7H.222L8 14.778V7z"
}));

export default SvgComponent;