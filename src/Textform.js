import React , {useState} from 'react'


export default function Textform(props) {
    const [text,setText] = useState('');
    

    const handleUpClick = ()=>{
        console.log("uppercase was clicked ! " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase !","success");
       
    }
    const handleLoClick = ()=>{
        console.log("lowercase was clicked ! " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase !","success");
        
        

    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }

    const handlClearClick =()=>{
        let newText = ('');
        setText(newText);
        props.showAlert("Text has been cleared!","success");
    }

    const handleCopyClick = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard !","success");
    }
    
   
    const handleRemoveSpace = () => {
        let textArr = text.split(" ");
       
        let newText = textArr.join(" ");
        
        let newArr = newText.split(/[ ]+/);
        console.log(newArr);
        setText(newArr.join(" "));
        props.showAlert("Removed extraspaces !","success");

    }


  return (
    <>
    <div>
        <br />
            <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3 my-3 ">
                <textarea className="form-control w-75 tarea" value={text} id="myBox" rows="8" style={{backgroundColor: props.mode ==='light'?'white':'#212529',color:props.mode==='light'?'black':'white',border:"1px solid black"}} onChange={handleOnChange}></textarea>
                </div>
                    <div className='container'>
                        <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-3`} onClick={handleUpClick}>
                            Convert to Uppercase
                        </button>
                        <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-3`} onClick={handleLoClick}>
                            Convert to Lowercase
                        </button>
                        <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-3`} onClick={handlClearClick}>
                            Clear Text
                        </button>
                        <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-3`} onClick={handleCopyClick}>
                            Copy Text
                        </button>
                        <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-3`} onClick={handleRemoveSpace}>
                            Remove extra space
                        </button>
                    </div>
                
    </div>
    <div className="container my-3">
        <h1 style={{color:props.mode==='light'?'black':'white'}}>Text Summary</h1>
        <p style={{color:props.mode==='light'?'black':'white'}}>{text.length>0?'The above text has '+(text.length)+' characters and '+(text.split(" ").length)+' words':'0 words'}</p> 
        <p style={{color:props.mode==='light'?'black':'white'}}>{text.length>0?'It takes '+(0.008 * text.split(" ").length)+ ' minutes to read the text':'It takes 0 minutes to read'}</p>
        <h2 style={{color:props.mode==='light'?'black':'white'}}>Preview</h2>
        <p style={{color:props.mode==='light'?'black':'white'}}>{text.length>0?text:'Enter the text to preview here'}</p>
    </div>

    </>
  )
}
