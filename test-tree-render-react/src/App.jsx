import { useEffect, useState } from 'react'
import { Tree } from './components/Tree'
import { data } from './data/data'

function App() {
  const [treeData, setTreeData] = useState([])
  const collapseNode = (node, collapsedState=true) => {
    node.isCollapsed = collapsedState
    return node
  }
  useEffect(() => {
    data.map((node) => collapseNode(node, true))
    setTreeData(data)
  }, [])

  const searchForATermInANode = (node, searchTerm) => {
    if (node.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      node.isCollapsed = false
      return true
    } else if (node.children) {
      return node.children.some((child) => searchForATermInANode(child, searchTerm))
    }
    return false
  }

  const onSearch = (searchTerm) => {
    const updatedTree = data.filter((node) => {
      return searchForATermInANode(node, searchTerm)
    })
    setTreeData(updatedTree)
  }

  const expandAll = () => {
    const updatedTree = data.map((node) => collapseNode(node, false))
    setTreeData(updatedTree)
  }

  return (
    <>
      <button onClick={expandAll}>Expand All</button>
      <input type='text' placeholder='Search...' onChange={(e) => onSearch(e.target.value)}/>
      <Tree data={treeData}/>
    </>
  )
}

export default App
