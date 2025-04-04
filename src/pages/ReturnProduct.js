import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ReturnProduct = () => {
    return (
      <>
      <Meta title={"Повернення"} />
      <BreadCrumb title=" Повернення" />
      <section className="payment-wrapper my-3">
        <div className="container-xxl">
          <div className="row">
          <h3 className="py-3">ПОВЕРНЕННЯ ТА ОБМІН</h3>
          <p>Повернення і обмін товару можливе в наступних ситуаціях:</p>
          <p><b>1.</b> Коли ми помилково відправили Вам не той товар. <br />В такому випадку ми за власний рахунок обміняємо товар або повернемо гроші якнайшвидше. <br />Повідомити про помилку можна написавши на пошту або зателефонувавши по номеру <a href="tel:+37 (099)456678" >+37 (099)456678</a>.</p>
          <p><b>2.</b> Коли доставлений товар не підійшов. <br />В цьому випадку якщо товар не був у користуванні і не втратив товарний вигляд (збереглася оригінальна упаковка, немає пошкоджень і слідів користування), Ви повертаєте товар нам, а ми забираємо невідповідний товар і повертаємо вам гроші. <br />У разі, якщо ж товар був у користуванні, кожен випадок розглядається індивідуально.</p>
            </div>
          </div>
      </section>
      </>
    )
  };
  
  export default ReturnProduct;


