/* eslint-disable max-lines-per-function */
function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],

    total() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.payments.push(payment);
    },

    addPayments(payments) {
      payments.forEach(this.addPayment, this);
    },

    paymentTotal() {
      return this.payments.reduce((sum, payment) => sum + payment.total(), 0);
    },

    amountDue() {
      return this.total() - this.paymentTotal();
    }
  };
}

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