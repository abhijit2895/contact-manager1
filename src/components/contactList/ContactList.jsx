import { Link} from "react-router-dom"
import Card from "../../common/ui/Card"
import { ContactServices } from "../../contactServices/contactServices"
import { useEffect, useState } from "react"
import Loading from "../../common/Loading"


const ContactList = () => {
  const [contacts,setContacts]=useState([])
  const [loading,setLoading]=useState(false)
  const getAllContacts=async()=>{
    setLoading(true)
    const response=await ContactServices.getAllContacts();
    try{
      if(!response.status==200) throw new Error("couldn't fetch the data!")
        
    console.log(response);
    setContacts(response.data);
    setLoading(false)
    }catch(error){
      console.log(error);
      setLoading(false)
      

    }
  }
  useEffect(()=>{
    getAllContacts()

  },[])
  return (
    <>
    <section className="container p-3">
         <p className="h4">Contact List 
            <span className="ms-3"><Link className="btn btn-primary" to='/add'><i className="fa fa-plus-circle"></i>Add</Link></span>
         </p>
         <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nihil, sint libero cum soluta odit cupiditate repudiandae harum ipsum esse deserunt ea reiciendis facere tempore non doloremque voluptate laboriosam fugiat.</p>
         <div className="row">
            <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Search contact" />
            </div>
         </div>
         <div className="row d-flex">
            {
              loading?<Loading/>:
              
             <Card contact={contacts}/>

            }
             {/* <Card/> */}
         </div>
    </section>
    
        
    </>
  )
}

export default ContactList
