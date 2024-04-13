import { useLayoutEffect } from "react";
import Button from "./component/ui/Button";
import tenoxui, { defineProps, makeStyles } from "tenoxui";
import borderRadiusStyle from "./component/style/border-radius";
import styler from "./component/utils/styler";

function App() {
  useLayoutEffect(() => {
    defineProps({
      d: "display",
      "back-c": "backgroundColor",
    });
    makeStyles(borderRadiusStyle);
    makeStyles({
      // body: "bg-[neutral-100] tc-[neutral-900]",
      body: "bg-[neutral-900] tc-[neutral-100]",
    });
    tenoxui();
  }, []);
  styler();
  return (
    <section className="mt-3rem p-2rem ph-10vw">
      <h1 className="ta-center mb-1rem">Primary</h1>
      <div className="d-flex flex-parent-center gap-1rem">
        <Button
          variant="primary"
          className="ph-14px pv-10px fs-16px fw-500 rounded-md"
        >
          Learn More
        </Button>
        <Button
          variant="primary"
          className="ph-12px pv-8px fs-14px fw-500 rounded"
        >
          Learn More
        </Button>
        <Button
          variant="primary"
          className="ph-10px pv-6px fs-12px fw-500 rounded-sm"
        >
          Learn More
        </Button>
      </div>
      <div className="d-flex flex-parent-center gap-1rem mt-1rem">
        <Button
          variant="secondary"
          className="ph-14px pv-10px center gap-6px fs-16px fw-500 rounded-md"
        >
          <span className="ms-sharp fs-20px">rocket_launch</span>
          Menyala
        </Button>
        <Button
          variant="secondary"
          className="ph-12px pv-8px center gap-4px fs-14px fw-500 rounded"
        >
          <span className="ms-sharp fs-16px">rocket_launch</span>
          Btn Icon
        </Button>
        <Button
          variant="secondary"
          className="ph-10px pv-6px center gap-3px fs-12px fw-500 rounded-sm"
        >
          <span className="ms-sharp fs-14px">rocket_launch</span>
          Btn Icon
        </Button>
      </div>
      <h1 className="ta-center mb-1rem">Accent</h1>
      <div className="d-flex flex-parent-center gap-1rem">
        <Button
          variant="accent"
          className="ph-14px pv-10px fs-16px fw-500 rounded-md"
        >
          Learn More
        </Button>
        <Button
          variant="accent"
          className="ph-12px pv-8px fs-14px fw-500 rounded"
        >
          Learn More
        </Button>
        <Button
          variant="accent"
          className="ph-10px pv-6px fs-12px fw-500 rounded-sm"
        >
          Learn More
        </Button>
      </div>
      <div className="d-flex flex-parent-center gap-1rem mt-1rem">
        <Button
          variant="accent"
          className="ph-14px pv-10px center gap-8px fs-16px fw-500 rounded-md"
        >
          <span className="ms-sharp fs-18px">rocket_launch</span>
          Btn Icon
        </Button>
        <Button
          variant="accent"
          className="ph-12px pv-8px center gap-6px fs-14px fw-500 rounded"
        >
          <span className="ms-sharp fs-16px">rocket_launch</span>
          Btn Icon
        </Button>
        <Button
          variant="accent"
          className="ph-10px pv-6px center gap-4px fs-12px fw-500 rounded-sm"
        >
          <span className="ms-sharp fs-14px">rocket_launch</span>
          Btn Icon
        </Button>
      </div>
    </section>
  );
}

export default App;
