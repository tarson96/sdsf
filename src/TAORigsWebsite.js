import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Bitcoin, DollarSign, ChevronDown, ChevronUp,Menu } from 'lucide-react';
import { Card, CardHeader, CardContent,Button, CardFooter ,Alert, AlertDescription, AlertTitle} from './components/ui/UI';
import { useNavigate } from 'react-router-dom';
import herov from './assets/ss.mp4'
import profilePic from './assets/profile.jpg'
import oblivusLogo from './assets/oblivusLogo.png'

const smoothScroll = (e, target) => {
  e.preventDefault();
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
};


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">TAORIGS</h1>
        
        {/* Hamburger menu button for mobile */}
        <button 
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Navigation for larger screens */}
        <nav className="hidden sm:block">
        <ul className="flex space-x-4">
            <li><a href="#products" onClick={(e) => smoothScroll(e, '#products')} className="hover:text-gray-300">Products</a></li>
            <li><a href="#about" onClick={(e) => smoothScroll(e, '#about')} className="hover:text-gray-300">About</a></li>
            <li><a href="#faq" onClick={(e) => smoothScroll(e, '#faq')} className="hover:text-gray-300">FAQ</a></li>
            <li><a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="hover:text-gray-300">Contact</a></li>
            <li><a href="https://twitter.com/TAORigs" target="_blank" rel="noopener noreferrer"><X size={24} /></a></li>
            <li><a href="https://discord.gg/TAORigs" target="_blank" rel="noopener noreferrer"><MessageCircle size={24} /></a></li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li><a href="#about" className="block py-2 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#products" className="block py-2 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>Products</a></li>
            <li><a href="#faq" className="block py-2 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>FAQ</a></li>
            <li><a href="#contact" className="block py-2 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <li className="flex space-x-4 py-2">
              <a href="https://twitter.com/TAORigs" target="_blank" rel="noopener noreferrer"><X size={24} /></a>
              <a href="https://discord.gg/TAORigs" target="_blank" rel="noopener noreferrer"><MessageCircle size={24} /></a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl font-bold mb-4">TAORIGS</h2>
      <p className="text-xl mb-8">Providing ready-to-mine codebases for bittensor subnets.</p>
      <Button onClick={(e) => smoothScroll(e, '#products')} variant="outline" size="lg" className="text-black border-white hover:bg-white hover:text-black">
        Explore Products
      </Button>
    </div>
  </section>
);


const About = () => (
  <section id="about" className="py-10 bg-white">
    <div className="container mx-auto">
      {/* <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">About TAORIGS</h2> */}
      <div className="max-w-3xl mx-auto p-8 rounded-lg shadow-xl border border-gray-200">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Founded by <a href="https://x.com/hodler0_" target="_blank" className="text-blue-600">hodler0</a></h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          A Bittensor enthusiast with over a year of hands-on experience in the space, Helping community in the bittensor mining know-how.
        </p>
        {/* <p className="text-gray-600 leading-relaxed">
          Our mission is to empower miners with cutting-edge codebases and invaluable insights, fostering a collaborative environment that propels the entire community forward.
        </p> */}
      </div>
    </div>
  </section>
);

const Products = () => {
  const navigate = useNavigate();

 return ( <section id="products" className="py-20 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
          <CardHeader>
            <h3 className="text-xl font-semibold">SN 20 Codebase</h3>
          </CardHeader>
          <CardContent>
            <p>Optimized codebase for Subnet 20, Having a proven mid-end to top-end performance</p>
            {/* <p></p> */}
            {/* <p className="mt-4 font-semibold">Cost: 20 TAO or $4000 USDT</p> */}
          </CardContent>
          <CardFooter>
            <Button onClick={()=>navigate("/pdetails")}>Explore</Button>
          </CardFooter>
        </Card>
        <Card className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
          <CardHeader>
            <h3 className="text-xl font-semibold">Mining Alpha</h3>
          </CardHeader>
          <CardContent>
            <p>Valuable insights and secrets for optimally mining across the subnets.</p>
            {/* <p className="mt-4 font-semibold">Cost: 5 TAO or $1200 USDT</p> */}
          </CardContent>
          <CardFooter>
            <Button>Explore</Button>
          </CardFooter>
        </Card>
        <Card className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
          <CardHeader>
            <h3 className="text-xl font-semibold">Consulting Services</h3>
          </CardHeader>
          <CardContent>
            <p>Guidance on mining ( optimally and with minimum losses ).</p>
            {/* <p className="mt-4 font-semibold">Cost: 1 TAO or $250 USDT</p> */}
          </CardContent>
          <CardFooter>
            <Button>Get</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
);
}

