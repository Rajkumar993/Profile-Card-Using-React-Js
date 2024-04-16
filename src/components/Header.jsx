
export const Header = () => {
  const list=false;
  const hi=list?<p>loged in</p>:<p>login again</p>
  const items=["item1",'item2','item3']
  function vanakam(props){
  return console.log(props.name)
  }
 
  return (
  <>
    <div>Header</div>
    {hi}
    <ol>
    {items.map(item=><li>{item}</li>)}
    </ol>
    <h3>vanakam</h3>
    </>
 
  )
}
