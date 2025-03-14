import React from "react";
import styled from "styled-components";

const Payment = () => {
  return (
    <PaymentWrapper>
      <Header>
        <h1>Payment</h1>
        <p>August 23, 2017 | Leave a Comment</p>
      </Header>

      {/* Shopping Bag Section */}
      <ShoppingBag>
        <h2>My Shopping Bag (1 Item)</h2>
        <ProductDetails>
          <ProductName>612 League Girls Multicoloured Printed A-Line Top</ProductName>
          <Seller>Sold by: WandWagon</Seller>
          <SizeQty>
            <span>Size: 7-8Y ▼</span>
            <span>Qty: 1 ▼</span>
          </SizeQty>
          <Stock>Only 1 unit in stock</Stock>
          <Actions>
            <button>REMOVE</button>
            <button>MOVE TO WISHLIST</button>
          </Actions>
        </ProductDetails>
      </ShoppingBag>

      <AddMore>
        <button>Add more from wishlist</button>
      </AddMore>

      <Progress>
        <span>BAG</span>
        <span>DELIVERY</span>
        <span>PAYMENT</span>
      </Progress>

      <Total>
        <h3>Total: Rs. 492</h3>
        <Discount>
          <span>Rs. 327</span>
          <span>(40% OFF) | Rs. 545</span>
        </Discount>
      </Total>

      <Options>
        <Coupons>
          <p>Coupons</p>
          <p>Login to use account-linked coupons</p>
          <button>Apply Coupon</button>
        </Coupons>
        <GiftWrap>
          <p>Gift wrap for Rs. 25</p>
          <p>Cash/Card On Delivery not available</p>
        </GiftWrap>
      </Options>

      <PriceDetails>
        <h3>PRICE DETAILS</h3>
        <Detail>
          <span>Bag Total</span>
          <span>Rs. 545</span>
        </Detail>
        <Detail>
          <span>Bag Discount</span>
          <span>- Rs. 218</span>
        </Detail>
        <Detail>
          <span>Estimated Tax</span>
          <span>Rs. 16</span>
        </Detail>
        <Detail>
          <span>Coupon Discount</span>
          <span>Apply Coupon</span>
        </Detail>
        <Detail>
          <span>Delivery Charges</span>
          <span>Rs. 149</span>
        </Detail>
        <OrderTotal>
          <span>Order Total</span>
          <span>Rs. 492</span>
        </OrderTotal>
      </PriceDetails>

      {/* Bank Offers Section */}
      <BankOffers>
        <h2>Bank Offers</h2>
        <ul>
          <li>
            10% Reward points with Kotak Vaa Signature Credit Card. Use coupon
            code: <strong>TKTUDK.TCA</strong>
          </li>
          <li>
            10% SuperCoin up to Rs 200 when you pay with Mobikwik wallet.{" "}
            <strong>TCA</strong>
          </li>
          <li>
            10% Cashback on Airtel Payments Bank. <strong>TCA</strong>
          </li>
        </ul>
      </BankOffers>

      {/* Choose Payment Mode Section */}
      <PaymentMode>
        <h2>Choose Payment Mode</h2>
        <PaymentOptions>
          <PaymentOption>
            <h3>CREDIT/DEBIT CARD</h3>
            <p>We will redirect you to your bank website to authorize the payment.</p>
          </PaymentOption>
          <PaymentOption>
            <h3>NET BANKING</h3>
          </PaymentOption>
          <PaymentOption>
            <h3>CASH/CARD ON DELIVERY</h3>
          </PaymentOption>
          <PaymentOption>
            <h3>PHONEPE / BHIM UPI</h3>
          </PaymentOption>
          <PaymentOption>
            <h3>GIFT CARD</h3>
          </PaymentOption>
          <PaymentOption>
            <h3>WALLETS</h3>
          </PaymentOption>
        </PaymentOptions>
      </PaymentMode>

      {/* Order Summary Section */}
      <OrderSummary>
        <h2>ORDER SUMMARY</h2>
        <SummaryDetails>
          <Detail>
            <span>1 ITEM</span>
            <span>Rs. 881</span>
          </Detail>
          <Detail>
            <span>Delivery</span>
            <span>Rs. 149</span>
          </Detail>
          <TotalPayable>
            <span>Total Payable</span>
            <span>Rs. 1,030</span>
          </TotalPayable>
        </SummaryDetails>
      </OrderSummary>

      {/* Delivery Address Section */}
      <DeliveryAddress>
        <h2>DELIVER TO</h2>
        <Address>
          <p>Ann Lushi</p>
          <p>
            BDO, Yapimoto CHS, Pawar Nagar, No St Mary High School, New Link
            Road, Dahisar East
          </p>
          <p>Mumbai - 400068</p>
          <p>Maharashtra</p>
          <p>Mobile: 9920976414</p>
        </Address>
        <ChangeAddress>
          <button>Change Address</button>
        </ChangeAddress>
      </DeliveryAddress>

      <PlaceOrder>
        <button>PLACE ORDER</button>
        <Tip>Tip: Shop for Rs. 1,199 or more for free delivery</Tip>
      </PlaceOrder>

      <Help>
        <p>Need help? <a href="/contact">Contact Us</a></p>
      </Help>
    </PaymentWrapper>
  );
};

