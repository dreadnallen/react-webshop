import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";

// init
import { companies, emptyOrder } from "../lib/init";

// api
import * as API from "../lib/api";

// components
import SelectCompany from "./SelectCompany";
import OrderList from "./OrderList";

interface OrderAdminProps {
  orderStatus: string[];
  products: Product[];
}

const OrderAdmin: React.FC<OrderAdminProps> = ({ orderStatus, products }) => {
  const [companyOrders, setCompanyOrders] = useState<Order[]>([emptyOrder]);

  const { slug } = useParams();
  const history = useHistory();

  const currentCompany: Company | undefined = companies.find(
    company => company.slug === slug?.toLowerCase()
  );

  const currentCompanyId = currentCompany ? currentCompany.id : 0;

  useEffect(() => {
    const setOrdersAsync = async () => {
      const orders: Order[] = await API.get<Order>(
        `orders?companyId=${currentCompanyId}`
      );
      orders.sort((x, y) => (x.created < y.created ? 1 : -1));
      setCompanyOrders(orders);
    };
    setOrdersAsync();
  }, [currentCompanyId]);

  const changeCompany = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCompanyId = parseInt(e.target.value);
    const selectedCompany = companies.find(
      company => company.id === selectedCompanyId
    );
    history.push(`/admin/${selectedCompany?.slug}`);
  };

  const changeStatus: HandleChange = (e, order) => {
    order.status = parseInt(e.target.value);

    const filteredOrders = companyOrders.filter(o => o !== order);
    const updatedOrders = filteredOrders
      .concat([order])
      .sort((x, y) => (x.created < y.created ? 1 : -1));
    setCompanyOrders(updatedOrders);
  };

  const updateItem: UpdateItem = ({ items, item, order, quantity }) => {
    if (!items || !item || !order) return;
    if (quantity) {
      item.quantity = quantity;
    } else {
      items = items.filter(i => i !== item);
    }
    order.totalPrice = getTotalPrice(items);
    order.orderRows = toOrderRows(items, order.id);

    updateOrder(order);
  };

  const saveOrder: (order: Order) => Promise<Order> = async (order: Order) => {
    const response = await API.save<Order>(order, "orders", order.id);
    console.log("save order:", JSON.stringify(order));
    console.log("response:", response);
    return response;
  };

  const updateOrder = (order: Order) => {
    const filteredOrders = companyOrders.filter(o => o !== order);
    const updatedOrders = filteredOrders
      .concat([order])
      .sort((x, y) => (x.created < y.created ? 1 : -1));

    setCompanyOrders(updatedOrders);
  };

  const deleteOrder: (order: Order) => void = async (order: Order) => {
    if (order.id) {
      const response = await API.del<Order>("orders", order.id);
      console.log("delete order:", JSON.stringify(order));
      console.log("response:", response);
      if (response && response.status && response.status === 200) {
        const filteredOrders = companyOrders
          .filter(o => o !== order)
          .sort((x, y) => (x.created < y.created ? 1 : -1));
        setCompanyOrders(filteredOrders);
      }
    }
  };

  const getTotalPrice = (items: CartItem[]) => {
    let result = 0;
    items.map(item => (result += item.product.price * item.quantity));
    return result;
  };

  const toOrderRows = (items: CartItem[], orderId: number | undefined) => {
    return items.map(item => ({
      productId: item.product.id,
      orderId,
      amount: item.quantity
    })) as OrderRow[];
  };

  return (
    <>
      <div className="row">
        <h1 className="m-4 text-secondary">Order admin</h1>
      </div>
      <div className="row">
        <div className="col col-12 col-lg-6 mb-4">
          <SelectCompany
            companies={companies}
            selected={currentCompanyId}
            onChange={changeCompany}
          />
        </div>
        <div className="col">
          <OrderList
            orders={companyOrders}
            products={products}
            orderStatus={orderStatus}
            changeStatus={changeStatus}
            updateItem={updateItem}
            saveOrder={saveOrder}
            deleteOrder={deleteOrder}
          />
        </div>
      </div>
    </>
  );
};

export default OrderAdmin;
