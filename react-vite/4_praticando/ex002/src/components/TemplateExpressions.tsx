export function TemplateExpressions(){
    const name = "Felipe"
    const data = {
        age: 38,
        job: "Programmer",
    }
    return(
        <div>
            <h1>Ola {name}, tudo bem?</h1>
            <p>Você atua como: {data.job} 
                <p>e você tem {data.age} anos de idade</p>
                <p>{5 + 5}</p>
            </p>
        </div>
    )
}