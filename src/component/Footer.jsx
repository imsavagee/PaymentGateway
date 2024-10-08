import React from 'react'

function Footer() {
    const style = {
        container: {
            paddingLeft: "2rem",
            paddingRight: "2rem"
        }
    }
    const termsAndConditions = [
        {
            id: 1,
            heading: "Acceptance of Terms",
            desc: "By using our website, you agree to abide by all the terms stated here. If you do not agree with these terms, please do not use our website or services.",

        },
        {
            id: 2,
            heading: "Products and Services",
            desc: "All products and services listed on the website are subject to availability. We reserve the right to discontinue any product or service at any time without notice.",

        },
        {
            id: 3,
            heading: "Pricing",
            desc: "We strive to ensure the accuracy of prices listed on our website. However, in case of any pricing errors, we reserve the right to cancel any orders placed at the incorrect price.",

        },
        {
            id: 4,
            heading: "Payment Terms",
            desc: "All payments must be made at the time of order. We accept payments via cash/upi/credit or debit card/bank tranfer. Your order will not be processed until the payment has been confirmed.",

        },
        {
            id: 5,
            heading: "User Accounts",
            desc: "You may be required to create an account to access certain features of the website. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.",

        },
        {
            id: 6,
            heading: "Shipping",
            desc: "Shipping timelines vary depending on the product and location (see Shipping Policy below). We are not responsible for delays due to unforeseen circumstances, such as customs clearance or natural events.",

        },
        {
            id: 7,
            heading: "Intellectual Property",
            desc: "By using our website, you agree to abide by all the terms stated here. If you do not agree with these terms, please do not use our website or services.",

        },

    ]

    const shippingPolicy = [

        {
            id: 1,
            heading: "Processing Time",
            desc: "All orders are processed within 3-5 business days.Orders are not processed or shipped on weekends or holidays.",
        },
        {
            id: 2,
            heading: "Shipping Timeline",
            desc: "Domestic Shipping: Delivery within 3-5 business days after order processing.International Shipping: Delivery within 7-10 business days after order processing.Please note that delivery times may vary based on the destination and shipping method selected.",
        },
        {
            id: 3,
            heading: "Shipping Costs",
            desc: "Shipping costs will be calculated based on your delivery location and the weight of the items purchased. Any applicable customs or import taxes are the responsibility of the customer.",
        },
        {
            id: 4,
            heading: "Tracking Your Order",
            desc: "Once your order has been shipped, you will receive a tracking number via email so you can monitor its progress.",
        },
        {
            id: 5,
            heading: "Undelivered Packages",
            desc: "If a package is returned to us due to an incorrect or incomplete address, we will attempt to contact you to arrange re-delivery. Additional shipping fees may apply.",
        },

    ]
    const refundsCancellations = [
        {
            id: 1,
            heading: "Eligibility for Refunds",
            desc: "We accept returns or refunds for eligible products within 3 days of delivery, provided the product is in its original condition and packaging. Items that are non-refundable include [specific items like perishable goods, digital downloads, etc.]."
        },
        {
            id: 2,
            heading: "Cancellation Policy",
            desc: "Before Shipping: You may cancel your order any time before the item is shipped for a full refund.After Shipping: If the order has been shipped, cancellations will be treated as returns (see Refunds)."
        },
        {
            id: 3,
            heading: "Refund Processing",
            desc: "Once your return is received and inspected, we will notify you of the approval or rejection of your refund.If approved, the refund will be processed within 3 business days, and a credit will automatically be applied to your original method of payment."
        },
        {
            id: 4,
            heading: "Refund Timeline",
            desc: "Refunds typically take [3-5] business days to appear in your bank account, depending on your bank or card issuer. If you do not receive your refund after 6 days, please contact us at ahmedshavez55@gmail.com."
        },
        {
            id: 5,
            heading: "Shipping Costs for Returns",
            desc: "Customers are responsible for shipping costs associated with returning items unless the product was defective or an error was made by us."
        },
        {
            id: 6,
            heading: "Non-Returnable Items",
            desc: "The following items are non-returnable:Digital downloads,Perishable goods,Customized or personalized products"
        },
        {
            id: 7,
            heading: "Shipping Costs for Returns",
            desc: "If you receive a damaged or defective product, please contact us within 3 days of receipt with proof (images) to be eligible for a refund or exchange."
        },
    ]

    return (
        <>
            <div>
                <br /><br />
                <div className='container'>
                    <h3>Terms and Conditions</h3>
                    <p>Welcome to Lipkart! By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before making any purchase.</p>

                    {
                        termsAndConditions.map((item) => (
                            <div style={style.container}>
                                <h6>{item.id}.{item.heading}</h6>
                                <p>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
                <br />
                <hr />
                <div className='container'>
                    <h3>Shipping Policy</h3>
                    <p>At Lipkart, we strive to deliver your products as quickly and efficiently as possible. Please review the shipping terms below:</p>
                    {
                        shippingPolicy.map((item) => (
                            <div style={style.container}>
                                <h6>{item.id}.{item.heading}</h6>
                                <p>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
                <br />
                <hr />

                <div className='container'>
                    <h3>Refunds/Cancellations Policy</h3>
                    <p>We at Lipkart value your satisfaction. Below is our refund and cancellation policy to ensure a smooth experience for our customers.</p>
                    {
                        refundsCancellations.map((item) => (
                            <div style={style.container}>
                                <h6>{item.id}.{item.heading} </h6>
                                <p>{item.desc} </p>
                            </div>
                        ))
                    }
                </div>
                <div className='container'>
                    <p>
                        <h3>Privacy Policy</h3>


                        At Lipkart, we respect and are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or make a purchase.
                        <br/>
                        <b>1. Information We Collect</b>
                        <br/>
                        We collect personal information that you provide to us directly when you create an account, make a purchase, or interact with our customer support. This includes:

                        Personal Information: Name, email address, phone number, shipping address, billing address.
                        Payment Information: Credit/debit card details, payment processing details (we do not store payment details after the transaction is completed).
                        Order Information: Product purchases, shipping details, order history.
                        Account Information: Username, password, preferences, and account activity.
                        Communications: Messages you send to us through our website, email, or customer support.
                        In addition to the information you provide, we may collect certain information automatically when you interact with our site:

                        Cookies and Tracking Technologies: IP address, browser type, operating system, and browsing behavior on our website.
                        <br/> <b>2. How We Use Your Information</b><br/>
                        We use the information we collect for the following purposes:

                        Processing Orders: To process your purchases, payments, and shipping information.
                        Customer Support: To respond to inquiries, resolve issues, and provide customer service.
                        Marketing Communications: To send you promotional emails, newsletters, and updates about products or services. You can opt-out of these communications at any time.
                        Website Analytics: To analyze website performance, improve user experience, and personalize your shopping experience.
                        Security: To detect and prevent fraud or other unauthorized activities on our website.</p>
                </div>
                <div className='container'>
                    <h3>Contact us</h3>
                    <p>Phone - 8368131094</p>
                    <p>Email - ahmedshavez55@gmail.com</p>
                </div>
                <div className='container'>
                    <h3>Address</h3>
                    <p>Lipkart,saket,new Delhi,110082</p>
                </div>
            </div>
        </>
    )
}

export default Footer