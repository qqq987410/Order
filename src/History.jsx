import styles from "./History.module.scss";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

function History({ facebookbStatus }) {
  const [bundle, setBundle] = useState([]);
  const [subBundle, setSubBundle] = useState([]);
  const [mixBundle, setMixBundle] = useState([]);

  useEffect(() => {
    if (facebookbStatus.status) {
      const ref = db.collection("orderList");
      ref.onSnapshot((onSnapshot) => {
        onSnapshot.forEach(() => {
          // 主揪
          ref
            .where("uid", "==", facebookbStatus.uid)
            .where("status", "==", "history")
            .get()
            .then((res) => {
              const historyOrderLists = [];

              res.forEach((a_doc) => {
                // ===start
                ref
                  .doc(a_doc.id)
                  .collection("records")
                  .get()
                  .then((a_res) => {
                    const orderLists = [];

                    a_res.forEach((b_doc) => {
                      // 1.
                      orderLists.push({
                        name: b_doc.data().name,
                        price: b_doc.data().price,
                        qty: b_doc.data().qty,
                        size: b_doc.data().size,
                        ice: b_doc.data().ice,
                        sugar: b_doc.data().sugar,
                        displayName: b_doc.data().displayName,
                      });
                    });
                    // 2.
                    historyOrderLists.push({
                      endTime: a_doc.data().endTime,
                      orderLists: orderLists,
                    });
                    // 3.
                    const newHistoryOrderLists = [...historyOrderLists];
                    setBundle(newHistoryOrderLists);
                    return newHistoryOrderLists;
                  });
              }); // ===end
            });

          // 副揪
          ref
            .where("uid", "!=", facebookbStatus.uid)
            .where("status", "==", "history")
            .get()
            .then((res) => {
              const historyLists = [];
              res.forEach((doc) => {
                // doc.data().endTime
                ref
                  .doc(doc.id)
                  .collection("records")
                  .where("uid", "==", facebookbStatus.uid)
                  .get()
                  .then((b_res) => {
                    const orderLists = [];
                    b_res.forEach((b_doc) => {
                      // 1.
                      orderLists.push({
                        name: b_doc.data().name,
                        price: b_doc.data().price,
                        qty: b_doc.data().qty,
                        size: b_doc.data().size,
                        ice: b_doc.data().ice,
                        sugar: b_doc.data().sugar,
                        displayName: b_doc.data().displayName,
                      });
                    });
                    // 2.
                    historyLists.push({
                      endTime: doc.data().endTime,
                      orderLists: orderLists,
                    });
                    // 3.
                    const newHistoryLists = [...historyLists];
                    setSubBundle(newHistoryLists);
                  });
              });
            });
        });
      });
    }
  }, [facebookbStatus]);

  useEffect(() => {
    const newBundle = [...bundle, ...subBundle];
    setMixBundle(newBundle);
  }, [bundle, subBundle]);
  console.log(mixBundle);
  console.log(mixBundle);
  return (
    <div className={styles.out}>
      <div className={styles.in}>
        <div className={styles.historyTitle}>History Order</div>
        {mixBundle
          .sort((a, b) => (a.endTime.seconds > b.endTime.seconds ? -1 : 1))
          .map((res) => {
            if (res.orderLists.length > 0) {
              return (
                <Unit
                  endTime={res.endTime}
                  orderLists={res.orderLists}
                  key={nanoid()}
                />
              );
            }
          })}
      </div>
    </div>
  );
}
function Unit({ endTime, orderLists }) {
  console.log(typeof endTime);
  function formatDateTime(date) {
    const initTime = date.toDate().toString();
    const fixTime = initTime.replace("GMT+0800 (台北標準時間)", "");
    return fixTime;
  }
  return (
    <div className={styles.unit}>
      <div className={styles.time}>{formatDateTime(endTime)}</div>
      <div className={styles.lists}>
        {orderLists.map((dish) => {
          return <Dish dish={dish} key={nanoid()} />;
        })}
      </div>
    </div>
  );
}
function Dish({ dish }) {
  return (
    <div className={styles.dish}>
      <div className={styles.top}>
        <div className={styles.name}> {dish.name}</div>
        <div className={styles.displayName}>by {dish.displayName}</div>
      </div>
      <div className={styles.down}>
        <div className={styles.price}>{dish.price}元</div>
        <div className={styles.qty}>{dish.qty}份</div>
        {dish.size ? <div className={styles.size}>{dish.size}</div> : null}
        {dish.ice ? <div className={styles.ice}>{dish.ice}</div> : null}
        {dish.sugar ? <div className={styles.suagr}>{dish.sugar}</div> : null}
      </div>
    </div>
  );
}

History.propTypes = {
  facebookbStatus: PropTypes.object.isRequired,
};

Unit.propTypes = {
  endTime: PropTypes.number.isRequired,
  orderLists: PropTypes.array.isRequired,
};
Dish.propTypes = {
  dish: PropTypes.object.isRequired,
};

export default History;
