const Index = () => {
    return (
        <div>
            <header className="header-1">
                <nav className="main-nav-1">
                    <ul className="main-nav-list-1">
                        <li><a style={{ textDecoration: 'none', color: '#844107' }} className="main-nav-link" href="#phone">+447880194471</a></li>
                        <li><a style={{ textDecoration: 'none', color: '#844107' }} className="main-nav-link" href="#plus-code">QFW5+JG
                            Leeds, United
                            Kingdom</a></li>
                        <li><a style={{ textDecoration: 'none' }} className="main-nav-link" href="#f-icon"><ion-icon className="h-icon" name="logo-facebook" onclick="gotoPage('fb')" /></a></li>
                        <li><a style={{ textDecoration: 'none' }} className="main-nav-link" href="#i-icon"><ion-icon className="h-icon" name="logo-instagram" onclick="gotoPage('insta')" /></a></li>
                    </ul>
                </nav>
                {/* test */}
                <div className="h-right">
                    <a style={{ textDecoration: 'none', color: '#844107', textTransform: 'uppercase' }} href="#">Client Login</a>
                    <a style={{ textDecoration: 'none', color: '#844107', textTransform: 'uppercase' }} href="#">New Account</a>
                </div>
            </header>
            <header className="header">
                <a style={{ textDecoration: 'none' }} href="#" className="logo">PAW<span>Tobby</span></a>
                <nav className="main-nav">
                    <ul className="main-nav-list">
                        <li><a style={{ textDecoration: 'none', color: '#000' }} className="main-nav-link" href="#home">HOME</a></li>
                        <li><a style={{ textDecoration: 'none', color: '#000' }} className="main-nav-link" href="#about">ABOUT US</a></li>
                        <li><a style={{ textDecoration: 'none', color: '#000' }} className="main-nav-link" href="#service">OUR
                            SERVICES</a></li>
                        <li><a style={{ textDecoration: 'none', color: '#000' }} className="main-nav-link" href="#review">REVIEW</a></li>
                        <li><a style={{ textDecoration: 'none', color: '#000' }} className="main-nav-link" href="#contact">CONTACT US</a>
                        </li>
                        <li><a style={{ textDecoration: 'none', color: '#000' }} className="main-nav-link" href="#followus">FOLLOW US</a>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* home section design */}
            <section className="home" id="home">
                <div className="home-text">
                    <h1>Where pet care is personal</h1>
                    <p>Bring your pet to stay and play with us - and your best friend will quickly become one of ours too</p>
                    <a style={{ textDecoration: 'none' }} href="#" className="btn">SCHEDULE A VISIT</a>
                </div>
            </section>
            {/* feature section design */}
            <div className="text">
                <h4>CARE . LOVE . COMPASSION</h4>
            </div>
            <section className="feature" id="about">
                <div className="feature-img">
                    <img src="Images/img-1.jpg" alt="feature image" />
                </div>
                <div className="feature-text">
                    <h2>About Us</h2>
                    <p>We offer a variety of services that might help you on a busy day or when you go on vacation without your
                        pets..We offer top-notch care for your fur-family in a variety of different settings to accommodate pet
                        parents around the country. All you have to do is call/message us directly.Trust us for your pet.</p>
                    <a style={{ textDecoration: 'none' }} className="btnReadMore" onclick="openAboutUs()">Read more</a>
                </div>
            </section>
            {/* service section design */}
            <div className="txt" id="service">
                <h4>SERVICES</h4>
            </div>
            <section className="service">
                <div className="service-content">
                    <div className="row">
                        <div className="row-img">
                            <img src="Images/dog walk.jpg" alt="service image" />
                        </div>
                        <h4>Dog Walking</h4>
                        <p>Your dog's well-being is our top priority, and we leave no room for compromise. We know that regular
                            physical activity is essential for your dog's overall health and fitness, and our expert dog walkers
                            are ready to ensure they receive just that.</p>
                    </div>
                    <div className="row">
                        <div className="row-img">
                            <img src="Images/overnight care.jpg" alt="service image" />
                        </div>
                        <h4>Overnight Care</h4>
                        <p>Overnight care is an important service for pet owners who can’t always be home with their pets. It
                            provides a reliable and comfortable environment for your pet to stay home. It allows
                            your pet to stay in their familiar environment, and provides them with the security and attention
                            they need. </p>
                    </div>
                    <div className="row">
                        <div className="row-img">
                            <img src="Images/grooming.jpg" alt="service image" />
                        </div>
                        <h4>Grooming</h4>
                        <p>Regular Pet Spa baths and Grooming sessions helps your pet stay healthy, smell better and helps
                            reduce infections. Choose from our affordable range of pet grooming options to provide the best care
                            for your fur ball!</p>
                    </div>
                    <div className="row">
                        <div className="row-img">
                            <img src="Images/pet sitting.jpg" alt="service image" />
                        </div>
                        <h4>Pet Sitting</h4>
                        <p>We offer you Verified and certified sitters who will be at the venue giving personal attention to
                            your pet and making sure that they are a part of your family celebrations tooo and create more
                            wonderful Pawfect memories!!</p>
                    </div>
                    <div className="row">
                        <div className="row-img">
                            <img src="Images/check up.jpg" alt="service image" />
                        </div>
                        <h4>Check Up</h4>
                        <p> We provide expert veterinary services at home for the comfort of pets and pet owners to provide the
                            best possible Vet healthcare services at your doorstep. We can help to protect your pet from their
                            health conditions.</p>
                    </div>
                    <div className="row">
                        <div className="row-img">
                            <img src="Images/vaccination.jpg" alt="service image" />
                        </div>
                        <h4>Vaccinations</h4>
                        <p>Have your pets vaccinated at home, without paying any more than you would at a clinic? No car ride,
                            no waiting room, no stress! Our vaccine includes a full consultation and physical examination for
                            Dogs &amp; Cats.</p>
                    </div>
                    <div className="row">
                        <div className="row-img">
                            <img src="Images/microchipping.jpg" alt="service image" />
                        </div>
                        <h4>Microchipping</h4>
                        <p>Microchip your pet and give them an unique identity and get multiple benefits. It’s never too late to
                            microchip your dog</p>
                    </div>
                    <div className="row">
                        <div className="row-img">
                            <img src="Images/consultation.jpg" alt="service image" />
                        </div>
                        <h4>Behavioral Consultation</h4>
                        <p>Are you struggling with problems with your dog or cat that you just don’t know how to handle?
                            Whatever your needs, we can help!</p>
                    </div>
                </div>
            </section>
            {/* review section design */}
            <div className="Text" id="review">
                <h4>What Pet Owners Say...</h4>
            </div>
            <section className="review">
                <div className="review-content">
                    <div className="review-text">
                        <p><ion-icon className="icon" name="star" />Awesome! They truly love our dogs, and our dogs are
                            always happy to see them.</p>
                        <img src="Images/Stacy Weigers (2).jpg" alt="customer image" />
                        <h6> Stacy Wiegers</h6>
                    </div>
                    <div className="review-text">
                        <p><ion-icon className="icon" name="star" />Kind and caring staff. They always have and still do
                            take very good care of our puppies.</p>
                        <img src="Images/Maureen H.jpg" alt="customer image" />
                        <h6> Maureen H</h6>
                    </div>
                    <div className="review-text">
                        <p><ion-icon className="icon" name="star" />My puppy loves it. Comes home exhausted and happy. The
                            staff is great !!!</p>
                        <img src="Images/Alana A.jpg" alt="customer image" />
                        <h6> Alana A</h6>
                    </div>
                    <div className="review-text">
                        <p><ion-icon className="icon" name="star" />Our 3 dogs love being at Paw Tobby – whether it’s for
                            doggy day camp or boarding. It is a second home for them.
                        </p>
                        <img src="Images/Ruth P.jpg" alt="customer image" />
                        <h6> Ruth P</h6>
                    </div>
                    <div className="review-text">
                        <p><ion-icon className="icon" name="star" /> My pets are well taken care of, get lots of exercise
                            and enjoy playing in the groups of
                            different dogs.</p>
                        <img src="Images/Eva Kendall.jpg" alt="customer image" />
                        <h6> Eva Kendall</h6>
                    </div>
                    <div className="review-text">
                        <p><ion-icon className="icon" name="star" /> We are long-time clients and appreciate how well they
                            treat and care for our dogs.</p>
                        <img src="Images/John Paul.jpg" alt="customer image" />
                        <h6> John Paul</h6>
                    </div>
                    <div className="review-text">
                        <p><ion-icon className="icon" name="star" />This is a very well thought out, robust system for pet
                            sitting and dog walking. The customer service is really good and very prompt.</p>
                        <img src="Images/Stacy Weigers.jpg" alt="customer image" />
                        <h6> Maria Dennis</h6>
                    </div>
                    {/* <div><a><ion-icon class="A-icon" name="arrow-dropright-circle"></ion-icon></a></div> */}
                    <span src="/path/to/external/file.svg" />
                    <a style={{ textDecoration: 'none' }} href="#" className="btnViewMore">View more <ion-icon style={{ color: '#fff' }} className="icn" name="arrow-forward-outline" /></a>
                    <div>
                        <a>
                        </a>
                    </div>
                </div>
            </section>
            {/* cta section design */}
            <section className="section-cta" id="contact">
                <div className="Txt">
                    <h4>CONTACT</h4>
                </div>
                <div className="contact-content">
                    <div className="contact-text">
                        <h6>Phone</h6>
                        <p>+447880194471</p>
                    </div>
                    <div className="contact-text">
                        <h6>Plus code</h6>
                        <p>QFW5+JG Leeds, United Kingdom</p>
                    </div>
                    <div className="contact-text">
                        <h6>Hours of operation</h6>
                        <p>Monday - Sunday: 8am to 11pm</p>
                    </div>
                    <div className="contact-text">
                        <h6>Address</h6>
                        <p>Central Rd, Leeds LS1 6DE, United Kingdom</p>
                    </div>
                </div>
                <div className="cta">
                    <div className="cta-text-box">
                        <form className="cta-form" name="sign-up" netlify>
                            <div>
                                <label htmlFor="full-name">Name</label>
                                <input id="full-name" type="text" placeholder="John Smith" name="full-name" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" placeholder="me@example.com" name="email" required />
                            </div>
                            <div>
                                <label htmlFor="question">Your Question</label>
                                <input id="question" type="question" placeholder="Ask us anything" name="question" required />
                            </div>
                            <div style={{ marginTop: 40 }}>
                                <button style={{ textDecoration: 'none' }} className="btn">SUBMIT</button>
                            </div>
                            {/* <input type="checkbox"/>
              <input type="number"/> */}
                        </form>
                    </div>
                    <div className="cta-img-box" role="img" aria-label="cat and dog image" />
                </div>
            </section>
            {/* follow section design */}
            <section className="follow-us" id="followus">
                <div className="follow">
                    <ion-icon className="icons" name="logo-facebook" onclick="gotoPage('fb')" />
                    <ion-icon className="icons" name="logo-instagram" onclick="gotoPage('insta')" />
                    <ion-icon className="icons" name="logo-youtube" onclick="gotoPage('yt')" />
                    <ion-icon className="icons" name="logo-linkedin" onclick="gotoPage('link')" />
                </div>
            </section>
        </div>

    )
}

export default Index;

