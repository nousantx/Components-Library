import { useLayoutEffect } from "react";
import tenox_lib_style from "../style/tenox-style";
import tenoxui, { makeStyles } from "tenoxui";

const styler = () => {
  useLayoutEffect(() => {
    makeStyles(tenox_lib_style);
    tenoxui();
  }, []);
};

export default styler;
