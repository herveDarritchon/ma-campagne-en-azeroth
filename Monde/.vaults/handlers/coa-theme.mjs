export const handler = {
  inline: "coa-theme",

  assets: {
    styles: ["./coa-theme.css"],
    scripts: ["./coa-theme.runtime.js"],
    foundry: {
      styles: true,
      scripts: true,
    },
  },

  render(content, ctx) {
    return {
      html: `<span class="coa-theme-element">${ctx.escape(content)}</span>`,
    };
  },
};
