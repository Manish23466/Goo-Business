function calculateTotal(productNumber) {
    // Get quantity value
    var quantity = document.getElementById('quantity' + productNumber).value || 1;

    // Prices per unit for each product
    var prices = [10, 15, 20, 25, 30, 32, 35, 38, 40];

    // Calculate total price
    var totalPrice = quantity * prices[productNumber - 1];

    // Display total price in the product card
    document.getElementById('total-price' + productNumber).innerText = 'Total Price: $' + totalPrice;

    // Set the quantity and total price in the payment form
    document.getElementById('quantity').value = quantity; // Set quantity to 1 by default
    document.getElementById('total-price').value = '$' + totalPrice;

    // Display total price for each product in the payment form
    document.getElementById('product-total-price' + productNumber).innerText = 'Total: $' + totalPrice;

    // Set product description in the payment form
    var productDescription = document.querySelector('.product-card:nth-child(' + productNumber + ') .product-description').value;
    document.getElementById('payment-product-description').innerText = 'Description: ' + productDescription;
}

function openPaymentForm(productNumber) {
    // Hide all product cards
    document.querySelectorAll('.product-card').forEach(function(card) {
        card.style.display = 'none';
    });

    // Show the payment form
    var paymentForm = document.getElementById('payment-form');
    paymentForm.style.display = 'block';

    // Set product details in the payment form
    var productImage = document.getElementById('payment-product-image');
    var productName = document.getElementById('payment-product-name');
    var productPrice = document.getElementById('payment-product-price');

    var selectedProductImage = document.querySelector('.product-card:nth-child(' + productNumber + ') .product-image');
    var selectedProductName = document.querySelector('.product-card:nth-child(' + productNumber + ') h2');
    var selectedProductPrice = document.querySelector('.product-card:nth-child(' + productNumber + ') p');

    productImage.src = selectedProductImage.src;
    productName.innerText = selectedProductName.innerText;
    productPrice.innerText = selectedProductPrice.innerText;

    // Set product description in the payment form
    var productDescription = document.querySelector('.product-card:nth-child(' + productNumber + ') .product-description').value;
    document.getElementById('payment-product-description').innerText = 'Description: ' + productDescription;
}

function processPayment() {
    // Add logic to process the payment
    var name = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('country').value;
    var district = document.getElementById('district').value;
    var quantity = document.getElementById('quantity').value;
    var totalPrice = document.getElementById('total-price').value;
    var village = document.getElementById('village').value;
    var pinCode = document.getElementById('pin-code').value;

    // Add more logic for additional fields as needed

    // Example: Displaying information (Replace this with your payment processing logic)
    alert('Payment processed successfully!\nName: ' + name + '\nMobile: ' + mobile + '\nEmail: ' + email + 
        '\nCountry: ' + country + '\nDistrict: ' + district + '\nVillage: ' + village + '\nPin Code: ' + pinCode +
        '\nQuantity: ' + quantity + '\nTotal Price: ' + totalPrice);
}

function goBackToSelection() {
    // Refresh the page
    location.reload();
}
