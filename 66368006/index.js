const stripe = require('stripe')('key');

exports.CreateSessionRequest = async (req) => {
  const YOUR_DOMAIN = '';
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'abs',
            images: ['url'],
          },
          unit_amount: 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${YOUR_DOMAIN}?back=true&order_id=${req.clientReferenceId}`,
    metadata: req.metadata,
    client_reference_id: req.clientReferenceId,
    customer_email: req.customerEmail,
    billing_address_collection: 'required',
  });
  return session;
}
