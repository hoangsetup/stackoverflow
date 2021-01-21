I recommended using `for loop` instead of `.map` to check number of products.

And I change a little logic of your function, I commented in bellow code version:

```js
export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    mobile,
    paidAmount,
    discountAmount,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
  } else {
    const order = new OrderModel({
      orderItems,
      user: req.user._id,
      mobile,
      paidAmount,
      discountAmount,
      totalPrice,
    })

    // Make sure all products are available at first
    const products = []
    for (const item of order.orderItems) {
      const product = await ProductModel.findById(item.product)
      if (item.qty <= product.countInStock) {
        product.countInStock = product.countInStock - Number(item.qty)
        products.push(product);
        // Not save the product here, you can not make sure that the order is success
      } else {
        // One of them is out of stock, stop immediate
        res.status(400)
        throw new Error(`The product ${product.name} is out of stock`) // product.name ?
      }
    }

    // Save order at first, You need read about transaction for these actions
    const createdOrder = await order.save()

    // .map with async callback function will return an array of promise
    await Promise.all(products.map(async (pro) => await pro.save()))

    res.status(201).json(createdOrder)
  }
})
```
