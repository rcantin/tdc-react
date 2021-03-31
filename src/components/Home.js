import React from "react";
import photoSarah from "../img/photo-sarah-main.jpg";
import OrbGrid from "./OrbGrid";

function Home() {
  return (
    <div>
      <div>
        <div>
          <div className="d-flex justify-content-start align-items-center">
            <div className="pr-3">
              <img src={photoSarah} width="100" height="100" className="rounded-circle img-fluid" alt="Sarah Sordoni" />
            </div>
            <div>
              <h6>A Message from</h6>
              <h3 className="tdc-font">The Director</h3>
              <div className="font-weight-light">Sarah Sordoni, Owner/Director</div>
            </div>
          </div>
          <div className="py-3">
            At The Dream Centre, we pride ourselves on a warm, caring, family atmosphere. We believe high success can be achieved through encouragement and instilling self-confidence in our dancers, gymnasts, martial arts and fitness students no matter what size, shape, age or ethnicity. Our award
            winning faculty bring much expertise to The Dream Centre and to the Waterdown community. We do not believe in putting students down to get results. People who are encouraged to keep trying will be more confident and ultimately will get great results by feeling good about what they are
            doing in class. At The Dream Centre, we offer fun physical activity that targets all muscles of the body, enhances stretching and flexibility and promotes health and well being to all ages of our wonderful community of Waterdown and surrounding area.
          </div>
        </div>
      </div>
      <div>
        <OrbGrid />
      </div>
      <div>
        <div className="card bg-light shadow">
          <div className="card-body">
            <h3 className="tdc-font">Upcoming Events</h3>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
