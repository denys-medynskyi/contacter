  // constructor(props) {
  //   super(props);

  //   this.authUser = this.props.authUser;

  //   this.state = {
  //     loading: false,
  //     contacts: []
  //   }
  // }

  // componentDidMount() {
  //   this.setState({loading: true});

  //   if (this.props.authUser) {

  //   }
  // }

  // deleteContact(id) {
  //   const contactsAfterRemoval = this.state.contacts.filter(
  //     contact => contact.id !== id
  //   );

  //   this.setState({contacts: contactsAfterRemoval})
  //   this.props.firebase.deleteContact(id);
  // }
import { useEffect, useState } from 'react'

export const useFetchContacts = ({ userUid, firebase }) => {
         const [contacts, setContacts] = useState([]);
         const [loading, setLoading] = useState(false);
         const [error, setError] = useState(null);

         useEffect(() => {
          setLoading(true);
          setError(null);

          firebase.listContacts(userUid).then(contacts => {
            setContacts(contacts);
            setLoading(false);
            setError(null);
          }).catch(error => {
            setContacts([]);
            setLoading(false);
            setError(error);
          })
        }, []);

         return { contacts, loading, error };
       };
