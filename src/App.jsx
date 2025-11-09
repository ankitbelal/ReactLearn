const name = "Ankit San";
// import Test from "./Test";
import User from "./props";
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
  return <div>
    {/* <h1>Root component</h1>
    <h1>My Name is {name}</h1>
    <h1>{milan()}</h1> */}

    <User user={user}/>
    {/* <Test/> */}
    {/* <Child />
    <ClickTest /> */}
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