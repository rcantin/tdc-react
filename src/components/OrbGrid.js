import React from "react";
import orbDance from "../img/orbs/wshadow/wtext/dance.svg";
import orbGymnastics from "../img/orbs/wshadow/wtext/gymnastics.svg";
import orbMartialArts from "../img/orbs/wshadow/wtext/martialarts.svg";
import orbNinja from "../img/orbs/wshadow/wtext/ninja.svg";
import orbTheatre from "../img/orbs/wshadow/wtext/theatre.svg";
import orbCamps from "../img/orbs/wshadow/wtext/camps.svg";
import orbFamilyTree from "../img/orbs/wshadow/wtext/familytree.svg";
import orbBirthdays from "../img/orbs/wshadow/wtext/birthdays.svg";
import orbBACare from "../img/orbs/wshadow/wtext/bacare.svg";
import orbMusic from "../img/orbs/wshadow/wtext/music.svg";
import orbChiro from "../img/orbs/wshadow/wtext/chiropractic.svg";
import orbBarbella from "../img/orbs/wshadow/wtext/barbella.svg";
import { Link } from "react-router-dom";

function OrbGrid() {
  return (
    <div>
      <div className="row orbGrid">
        <div className="col-4 col-md-3 col-lg-2">
          <Link to="/dance">
            <img src={orbDance} alt="Dance" />
          </Link>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          <img src={orbGymnastics} alt="Gymnastics" />
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          <img src={orbMartialArts} alt="MartialArts" />
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          <img src={orbNinja} alt="Ninja" />
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          <img src={orbTheatre} alt="Theatre" />
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          <img src={orbCamps} alt="Camps" />
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          <img src={orbFamilyTree} alt="FamilyTree" />
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          <img src={orbBirthdays} alt="Birthdays" />
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          <img src={orbBACare} alt="Before and After Care" />
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          <img src={orbMusic} alt="Music" />
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          <img src={orbChiro} alt="Chiropractic" />
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          <img src={orbBarbella} alt="Barbella" />
        </div>
      </div>
    </div>
  );
}

export default OrbGrid;
