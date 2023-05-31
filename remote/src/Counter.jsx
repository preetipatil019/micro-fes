import { createSignal } from "solid-js";

export default () => {
    const [ count, setCount] = createSignal(0)
    return (
        <div class="bg-blue-900 text-white px-5">
            <h1>Counter = {count()}</h1>
            <button onClick={()=>setCount(count()+1)}>ADD</button>
        </div>
    )
}