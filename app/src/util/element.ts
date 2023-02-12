export function htmlToElem(html: string): Element{
    const temp = document.createElement("template");
    html = html.trim(); // Never return a space text node as a result
    temp.innerHTML = html;
    return temp.content.firstChild as Element;
  }

  export function insertAfter(newNode: Node, existingNode: Node) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }

  export function insertBefore(newNode: Node, existingNode: Node) {
    existingNode.parentNode.insertBefore(newNode, existingNode);
  }