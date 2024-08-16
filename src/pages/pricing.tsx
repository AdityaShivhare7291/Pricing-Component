import React from 'react';
import BoxShadow from '../components/boxshadow';
import './pricing.css'

const Pricing: React.FC = (): JSX.Element => {
  return (
    <BoxShadow>
      <div>
        <h2 className='heading'>API Pricing</h2>
        <p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
        <table>
          <thead>
            <th>API</th>
            <th>Model</th>
            <th>Price per 1K tokens</th>
          </thead>
          <tbody>
            <tr>
              <td>OpenAI</td>
              <td>GPT-3.5</td>
              <td>$0.002</td>
            </tr>
            <tr>
              <td>OpenAI</td>
              <td>GPT-4</td>
              <td>$0.03</td>
            </tr>
            <tr>
              <td>Together AI</td>
              <td>Llama-2-70b</td>
              <td>$0.0008</td>
            </tr>
            <tr>
              <td>Together AI</td>
              <td>Llama-2-13b</td>
              <td>$0.0006</td>
            </tr>
          </tbody>
        </table>
        <h3 className='heading'>Token Estimation</h3>
        <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
        <h3 className='heading'>Billing</h3>
        <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
      </div>
    </BoxShadow>
  );
};

export default Pricing;