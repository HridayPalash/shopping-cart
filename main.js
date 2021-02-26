// Plus Button 1 Function
      document.getElementById('plusBtn1').addEventListener('click', function () {
         handleProductChange('phone', true);
      });
      // Minus Button 1 Function
      document.getElementById('minusBtn1').addEventListener('click', function () {
         handleProductChange('phone', false);
      });
      
      // Plus Button 2 Function
      document.getElementById('plusBtn2').addEventListener('click', function () {
         handleProductChange('case', true);
      })

      // Minus Button 2 Function
      document.getElementById('minusBtn2').addEventListener('click', function () {
         handleProductChange('case', false);
      })
      
      // Handle Product change Function
      function handleProductChange(product, isIncrease) {
         const productInput= document.getElementById(product +'-count');
         const productCount= parseInt(productInput.value);
         // const productNewCount= productCount - 1;
         let productNewCount = productCount;
         if (isIncrease == true) {
            productNewCount = productCount + 1;
         }
         if (isIncrease == false && productNewCount > 0) {
            productNewCount = productCount - 1;
         }
         productInput.value= productNewCount;
         // const priceTotal = finalClick * 1219;
         let productTotal = 0;
         if (product == 'phone') {
            productTotal = productNewCount * 1219;
         }
         if (product == 'case') {
            productTotal = productNewCount * 59;
         }
         document.getElementById(product + '-total').innerText= "$"+ productTotal;
         calculateTotal();
      }
      // Calculate total
      function calculateTotal() {
         const phoneCount = getInputValue('phone');
         const caseCount = getInputValue('case');

         const totalPrice = phoneCount * 1219 + caseCount * 59;
         document.getElementById('total-price').innerText = '$' + totalPrice;
         const tax = Math.round(totalPrice * 0.1);
         document.getElementById('tax-amount').innerText = '$' + tax;
         const grandTotal = totalPrice + tax;
         document.getElementById('grand-total').innerText = '$' + grandTotal;
      }
      // getInputValue Function
      function getInputValue(product) {
         const productInput = document.getElementById(product + '-count');
         const productCount = parseInt(productInput.value);
         return productCount;
      }