import React, { useEffect, useState } from 'react';

const InputClaimNFTs = ({placesKey,
    inputId,
    setAddress,
    required}) => {

       //input state
    const [input, setInput] = useState('');
    const [addressName, setAddressName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postCode, setPostCode] = useState('');
    const [formattedAddress, setFormattedAddress] = useState('');

    //functionally clear all state
    const clear = (e) => {
        if (e) e.preventDefault()
        setInput('')
        setAddressName('')
        setStreet('')
        setCity('')
        setCountry('')
        setPostCode('')
        setFormattedAddress('');
    }

    //on mount, load google auto complete 
    useEffect(() => {
        const renderGoogle = () => {
        }

        //if places script is already found then listen for load and then renderGoogle
        let found = document.getElementById('placesScript') ? true : false;
        if (!found) {
            const script = document.createElement("script");
            script.id = 'placesScript';
            script.src = "https://maps.googleapis.com/maps/api/js?key=" + placesKey + "&libraries=places";
            script.async = true;
            script.onload = () => renderGoogle();
            document.body.appendChild(script);
        }
        if (found) {
            document.getElementById('placesScript').addEventListener('load', renderGoogle);
        }
    }, [placesKey, inputId, addressName, city])

    //return address object to parent for your use case
    useEffect(() => {
        const addressObject = {
            formattedAddress: formattedAddress,
            addressName: addressName,
            street: street,
            city: city,
            country: country,
            postCode: postCode
        };
        setAddress(addressObject);
    }, [formattedAddress, addressName, street, city, country, postCode, setAddress])

    //listen for mobile screen size
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        const screenSize = (e) => {
            const w = e.target.innerWidth;
            w < 600 ?
                setMobile(true) :
                setMobile(false)
        }
        window.addEventListener('resize', screenSize);
    }, [])
  return (
    <>
 <div >
            <label >
                Location Search:
                <input
                    id={inputId}
                    type="text"
                    // style={style.fullWidth}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </label>
            <label >
                Number or House Name:
                <input
                    id="addressName"
                    type="text"
                    // style={style.fullWidth}
                    value={addressName || ''}
                    onChange={(e) => setAddressName(e.target.value)}
                    required={required && required}
                />
            </label>
            <label >
                Street:
                <input
                    id="street"
                    type="text"
                    // style={style.fullWidth}
                    value={street || ''}
                    onChange={(e) => setStreet(e.target.value)}
                />
            </label>
            <label >
                City:
                <input
                    id="city"
                    type="text"
                    // style={style.fullWidth}
                    value={city || ''}
                    onChange={(e) => setCity(e.target.value)}
                    required={required && required}
                />
            </label>
            <label >
                Country:
                <input
                    id="country"
                    type="text"
                    // style={style.fullWidth}
                    value={country || ''}
                    onChange={(e) => setCountry(e.target.value)}
                    required={required && required}
                />
            </label>
            <label >
                Post Code:
                <input
                    id="postCode"
                    type="text"
                    // style={style.fullWidth}
                    value={postCode || ''}
                    onChange={(e) => setPostCode(e.target.value)}
                    required={required && required}
                />
            </label>
            <button
                // style={style.button}
                onClick={(e) => clear(e)}
            >
                Clear Address
            </button>
        </div>
    </>
  )
}

export default InputClaimNFTs