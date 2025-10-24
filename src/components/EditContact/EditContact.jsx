
import { Link, useParams } from 'react-router-dom'
import Input from '../../common/ui/Input'
import { ContactServices } from '../../contactServices/contactServices';
import { useEffect, useState } from 'react';

const EditContact = () => {
  const [contact,setContact]=useState({})
  const params=useParams()
  console.log(params);
  const {contactId}=params


  const getContact=async()=>{
     const response=await ContactServices.getContact(contactId)
     setContact(response.data)
     console.log(response.data);
     
  }

  useEffect(()=>{
    getContact()
  },[])
  
  return (
    <>
      <section className='container p-3'>
         <p className='h4 text-success'>Edit Contact</p>
         <p className='fst-italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae tempora velit exercitationem similique beatae qui culpa incidunt sunt ipsa dolor cupiditate quidem suscipit voluptate quo aperiam voluptatibus quasi, quam mollitia?</p>
         <div className="row">
            <div className="col-md-4">
                <div className="mb-2">
                <Input type="text" label="title" placeholder="Name" name="name" id="name" value={contact.name} />
                </div>
                <div className="mb-2">
                
                <Input type="text"  placeholder="PhotURL" name="photoURL" id="photoURL" value={contact.photoURL} onChange={(e)=>{handleChange(e)}}  />
                </div>
                <div className="mb-2">
                
                <Input type="email" placeholder="Email" name="email" id="email" value={contact.email} onChange={(e)=>{handleChange(e)}}  />
                </div>
                <div className="mb-2">
                
                <Input type="tel"  placeholder="Mobile" name="contact" id="contact" value={contact.contact} onChange={(e)=>{handleChange(e)}}  />
                </div>
                <div className="mb-2">
                
                <Input type="text" placeholder="Company" name="company" id="company" value={contact.company} onChange={(e)=>{handleChange(e)}}  />
                </div>
                <div className="mb-2">
                
                <Input type="text"  placeholder="Designation" name="designation" id="designation" value={contact.designation} onChange={(e)=>{handleChange(e)}}  />
                </div>
                <div className="mb-2">
                
                <Input type="text"  placeholder="Select Your Group" name="group" id="group" value={contact.group} onChange={(e)=>{handleChange(e)}} />
                </div>
                <div className="mb-2">
                    <Link className='btn btn-dark' to='/'>Cancel</Link>
                    <button type='submit' className='btn btn-success ms-2'>Update</button>
                </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default EditContact
