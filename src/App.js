import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Symbol from "./Symbol"

function App() {
  return (
    <>
      {/* <!-- ##### Preloader ##### --> */}
      <div id="preloader">
        <i className="circle-preloader"></i>
      </div>

      {/* <!-- ##### Header Area Start ##### --> */}
      <header className="header-area" id="home">
        {/* <!-- Top Header Area --> */}
        <div className="top-header">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 h-100">
                <div className="top-header-content h-100 d-flex align-items-center justify-content-between">
                  {/* <!-- Top Headline --> */}
                  <div className="top-headline">
                    <p>
                      <span>WINDSOR</span>
                    </p>
                  </div>
                  {/* <!-- Top Login & Faq & Earn Monery btn --> */}
                  <div className="login-faq-earn-money">
                    <p>
                      <a href="tel:+601116582663">+60-11-1658-2663</a>
                      <a
                        href="mailto:team@windsorcryptocoin.com"
                        className="active"
                      >
                        team@windsorcryptocoin.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Navbar Area --> */}
        <div className="cryptos-main-menu">
          <div className="classy-nav-container breakpoint-off bg-white">
            <div className="container">
              {/* <!-- Menu --> */}
              <nav
                className="classy-navbar justify-content-between"
                id="cryptosNav"
              >
                {/* <!-- Logo --> */}
                <a className="nav-brand" href="index.html">
                  <img src="img/core-img/logo.png" alt="windsor logo" />
                </a>
                {/* <!-- Navbar Toggler --> */}
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                {/* <!-- Menu --> */}
                <div className="classy-menu">
                  {/* <!-- close btn --> */}
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top"></span>
                      <span className="bottom"></span>
                    </div>
                  </div>
                  {/* <!-- Nav Start --> */}
                  <div className="classynav">
                    <ul>
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#purpose">Purpose</a>
                      </li>
                      <li>
                        <a href="#tokenomics">Tokenomics</a>
                      </li>
                      <li>
                        <a href="#strategies">Strategies</a>
                      </li>
                      <li>
                        <a href="#roadmap">Roadmap</a>
                      </li>
                      <li>
                        <a href="#team">Team</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Nav End --> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ##### Header Area End ##### --> */}

      {/* <!-- ##### Hero Area Start ##### --> */}
      <section className="hero-area">
        <div className="hero-slides owl-carousel">
          {/* <!-- Single Hero Slide --> */}
          <div className="single-hero-slide">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-7">
                  <div className="hero-slides-content">
                    <h3
                      data-animation="fadeInUp"
                      data-delay="100ms"
                      style={{ color: "#FFFFFF" }}
                    >
                      WINDSOR on its way
                    </h3>
                    <h6
                      data-animation="fadeInUp"
                      data-delay="400ms"
                      style={{ textAlign: "justify" }}
                    >
                      WINDSOR is a token based on BEP20 Smart Contracts which is
                      open source and immutable and is executing on Binance
                      Smart Chain. It is an experimental digital currency that
                      enables instant payments to anyone, anywhere in the world.
                      WINDSOR is completely decentralized. It uses peer-to-peer
                      technology to operate with no central authority: managing
                      transactions and issuing money are carried out
                      collectively by the network.
                    </h6>
                    <CopyToClipboard text="0x02D57f6c8a307CF8750D9eDA4a45b2F66c78655f">
                      <a href="#Successfully-copied">
                        <h6>
                          Token address:
                          0x02D57f6c8a307CF8750D9eDA4a45b2F66c78655f
                        </h6>
                      </a>
                    </CopyToClipboard>
                    <a
                      href="https://pancakeswap.finance/swap?outputCurrency=0x02D57f6c8a307CF8750D9eDA4a45b2F66c78655f"
                      className="btn cryptos-btn"
                      data-animation="fadeInUp"
                      data-delay="700ms"
                    >
                      Buy
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-5">
                  <div
                    className="hero-slides-thumb"
                    data-animation="fadeInUp"
                    data-delay="1000ms"
                  >
                    <img
                      src="img/bg-img/bg-2.png"
                      alt="windsor background image 2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Single Hero Slide --> */}
          <div className="single-hero-slide">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-7">
                  <div className="hero-slides-content">
                    <h4
                      data-animation="fadeInUp"
                      data-delay="100ms"
                      style={{ color: "#FFFFFF" }}
                    >
                      WINDSOR on its way
                    </h4>
                    <h6
                      data-animation="fadeInUp"
                      data-delay="400ms"
                      style={{ textAlign: "justify" }}
                    >
                      WINDSOR is a token based on BEP20 Smart Contracts which is
                      open source and immutable and is executing on Binance
                      Smart Chain. It is an experimental digital currency that
                      enables instant payments to anyone, anywhere in the world.
                      WINDSOR is completely decentralized. It uses peer-to-peer
                      technology to operate with no central authority: managing
                      transactions and issuing money are carried out
                      collectively by the network.
                    </h6>
                    <CopyToClipboard text="0x02D57f6c8a307CF8750D9eDA4a45b2F66c78655f">
                      <a href="#Successfully-copied">
                        <h6>
                          Token address:
                          0x02D57f6c8a307CF8750D9eDA4a45b2F66c78655f
                        </h6>
                      </a>
                    </CopyToClipboard>
                    <a
                      href="https://pancakeswap.finance/swap?outputCurrency=0x02D57f6c8a307CF8750D9eDA4a45b2F66c78655f"
                      className="btn cryptos-btn"
                      data-animation="fadeInUp"
                      data-delay="700ms"
                    >
                      Buy
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-5">
                  <div
                    className="hero-slides-thumb"
                    data-animation="fadeInUp"
                    data-delay="1000ms"
                  >
                    <img
                      src="img/bg-img/bg-2.png"
                      alt="windsor background image 2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Hero Area End ##### --> */}

      {/* <!-- ##### About Area Start ##### --> */}
      <section className="cryptos-about-area" id="purpose">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="about-thumbnail mb-100">
                <img src="img/bg-img/about.png" alt="windsor about image" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="about-content mb-100">
                <div className="section-heading">
                  <h3>
                    Let’s change <br />
                    <span>the world</span> together
                  </h3>
                  {/* <!-- <h5></h5> --> */}
                  <p style={{ textAlign: "justify" }}>
                    WINDSOR provides a well-secured token that holds the value
                    of a specific asset which can be traded, exchanged, sold
                    etc. Enable any business with more secure and transparent
                    process flow. The transparency and immutability of the
                    crypto tokens help a business to quickly gain trust in the
                    market. Powered by Binance Smart Chain, the WINDSOR token
                    has been launched exclusively also for the network
                    marketers. It uses a decentralized system to reward holders
                    for staking their tokens and referring WINDSOR token to
                    non-holders.
                  </p>
                  {/* <!-- <a href="#" className="btn cryptos-btn mt-30">Read More</a> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### About Area End ##### --> */}

      {/* <!-- ##### Currency Area Start ##### --> */}
      <section
        className="currency-calculator-area section-padding-100 bg-img bg-overlay"
        style={{ backgroundImage: "url(img/bg-img/bg-2.jpg)" }}
        id="tokenomics"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center white mx-auto">
                <h3 className="mb-4">TOKENOMICS</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="currency-calculator mb-15 clearfix">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 text-center">
                    <img src="img/bg-img/token.png" alt="windsor token image" />
                    <h3 className="mt-3 text-white">500 Millions</h3>
                    <h6 className="text-white">Token Supply</h6>
                  </div>
                  <div className="col-lg-3 col-sm-6 text-center">
                    <img
                      src="img/bg-img/binance.png"
                      alt="windsor binance image"
                    />
                    <h3 className="mt-3 text-white">Binance Smart Chain</h3>
                    <h6 className="text-white">Token Network</h6>
                  </div>
                  <div className="col-lg-3 col-sm-6 text-center">
                    <img
                      src="img/bg-img/token_name.png"
                      alt="windsor token name image"
                    />
                    <h3 className="mt-3 text-white">WINDSOR</h3>
                    <h6 className="text-white">Token Name</h6>
                  </div>
                  <div className="col-lg-3 col-sm-6 text-center">
                    <img
                      src="img/bg-img/token_symbol.png"
                      alt="windsor token symbol image"
                    />
                    <h3 className="mt-3 text-white">WINDSOR</h3>
                    <h6 className="text-white">Token Symbol</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Currency Area End ##### --> */}

      {/* <!-- ##### About Area Start ##### --> */}
      <section className="cryptos-about-area" id="strategies">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="about-content mb-100">
                <div className="section-heading">
                  <h3>STRATEGIES</h3>
                  <ul className="ml-4">
                    <li>1. Burn</li>
                    <li>2. Mint</li>
                    <li>3. Staking Rewards</li>
                    <li>4. Liquidity</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="about-thumbnail mb-100">
                <img src="img/bg-img/about.png" alt="windsor about image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### About Area End ##### --> */}

      {/* <!-- ##### Blog Area Start ##### --> */}
      <section className="cryptos-blog-area section-padding-100">
        <div className="container" id="roadmap">
          <div className="row align-items-center">
            <div className="col-12 col-lg-7">
              <div className="blog-area">
                {/* <!-- Single Blog Area --> */}
                <div className="single-blog-area d-flex align-items-start">
                  {/* <!-- Thumbnail --> */}
                  <div className="blog-thumbnail">
                    <img
                      src="img/blog-img/ph-1.jpg"
                      alt="windsor blog image phase 1"
                    />
                  </div>
                  {/* <!-- Content --> */}
                  <div className="blog-content">
                    <p>
                      <ul className="phase">
                        <li>WINDSOR Token Launch</li>
                        <li>WINDSOR Website Launch</li>
                        <li>Marketing Campaign</li>
                        <li>Liquidity Minning</li>
                        <li>Staking</li>
                        <li>
                          Use WINDSOR token for transaparent &amp; secure
                          transaction in our Network Marketing organization
                          windsortrades.com
                        </li>
                        <li>Community Marketting Fund</li>
                      </ul>
                    </p>
                  </div>
                </div>
                {/* <!-- Single Blog Area --> */}
                <div className="single-blog-area d-flex align-items-start">
                  {/* <!-- Thumbnail --> */}
                  <div className="blog-thumbnail">
                    <img
                      src="img/blog-img/ph-2.jpg"
                      alt="windsor blog image phase 2"
                    />
                  </div>
                  {/* <!-- Content --> */}
                  <div className="blog-content">
                    <p>
                      <ul className="phase">
                        <li>Pancakeswap Listing</li>
                        <li>1500 Facebook, Twitter &amp; Telegram Members</li>
                        <li>1000 Holders</li>
                        <li>CoinMarketCap Listing</li>
                        <li>
                          Promote the token via Live Events, Concerts &amp;
                          World wide marketing campaign
                        </li>
                        <li>10000 Facebook, Twitter &amp; Telegram Members</li>
                        <li>2000 Holders</li>
                      </ul>
                    </p>
                  </div>
                </div>
                {/* <!-- Single Blog Area --> */}
                <div className="single-blog-area d-flex align-items-start">
                  {/* <!-- Thumbnail --> */}
                  <div className="blog-thumbnail">
                    <img
                      src="img/blog-img/ph-3.jpg"
                      alt="windsor blog image phase 3"
                    />
                  </div>
                  {/* <!-- Content --> */}
                  <div className="blog-content">
                    <p>
                      <ul className="phase">
                        <li>Audits</li>
                        <li>Binance Listing</li>
                        <li>
                          Decentralized Governance Implementation for Stable
                          Community
                        </li>
                        <li>Grow our existing community</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="cryptos-prices-table">
                {/* <!-- Single Price Table --> */}
                <Symbol
                  name="Binance Coin"
                  symbol="BNB"
                  logoURL="img/bg-img/bnbcoin.png"
                />
                <Symbol
                  name="Bitcoin"
                  symbol="BTC"
                  logoURL="img/bg-img/bitcoin.png"
                />
                <Symbol
                  name="Ethereum"
                  symbol="ETH"
                  logoURL="img/bg-img/ethereum.png"
                />
                <Symbol
                  name="Bitcoin Cash"
                  symbol="BCH"
                  logoURL="img/bg-img/bitcoin-cash.png"
                />
                <Symbol
                  name="Ripple"
                  symbol="XRP"
                  logoURL="img/bg-img/ripple.png"
                />
                <Symbol
                  name="Litecoin"
                  symbol="LTC"
                  logoURL="img/bg-img/litecoin.png"
                />
                <Symbol
                  name="Cardano"
                  symbol="ADA"
                  logoURL="img/bg-img/cardano.png"
                />
                <Symbol name="NEM" symbol="XEM" logoURL="img/bg-img/nem.png" />
                <Symbol name="NEO" symbol="NEO" logoURL="img/bg-img/neo.png" />
                <Symbol
                  name="Stellar"
                  symbol="XLM"
                  logoURL="img/bg-img/stellar.png"
                />
                <Symbol
                  name="IOTA"
                  symbol="IOT"
                  logoURL="img/bg-img/iota.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Newsletter Area --> */}
        <div className="container" id="team">
          <div className="row">
            <div className="col-12">
              <div className="newsletter-area mt-100">
                <div className="section-heading text-center mx-auto">
                  <h3>Co-Founders</h3>
                </div>
                <div className="row">
                  <div className="col-lg-2">&nbsp;</div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="./cofounders/AliHassanSyed.jpg"
                        alt="windsor cofounder Ali Hassan Syed"
                        height="150"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Ali Hassan Syed</h5>
                        <p className="card-text">Financial Analyst</p>
                        <a
                          href="https://www.linkedin.com/in/ali-hassan-syed-8b410a227"
                          target="_blank"
                        >
                          <img
                            src="./cofounders/Linkedin-Logo.png"
                            width="100"
                            alt="windsor linkedin image 1"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="./cofounders/HabibMallick.jpg"
                        alt="windsor cofounder Habib Mallick"
                        height="150"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Habib Mallick</h5>
                        <p className="card-text">
                          Sales &amp; Marketing Specialist
                        </p>
                        <a
                          href="https://www.linkedin.com/in/habib-mallick-156109227"
                          target="_blank"
                        >
                          <img
                            src="./cofounders/Linkedin-Logo.png"
                            alt="windsor linkedin image 2"
                            width="100"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Blog Area End ##### --> */}

      {/* <!-- ##### Footer Area Start ##### --> */}
      <footer className="footer-area" id="contact">
        {/* <!-- Main Footer Area --> */}
        <div
          className="main-footer-area section-padding-100-0 bg-img bg-overlay"
          style={{ backgroundImage: "url(img/bg-img/bg-1.jpg)" }}
        >
          <div className="container">
            <div className="row">
              {/* <!-- Footer Widget Area --> */}
              <div className="col-12 col-sm-6 col-lg-6">
                <div className="footer-widget mb-100">
                  <div className="widget-title">
                    <a href="#">
                      <img src="img/core-img/logo2.png" alt="windsor logo 2" />
                    </a>
                  </div>
                  <CopyToClipboard text="0x02D57f6c8a307CF8750D9eDA4a45b2F66c78655f">
                    <>
                      <h6>Copy Token Address: </h6>
                      <a href="#Successfully-copied" style={{ color: "white" }}>
                        0x02D57f6c8a307CF8750D9eDA4a45b2F66c78655f
                      </a>
                    </>
                  </CopyToClipboard>
                  <p>
                    BANDAR MAKOTA CHERAS 43200 SELANGOR D.E, MALAYSIA
                    <br />
                    CONTACT: +60 11-1658-2663
                    <br />
                    Email Id: team@windsorcryptocoin.com
                    <br />
                  </p>
                  {/* <div className="footer-social-info">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-behance"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </div> */}
                </div>
              </div>

              {/* <!-- Footer Widget Area --> */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="footer-widget mb-100">
                  <div className="widget-title">
                    <h6>Quick Links</h6>
                  </div>
                  <nav>
                    <ul className="useful-links d-flex justify-content-between flex-wrap">
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#purpose">Purpose</a>
                      </li>
                      <li>
                        <a href="#tokenomics">Tokenomics</a>
                      </li>
                      <li>
                        <a href="#strategies">Strategies</a>
                      </li>
                      <li>
                        <a href="#roadmap">Roadmap</a>
                      </li>
                      <li>
                        <a href="#team">Team</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Bottom Footer Area --> */}
        <div className="bottom-footer-area">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-12">
                <p>
                  Copyright &copy; Windsor
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- ##### Footer Area Start ##### --> */}
    </>
  )
}

export default App
