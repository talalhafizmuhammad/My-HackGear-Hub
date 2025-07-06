document.addEventListener("DOMContentLoaded", () => {
    const selectedProductKey = localStorage.getItem("selectedProduct");
    const productDetailsContainer = document.getElementById("productDetails");
    const priceSummaryContainer = document.getElementById("priceSummary");

    if (!selectedProductKey) {
        productDetailsContainer.innerHTML = "<p>No product selected. Redirecting...</p>";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
        return;
    }

   
    const products = {
        prod1: {
            name: "V for Vendetta Mask Patch",
            price: 1230,
            description: "Iconic mask patch for ethical hacking enthusiasts."
        },
        prod2: {
            name: "Hacker Hooded Scary Mask",
            price: 5280,
            description: "Perfect hoodie for ethical hackers."
        },
        prod3: {
            name:"Hacker 2 Doomsday Sinclair 48/128K ZX Spectrum Activision 1986 Big Box RARE",
            price: 18230,
        description: "Rare collectable for retro hacking enthusiasts A perfect product in E.H",
                    
        },
        prod4: {
            name: "Computer hacking for beginners by Jason Knox",
            price: 14299,
            description: "Hacking: Ultimate Hacking for Beginners, How to Hack the networks, devices, internet phishing and spoofing attacks"
        },
        prod5: {
            name: "Penetration tester and hacking guider by Miles Price",
            price: 15999,
            description: "Hacking: Ultimate Hacking for Beginners, How to Hack the networks, devices, internet phishing and spoofing attacks"
        },
        prod6: {
            name: "Kali Linux and Networking Basics by Karnel Erickson",
            price: 12230,
            description: "Hacking: Ultimate Hacking for Beginners, How to Hack the networks, devices, internet phishing and spoofing attacks"
        },
        prod7: {
            name: "Flipper Zero - Versatility for wireless network breaching and spoofing",
            price: 145230,
            description: "a portable multi-tool for pentesters and hardware hackers, featuring a 1.4-inch monochrome LCD, sub-1 GHz transceiver, infrared, GPIO, and USB support for various protocols. It supports radio frequencies, RFID, infrared, and other wireless protocols, making it versatile for hacking and experimentation."
        },
        prod8: {
            name: "Raspberry Pi - A cheap tool which makes car hacking easier",
            price: 25280,
            description: "small, affordable single-board computer with a quad-core ARM processor, multiple I/O ports, and support for various operating systems, vulnerability expert."
        },
        prod9: {
            name: "USB Rubber Ducky - A malware master tool",
            price: 118230,
            description: "USB device that emulates a keyboard to automate keystroke injection attacks, with customizable scripts for penetration testing."
        },
        prod10: {
            name: "5 Tones V Vendetta Anonymous Hacker Mask Pendant Necklace Key Chain",
            price: 8230 ,
            description: "Beautifully designed pendants for hackers, metallic design and spoofy."
        },
        prod11: {
            name: "Programmer Keychain - The codefather",
            price: 1710,
            description: "Metallic designed Codefather simulator, hacking n coding enthusiasts."
        },
        prod12: {
            name: "The hacker - Beautiful metallic keychain for Hackers",
            price: 1745,
            description: "Simply designed metallic ironic keychains especially for vulnerablers."
        },
        prod13: {
            name: "Burpsuite - Web Penetration Tester",
            price: 544299,
            description: "A powerful web vulnerability scanner and proxy tool used for security testing and penetration testing of web applications."
        },
        prod14: {
            name: "Nessus - the world’s most renowned vulnerability scanner",
            price: 245999,
            description: "comprehensive vulnerability scanner that identifies security flaws across networks, systems, and applications."
        },
        prod15: {
            name: "Metasploit Pro - Powerful attacker and penetrator",
            price: 142230,
            description: "Metasploit is a popular penetration testing framework that provides tools for developing and executing exploit code against target systems."
        },
        prod16: {
            name: "Hackers Movie Limited T-Shirt Made in the USA Size S to 5XL",
            price: 14299,
            description: "Rare collectible for retro hacking enthusiasts."
        },
        prod17: {
            name: "Anonymous Mask T-Shirt - Guy Fawkes V for Vendetta Disobey Hacker - S to XL",
            price: 15999,
            description: "Rare collectible for retro hacking enthusiasts."
        },
        prod18: {
            name: "Anonymous Piracy T-Shirt - Guy Fawkes Mask V for Vendetta Disobey Hacker",
            price: 12230,
            description: "Rare tshirt in black specified for hackers, collectible for retro hacking enthusiasts."
        },
     
    };

    const product = products[selectedProductKey];

    if (product) {
        const shippingFee = 500;
        const totalPrice = product.price + shippingFee;

        productDetailsContainer.innerHTML = `
            <h2>${product.name}</h2>
            <p><strong>Price:</strong> Rs. ${product.price}/-</p>
            <p><strong>Description:</strong> ${product.description}</p>
        `;

        priceSummaryContainer.innerHTML = `
            <h3>Price Summary</h3>
            <p><strong>Product Price:</strong> Rs. ${product.price}/-</p>
            <p><strong>Shipping Fee:</strong> Rs. ${shippingFee}/-</p>
            <p><strong>Total Amount:</strong> Rs. ${totalPrice}/-</p>
        `;
    } else {
        productDetailsContainer.innerHTML = "<p>Product not found. Redirecting...</p>";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    }
});


function placeOrder(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;

    

    const product = products[selectedProductKey];
    const totalAmount = product.price + shippingFee;

    
    const orderDetails = {
        product: product.name,
        fullName,
        email,
        phone,
        address,
        pincode,
        totalAmount
    };

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    alert("Order placed successfully!");
    localStorage.removeItem("selectedProduct");
    window.location.href = "thankyou.html"; 
}


document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'thankyou.html';
});
