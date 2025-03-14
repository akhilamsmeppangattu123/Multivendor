import React from "react";
import styled from "styled-components";

const OrderList = () => {
  return (
    <OrderListContainer>
      <h1>Orders</h1>
      <DateRange>Jan 1 - Jan 30, 2024</DateRange>

      {/* Order Statistics */}
      <Statistics>
        <Statistic>
          <h2>Total Orders</h2>
          <p>21</p>
          <p>25.2% last week</p>
        </Statistic>
        <Statistic>
          <h2>Order items over time</h2>
          <p>15</p>
          <p>18.2% last week</p>
        </Statistic>
        <Statistic>
          <h2>Returns Orders</h2>
          <p>0</p>
          <p>-1.2% last week</p>
        </Statistic>
        <Statistic>
          <h2>Fulfilled orders over time</h2>
          <p>12</p>
          <p>12.2% last week</p>
        </Statistic>
      </Statistics>

      {/* Order Table */}
      <Table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Payment</th>
            <th>Total</th>
            <th>Delivery</th>
            <th>Items</th>
            <th>Fulfilment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1002</td>
            <td>11 Feb, 2024</td>
            <td>Wade Warren</td>
            <td>Pending</td>
            <td>$20.00</td>
            <td>N/A</td>
            <td>2 items</td>
            <td>Unfulfilled</td>
            <td>
              <ActionButtons>
                <button>☐</button>
                <button>☐</button>
              </ActionButtons>
            </td>
          </tr>
          <tr>
            <td>#1004</td>
            <td>13 Feb, 2024</td>
            <td>Esther Howard</td>
            <td>Success</td>
            <td>$22.00</td>
            <td>N/A</td>
            <td>3 items</td>
            <td>Fulfilled</td>
            <td>
              <ActionButtons>
                <button>☐</button>
                <button>☐</button>
              </ActionButtons>
            </td>
          </tr>
          <tr>
            <td>#1007</td>
            <td>15 Feb, 2024</td>
            <td>Jenny Wilson</td>
            <td>Pending</td>
            <td>$25.00</td>
            <td>N/A</td>
            <td>1 items</td>
            <td>Unfulfilled</td>
            <td>
              <ActionButtons>
                <button>☐</button>
                <button>☐</button>
              </ActionButtons>
            </td>
          </tr>
          <tr>
            <td>#1009</td>
            <td>17 Feb, 2024</td>
            <td>Guy Hawkins</td>
            <td>Success</td>
            <td>$27.00</td>
            <td>N/A</td>
            <td>5 items</td>
            <td>Fulfilled</td>
            <td>
              <ActionButtons>
                <button>☐</button>
                <button>☐</button>
              </ActionButtons>
            </td>
          </tr>
          <tr>
            <td>#1011</td>
            <td>19 Feb, 2024</td>
            <td>Jacob Jones</td>
            <td>Pending</td>
            <td>$32.00</td>
            <td>N/A</td>
            <td>4 items</td>
            <td>Unfulfilled</td>
            <td>
              <ActionButtons>
                <button>☐</button>
                <button>☐</button>
              </ActionButtons>
            </td>
          </tr>
          <tr>
            <td>#1013</td>
            <td>21 Feb, 2024</td>
            <td>Kristin Watson</td>
            <td>Success</td>
            <td>$25.00</td>
            <td>N/A</td>
            <td>3 items</td>
            <td>Fulfilled</td>
            <td>
              <ActionButtons>
                <button>☐</button>
                <button>☐</button>
              </ActionButtons>
            </td>
          </tr>
          <tr>
            <td>#1015</td>
            <td>23 Feb, 2024</td>
            <td>Albert Flores</td>
            <td>Pending</td>
            <td>$28.00</td>
            <td>N/A</td>
            <td>2 items</td>
            <td>Unfulfilled</td>
            <td>
              <ActionButtons>
                <button>☐</button>
                <button>☐</button>
              </ActionButtons>
            </td>
          </tr>
          <tr>
            <td>#1018</td>
            <td>25 Feb, 2024</td>
            <td>Eleanor Pena</td>
            <td>Success</td>
            <td>$35.00</td>
            <td>N/A</td>
            <td>1 items</td>
            <td>Fulfilled</td>
            <td>
              <ActionButtons>
                <button>☐</button>
                <button>☐</button>
              </ActionButtons>
            </td>
          </tr>
          <tr>
            <td>#1019</td>
            <td>27 Feb, 2024</td>
            <td>Theresa Webb</td>
            <td>Pending</td>
            <td>$20.00</td>
            <td>N/A</td>
            <td>2 items</td>
            <td>Unfulfilled</td>
            <td>
              <ActionButtons>
                <button>☐</button>
                <button>☐</button>
              </ActionButtons>
            </td>
          </tr>
        </tbody>
      </Table>
    </OrderListContainer>
  );
};

export default OrderList;

// Styled Components
const OrderListContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DateRange = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Statistics = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Statistic = styled.div`
  flex: 1;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  text-align: center;

  h2 {
    font-size: 1rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.25rem;
    color: #333;
    margin: 0.25rem 0;
  }

  p:last-child {
    font-size: 0.875rem;
    color: #666;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 1rem;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f8f9fa;
    font-weight: bold;
  }

  td {
    color: #333;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }
`;