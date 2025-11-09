import { useState } from "react";

function Input() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [skills, setSkills]=useState([]);
    const [gender,setGender]=useState("");
    const [city,setCity]=useState("");

const handleSkills=(event)=>{
    console.log(event.target.value, event.target.checked)
if(event.target.checked){
    setSkills([...skills,event.target.value]);
}
else{
    setSkills([...skills.filter((item)=>item!=event.target.value)])
}

}

const haldleClear=()=>{
setEmail("");
 setName("");
  setPassword("");
   setSkills([]);
    setGender("");
     setCity("");
}

    return <div>
        <h1>Controlled Component</h1>
        <form action="" method="get">
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="enter your name" />
            <br />
            <br />
            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="enter your email" />
            <br />
            <br />
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="password" />
            <br />
            <br />
            <h3>select your skills</h3>
            <input style={{ marginLeft: "10px" }} checked={skills.includes("laravel")} onChange={handleSkills} type="checkbox" name="laravel" value="laravel" id="laravel" />
            <label htmlFor="laravel">laravel</label>

            <input style={{ marginLeft: "10px" }} checked={skills.includes("nest")} onChange={handleSkills}  type="checkbox" value="nest" name="nest" id="nest" />
            <label htmlFor="nest">nest.js</label>

            <input style={{ marginLeft: "10px" }} checked={skills.includes("vue")} onChange={handleSkills}  type="checkbox" value="vue" name="vue" id="vue" />
            <label htmlFor="vue">vue</label>

            <input style={{ marginLeft: "10px" }} checked={skills.includes("react")} onChange={handleSkills}  type="checkbox" value="react" name="react" id="react" />
            <label htmlFor="react">react</label>
            <br />
            <br />
            <h3>{skills.toString()}</h3>
            <br />
            <br />
            <h3>select gender</h3>
            <input type="radio" checked={gender=="male"} onChange={(event)=>setGender(event.target.value)} name="gender" id="male" value="male" /> 
            <label htmlFor="male">male</label>
            <input type="radio" checked={gender=="female"} onChange={(event)=>setGender(event.target.value)} name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>

            <br />
            <br />
            <h3>select city</h3>
    <select value={city} onChange={(event) => setCity(event.target.value)} name="city" id="city">
    <option value="">select city</option>
    <option value="dhangadhi">dhangadhi</option>
    <option value="dipayal">dipayal</option>
    <option value="ktm">ktm</option>
</select>

            <br />
            <br />
            <button >Submit</button>
            <button style={{ marginLeft: "10px" }} type="button" onClick={haldleClear}>Clear</button>
        </form>
    </div>
}
export default Input;