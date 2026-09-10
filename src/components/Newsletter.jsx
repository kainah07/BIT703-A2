import Button from './Button';

function Newsletter(){
  return (
    <section className="p-5 md:p-20">
      <h2 className="text-3xl md:text-4xl font-light mb-5 md:mb-0">Newsletter</h2>

      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <p className="mb-5 md:mb-0">Subscribe to our newsletter for the latest updates and offers.</p>

        <form>
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <input type="email" placeholder="Email Address" className="border-2 border-gray-400 w-full md:w-81.25 h-11 p-4 outline-none" />
            <Button type="submit">Subscribe</Button>
          </div>
        </form>

      </div>
    </section>
  )
}

export default Newsletter