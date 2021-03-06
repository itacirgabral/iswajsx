function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 12.109l-.719-.719L2.5 13.171l-1.781-1.78-.719.718 2.5 2.5 2.5-2.5zM7 .656C6.534.236 6.023 0 5.5 0 4.335 0 3.268 1.144 2.469 3h2.937c.332-.618.7-1 1.094-1 .166 0 .342.066.5.188V.655zm0 20.157a.835.835 0 01-.5.187c-.394 0-.762-.382-1.094-1H2.47c.799 1.856 1.866 3 3.031 3 .523 0 1.034-.236 1.5-.656v-1.532zM4.969 4H2.094c-.39 1.152-.661 2.516-.844 4h2.938c.165-1.59.429-2.97.78-4zm0 15c-.352-1.03-.616-2.41-.782-4H1.25c.183 1.484.455 2.848.844 4h2.875z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 9.109l-.719-.719L2.5 10.171.719 8.392 0 9.108l2.5 2.5 2.5-2.5z"
}));

export default SvgComponent;