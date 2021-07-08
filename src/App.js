import { detect } from 'detect-browser';
import React from 'react';
import axios from './axios'
import './App.css';
function App() {
  const browser = detect();
  const  handleOnClick = async () =>{
    axios.get('https://devrfz.badin.local:3000/info/v1/documents/pdf/22434382',{
      responseType:'arraybuffer',
      headers:{
          authorization:'Bearer eyJ0eXBlIjoiSldUIiwia2lkIjoiMjU1MTZjNjYtYzlkNy00MTFjLWE2YzUtYTQxZmVmODAxZDE4IiwiYWxnIjoiUlMyNTYifQ.eyJ1c2VybmFtZSI6ImEwZjY2YjA1YTQxNTQ3MjQ5N2M2NzE1MTA1YjVhNWE2IiwibmFtZSI6Ik5BWklWIFBMIDI0MzA5NjkyNTQiLCJyZWdpc3RyYXRpb25OdW1iZXIiOiIxNzI4MDU1NCIsImNsaWVudFR5cGUiOiJjb3Jwb3JhdGUiLCJjb21wYW55TmFtZSI6Ik5BWklWIFBMIDI0MzA5NjkyNTQiLCJhY2NvdW50IjpmYWxzZSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VUkxfVVNFUiIsIlJPTEVfTEVHQUxfUkVQUkVTRU5UQVRJVkUiLCJST0xFX0NPREVfVVNFUiJdLCJpc3MiOiJJbmZvIHBvcnRhbCIsImV4cCI6MTYyNTY2NjkyOSwiaWF0IjoxNjI1NjY0NTI5fQ.fGHBfdFZucENfeBPMy5sho9UMvc6g3p5ZvQ-1L9tSMtQZsPGTNqKWQvT1L36mrcrlUCNLO2xMpdaKGkWnzzBh-6x28OiLw-eW89vzCHasrESZJsM2qXoqfA_imepVXiE7hA_nDVaKKcdJKrRKZG5-HmgS8Zcs_Scd8AcChnNZUTOHd-93R72Yq5dfDItUCWtirmIciebtrDCPlNXK01WhV1M8Kfy2t6kI6pzY5UF_-xBRN6r2TL23Nn0HvCy_AxAuQYFLb2UE4O10UR6M9w9eR5CVYGWBlNkoqJ9wb6G7f4ewZQAdEvSIrjI_1T_c_gQhyCqk4EtnmQU4nDXCAOkSw'
        }}).then(res=>{
          let blobPDF = new Blob([res.data], { type: 'application/json' });
          const url = URL.createObjectURL(blobPDF);

          const link = document.createElement("a");
          document.body.appendChild(link);
          const mouseEvt = document.createEvent("MouseEvents");
          mouseEvt.initMouseEvent("click", true, true, window,
              0, 0, 0, 0, 0, false, false, false, false, 0, null);
          link.target = "_blank"
          link.href = url;
          link.dispatchEvent(mouseEvt);
          link.remove();
         
    }).catch(err=>{
      alert(JSON.stringify(err))
    })
  }
  return (
    <div className="App">
     <p>{browser.name}</p>
     <p>{browser.os}</p>
     <p>{browser.type}</p>
     <p>{browser.version}</p>
     <hr/>
     <button onClick={handleOnClick}>Download</button>
     <br/>
    </div>
  );
}

export default App;

