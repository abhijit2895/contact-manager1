
import { Link } from 'react-router-dom'
import Input from '../../common/ui/Input'

const EditContact = () => {
  return (
    <>
      <section className='container p-3'>
         <p className='h4 text-primary'>Add Contact</p>
         <p className='fst-italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae tempora velit exercitationem similique beatae qui culpa incidunt sunt ipsa dolor cupiditate quidem suscipit voluptate quo aperiam voluptatibus quasi, quam mollitia?</p>
         <div className="row">
            <div className="col-md-4">
                <div className="mb-2">
                <Input type="text" label="title" placeholder="Name" name="name" id="name" />
                </div>
                <div className="mb-2">
                
                <Input type="text" label="title" placeholder="Name" name="name" id="name" />
                </div>
                <div className="mb-2">
                
                <Input type="text" label="title" placeholder="Name" name="name" id="name" />
                </div>
                <div className="mb-2">
                
                <Input type="text" label="title" placeholder="Name" name="name" id="name" />
                </div>
                <div className="mb-2">
                
                <Input type="text" label="title" placeholder="Name" name="name" id="name" />
                </div>
                <div className="mb-2">
                
                <Input type="text" label="title" placeholder="Name" name="name" id="name" />
                </div>
                <div className="mb-2">
                
                <Input type="text" label="title" placeholder="Name" name="name" id="name" />
                </div>
                <div className="mb-2">
                    <Link className='btn btn-dark' to='/'>Cancel</Link>
                    <Link className='btn btn-primary ms-2' to='/'>Update</Link>
                </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default EditContact
