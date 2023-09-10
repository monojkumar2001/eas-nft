import React,{useState,useEffect} from "react";
import {FaSearch} from "react-icons/fa";
import TicketNewModel from "./TicketNewModel";
import TicketListItem from "./TicketListItem";
import axios from "axios";

const Ticket = () => {

  const [list, setList] = useState([])
  const [tickets, setTickets] = useState([])
  const [subject, setSubject] = useState([])
  const [search, setSearch] = useState('')
  const [option, setOption] = useState('')
  const [user, setUser] = useState('')

  const [showModel, setShowModel] = useState(false)
  const [renderAgain,setRenderAgain] = useState(false)

  const actionModel = () => {
    setShowModel(!showModel)
  }

  useEffect(() => {
    setUser(localStorage.getItem('user'))
    axios.get('api/ticket-subject').then(res => {
      setSubject(res.data.data)
    })
    axios.get(`api/ticket/all/${localStorage.getItem('user')}`).then(tic => {
      setTickets(tic.data.data)
      setList(tic.data.data)
    })
  }, [renderAgain])


  const [inputValue, setInputValue] = useState({
    order_id : '',
    subject: '',
    message: '',
    file:'',
    error_log: []
  })

  const handleInput = (e) => {
    if(e.target.type == 'file'){
      setInputValue({
        ...inputValue,
        file : e.target.files[0]
      })
    }else{
      setInputValue({
        ...inputValue,
        [e.target.name] : e.target.value
      })
    }
  }

  function submitForm(event) {
    event.preventDefault()
    const url = 'api/ticket';
    const formData = new FormData();
    formData.append('user_id', user);
    formData.append('order_id', inputValue.order_id);
    formData.append('subject', inputValue.subject);
    formData.append('message', inputValue.message);
    formData.append('file', inputValue.file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    axios.post(url, formData, config).then((res) => {
        if(res.data.status === 200){
          console.log(res.data.data);
          setInputValue({
            ...inputValue,
            order_id : '',
            subject: '',
            message: '',
            file:'',
            error_log: []
          })
          setRenderAgain(!renderAgain);
          setShowModel(!showModel)
        }else{
          setInputValue({
            ...inputValue,
            error_log:res.data.data
          })
        }
    });

  }


  const serchHandle = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value);
  }

  const handleOption = (e) => {
    console.log(e.target.value)
    setOption(e.target.value);
  }


const keys = ['subject','message'];

const filterData = () => {
  let updatedData = list;
  // updatedData = updatedData.slice(firstPageIndex, lastPageIndex);
  updatedData = updatedData.filter( (item) => 
            keys.some((key) => item[key].toLowerCase().includes(search.toLowerCase()))
        );

  if(option != 'any'){
      updatedData = updatedData.filter( (item) => 
      item.status == option 
    )
  }
  setTickets(updatedData);
}

useEffect(() => {
  filterData();
}, [search,option])

  return (
    <>
      <div className="content-eas-nft-wrapper">
        <div className="ticket-header-item d-flex align-items-center justify-content-between">
            <div className="ticket-header-left-item d-flex align-items-center gap-3">
            {subject.length > 0 ?
                <TicketNewModel subject={subject} serchHandle={serchHandle} handleOption={handleOption} inputValue={inputValue} handleInput={handleInput} submitForm={submitForm} showModel={showModel} actionModel = {actionModel}/>
                :
                ''
                }  
            </div>
        </div>
        <div className="ticket-item-content mt-4">
          {
            tickets.length > 0 ?
            <TicketListItem tickets={tickets}/>
            : ''
          }
        </div>
      </div>
    </>
  );
};

export default Ticket;
