const Razorpay = require("razorpay");
const crypto = require("crypto");
const payment = require("../model/payment.model.js");


const instance = new Razorpay({
  key_id: "rzp_test_li4C0f495tXSqk",
  key_secret: "nDG9q8uSJzZE8lrlw6SsFDni",
});

const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };

    const order = await instance.orders.create(options);
   //console.log(order)
    res.status(200).json({ success: true,order});
  } catch (error) {
    res.status(500).send(error);
  }
};

const paymentVarification = async (req, res) => {
  console.log(req.body)
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const secret_body = razorpay_order_id + "|" + razorpay_payment_id;

    const expected_signature = crypto
      .createHmac("sha256", "nDG9q8uSJzZE8lrlw6SsFDni")
      .update(secret_body.toString())
      .digest("hex");

    const isAuth = expected_signature === razorpay_signature;

  

    if (isAuth) {
      await payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });
    }
    res.redirect(
        `http://localhost:3000/`
      );
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { checkout,paymentVarification };