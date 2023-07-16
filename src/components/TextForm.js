import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

   const handleUpClick= () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercased!", "success");
   }
   const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercased!", "success");

   }


   const handleOnChange = (event) => {
    setText(event.target.value);

   }

   const handleclClick = () => {
    setText('');
    props.showAlert("text cleared!", "success");

   }

   const handleCopy = () => {
    var text =document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text to copied!", "success");

}

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Extra spaces removed!", "success");

  }
   
  return (
    <>
    <div className='container'>
    <h1 style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>{props.heading}</h1>
   <div className="mb-3">
   <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: (props.mode === 'dark' ? 'grey' : 'white'), color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
    </div>
   <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
   <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
   <button className="btn btn-primary mx-2" onClick={handleclClick}>Clear</button>
   <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
   <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra space</button>


   
    </div>
    <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(' ').length} words and {text.length} chracters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
