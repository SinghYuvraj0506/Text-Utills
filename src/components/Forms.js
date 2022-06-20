import React,{useState} from "react";


export default function Forms(props) {
    const [text,setText]=useState("")

    function convertUpperCase(){
        let newText = text.toUpperCase()
        setText(newText)
        props.showalert("Converted to Upper case","success");
    }
    function convertLowerCase(){
        let newText = text.toLowerCase()
        setText(newText)
        props.showalert("Converted to Lower case","success");
      }
      function clearText(){
        setText("")
        props.showalert("Cleared Text","success");
      }
      function copyText(){
        navigator.clipboard.writeText(text)
        props.showalert("Copied to Clipboard!","success");
      }
      function removeExtraSpaces  (){
        let a = text.split(/[ ]+/)
        setText(a.join(" "))
        props.showalert("Removed Extra Spaces!","success");
    }

    function toHandleChange(event){
        setText(event.target.value)
    }


  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="mybox" value={text} onChange = {toHandleChange} rows="8" style={{backgroundColor: props.mode === "dark"?"#212529":"white",color:props.mode ==="dark"?"white":"black"}}></textarea>
        </div>
        <button disabled={text.length===0} className="best btn btn-primary" onClick={convertUpperCase} >Convert to Upper Case</button>
        <button disabled={text.length===0} className="best btn btn-primary mx-2 my-1" onClick={convertLowerCase} >Convert to Lower Case</button>
        <button disabled={text.length===0} className="best btn btn-primary mx-2 my-1" onClick={clearText} >Clear Text</button>
        <button disabled={text.length===0} className="best btn btn-primary mx-2 my-1" onClick={copyText} >Copy Text</button>
        <button disabled={text.length===0} className="best btn btn-primary mx-2 my-1" onClick={removeExtraSpaces} >Remove Extra Spaces</button>
      </div>

      <div className="container">
          <h1>Your Text Summary</h1>
          <p> Words : {text === "" ? 0: text.trim().split(/\s+/).length} and Characters : {text.length}</p>
          <p>{0.24*text.split(" ").length} seconds to read.</p>
          <h2>Preview</h2>
          <p>{text !== ""?text:"Enter something in the textarea to preview it here"}</p>
      </div>
    </>
  );
}
