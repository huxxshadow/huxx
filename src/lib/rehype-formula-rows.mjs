// 公式行：一个 $$ … $$ 块里用空行隔开的几条公式，拆成各自独立的公式，放进同一个 .formula-row。
// .formula-row 是自动换行的弹性布局：宽度放得下就并排，放不下就逐条换到下一行，每行居中。
// 要排在 rehype-katex 之前（这里拆的是 remark-math 生成的 <pre><code class="language-math math-display">）。

function textOf(node) {
    if (node.type === 'text') return node.value;
    return (node.children || []).map(textOf).join('');
}

function isDisplayMath(node) {
    if (node.type !== 'element' || node.tagName !== 'pre') return false;
    const code = node.children && node.children.find((c) => c.type === 'element' && c.tagName === 'code');
    const classes = (code && code.properties && code.properties.className) || [];
    return classes.includes('math-display');
}

function mathBlock(tex) {
    return {
        type: 'element',
        tagName: 'pre',
        properties: {},
        children: [{
            type: 'element',
            tagName: 'code',
            properties: { className: ['language-math', 'math-display'] },
            children: [{ type: 'text', value: tex }],
        }],
    };
}

function walk(node) {
    if (!node.children) return;
    node.children = node.children.map((child) => {
        if (!isDisplayMath(child)) {
            walk(child);
            return child;
        }
        const parts = textOf(child).split(/\n[ \t]*\n/).map((s) => s.trim()).filter(Boolean);
        return {
            type: 'element',
            tagName: 'div',
            properties: { className: ['formula-row'] },
            children: parts.map(mathBlock),
        };
    });
}

export default function rehypeFormulaRows() {
    return (tree) => walk(tree);
}