// Styled Components
const PaymentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 28px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #777;
  }
`;

const ShoppingBag = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 8px;

  h2 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #333;
  }
`;

const ProductDetails = styled.div`
  margin-top: 15px;
`;

const ProductName = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const Seller = styled.p`
  font-size: 14px;
  color: #777;
`;

const SizeQty = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0;
  font-size: 14px;
  color: #555;
`;

const Stock = styled.p`
  font-size: 14px;
  color: #ff0000;
  font-weight: bold;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;

  button {
    padding: 8px 16px;
    border: 1px solid #ddd;
    background-color: #fff;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

const AddMore = styled.div`
  text-align: center;
  margin-bottom: 20px;

  button {
    padding: 10px 20px;
    border: 1px solid #ddd;
    background-color: #fff;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

const Progress = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 14px;
  color: #555;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Total = styled.div`
  text-align: right;
  margin-bottom: 20px;

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
  }
`;

const Discount = styled.div`
  font-size: 14px;
  color: #777;
`;

const Options = styled.div`
  margin-bottom: 20px;
`;

const Coupons = styled.div`
  margin-bottom: 15px;

  p {
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
  }

  button {
    padding: 8px 16px;
    border: 1px solid #ddd;
    background-color: #fff;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

const GiftWrap = styled.div`
  p {
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
  }
`;

const PriceDetails = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 8px;

  h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #333;
  }
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
  color: #555;
`;

const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const BankOffers = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 14px;
      margin-bottom: 10px;
      color: #555;

      strong {
        color: #333;
      }
    }
  }
`;

const PaymentMode = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #333;
  }
`;

const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PaymentOption = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 16px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #777;
  }
`;

const OrderSummary = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #333;
  }
`;

const SummaryDetails = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
`;

const TotalPayable = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const DeliveryAddress = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #333;
  }
`;

const Address = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  font-size: 14px;
  color: #555;
  background-color: #fff;
  border-radius: 8px;

  p {
    margin-bottom: 5px;
  }
`;

const ChangeAddress = styled.div`
  text-align: center;
  margin-top: 15px;

  button {
    padding: 10px 20px;
    border: 1px solid #ddd;
    background-color: #fff;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

const PlaceOrder = styled.div`
  text-align: center;
  margin-bottom: 20px;

  button {
    padding: 12px 24px;
    background-color: #ff5722;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e64a19;
    }
  }
`;

const Tip = styled.p`
  font-size: 14px;
  color: #777;
  margin-top: 10px;
`;

const Help = styled.div`
  text-align: center;
  font-size: 14px;
  color: #777;

  a {
    color: #ff5722;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #e64a19;
      text-decoration: underline;
    }
  }
`;

export default Payment;