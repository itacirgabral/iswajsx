function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7.686V19h11.314l-1.415-1.414H1.414V9.1L0 7.686z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M33.941 2.03C31.99.076 28.506.392 26.163 2.736l-4.42 4.419c-.047-1.134-.436-2.205-1.237-3.005-1.953-1.953-5.435-1.636-7.778.707l-2.121 2.121C9.18 8.405 5.839 9.18 3.8 9.542l-.973.973 5.657 5.657.973-.973c.362-2.038 1.137-5.38 2.563-6.806l2.121-2.12c1.562-1.563 3.778-1.88 4.95-.708 1.171 1.172.855 3.388-.707 4.95l-2.829 2.828 1.415 1.414L27.577 4.151c1.562-1.562 3.778-1.879 4.95-.707 1.171 1.171.855 3.387-.707 4.95l-2.829 2.828 1.415 1.414 2.828-2.828c2.343-2.344 2.66-5.826.707-7.779z"
}));

export default SvgComponent;