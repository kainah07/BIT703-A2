import Button from './Button';

function Newsletter({image, showImage=false, showMessage=true}){
  return (
    <section className="flex flex-col md:flex-row md:items-center p-5 md:py-5 md:px-20 gap-5 md:gap-20 border-y">
      {showImage && (
        <img src={image} alt="Hiking" className="w-120 rounded-md"/>
      )}
      <div>
        <h2 className="text-3xl md:text-4xl font-light mb-5 md:mb-3">Newsletter</h2>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-50">
          { showMessage && ( <p className="mb-5 text-gray-100 md:mb-0"
            >
              Subscribe to our newsletter for the latest updates and offers.
            </p>
          )}

          <form>
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <input type="email" placeholder="Email Address" className="border-2 border-gray-400 
              w-full md:w-100 h-11 p-4 outline-none" />
              <Button 
                type="submit" 
                isPrimary={false}
                >
                  Subscribe
              </Button>
              
            </div>
          </form>

        </div>
      </div>
      
    </section>
  )
}

export default Newsletter