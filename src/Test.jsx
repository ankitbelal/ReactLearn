import { useState } from "react";
function Test() {
    return <div>
        <Game />

        <Apple />
    </div>
}

function Game() {
    const [game, setGame] = useState("PUBG");
    const [count, setCount] = useState(0);
    const [toggle,setToggle]=useState("show");

    return (
    <div>
        <h1>{game}</h1>
        <button onClick={game == "PUBG" ? () => setGame("firfirey") : () => setGame("PUBG")}>change game</button>
        <br />
        <br />
        <h1>count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>count +</button>
        <button onClick={() => setCount(count - 1)}>count -</button>

        {
            count==0?<h1>condition {count}</h1>
            :count==1?<h1>condition {count}</h1>
            :count==2?<h1>condition {count}</h1>
            :<h1>other condition</h1>
        }
        <br />
        <br />
        {toggle=="show"?<div><h1> monkey</h1></div>:null}
        <button onClick={toggle=="show"?()=>setToggle("hide"):()=>setToggle("show")}>{toggle=="show"?"hide":"show"} monkey div</button>
    </div>
    )
}
function banana(mango) {
    return alert("function apple call banana and prints " + mango);
}

function Apple() {
    return <div><br />
        <button onClick={() => banana('mango')}>click Apple</button>
    </div>
}

export default Test;