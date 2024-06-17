import React, {useState} from 'react';


export default function Textform(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newtext =text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted to Uppercase!","success");
    }

    const handleLowClick = ()=>{
      console.log("Lowercase was clicked");
      let newtext =text.toLowerCase();
      settext(newtext);
      props.showAlert("Converted to Lowercase!","success");
    }

    const handleClearClick = ()=>{
      console.log("clear was clicked");
      settext('');
      props.showAlert("Text has been cleared!","success");
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        settext(event.target.value);
    }

    const handleCopy = ()=>{
      console.log("Text Copied");
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboared!","success");
    }

    const handleExtraSpaces = ()=>{
      console.log("Removed Extra Spaces");
      let newtext= text.split(/[ ]+/);
      settext(newtext.join(" "));
      props.showAlert("Extra spaces has been removed!","success");
    }

    const [text, settext] = useState('Enter text here');
    // settext("new text");

  return (
    <>
      <div className="container my-3">
       <h1 style={{color: props.mode === 'light'?'black':'white'}}>{props.heading} </h1>
       <textarea className="form-control my-3 mt-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'#4e848f',color: props.mode === 'light'?'black':'white'}} id="myBox" rows="8"></textarea>
        <div className='mt-3'>
            <button className="btn btn-primary my-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear</button>
            <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        
      </div>
      < div style={{color: props.mode === 'light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>Avg. time to read the text: {0.008* text.split(' ').length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
     
    </>
  );
}
