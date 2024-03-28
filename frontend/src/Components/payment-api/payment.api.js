import axios from "axios";


export const checkoutHandler = async (amount) => {
  try {
    const { data: { key } } = await axios.get("http://127.0.0.1:4000/api/getkey");
    const { data: { order } } = await axios.post("http://127.0.0.1:4000/api/checkout", { amount });
     
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Shopper",
      description: "payments page",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtPZmaYio0A3Zs4-y2AU1KYvHFLnd_KIVW6Ewlh3gWQEHCWa9B",
      order_id: order.id,
      callback_url: "http://127.0.0.1:4000/api/verification",
      prefill: {
        name: "Shopper",
        email: "support.shopper@gmail.com",
        contact: "9735248493",
      },
      notes: {
        address: "Jalpaiguri, WB",
      },
      theme: {
        color: "#FF5A5A",
      },
    };
    const razor = new window.Razorpay(options);
    return razor.open();
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