const ProofOfPerformance = () => (
  <section className="py-20 bg-gray-800 text-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Proof of Performance</h2>
      <div className="bg-gray-700 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <p className="text-lg mb-4">To demonstrate the effectiveness of our codebase, we're revealing a key being mined:</p>
        <Alert>
          <AlertTitle>Mining Key (For Demonstration Only)</AlertTitle>
          <AlertDescription className="break-all">
            5DMM4PdGbKHyqVTZj57WAEa4jBupAMC2a3uQP4LWK9hQdwby
          </AlertDescription>
        </Alert>
        <p className="mt-4 text-sm text-gray-300">
          Note: This key is specific to proof purposes and should not be used for actual mining operations.
        </p>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What are the costs?",
      answer: "Our products have varying costs. The SN 20 Codebase is priced at 20 TAO or $4000 USDT, Mining Alpha costs 5 TAO or $1200 USDT, and our Consulting Services are available for 1 TAO or $250 USDT."
    },
    {
      question: "What is the refund policy?",
      answer: "We offer refunds only if the performance is not efficient, as determined by thorough checking by a TAORigs team member. No refunds are provided once the code is delivered otherwise."
    },
    {
      question: "Why are you selling the codebase?",
      answer: "We believe in fostering a collaborative environment within the Bittensor community. By selling our optimized codebase, we aim to help other miners improve their operations while supporting our continued development efforts."
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp className="transition-transform duration-300" /> : <ChevronDown className="transition-transform duration-300" />}
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

const OblivusLogo = () => (
  <img src={oblivusLogo} alt="Oblivus" className="w-20 h-20 rounded-full" />
);
const ReferralCard = ({ name, description, link }) => (
  <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="p-6 flex flex-col space-y-4">
      <div className="flex items-start mb-3 space-x-4">
        <OblivusLogo />
        <div className="flex flex-col mt-2 text-left">
          <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex  justify-start w-full">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold rounded-md transition-all duration-300 hover:from-orange-600 hover:to-purple-700"
        >
          Visit {name}
        </a>
      </div>
    </div>
  </div>
);



const Referrals = () => {
  const referrals = [
    {
      name: "Oblivus",
      description: "Tried and tested with bittensor mining ( works fluently with majority of the subnets )",
      link: "https://oblivus.com?ref=da1e96d7"
    },
    // Add more referrals here if needed
  ];

  return (
    <section id="referrals" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Hosting Referrals</h2>
      <div className="flex justify-center">
        {referrals.map((referral, index) => (
          <ReferralCard key={index} {...referral} />
        ))}
      </div>
    </div>
  </section>
  );
};

const PaymentMethods = () => (
  <section className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Payment Methods</h2>
      <div className="flex justify-center space-x-8">
        <div className="flex items-center">
          <Bitcoin className="mr-2" /> <span>TAO</span>
        </div>
        <div className="flex items-center">
          <DollarSign className="mr-2" /> <span>USDT</span>
        </div>
        <div className="flex items-center">
          <Bitcoin className="mr-2" /> <span>BTC</span>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <div className="flex flex-col items-center">
        <img src={profilePic} alt="hodler0" className="w-32 h-32 rounded-full mb-4 border-4 border-gray-800" />
        <Button as="a" href="https://twitter.com/hodler0" target="_blank" rel="noopener noreferrer" size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
          Connect on Twitter
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 TAORIGS. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <ProofOfPerformance />
        <FAQ />
        <Referrals />
        <PaymentMethods />
        <Contact />
      </main>
      <Footer />
      <div
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer transition-opacity duration-300"
        style={{ opacity: scrollPosition > 300 ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </div>
    </div>
  );
};

export default App;
