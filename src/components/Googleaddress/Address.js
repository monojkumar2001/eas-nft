import React, {useEffect,useState} from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import axios from 'axios'
import Swal from 'sweetalert2';
import "../../Style/address.css"
import {RxCross2} from "react-icons/rx"
const Address = ({changeStep}) => {
    const [fields, setFields] = useState([{ id: 1, location: '',lan:'',lat:'' }]);
    const [error, setError] = useState(false)

    const storeLocal = () => {
        localStorage.setItem('nfts',JSON.stringify(fields))
    }

    const handleRemoveField = (id) => {
        const updatedFields = fields.filter((field) => field.id !== id);
        setFields(updatedFields);
      };
    
      const handleLocationChange = async (id, location) => {
        const updatedFields = fields.map((field) =>
          field.id === id ? { ...field, location } : field
        );
        setFields(updatedFields);
      };

      const handleLocationSelect = (id,selectedLocation) => {
         axios.get(`api/verifyAddress/${selectedLocation}`).then(res => {
          if(res.data.status === 200){
            takeAddress(id,selectedLocation)
          }else{
            Swal.fire('error','this Address has already been taken');
          }
         })
      }

      const takeAddress = async (id, selectedLocation) => {
        const results =  await geocodeByAddress(selectedLocation);
            const latLng = await  getLatLng(results[0]);
            const updatedFields = fields.map((field) =>
              field.id === id ? { ...field, location:selectedLocation,lan:latLng.lng,lat:latLng.lat } : field
              );
            if(fields.length < 5 && fields.length == id){
              updatedFields.push({id: fields.length +1, location: '',lan:'',lat:''})
            }
            setFields(updatedFields);
      }
  return (
    <div className='google-address' >
    {fields.map((field) => (
        <div  className='google-address-remove'  key={field.id}>
          <PlacesAutocomplete
            value={field.location}
            onChange={(location) => handleLocationChange(field.id, location)}
            onSelect={(selectedLocation) => handleLocationSelect(field.id, selectedLocation)}
            required
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div  className='googleaddress-input-fluid' >
                <input
                  {...getInputProps({ placeholder: 'Enter a real-world address to mint as an NFT*' })}
                  style={{ width:'100%',padding:"15px 20px",borderRadius: '4px', border:"none"}} 
                  id='google-input'
                />
                <div className='suggestion-address'>
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion, index) => (
                    <div
                    className='google-map'
                      key={index}
                      {...getSuggestionItemProps(suggestion)}
                    >
                      {suggestion.description}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          <div className='remove' >
          <button type="button" onClick={() => handleRemoveField(field.id)}>
           <RxCross2/>
          </button>
          </div>
          <br></br>
          {error ?
            <small style={{ color:'red' }}>this is test</small>
            : ''
          }
        </div>
        
      ))}
            <div className="claim-my-nft-item">
              <button  className="save-change-btn custom-btn" onClick={() => {
                        changeStep();
                        storeLocal();
                    }}>
            Claim Nft</button>
            </div>
    </div>
  )
}

export default Address