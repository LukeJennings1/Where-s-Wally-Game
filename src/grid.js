

function Grid() {

let columnArray = []

  
        for (let i = 0; i < 100; i++) {
            columnArray.push(<span className="columns" key={i}></span>)
        
}

let arr = [];


    for(let i = 0; i < 100; i++) {
        arr.push(<span className = 'rows' key={i}>{columnArray}</span>)
    }
   

    return (
        <div className="grid-container">
            { arr }
        </div>
    );
}

export default Grid;