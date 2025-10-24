
import { Link } from "react-router-dom";

const Card = ({contact}) => {
  console.log("card prop",contact);
  // console.log(contact);
  
  
  return (
    <>
      <section className="container my-3">
        <div className="row">
         {
            contact.map(user=>
               <div className="col-md-6 border p-3 rounded">
            <div className="row d-flex justify-content-around align-items-center">
              <div className="col-md-3">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-active">
                    Name:{user.name}
                  </li>
                  <li className="list-group-item list-group-item-active">
                    Email:{user.email}
                  </li>
                  <li className="list-group-item list-group-item-active">
                    Contact:
                  </li>
                </ul>
              </div>
              <div className="col-md-2 d-flex flex-column ">
                 <Link className="btn btn-warning my-1" to={`/view/${user.id}`}><i className="fa fa-eye"></i></Link>
                 <Link className="btn btn-primary my-1" to={`/edit/${user.id}`}><i className="fa fa-pen"></i></Link>
                 <button className="btn btn-danger"><i className="fa fa-trash"></i></button>
              </div>
            </div>
          </div>
            )
         }
        </div>
      </section>
    </>
  );
};

export default Card;
