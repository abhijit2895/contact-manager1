import axios from 'axios'
export class ContactServices{
    static SERVER_URL=`http://localhost:7000`
    static getAllContacts(){
        const dataUrl=`${this.SERVER_URL}/contacts`
        return axios.get(dataUrl)
    }
    static getContact(id){
        const dataUrl=`${this.SERVER_URL}/contacts/${id}`
        return axios.get(dataUrl)
    }
    static createContact(contact){
        
        const dataUrl=`${this.SERVER_URL}/contacts`
        return axios.post(dataUrl,contact)
    }
}