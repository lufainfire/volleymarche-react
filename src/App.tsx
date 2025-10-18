import { useState, useEffect } from 'react'
import { ShoppingBag, Sun, Moon, Menu } from 'lucide-react'
const mikasaBreacher = '/images/mikasa_ball.jpg' // place the image in public/images or use a full URL

const products = [
  {
    id: 1,
    name: "Pro-Series Volleyball",
    description: "Official Match Ball",
    price: 129.99,
    image: mikasaBreacher
  },
  {
    id: 2,
    name: "Flex-Guard Knee Pads",
    description: "Maximum Protection",
    price: 34.99,
    image: '/images/knee_brace.jpg'
  },
  {
    id: 3,
    name: "Sand Socks",
    description: "Protect Your Feet",
    price: 29.99,
    image: '/images/sandsocks.jpg'
  },
  {
    id: 4,
    name: "T-Shirt Milton Park",
    description: "Milton Park Official Merchandise",
    price: 30.00,
    image: '/images/milton_tshirt.png'
  }
]

const categories = [
  {
    name: "Men's Gear",
    image: '/images/men_gear2.jpg'
  },
  {
    name: "Women's Gear",
    image: '/images/woman_gear.jpg'
  },
  {
    name: "Milton Park Official Merchandise",
    image: "/images/milton_tshirt.png"
  },
  {
    name: "Accessories",
    image: '/images/accessories.jpg'
  }
]

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              alt="Volleyball Hub Logo"
              className="h-18 w-16 object-contain rounded-full bg-white p-2 shadow-md mb-2"
              src='/images/volleymarche_logo.png'
            />
            <span className="text-xl font-bold text-text-light dark:text-text-dark">
              VolleyMarché
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
              Men's
            </a>
            <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
              Women's
            </a>
            <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
              Team Kits
            </a>
            <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
              Accessories
            </a>
            <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
              Community
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-text-light dark:text-text-dark">
              <ShoppingBag size={24} />
            </button>
            <button
              onClick={toggleTheme}
              className="text-text-light dark:text-text-dark"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button className="md:hidden text-text-light dark:text-text-dark">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/background.jpg)'
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 p-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Play Hard. Shop Smart.<br />
              Support Local Volleyball.
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Montreal's First Beach Volleyball Dedicated Store
            </p>
            <div className="space-x-4">
              <a
                className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
                href="#"
              >
                Shop Now
              </a>
              <a
                className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-full backdrop-blur-sm transition-colors inline-block"
                href="#"
              >
                Join the Community
              </a>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-card-light dark:bg-card-dark">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {categories.map((category, index) => (
                <a key={index} className="group" href="#">
                  <div className="aspect-square bg-background-light dark:bg-background-dark rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      src={category.image}
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-text-light dark:text-text-dark group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">New Arrivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <img
                    alt={product.name}
                    className="w-full h-128 object-cover"
                    src={product.image}
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xl text-primary">
                        ${product.price}
                      </span>
                      <button className="bg-primary text-white p-2 rounded-full hover:bg-opacity-90 transition-colors">
                        <ShoppingBag size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-20 bg-card-light dark:bg-card-dark">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">
                Proud Partner of Volleyball Milton Park
              </h2>
              <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-10">
                We are thrilled to collaborate with Volleyball Milton Park, supporting local talent
                and fostering a vibrant community spirit. Together, we're dedicated to growing the
                sport and providing players with the best resources.
              </p>
            </div>
            
            <div className="flex justify-center mb-12">
              <a className="flex flex-col items-center group" href="https://www.miltonpark.org/volleyball" target="_blank" rel="noopener noreferrer">
                <img
                  alt="Volleyball Milton Park Logo"
                  className="h-24 w-24 object-contain rounded-full bg-white p-2 shadow-md mb-2"
                  src='/images/milton_logo.png'
                />
                <span className="font-semibold group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  Visit Milton Park Volleyball
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-primary/10 dark:bg-primary/20 p-10 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-2">Get Exclusive Deals!</h2>
              <p className="text-gray-600 dark:text-text-dark mb-6">
                Get exclusive deals and updates on Volleyball Milton Park and VolleyMarché events!
              </p>
              <form className="flex flex-col sm:flex-row justify-center max-w-lg mx-auto gap-4">
                <input
                  className="w-full px-4 py-3 rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-card-dark focus:ring-primary focus:border-primary"
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  className="bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card-light dark:bg-card-dark border-t border-border-light dark:border-border-dark">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  alt="Volleyball Hub Logo"
                  className="h-24 w-24 object-contain rounded-full bg-white p-2 shadow-md mb-2"
                  src="/images/volleymarche_logo.png"
                />
                <span className="text-xl font-bold text-text-light dark:text-text-dark">
                  VolleyMarché
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Your #1 source for everything volleyball. Fueling passion on and off the court.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
                    Men's Gear
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
                    Women's Gear
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
                    Team Kits
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
                    Size Guide
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  href="#"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  href="#"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  href="#"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.002 6.363a4.733 4.733 0 100 9.467 4.733 4.733 0 000-9.467zm-6.204 7.502a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border-light dark:border-border-dark text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© 2025 VolleyMarché. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
