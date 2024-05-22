import { TreeNode } from "./treeNode";

export function Tree({ data }) {
  console.log('Rendering the main tree component')
  return (
    <div className="tree">
      {data.map((node) => (
        <TreeNode key={node.nodeId} node={node} icon="€"></TreeNode>
      ))}
    </div>
  )
}