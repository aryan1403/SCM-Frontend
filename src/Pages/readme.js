import './readme.css';
export default function ReadMe() {
    return (
        <>
            <h1>Read About us</h1>
            <div id="header">
            <div class="container">

                <div clas="header-text">
                    <h1>Supplychain Management System</h1>
                    <br>
                    <p>Welcome to our project on building a supplychain management system application using Reactjs, node.js and mongodb.We have created a system that is tailored to the  needs and requirements of administrator.With our system, admins will be able to manage inventory, add items and monitor demand planning, all in one centralized location.<br>
                        In response to competetive pressures, managers are focusing on the reengineering of operations. Processes are being streamlined and automated, and work teams are reorganized and redeployed for higher productivity. Together with these changes, companies are looking for ways to better plan and control their operations. They are shifting away from a company with rigid and preplanned activities to one that is able to react quickly and appropriately to changes. 
                        </p>
                </div>
            </div> 
        </div>
        <div id="about">
            <div class="container">
                <div class="row">
                    <div class="about-col-1">
                        <img style="padding-top: 30px;" src="images/user.webp">
                    </div>
                    <div class="about-col-2">
                        <h1 class="sub-title">About our application</h1>
                        <p>Our website will help you manage supplychain seamlessly, as it is user friendly.<br>
                        We have different pages through which admin can navigate and make changes accordingly. We have options to add items and even manage inventory.<br> Supply chain management is the centralized  management of flow of goods - starting from the raw components all the way to delivering the final product to the consumer. 
                        A company creates a network of suppliers (“links” in the chain) that move the product along from the suppliers of raw materials to those organizations that deal directly with users.
                        </p> 

                    </div>
                    <div class="about-col-3">
                        <h1 class="sub-title">Features</h1>
                        <h3>Management Of Inventory</h3>
                        <p>Supply chain management focuses on maintaining an optimum inventory always in organisation. It keeps records and tracks supply of raw materials, spare parts and finished goods. Management of supply chain ensures that all inventories are available in right quantity at right time. </p>
                        <h3>Processing Customer Requirements</h3>
                        <p>Supply chain management accelerates the production processes of organisation. It monitors all activities starting from purchase of raw materials for producing goods till final delivery. It ensures that all sales order are timely completed and handed to logistic team for delivering them on time.</p>
                        <h3>Forecasting Of Demand</h3>
                        <p>Anticipation of customer demands is necessary for every business. It can help them in fulfilling customers need efficiently and timely. All production activities are initiated in accordance with demand which helps in avoiding wastages.</p>
                        <h3>Supplier Relationship Management</h3>
                        <p>Maintaining of better relations with suppliers is crucial for uninterrupted continuity of business. Supply chain management helps in properly managing all interactions with suppliers. It develops a proper network between suppliers and business through which they can easily interact. </p>
                        <h3>Managing Logistics And Shipping</h3>
                        <p> chain management helps in enhancing the delivery performance of business. It ensures that products are delivered faster and timely to all customers. It coordinates well with all transportation channels and warehouses. By supply chain management, companies can faster their delivery process and provide on-time delivery. </p> 


                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
