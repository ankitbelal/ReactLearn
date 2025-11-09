const name = "Ankit San";
// import Test from "./Test";
// import User from "./props";
// import User from "./propswithjsx";
import Input from "./controlledComponent";
function milan() {
  return "my name is milan";
}
function App() {
  let user={
    name:"Ankit San",
    email:"aankitbelal@gmail.com",
    age:23,
    gender:"male"
  }
    let user2={
    name:"Saraswati Bist",
    email:"saraswati@gmail.com",
    age:23,
    gender:"female"
  }
  return <div>
    {/* <h1>Root component</h1>
    <h1>My Name is {name}</h1>
    <h1>{milan()}</h1> */}


{/* props */}
    {/* <User user={user}/>
        <User user={user2}/> */}

        {/* jsx in props */}
{/* <User color="orange                                                                                             ">
  <h3 style={{color:"red", border:"5px solid blue", width:"300px", margin:"10px"}}> this is jsx passed through the props sir</h3>
</User> */}
    {/* <Test/> */}
    {/* <Child />
    <ClickTest /> */}


    {/* input state value */}
    <Input/>
  </div>
}

function Child() {
  return <div>this is child in the root</div>
}

function handlClick() {
  alert('iam clicked');
}
function ClickTest() {
  return <div>
    <button onClick={handlClick}>click me</button>
    <button onClick={() => { alert('iam pressed') }}>press me</button>
  </div>
}
export default App;