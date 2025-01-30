import Card from"../card/Card"


function SavedPostList({posts}){
 
  
  return (
    <div className='list'>
      {posts.map(item=>(
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}

export default SavedPostList