
import ContactItem from './ContactItem'

function ContactList(){
    return (
    <div>
        <ContactItem name="Sandibek" phone='123'/>
        <ContactItem name="Danara" phone='456'/>
        <ContactItem name="Ismail"/>
        <ContactItem/>
        <ContactItem/>
    </div>
    )
}
export default ContactList