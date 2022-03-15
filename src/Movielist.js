import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import pic4 from "./pic4.jpg";
import pic5 from "./pic5.jpg"
const Movielist = () => {
    return (
        <div className="images">



            <div className="card">
                <img src={pic1} alt="Contain" style={{ width: "100%" }} />
                <div class="container">
                    <h4><b>Avatar </b></h4>
                    <p>Director:James Cameron
                    </p>
                    <p>Writer:James Cameron</p>
                    <div className="price">5000rs</div>
                </div>
            </div>

            <div className="card">
                <img src={pic2} alt="Contain" style={{ width: "100%" }} />
                <div class="container">
                    <h4><b>Interstellar</b></h4>
                    <p>Directed by:Christopher Nolan	...	
                            Jonathan Nolan	...	    
                            Christopher Nolan	...
                            </p>
                            <div className="price">2500rs</div>
                </div>
            </div>


            <div className="card">
                <img src={pic4} alt="Contain" style={{ width: "100%" }} />
                <div class="container">
                    <h4><b>Pecafic rim</b></h4>
                    <p>Director:Guillermo del Toro
                     <p>Writers:Travis Beacham(screenplay)Guillermo del Toro(screenplay)
                    Stars:Idris ElbaCharlie HunnamRinko Kikuchi</p></p>
                        <div className="price">3500rs</div>
                </div>
            </div>
            
            <div className="card">
                <img src={pic3} alt="Contain" style={{ width: "100%" }} />
                <div class="container">
                    <h4><b>Ford vs Ferrari </b></h4>
                    <p>Director:James Mangold
                        Writers:Jez ButterworthJohn-Henry 
                        ButterworthJason Keller</p>
                    <div className="price">2000rs</div>
                </div>
            </div>


            <div className="card">
                <img src={pic5} alt="Contain" style={{ width: "100%" }} />
                <div class="container">
                    <h4><b>Avangers</b></h4>
                    <p>Director:James Mangold
                        Writers:Jez ButterworthJohn-Henry 
                        ButterworthJason Keller</p>
                    <div className="price">2000rs</div>
                </div>
            </div>
        </div>
    );
}

export default Movielist;