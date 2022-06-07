const Checkout = () => {
    return (
        <div className='checkout'>
        <h2>Checkout</h2>
        <form id='checkout'>
          <label>
            First Name
            <br></br>
          <input type='text'>
          </input>
          <br></br>
          </label>
          <label> 
            Last Name
            <br></br>
            <input type='text'>
            </input>
            <br></br>
          </label>
          <label>
            Email
            <br></br>
            <input type='text'>
            </input>
            <br></br>
          </label>
          <label>
            Credit Card
            <br></br>
            <input type='text'>

            </input>
            <br></br>
          </label>
          <label>
            Zip Code
            <br></br>
            <input type='text'>

            </input>
          </label>
          <br></br>
          <button>Buy Now</button>
        </form>
      </div>
    )
}


export default Checkout

