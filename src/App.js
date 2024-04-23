
import './App.css';

function App() {
  return (
    <div className="App">
       <header>
        <a href="#" class="logo">Pizza Pie</a>
        <div class="bx bx-menu" id="menu-icon"></div>

        <ul class="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#contact">Contact</a></li>
       =
            <div class="bx bx-moon" id="darkmode"></div>
        </ul>
    </header>
   =
    <section class="home" id="home">
        <div class="home-text">
            <h1>Pizza Taste</h1>
            <h2>The tasty pizza of <br/> your choice</h2>
           View Menu
        </div>
        <div class="home-img">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80.png" alt="" />
        </div>
    </section>

 
    <section class="about" id="about">
        <div class="about-img">
            <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg" alt=""/>
        </div>
        <div class="about-text">
            <span>About Us</span>
            <h2>We make good and <br /> tasty pizzas</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quo iure rem ducimus tenetur deserunt commodi doloribus, quibusdam vel fuga?</p>
            Learn More
        </div>
    </section>


    <section class="menu" id="menu">
        <div class="heading">
            <span>Menu</span>
            <h2>Tasty menu of the week</h2>
        </div>
        <div class="menu-container">
            
            <div class="box">
                <div class="box-img">
                    <img src="https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?cs=srgb&dl=pexels-beqa-tefnadze-803290.jpg&fm=jpg" alt="" />
                </div>
                <h2>Cheese Pizza</h2>
                <h3>Tasty Food</h3>
                <span>$30.05</span>
                <i class='bx bx-cart-alt'></i>
            </div>
     
            <div class="box">
                <div class="box-img">
                    <img src="https://img.freepik.com/free-photo/pepperoni-pizza-with-sausages-cheese-dark-wooden-table_220768-9277.jpg?size=626&ext=jpg" alt=""/>
                </div>
                <h2>Tropical Pizza</h2>
                <h3>Tasty Food</h3>
                <span>$42.05</span>
                <i class='bx bx-cart-alt'></i>
            </div>
            
            <div class="box">
                <div class="box-img">
                    <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=740&t=st=1661842808~exp=1661843408~hmac=c40f0c154036b96b1dba17947c4e4f7c07f40db983106490402bb0b7b6ec452e" alt=""/>
                </div>
                <h2>Mecaroni Pizza</h2>
                <h3>Tasty Food</h3>
                <span>$12.05</span>
                <i class='bx bx-cart-alt'></i>
            </div>
        </div>
    </section>

   
    <section class="services" id="services">
        <div class="heading">
            <span>Services</span>
            <h2>We provide best food services</h2>
        </div>

        <div class="servives-container">
          
            <div class="s-box">
                <img src="https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.png" alt=""/>
                <h3>You Order</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ea fugiat esse tempore ipsum temporibus.</p>
            </div>
            
            <div class="s-box">
                <img src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.png" alt=""/>
                <h3>Shipping</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ea fugiat esse tempore ipsum temporibus.</p>
            </div>
           
            <div class="s-box">
                <img src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.png" alt="" />
                <h3>Delivered</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ea fugiat esse tempore ipsum temporibus.</p>
            </div>
        </div>
    </section>

  
    <section class="connect">
        <div class="connect-text">
            <span>Let's Talk</span>
            <h2>Connect now</h2>
        </div>
    Contact Us
    </section>

 
    <section class="contact" id="contact">
        <div class="contact-box">
            <h3>Pizza Pie</h3>
            <span>Connect With Us</span>
            <div class="social">
               <i class='bx bxl-facebook' ></i>
                <i class='bx bxl-twitter' ></i>
                <i class='bx bxl-instagram' ></i>
            </div>
        </div>
        <div class="contact-box">
            <h3>Menu Links</h3>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Service</li>
            <li>Contact</li>
        </div>
        <div class="contact-box">
            <h3>Quick Links</h3>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>Terms Of Use</li>
        </div>
        <div class="contact-box address">
            <h3>Contact</h3>
            <i class='bx bxs-map' ><span>005, Lorem ipsum dolor, sit amet consectetur, India</span></i>
            <i class='bx bxs-phone' ><span>+91 000 999 5555</span></i>
            <i class='bx bxs-envelope' ><span>Example@email.com</span></i>
        </div>
    </section>

    
    <div class="copyright">
        <p>© Asslone4 All Right Reserved.</p>
    </div>

</div>
    
   


  );
}

export default App;
