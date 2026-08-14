export const handler = {
  codeBlock: "quest",

  assets: {
    styles: ["./quest.css"],
    scripts: ["./quest.runtime.js"],
    foundry: {
      styles: true,
      scripts: true,
    },
  },

  render(content, ctx) {
    const lines = content.split('\n');
    const title = lines[0];
    const body = lines.slice(1).join('\n');
    
    return {
      html: `
        <div class="coa-quest-block">
          <div class="coa-quest-header">
            <h3>! ${ctx.escape(title)}</h3>
          </div>
          <div class="coa-quest-body">
            ${ctx.escape(body).replace(/\n/g, '<br>')}
          </div>
          <button class="coa-quest-accept">Accepter la quête</button>
        </div>
      `,
    };
  },
};
