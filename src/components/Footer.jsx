import logo from "../assets/logo.png"
import { navBarLinks, companyLinks, discoverLinks, socialMediaLinks } from "../data/links"

function Footer({isDefault=false}) {

  {/* Footer for home page */}
  if (isDefault) {
    return (
      
      <footer className="bg-gray-800 text-white p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 mb-8">
          
          <div className="md:col-span-2">
            <img src={logo} alt="Logo" className="w-28 mb-3"/>
            <p className="font-light text-sm">Location</p>
          </div>

          <div>
            <p className="text-base font-light uppercase mb-5">Main menu</p>
            
            <ul>
              {navBarLinks.map((item) => (
                <li key={item.name} className="font-light text-sm">
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>       
                  
          <div>
            <p className="text-base uppercase mb-5">Company</p>

            <ul>
              {companyLinks.map((item) => (
                <li key={item.name} className="font-light text-sm">
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>  
            
          <div>
            <p className="text-base font-light uppercase mb-5">Discover</p>

            <ul>
              {discoverLinks.map((item) => (
                <li key={item.name} className="font-light text-sm">
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
      
          <div>
            <p className="text-base font-light uppercase mb-5">Follow us</p>

            <ul>
              {socialMediaLinks.map((item) => (
                <li key={item.name} className="font-light text-sm">
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul> 
          </div>

        </div>

        <div>
          <hr className="text-white mb-5" />
          <p>&copy; {new Date().getFullYear()} Aotearoa Adventure Gear. All rights reserved.</p>
        </div>
      </footer>      
    )
  }

  {/* Footer for the other pages */}
  return (
    <footer className="bg-gray-800 text-white p-6 md:p-12"> 
      <div className="flex flex-col md:flex-row justify-center">  
        {navBarLinks.map((item, index) =>(
          <a href={item.path} className={`text-white border-white px-10 hover:text-gray-500 transition-colors duration-200
            ${index !== navBarLinks.length - 1 ? "border-r" : ""}`}>{item.name}
          </a>
        ))}
      </div>

      <hr className="text-white my-5"/>
      
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Aotearoa Adventure Gear. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer