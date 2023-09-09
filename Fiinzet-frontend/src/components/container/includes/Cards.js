import HomeLoan from "../../assets/images/homeLoan2.png";
import BalanceTransfer from "../../assets/images/BT.jpg";
import LoanAgainstProperty from "../../assets/images/LAP.jpg";
import {  useNavigate } from "react-router-dom";
import "../../assets/css/card.css";


function Cards() {
  const navegate = useNavigate();
  function add() {
    navegate("/Login");
  }
  return (
    <div className="album py-5 midB album1 bgCards">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 colAdjust">
          {/* ...................Card1..................... */}
          <div className="col cardWidth">
            <div className="card cardImgAdjust cardMain">
              <img
                src={HomeLoan}
                className="bd-placeholder-img card-img-top img-fluid imgD"
                alt="Home loan"
              />

              <div className="card-body col text-center cardA">
                <p className="card-textH">HOME LOAN </p>

                {/* <p>
                  Apply for a home loan hassle-free with zero processing fees
                  and enjoy a free consultation with our expert team!
                </p> */}
                <p className="paraCss">
                Enjoy competitive interest rates, flexible repayment options, and personalized service tailored to your needs. Don't miss out on the opportunity to make your homeownership dreams come true. Get started today!
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary btnSize"
                      onClick={add}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ...................Card2..................... */}
          <div className="col cardWidth">
            <div className="card cardImgAdjust cardMain">
              <img
                src={BalanceTransfer}
                className="bd-placeholder-img card-img-top img-fluid imgD"
                alt="Balance Transfer"
              />

              <div className="card-body col text-center cardA">
                <p className="card-textH">BALANCE TRANSFER</p>

                {/* <p className="text-center ">
                  Save money and enjoy better terms by transferring your
                  existing home loan to our trusted lending partners today!
                </p> */}
                <p className="paraCss" >
                Take control of your finances with our convenient balance transfer for home loans! Don't let high interest rates weigh you down; make the switch and secure a brighter financial future! 
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary btnSize"
                      onClick={add}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ...................3..................... */}

          <div className="col cardWidth">
            <div className="card  cardImgAdjust cardMain">
              <img
                src={LoanAgainstProperty}
                className="bd-placeholder-img card-img-top img-fluid imgD"
                alt="Loan Against Property"
              />

              <div className="card-body col text-center cardA">
                <p className="card-textH">LOAN AGAINST PROPERTY</p>

                {/* <p>
                  Enjoy the convenience of doorstep service for all your home
                  loan needs with our expert team at your service!
                </p> */}
                <p className="paraCss">
                Secure funds with your property as collateral, offering attractive interest rates and easy repayment plans. Apply now to unlock the potential of your property and achieve your financial goals with confidence!
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="btn-group">
                  <button
                      type="button"
                      className="btn btn-sm btn-primary btnSize"
                      onClick={add}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* .......................................... */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
