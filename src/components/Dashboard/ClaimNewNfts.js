import React, { useEffect, useRef, useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import axios from "axios";
// import Googlemap from "../components/Googleaddress/Address";
import Googlemap from "../../components/Googleaddress/Address";
import Googlecategory from "../../components/Googleaddress/Category";
import Googleemail from "../../components/Googleaddress/Email";
import Googleconnect from "../../components/Googleaddress/Connect";
import Swal from "sweetalert2";
const mapApiJs = "https://maps.googleapis.com/maps/api/js";
const geocodeJson = "https://maps.googleapis.com/maps/api/geocode/json";
const apiKey = "AIzaSyC9LN9PnRFUQgfYCF-MxzvvJ914d7aS3JI";
// import
// console.log(apiKey);

const DynamicForm = () => {
  const [fields, setFields] = useState([
    { id: 1, location: "", lan: "", lat: "" },
  ]);

  const [step, setstep] = useState("1");

  const changeStep = (id) => {
    setstep(id);
  };

  const submitForm = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("nfts", JSON.stringify(fields));
    axios
      .post("/api/nft", formData)
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data.message);
          setFields([{ id: 1, location: "", lan: "", lat: "" }]);
          Swal.fire("success", res.data.message, "success");
        } else {
          Swal.fire(
            "error",
            "Something went Wrong. Please try Again",
            "success"
          );
        }
      })
      .catch((err) => err);
  };

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

  const handleLocationSelect = async (id, selectedLocation) => {
    const results = await geocodeByAddress(selectedLocation);
    const latLng = await getLatLng(results[0]);

    const updatedFields = fields.map((field) =>
      field.id === id
        ? {
            ...field,
            location: selectedLocation,
            lan: latLng.lng,
            lat: latLng.lat,
          }
        : field
    );
    updatedFields.push({
      id: fields.length + 1,
      location: "",
      lan: "",
      lat: "",
    });
    setFields(updatedFields);
    console.log(updatedFields);

    // console.log('Location:', selectedLocation);
    console.log("LatLng:", latLng);
  };

  return (
    <>
      <div className="content-eas-nft-wrapper">
        <h3 className="page-title-item">Claim New Address NFTs</h3>
        <p>
          You can select up to five addresses below to create an Address NFT
          bundle.
        </p>
        <div className="claim-content-wrapper">
          <div>
            {step == "1" ? (
              <Googlemap changeStep={() => changeStep(2)} />
            ) : step == "2" ? (
              <Googlecategory changeStep={() => changeStep(4)} />
            ) : step == "3" ? (
              <Googleemail changeStep={() => changeStep(4)} />
            ) : (
              <Googleconnect />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicForm;
