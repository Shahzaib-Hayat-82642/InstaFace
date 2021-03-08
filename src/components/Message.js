import React from "react";
import { ContextProvider } from "../Global/Context";

const Message = () => {
  const { loader, user } = React.useContext(ContextProvider);
  const fname = !loader && user && user.fname ? user.fname : "";
  const [state] = React.useState([
    { id: 1, image: "/images/img1.jpg", name: "Shahzib Hayat" },
    { id: 2, image: "/images/img2.jpg", name: "Qais Sultani" },
    { id: 1, image: "/images/img3.jpg", name: "Rizwan Ali" },
  ]);
  return (
    <div className="message">
      <div className="message__list">
        <h2>Chats</h2>
        {state.map((user) => (
          <div className="message__list-user" key={user.id}>
            <div className="message__list-a">
              <div className="message__list-a-img">
                <img src={user.image} alt={user.image} />
              </div>
              <div className="message__list-a-name">{user.name}</div>
            </div>
            <div className="message__list-b"></div>
          </div>
        ))}
      </div>
    </div>
    function ChatRoom() {
      const dummy = useRef();
      const messagesRef = firestore.collection('messages');
      const query = messagesRef.orderBy('createdAt').limit(25);
    
      const [messages] = useCollectionData(query, { idField: 'id' });
    
      const [formValue, setFormValue] = useState('');
    
    
      const sendMessage = async (e) => {
        e.preventDefault();
    
        const { uid, photoURL } = auth.currentUser;
    
        await messagesRef.add({
          text: formValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          photoURL
        })
    
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
      }
    
      return (<>
        <main>
    
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    
          <span ref={dummy}></span>
    
        </main>
    
        <form onSubmit={sendMessage}>
    
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
    
          <button type="submit" disabled={!formValue}>🕊️</button>
    
        </form>
      </>)
    }
    
    
    function ChatMessage(props) {
      const { text, uid, photoURL } = props.message;
    
      const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    
      return (<>
        <div className={`message ${messageClass}`}>
          <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
          <p>{text}</p>
        </div>
      </>)
    }
    
    
    export default App;
  );
};

export default Message;
