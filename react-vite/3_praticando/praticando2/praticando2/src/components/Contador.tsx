export function Contador(){
    const [count, setCount] = useState(0);
    function useState(){
        setCount(count + 1);
    }
    return(
        <div className="cont">
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
        </div>
    )
}