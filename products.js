function buyNow(productKey) {
    localStorage.setItem("selectedProduct", productKey);
    window.location.href = "buy.html";
}
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = "cart.html";
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    checkproduct();
}

function checkproduct() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let cartHTML = '';
    
    if (cart.length == 0) {
        cartHTML = `
        <tr>
            <td colspan="5" style="text-align: center;">Your cart is empty</td>
        </tr>`;
        document.getElementById("cartTable").innerHTML = cartHTML;
        document.getElementById("checkoutForm").style.display = "none";
        return;
    }

    
    cart.forEach((product, index) => {
        cartHTML += `<tr class="product-row">`;
        switch(product) {
            case "prod1":
                cartHTML += `
                    <td>V for Vendetta Mask Patch Embroidered Iron on Applique Movie Anonymous Hacker</td>
                    <td>1</td>
                    <td>Rs.1,230/- only</td>
                    <td>Iconic mask patch for ethical hacking enthusiasts.</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod2":
                cartHTML += `
                    <td>Hacker Hooded Scary Mask - Zagone Studios</td>
                    <td>1</td>
                    <td>Rs. 5,280/- only</td>
                    <td>Perfect Hoodie for ethical hackers for getting a beautiful view of cybersecurity specialization. Available in black!</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod3":
                cartHTML += `
                    <td>Hacker 2 Doomsday Sinclair 48/128K ZX Spectrum Activision 1986 Big Box RARE</td>
                    <td>1</td>
                    <td>Rs. 18,230/- only</td>
                    <td>Rare collectible for retro hacking enthusiasts. A perfect product in E.H</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod4":
                cartHTML += `
                    <td>Computer hacking for beginners by Jason Knox</td>
                    <td>1</td>
                    <td>Rs. 14,299/- only</td>
                    <td>Hacking: Ultimate Hacking for Beginners, How to Hack the networks, devices, internet phishing and spoofing attacks</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod5":
                cartHTML += `
                    <td>Penetration tester and hacking guider by Miles Price</td>
                    <td>1</td>
                    <td>Rs. 15,999/- only</td>
                    <td>Hacking: Ultimate Hacking for Beginners, How to Hack the networks, devices, internet phishing and spoofing attacks</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod6":
                cartHTML += `
                    <td>Kali Linux and Networking Basics by Karnel Erickson</td>
                    <td>1</td>
                    <td>Rs. 12,230/- only</td>
                    <td>Hacking: Ultimate Hacking for Beginners, How to Hack the networks, devices, internet phishing and spoofing attacks</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod7":
                cartHTML += `
                    <td>Flipper Zero - Versatility for wireless network breaching and spoofing</td>
                    <td>1</td>
                    <td>Rs. 145,230/- only</td>
                    <td>a portable multi-tool for pentesters and hardware hackers, featuring a 1.4-inch monochrome LCD, sub-1 GHz transceiver, infrared, GPIO, and USB support for various protocols. It supports radio frequencies, RFID, infrared, and other wireless protocols, making it versatile for hacking and experimentation.</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod8":
                cartHTML += `
                    <td>Raspberry Pi - A cheap tool which makes car hacking easier</td>
                    <td>1</td>
                    <td>Rs. 25,280/- only</td>
                    <td>small, affordable single-board computer with a quad-core ARM processor, multiple I/O ports, and support for various operating systems, vulnerability expert.</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod9":
                cartHTML += `
                    <td>USB Rubber Ducky - A malware master tool</td>
                    <td>1</td>
                    <td>Rs. 118,230/- only</td>
                    <td> USB device that emulates a keyboard to automate keystroke injection attacks, with customizable scripts for penetration testing.</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod10":
                cartHTML += `
                    <td>5 Tones V Vendetta Anonymous Hacker Mask Pendant Necklace Key Chain</td>
                    <td>1</td>
                    <td>Rs. 8,230/- only</td>
                    <td>Beautifully designed pendants for hackers, metallic design and spoofy.</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod11":
                cartHTML += `
                    <td>Programmer Keychain - The codefather</td>
                    <td>1</td>
                    <td>Rs. 1,710/- only</td>
                    <td>Metallic designed Codefather simulator, hacking n coding enthusiasts.</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod12":
                cartHTML += `
                    <td>The hacker - Neautiful metallic keychain for Hackers</td>
                    <td>1</td>
                    <td>Rs. 1,745/- only</td>
                    <td>Simply designed metallic ironic keychains especially for vulnerablers.</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod13":
                cartHTML += `
                    <td>Burpsuite - Web Penetration Tester</td>
                    <td>1 year subscription</td>
                    <td>Rs.544,299/- only</td>
                    <td>A powerful web vulnerability scanner and proxy tool used for security testing and penetration testing of web applications.</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod14":
                cartHTML += `
                    <td>Nessus - the world’s most renowned vulnerability scanner</td>
                    <td>1 year subscription</td>
                    <td>Rs. 245,999/- only</td>
                    <td>comprehensive vulnerability scanner that identifies security flaws across networks, systems, and applications.</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod15":
                cartHTML += `
                    <td>Metasploit Pro - Powerful attacker and penetrator</td>
                    <td>1 year subscription</td>
                    <td>Rs. 142,230/- only</td>
                    <td>Metasploit is a popular penetration testing framework that provides tools for developing and executing exploit code against target systems.</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod16":
                cartHTML += `
                    <td>Hackers Movie Limited T-Shirt Made in the USA Size S to 5XL</td>
                    <td>1</td>
                    <td>Rs. 14,299/- only</td>
                    <td>Rare collectible for retro hacking enthusiasts.</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod17":
                cartHTML += `
                    <td>Anonymous Mask T-Shirt - Guy Fawkes V for Vendetta Disobey Hacker - S to XL</td>
                    <td>1</td>
                    <td>Rs. 15,999/- only</td>
                    <td>Rare collectible for retro hacking enthusiasts.</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
            case "prod18":
                cartHTML += `
                    <td>Anonymous Piracy T-Shirt - Guy Fawkes Mask V for Vendetta Disobey Hacker</td>
                    <td>1</td>
                    <td>Rs. 118,230/- only</td>
                    <td>Rare tshirt in black specified for hackers, collectible for retro hacking enthusiasts.</td>
                    <td><button onclick="removeFromCart(${index})" class="remove-btn">Remove</button></td>`;
                break;
        }
        cartHTML += `</tr>`;
    });

    let totalPrice = cart.reduce((total, product) => {
        switch(product) {
            case "prod1": return total + 1230;
            case "prod2": return total + 5280;
            case "prod3": return total + 18230;
            case "prod4": return total + 14299;
            case "prod5": return total + 15999;
            case "prod6": return total + 12230;
            case "prod7": return total + 145230;
            case "prod8": return total + 25280;
            case "prod9": return total + 118230;
            case "prod10": return total + 8230;
            case "prod11": return total + 1710;
            case "prod12": return total + 1745;
            case "prod13": return total + 544299;
            case "prod14": return total + 245999;
            case "prod15": return total + 142230;
            case "prod16": return total + 14299;
            case "prod17": return total + 15999;
            case "prod18": return total + 118230;
            default: return total;
        }
    }, 0);
    
    cartHTML += `
    <tr class="total-row">
        <td colspan="2"><strong>Total</strong></td>
        <td colspan="3"><strong>Rs. ${totalPrice}/- only</strong></td>
    </tr>`;
    
    document.getElementById("cartTable").innerHTML = cartHTML;
    document.getElementById("checkoutForm").style.display = "block";
}

function validateForm() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;

    if (!fullName || !email || !phone || !address || !pincode) {
        alert("Please fill in all required fields!");
        return false;
    }

  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

 
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number!");
        return false;
    }


    const pincodeRegex = /^\d{6}$/;
    if (!pincodeRegex.test(pincode)) {
        alert("Please enter a valid 6-digit pincode!");
        return false;
    }

    
    const formData = {
        fullName,
        email,
        phone,
        address,
        pincode,
        cart: JSON.parse(localStorage.getItem('cart')),
        totalAmount: calculateTotal()
    };
    localStorage.setItem('orderDetails', JSON.stringify(formData));

    return true;
}

function calculateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart.reduce((total, product) => {
        switch(product) {
            case "prod1": return total + 145230;
            case "prod2": return total + 25280;
            case "prod3": return total + 118230;
            default: return total;
        }
    }, 0);
}

function proceedToCheckout() {
    if (validateForm()) {
        window.location.href = "confirmation.html";
    }
}

function loadConfirmationPage() {
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
    if (!orderDetails) {
        window.location.href = "cart.html";
        return;
    }

    let confirmationHTML = `
        <h2>Order Confirmation</h2>
        <div class="order-details">
            <p><strong>Name:</strong> ${orderDetails.fullName}</p>
            <p><strong>Email:</strong> ${orderDetails.email}</p>
            <p><strong>Phone:</strong> ${orderDetails.phone}</p>
            <p><strong>Shipping Address:</strong> ${orderDetails.address}</p>
            <p><strong>Pincode:</strong> ${orderDetails.pincode}</p>
            <p><strong>Total Amount:</strong> Rs. ${orderDetails.totalAmount}/- only</p>
        </div>
        <button onclick="confirmOrder()" class="confirm-btn">Confirm Order</button>
    `;

    document.getElementById("confirmationDetails").innerHTML = confirmationHTML;
}

function confirmOrder() {
    localStorage.removeItem('cart');
    localStorage.removeItem('orderDetails');
    alert("Order placed successfully!");
    window.location.href = "thankyou.html";
}
function proceedToThankyou(){
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const zipcode = document.getElementById('zipcode').value;
if(fullName && address && Contact  && Zipcode)
{
    window.location.href = 'thankyou.html'
    
}
else{
    alert(' please fill all the fields')
}
}
