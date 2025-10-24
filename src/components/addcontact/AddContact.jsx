
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../common/ui/Input'
import { useState } from 'react'
import { ContactServices } from '../../contactServices/contactServices'

const AddContact = () => {
  const navigate=useNavigate()
  const [contact,setContact]=useState({
    name:'',
    email:'',
    photoURL:'',
    contact:'',
    company:'',
    group:'',
    designation:''
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
    setContact(prev=>({
      ...prev,
      [name]:value
    }))

    
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const postData=await ContactServices.createContact(contact)
    console.log("post",postData);
    navigate('/')
    
    
  }
  
    console.log(contact);
  return (
    <>
      <section className='container p-3'>
         <p className='h4 text-primary'>Add Contact</p>
         <p className='fst-italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae tempora velit exercitationem similique beatae qui culpa incidunt sunt ipsa dolor cupiditate quidem suscipit voluptate quo aperiam voluptatibus quasi, quam mollitia?</p>
         <div className="row">
            <div className="col-md-4">
                <form action='' onSubmit={(e)=>{handleSubmit(e)}}>
                  <div className="mb-2">
                <Input type="text"  placeholder="Name" name="name" id="name" onChange={(e)=>{handleChange(e)}} />
                </div>
                <div className="mb-2">
                
                <Input type="text"  placeholder="PhotURL" name="photoURL" id="photoURL" onChange={(e)=>{handleChange(e)}}  />
                </div>
                <div className="mb-2">
                
                <Input type="email" placeholder="Email" name="email" id="email" onChange={(e)=>{handleChange(e)}}  />
                </div>
                <div className="mb-2">
                
                <Input type="tel"  placeholder="Mobile" name="contact" id="contact" onChange={(e)=>{handleChange(e)}}  />
                </div>
                <div className="mb-2">
                
                <Input type="text" placeholder="Company" name="company" id="company" onChange={(e)=>{handleChange(e)}}  />
                </div>
                <div className="mb-2">
                
                <Input type="text"  placeholder="Designation" name="designation" id="designation" onChange={(e)=>{handleChange(e)}}  />
                </div>
                <div className="mb-2">
                
                <Input type="text"  placeholder="Select Your Group" name="group" id="group" onChange={(e)=>{handleChange(e)}} />
                </div>
                <div className="mb-2">
                    <Link className='btn btn-dark' to='/'>Cancel</Link>
                    <button type='submit' className='btn btn-primary ms-2'>Create</button>
                </div>
                </form>
            </div>
         </div>
      </section>
    </>
  )
}

export default AddContact
