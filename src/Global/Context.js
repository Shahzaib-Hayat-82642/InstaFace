import React, { createContext } from "react";
import { Redirect } from "react-router-dom";
import { auth, db, storage } from "../config";
import Home from "../components/Home";
import firebase from "firebase";
export const ContextProvider = createContext();
const Context = (props) => {
  const [model, setModel] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [loader, setLoader] = React.useState(true);
  const [posts, setPosts] = React.useState([]);
  const [password, setPassword] = React.useState(null);
  const [passwordError, setPasswordError] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [emailError, setEmailError] = React.useState(null);
  const openModel = () => {
    setModel(true);
  };
  const closeModel = () => {
    setModel(false);
  };
  const register = async (user) => {
    const { fname, lname, email, password, contact } = user;
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      res.user.updateProfile({ displayName: fname });
      setModel(false);
    } catch (error) {
      console.log(error);
    }
  };
  const login = async (user) => {
    const { email, password } = user;
    const res = await auth.signInWithEmailAndPassword(email, password);
    /*  catchError((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    }); */
  };
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
      setLoader(false);
    });
    // fetch posts from firebase
    db.collection("posts")
      .orderBy("currentTime", "desc")
      .onSnapshot((snp) => {
        setPosts(
          snp.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            image: doc.data().image,
            fname: doc.data().fname,
          }))
        );
      });
  }, [user, loader]);
  const publishComment = (data) => {
    const { id, comment } = data;
    db.collection("posts").doc(id).collection("comments").add({
      comment,
      fname: user.displayName,
      currentTime: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  const create = (data) => {
    const { title, image } = data;
    const upload = storage.ref(`images/${image.name}`).put(image);
    upload.on(
      "state_changed",
      (snp) => {
        let progress = (snp.bytesTransferred / snp.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        //success function/complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              title,
              image: url,
              fname: user.displayName,
              currentTime: firebase.firestore.FieldValue.serverTimestamp(),
            });
          });
      }
    );
  };
  return (
    <ContextProvider.Provider
      value={{
        model,
        openModel,
        closeModel,
        register,
        login,
        user,
        loader,
        logout,
        create,
        posts,
        publishComment,
      }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
};

export default Context;
