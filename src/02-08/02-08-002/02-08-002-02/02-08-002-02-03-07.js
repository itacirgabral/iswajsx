function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M36 7.686V19H24.686l1.415-1.414h8.485V9.1L36 7.686zM2.059 2.03C4.01.076 7.494.392 9.837 2.736l4.42 4.419c.047-1.134.436-2.205 1.237-3.005 1.953-1.953 5.435-1.636 7.778.707l2.121 2.121c1.426 1.426 4.768 2.2 6.806 2.563l.973.973-5.657 5.657-.973-.973c-.362-2.038-1.137-5.38-2.563-6.806l-2.121-2.12c-1.562-1.563-3.778-1.88-4.95-.708-1.171 1.172-.855 3.388.707 4.95l2.829 2.828-1.415 1.414L8.423 4.151c-1.562-1.562-3.778-1.879-4.95-.707-1.171 1.171-.855 3.387.707 4.95l2.829 2.828-1.415 1.414-2.828-2.828C.423 7.464.106 3.982 2.059 2.029z"
}));

export default SvgComponent;