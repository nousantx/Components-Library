import { makeTenoxUI } from "tenoxui";

// newHovers function
function newHovers(hovers: object) {
  Object.entries(hovers).forEach(
    ([selector, [notHover, isHover, styles = ""]]: string[]) => {
      // selector
      const elements = document.querySelectorAll(selector);
      elements.forEach((element: any) => {
        // makeTenoxUI instance
        const styler = new makeTenoxUI(element);
        // applying default styles
        // styler.applyMultiStyles(`${notHover} ${styles}`);
        styler.applyMultiStyles(styles);
        // when the element is hovered
        element.addEventListener("mouseenter", () => {
          // apply hover style
          styler.applyMultiStyles(isHover);
        });
        // default style / when element not hovered
        element.addEventListener("mouseleave", () => {
          // apply default style
          styler.applyMultiStyles(notHover);
        });
      });
    }
  );
}
export default newHovers;
