import {useState, useEffect} from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    height: 250px;
`;

const Input = styled.input`
    display: flex;
    width: 200px;
    height: 250px;
`;

const Notes = () => {
    const [textInput, setTextInput] = useState(""); //state para obtener solo q el usuario escribe en el input
    const [saveNote, setSaveNote] = useState([]); //estado para guardar las notas ya guardadas
    
    const handleChange = (event) => {   //el event es el parametro q recibimos osea el evento
        const nuevoTexto = event.target.value //accedemos al objeto luego al taeget y por ultimo al volor para pasarselo al state
        setTextInput(nuevoTexto) 
    }   
    

    const onSave = () => {
        const nuevaLista = [...saveNote, textInput]
        setSaveNote(nuevaLista);
        setTextInput("")
        console.log("notas guardadas", nuevaLista)
    }

    return (
        <NoteContainer>
            <Input onChange={handleChange}
            value={textInput}
            />
            <button onClick={onSave}> Guardar</button>
            <h4>mostrando las notas guardadas la cuales son las siguientes:</h4>
            <ul>
                {saveNote.map((nota, index) => (
                    <li key={index}>{nota}</li>
                ))}
                </ul>
        </NoteContainer>
    );
};

export default Notes;