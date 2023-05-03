import React, {useState} from 'react'

export default function About(props) {
    
    // const [myStyle, setmyStyle] = useState({
    //     color :'black',
    //     backgroundColor : 'white'
    // })
    
    // const [btnText, setbtnText] = useState('Enable dark mode')

    // const toggleStyle = ()=>{
    //      if(myStyle.color === 'black'){
    //         setmyStyle  ({
    //             color :'white',
    //             backgroundColor : 'black',
    //             border : '1px solid greenyellow'
    //         })
    //         setbtnText('Enable light mode');
    //      }else{
    //         setmyStyle ({
    //             color :'black',
    //             backgroundColor : 'white'

    //         })
    //         setbtnText('Enable dark mode');
    //      }
    // }



  return (
    <>
    <div className="container my-4 "  >
        

        <h1 className='my-3' style={{color:props.mode==='light'?'black':'white'}}>About Us</h1>
                <div>
                    <div className="accordion" id="accordionExample" >
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={{backgroundColor: props.mode ==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your text</strong>
                </button>
                </h2>
        
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode ==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}}>
                    Textutils gives you a way to analyze your text quicklyand efficiently.Be it word count , character count or time to read the text.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed"style={{backgroundColor: props.mode ==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode ==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}}>
                    Textutils is a free character counter tool that provides instant character  count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={{backgroundColor: props.mode ==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode ==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}}>
                    This word counter software works in any browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel documents, essays, etc.
                </div>
                </div>
            </div>
            </div>
            
                </div>
    </div>
    </>
  )
}

