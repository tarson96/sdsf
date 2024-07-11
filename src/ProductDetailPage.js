import React,{useState,useEffect} from 'react';
import { Button } from './components/ui/UI';

const ProductDetailPage = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://taostats.io/data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const product = {
    title: "Ready to mine SN 20 codebase",
    subtitle: "Optimized for highest Performance",
    description: "Elevate your mining operations with our cutting-edge SN 20 Codebase. Engineered for maximum efficiency and tailored for Subnet 20, this codebase is your key to unlocking unprecedented mining potential.",
    features: [
      "Optimized for all the tasks",
      "Fine-tuned custom LLM models access for the miner",
      "1 month updates support ( free of cost )",
      "KT of the codebase if require ( personally on chat )",
      "Unlimited technical support or consultancy in regards to mining on SN 20"
    ],
    price: {
      tao: 20,
      usdt: 4000
    },
    terms: [
      "No redistribution allowed",
      "Updates included for 1 month",
      "Performance guarantee or money back"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-left">{product.title}</h1>
          <p className="text-xl text-teal-400 mb-6 text-left">{product.subtitle}</p>
          {/* <p className="text-xl text-teal-400 mb-6 text-left">{data}</p> */}
          {/* <p className="text-gray-300 mb-8 text-left">{product.description}</p> */}
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">Key Features</h2>
            <ul className="list-disc pl-5 space-y-1 text-left">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-300">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
            <p className="text-3xl font-bold">{product.price.tao} TAO</p>
            <p className="text-xl text-gray-300">or ${parseInt(data ? data[0]?.price : 0)*20} in USDT, USDC</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">Terms & Conditions</h2>
            <ul className="list-disc pl-5 space-y-1 text-left">
              {product.terms.map((term, index) => (
                <li key={index} className="text-gray-300">{term}</li>
              ))}
            </ul>
          </div>
          
          <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg py-4">
            Purchase Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;