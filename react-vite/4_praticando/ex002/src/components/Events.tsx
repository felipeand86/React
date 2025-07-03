export function Events(){
    function handleMyEvent(){
    console.log("Você clicou")
    }

const renderSomething = (a) => {
    if (a){
        return <h1>Renderizando isso</h1>
    } else {
        return <h1>Isso tbm</h1>
    }
}

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
                <div>
                    <button onClick={() => console.log("Clicou!")}>Clique aqui tbm</button>
                    <button onClick={() => {
                        if (true){
                            console.log("Isso não deveria existir")
                        }
                    }}>Clica aqui tbm por favor</button>
                </div>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}