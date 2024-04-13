type buttonStyle = {
  [key: string]: string | string[] | { [key: string]: string | string[] };
};

export const buttonStyle: buttonStyle = {
  props: {
    trans: "transform",
    bdr: "border",
    text: "color",
    sc: "scale",
    "back-c": "backgroundColor",
  },
  classes: {
    ".btn":
      "ph-8px pv-4px bdr-none back-c-transparent text-white cursor-pointer fs-18px br-0.125rem",
    ".btn.primary": "back-c-[primary-500] text-black",
    ".btn.info": "back-c-[info-500]",
    ".btn.accent": "back-c-[accent-500]",
    ".btn.secondary": "back-c-[neutral-500]",
    ".btn.danger": "back-c-[danger-500]",
    ".btn.disabled": "back-c-[neutral-300] cursor-[tx_not-allowed]",
    ".btn.outlined": "bw-1px bs-solid bc-[neutral-900]",
  },
};

export default buttonStyle;
