let data=[
  {
    name:"James",
    city:"Newyork",
    des:"Fronend developer",
    skills:["Fronend","ui Development","git","github","canva"],
    online:false,
    profile:"1-change1.jpg"
  
  },
  {
    name:"Tom",
    city:"Canada",
    des:"Backend developer",
    skills:["java","PHP","Python","Ruby","SQL"],
    online:true,
    profile:"tom.jpg"
  
  },
  {
    name:"Edna",
    city:"South Africa",
    des:"Cyber Security",
    skills:["Python","Java","C++","Ruby","PowerShell","SOL","Rust","Bash"],
    online:false,
    profile:"edna.jpg"
  
  }
]


function User(props){

return (
 <div>
  <div className="container">
    <div className="header">
      <div className={props.online?"img":"img img2"}>
        <img src={props.profile} alt="" />
      </div>
      <div className={props.online? "online": "offline"}>{props.online?"online":"offline"}</div>
       <div className="personal-details">
        <h3 className="name">{props.name}</h3>
        <h4 className="city"> {props.city}</h4>
        <p className="des">{props.des}</p>
       </div>
        </div>
    <div className="middle">
        <button className="btn">Message</button>
        <button  className="btn trans">Following</button>
       </div>
       <div className="bottom">
       <ul className="skills">
        <h4>skills</h4>
       {props.skills.map((skill,index)=>{
       return <li key={index}>{skill}</li>
       })}
       </ul>
       </div>
  </div>
 </div>


)
}

export const Profile = () => {

  return ( 
<> 
 {data.map(d=>{
  return <User  name={d.name} city={d.city} profile={d.profile} des={d.des} online={d.online} skills={d.skills}/>
   console.log(d)
 })} 
</>
  
   
  )
}
{/* <User  name="James" city="Newyork" profile="1-change1.jpg" des="Fronend developer" online={true} skills={["sjkd","sjh","sjkd","sjh"]}/> */}