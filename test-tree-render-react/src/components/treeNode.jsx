import { useState } from "react"

export function TreeNode({node, icon='$'}) {
  // let startTime = performance.now();
  // while (performance.now() - startTime < 2) {
  //   // Do nothing for 2 ms per item to emulate current rendering time per item
  // }
  const [nodeData, setNodeData] = useState(node)
  const shouldRenderChildren = () => {
    return !nodeData.isCollapsed || !nodeData.children?.length
  }
  const expandNodeHandler = () => {
    console.log('Expanding node')
    const clonedNode = {...nodeData}
    clonedNode.isCollapsed = !clonedNode.isCollapsed
    setNodeData(clonedNode)
  }
  return (
    <div className="node">
      <p>
        <span>{icon}</span> {nodeData.name}
        <button onClick={expandNodeHandler}>{nodeData.isCollapsed ? '+' : '-'}</button>
      </p>
      { shouldRenderChildren() ?
        <>
          <div className="children">
            {nodeData?.children?.map((child) => (
              <TreeNode key={child.nodeId} node={child}></TreeNode>
            ))}
          </div> 
        </> 
        : null
      }
    </div>
  )
}