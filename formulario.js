import React,{useState} from "react";


 function AgregarLista(props){
    const [tarea, setTarea] = useState("");
    
    function enviarDatos(e){
        e.preventDefault();
        props.enviarDatos(tarea);
        setTarea("");
    }

    function cambiarDatos(e)  {
        setTarea(e.target.value);
    }

  
    return(
        
        <div>
            <h1>Tan listos pibes jajajaj...(Lista de tareas)</h1>
            <img src="https://www.pngkit.com/png/full/193-1939661_super-mario-bros-celebra-su-aniversario-super-mario.png"/>
            <form onSubmit ={enviarDatos}>
                <input type="text" placeholder="Ingresar tarea" onChange={cambiarDatos} name="tarea" value={tarea} />
                <button type="submit">Agendar</button>
            </form>
            
        </div>
    )
};


export default function ToDoList(props){
    const [notas, setNotas] = useState(props.array);
    
    
    function AgregarNotas(todo){
        setNotas([...notas,todo]);
    } 
    
return(
    <div>
      <AgregarLista enviarDatos={AgregarNotas} /> 
      <ListaDeTareas array={notas}/> 
    </div>
)
} 

function ListaDeTareas(props){
    const Lista = props.array.map((valor,index) =>
    <li key={index}>{valor}</li>)
    return(
        <ul>{Lista}</ul>

    ) 
 
}