// import React from 'react';
import { useState } from 'react';
import './Popup.css'

const Popup = () => {
    //copy text
    //Selecting and Writing Clipboard Data
    const copyToClipBoard = async () => {
        const copyText = document.getElementById("myInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);

        try {
            await navigator.clipboard.writeText(copyText.value);
            const tooltip = document.getElementById("myTooltip");
            tooltip.innerHTML = "Copied";
        } catch (error) {
            console.error('Error copying text: ', error);
        }
    }

    //changing clipboard Flag
    const outFunc = () => {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
    }

    //Submit
    let newkeySet = [];
    const [apiKey, setApikey] = useState([]);
    const getKey = () => {
        var copyText = document.getElementById("myInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        const key = copyText.value;
        newkeySet = [...apiKey, key];
        setApikey(newkeySet);
    }
    console.log(apiKey);//Check Api keys in a array
    return (
        <div className="popupBody">
            <div className='popUpTop'>
                <p className='popUpHead'>Provide OpenAI API key to access feature</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22ZM11 7H13V9H11V7ZM14 17H10V15H11V13H10V11H13V15H14V17Z" fill="#1F883D" />
                </svg>
            </div>

            <textarea id="myInput" className='popUpInput' placeholder='Insert API Key here' cols="30" rows="10">
            </textarea>

            <div className='popUpBottom'>
                <div className='popUpCopyKeyContainer'>
                    <div className="tooltip">
                        <div onClick={copyToClipBoard} onMouseOut={outFunc} >
                            <span className="tooltiptext" id="myTooltip">Copy to clipboard</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M12.6667 14H5.33333V4.66666H12.6667M12.6667 3.33333H5.33333C4.97971 3.33333 4.64057 3.47381 4.39052 3.72386C4.14047 3.9739 3.99999 4.31304 3.99999 4.66666V14C3.99999 14.3536 4.14047 14.6928 4.39052 14.9428C4.64057 15.1929 4.97971 15.3333 5.33333 15.3333H12.6667C13.0203 15.3333 13.3594 15.1929 13.6095 14.9428C13.8595 14.6928 14 14.3536 14 14V4.66666C14 4.31304 13.8595 3.9739 13.6095 3.72386C13.3594 3.47381 13.0203 3.33333 12.6667 3.33333ZM10.6667 0.666664H2.66666C2.31304 0.666664 1.9739 0.80714 1.72385 1.05719C1.4738 1.30724 1.33333 1.64638 1.33333 2V11.3333H2.66666V2H10.6667V0.666664Z" fill="#1F883D" />
                            </svg>
                        </div>
                    </div>
                    <p className='popUpCopyKey'>Copy API key</p>
                </div>
                <button onClick={getKey} className='SubmitBtn'>SUBMIT</button>
            </div>
        </div>
    );
};

export default Popup;