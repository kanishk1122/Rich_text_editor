import { TextNode } from "lexical";

export class ColoredTextNode extends TextNode {
  constructor(text, color = null, backgroundColor = null) {
    super(text);
    this.__color = color;
    this.__backgroundColor = backgroundColor;
  }

  static getType() {
    return "colored-text";
  }

  static clone(node) {
    return new ColoredTextNode(node.__text, node.__color, node.__backgroundColor);
  }

  createDOM(config) {
    const dom = super.createDOM(config);
    if (this.__color) {
      dom.style.color = this.__color;
    }
    if (this.__backgroundColor) {
      dom.style.backgroundColor = this.__backgroundColor;
    }
    return dom;
  }

  updateDOM(prevNode, dom) {
    const isUpdated = super.updateDOM(prevNode, dom);
    if (this.__color !== prevNode.__color) {
      dom.style.color = this.__color || "";
    }
    if (this.__backgroundColor !== prevNode.__backgroundColor) {
      dom.style.backgroundColor = this.__backgroundColor || "";
    }
    return isUpdated;
  }

  setColor(color) {
    const writable = this.getWritable();
    writable.__color = color;
  }

  setBackgroundColor(backgroundColor) {
    const writable = this.getWritable();
    writable.__backgroundColor = backgroundColor;
  }

  static importJSON(serializedNode) {
    const node = new ColoredTextNode(serializedNode.text, serializedNode.color, serializedNode.backgroundColor);
    return node;
  }

  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "colored-text",
      color: this.__color,
      backgroundColor: this.__backgroundColor
    };
  }
}
