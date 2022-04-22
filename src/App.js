import React from 'react';
import './App.css';
import { useState, useRef } from 'react';
import { Mention, MentionsInput } from 'react-mentions';




function App() {

  const [content, setContent] = useState("");
  const myInput = useRef();
  const users = [
    {id: 1, display: "Информация ППТО", info: "123"},
    {id: 2, display: "Информация ИЛ", info: "123"},
    {id: 3, display: "Данные по брокеру", info: "123"},
  ];

  function addContent(input) {
    if (input.length <= 950) {
      setContent(input);
    }
  }




  return (
    <div className="App">
      <input
          value={content}
          className="title form-control border border-gray-300 p-2 mb-4 mt-4 outline-none"
          placeholder="Здесь будет видна разметка (обёрнуто в markup в компоненте Mention)"
          type="text"
        />

      <div className="App">
          <MentionsInput
            className="mentions"
            inputRef={myInput}
            placeholder="Напиши здесь свой текст и по хештегу добавь инф-цию из users"
            value={content}
            onChange={(event) => addContent(event.target.value)}
          >
            <Mention
              trigger="#"
              data={users}
              markup="{__id__.__display__}"
              // displayTransform меняет отображаемую информацию в инпуте
              //displayTransform={(id, data) => id === '1' ? `какой-то другой текст` : data}

              style={{
                backgroundColor: "#daf4fa",
              }}
              //renderSuggestion={renderSuggestion}

              
              // onAdd={(display) => setTagNames((tagNames) => [...tagNames, display])}
              appendSpaceOnAdd={true}
            />
          </MentionsInput>
        </div>
    </div>
  );
}

export default App;
