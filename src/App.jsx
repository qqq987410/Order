import styles from "./App.module.scss";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { createFakeData } from "./firebase";
import Navbar from "./Navbar";
import Home from "./Home";
import Main from "./Main";
import Menu from "./Menu";
import OrderList from "./OrderList";
import History from "./History";
import Login from "./Login";
import logo from "./image/Logo.svg";
import firebase from "firebase/app";
import { db } from "./firebase";
import data from "./data";
// import "firebase/auth";
// import "firebase/firestore";

// let reff = db.collection("restaurant");
// data.forEach((item) => {
//    reff
//       .add({
//          address: item.address,
//          businessHour: item.businessHour,
//          category: item.category,
//          phoneNumber: item.phoneNumber,
//          title: item.title,
//       })
//       .then((res) => {
//          item.menu.forEach((meal) => {
//             reff.doc(res.id).set({ id: res.id }, { merge: true });
//             reff
//                .doc(res.id)
//                .collection("menu")
//                .add({
//                   price: meal.price,
//                   title: meal.name,
//                   class: meal.class,
//                   sizeOption: meal.sizeOption,
//                   sizeAndPrice: meal.sizeAndPrice,
//                   suger: meal.suger === undefined ? null : meal.suger,
//                   ice: meal.ice === undefined ? null : meal.ice,
//                })
//                .then((result) => {
//                   reff.doc(res.id).collection("menu").doc(result.id).set({ id: result.id }, { merge: true });
//                });
//          });
//       });
// });

function App() {
  const [data, setData] = useState([]);
  const [facebookbStatus, setFacebookbStatus] = useState({ status: false });
  const [cartListLength, setCartListLength] = useState(0);
  const [cartListTotalPrice, setCartListTotalPrice] = useState(0);

  useEffect(() => {
    if (facebookbStatus.status === true) {
      let ref = db.collection("orderList");
      ref.onSnapshot((onSnapshot) => {
        ref
          .where("uid", "==", facebookbStatus.uid)
          .where("status", "==", "ongoing")
          .get()
          .then((res) => {
            // console.log(res.size); // 之後會有東西
            res.forEach((doc) => {
              ref
                .doc(doc.id)
                .collection("records")
                .onSnapshot((onSnapshot_2) => {
                  let totalPrice = 0;
                  setCartListLength(onSnapshot_2.size);
                  onSnapshot_2.forEach((doc_2) => {
                    totalPrice += doc_2.data().price * doc_2.data().qty;
                  });
                  setCartListTotalPrice(totalPrice);
                });
            });
          });
      });
    }
  }, [facebookbStatus]);

  useEffect(() => {
    // 建立假資料
    createFakeData(setData);
    //  判斷 FB 登錄狀態
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setFacebookbStatus({
          status: true,
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        setFacebookbStatus({ status: false });
      }
    });
  }, []);
  // console.log(data);

  return (
    <>
      <Navbar facebookbStatus={facebookbStatus} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/main">
          <Main data={data} />
        </Route>

        <Route path="/menu">
          <Menu
            data={data}
            setFacebookbStatus={setFacebookbStatus}
            facebookbStatus={facebookbStatus}
            cartListLength={cartListLength}
            cartListTotalPrice={cartListTotalPrice}
          />
        </Route>
        <Route path="/orderList">
          <OrderList
            facebookbStatus={facebookbStatus}
            cartListTotalPrice={cartListTotalPrice}
          />
        </Route>
        <Route path="/history">
          <History facebookbStatus={facebookbStatus} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}
export default App;
