import React, { useState, useEffect } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import "../../Style/category.css";
import Swal from "sweetalert2";
import { useNavigate,useLocation } from "react-router-dom";

//  Tipply Popop
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Category = ({ changeStep }) => {

  const navigate = useNavigate();
  const [placement, setPlacement] = useState('right'); // Default placement for desktop

  // Check if the screen width is less than a certain breakpoint (e.g., 768px for mobile)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPlacement('top'); // Change placement to 'left' for mobile
      } else {
        setPlacement('right'); // Revert to 'right' for desktop
      }
    };
  
    // Attach the event listener
    window.addEventListener('resize', handleResize);
  
    // Initial placement check
    handleResize();
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  // Tipply popop
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputField, setInputField] = useState({
    nft: "",
    email: "",
    address: "",
    category: "",
    subCategory: "",
    error_log: [],
  });

  const inputsHandler = (e) => {
    e.persist();
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios.get("api/category").then((res) => setCategory(res.data.data));
    setLoading(false);
  }, []);


useEffect(() => {
  setInputField({
    ...inputField,
    nft: localStorage.getItem("nfts"),
    email: localStorage.getItem("email"),
    address: localStorage.getItem("user_id"),
});
}, []);

  const handleCategoryInput = (e) => {
    const cid = e.target.value;
    if (cid) {
      axios
        .get(`api/sub-category/${cid}`)
        .then((res) => setSubCategory(res.data.data));
      setInputField({
        ...inputField,
        [e.target.name]: e.target.value,
        subCategory: "",
      });
    }
    console.log(subCategory.length);
  };
  const storeLocal = () => {
    if (inputField.category == "" || inputField.subCategory == "") {
      Swal.fire("error", "You need to select both options", "error");
    } else {
      if(localStorage.getItem('user_id')){
        console.log('submitForm')
        submitForm()
      }else{
        console.log('else submitForm')
        changeStep();
      localStorage.setItem("category", inputField.category);
      localStorage.setItem("sub-category", inputField.subCategory);
      }
      
    }
  };

  const submitForm = () => {
    let formData = new FormData();
    formData.append('nfts',localStorage.getItem("nfts"));
    formData.append("category", inputField.category);
    formData.append("subCategory", inputField.subCategory);
    formData.append("address", localStorage.getItem("user_id"));
    axios.post('/api/nft', formData).then(res => {
        if (res.data.status === 200) {
          console.log(res.data.message)
        var itemsToRemove = ['nfts', 'email', 'category', 'sub-category'];
        itemsToRemove.forEach(function(item) {
          localStorage.removeItem(item);
        });
        Swal.fire("success", res.data.message, "success");
        navigate("/account/my-nft");
        // window.location.reload();
        }else {
        console.log(res.data.message)
        }
    })
    }

  if (loading) {
    return (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    );
  }






  
  return (
    <div className="meta-forms-item cpt-6">
      <div className="category-data">
        <div className="input-group">
          <label htmlFor="category"> select your Category :</label>
          <div className="select-form d-flex align-items-center gap-3 justify-content-center">
            <Tippy
                  placement={placement}
              className="custom-tooltip"
              content="First name used in your government-issued ID, written in English characters. In case your name do contains digits, type digits in words"
              visible={visible}
              onClickOutside={hide}
            >
              <select
                name="category"
                onChange={handleCategoryInput}
                value={inputField.category}
                aria-invalid="false"
                className="form-control input-select"
                required
                onClick={visible ? hide : show}
              >
                <option value="">Select Category</option>
                {category.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </Tippy>
            <span>
              <img src="/images/dashboard/what-icon-1.svg" alt="" />
            </span>
          </div>
          <small style={{ color: "red" }}>
            {inputField.error_log.category}
          </small>
        </div>

        <div className="input-group">
          <label htmlFor="subCategory">select your Sub Category :</label>
          <div className="select-form d-flex align-items-center gap-3 justify-content-center">
            <select
              name="subCategory"
              onChange={inputsHandler}
              value={inputField.subCategory}
              className="form-control input-select"
              aria-invalid="false"
              required
            >
              <option value="">Select Sub Category</option>
              {subCategory.map((subcat) => (
                <option value={subcat.id} key={subcat.id}>
                  {subcat.name}
                </option>
              ))}
            </select>
            <span>
              <img src="/images/dashboard/what-icon-1.svg" alt="" />
            </span>
          </div>
          <small style={{ color: "red" }}>
            {inputField.error_log.subCategory}
          </small>
        </div>
      </div>

      <div>
        <div className="claim-my-nft-item">
          <button
            className="save-change-btn custom-btn"
            onClick={() => {
              storeLocal();
            }}
          >
            Claim Nft
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
