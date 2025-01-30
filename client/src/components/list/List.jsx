import './list.scss'
import Card from"../card/Card"
import { TiDeleteOutline } from "react-icons/ti";


function List({posts}){
  
  const imageData = <>  <div className="icon">
  <TiDeleteOutline />
              </div></>
  
  return (
    <div className='list'>
      {posts.map(item=>(
        <Card key={item.id} item={item} imageData={imageData}/>
      ))}
    </div>
  )
}

export default List