function createPayment(invoice = {}) {

  let payment = {
    phone: invoice.phone || 0,
    internet: invoice.internet || 0,
    amount: invoice.amount,
  };

  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  };
  return payment;
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000