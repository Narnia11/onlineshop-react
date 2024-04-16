import { useNavigate } from "react-router-dom";
import "./footer.css"

export default function Footer() {
  let navigate = useNavigate()
  return (
    <>
      <div className="icons">
        <div className="social-media">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="payment">
          {/* <div></div> */}
          {/* <div></div> */}
          {/* <div></div> */}
          {/* <div></div> */}
        </div>
      </div>
      <div className="footer">
        <div className="first">
          <h2>CATEGORY</h2>
          <p>T-shirt & Tops</p>
          <p>PAnts & Leggings</p>
          <p>Dresses</p>
          <p>Underwear</p>
          <p>Bags</p>
          <p>Jewelry</p>
          <p>Accessories</p>
          <p>Activewear</p>
        </div>
        <div>
          <h2>NEED HELP?</h2>
          <p>Contact Us</p>
          <p>Shipping Service</p>
          <p>Payment Option</p>
          <p>Returns & Exchange</p>
          <p>Products Care</p>
          <p>Unsubscribe</p>
        </div>
        <div>
          <h2>TRANSFER</h2>
          <p>DHL express</p>
          <p>Postal code</p>
          <p>Bring</p>
          <p>Oops</p>
          <p>Instabox</p>
        </div>
        <div>
          <h2>ABOUT US</h2>
          <p>Corporate website</p>
          <p>Career</p>
          <p>Press</p>
          <p>Investor Relations</p>
        </div>

      {/*   <div>
          <h2>CUSTOMER SERVICE</h2>
          <p className="contact-footer" onClick={() => navigate("/contact")}>Contact US</p>
          <p>Payment & Tax</p>
          <p>Bonus Point</p>
          <p>Social REsponsibility</p>
          <p>Share & Win</p>
          <p>Notice of Revocation</p>
        </div> */}

        <div className="sendMassage">
          <h2>CONTACT US</h2>
          <form action="">
            <input type="text" name="myname" id="myname" placeholder="Name" />
            <input type="text" name="Email" id="Email" placeholder="Email" />
            <textarea
              name="comment"
              id="comment"
              cols={30}
              rows={5}
              placeholder="Please write your message(Max 500 characters)"
              maxLength={500}>
            </textarea>
            <button className="button" type="submit">SEND</button>
          </form>
        </div>

      </div>
    </>
  );
}
