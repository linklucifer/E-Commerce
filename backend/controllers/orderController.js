

// Placing orders using COD method
const placeOrder = async (req, res) => {

    try {

        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            paymentMethod: "COD",
            payment: false,
            data: Date.now()
        }

    } catch (error) {

    }

}

// Placing orders using Stripe method
const placeOrderStripe = async (req, res) => {

}

// Placing order using Razorpay method
const placeOrderRazorpay = async (req, res) => {

}

// All orders data for Admin Panel
const allOrders = async (req, res) => {

}

// User Order Data For Frontend
const userOrders = async (req, res) => {

}

// Update order status from Admin Panel
const updateStatus = async (req, res) => {

}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }