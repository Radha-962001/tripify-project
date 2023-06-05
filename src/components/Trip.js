import TripData from "./TripData";
import "./TripStyles.css";
import trip1 from "../images/trip1.jpeg";
import trip2 from "../images/trip2.jpeg";
import trip3 from "../images/trip3.jpeg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips!</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="trip-card">
        <TripData
          image={trip1}
          heading="Trip to Agra"
          text="An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage."
        />
        <TripData
          image={trip2}
          heading="Trip to Naigara falls"
          text="Niagara Falls is a city in Niagara County, New York, United States. As of the 2020 census, the city had a total population of 48,671. It is adjacent to the Niagara River, across from the city of Niagara Falls, Ontario, and named after the famed Niagara Falls which they share. The city is within the Buffalo–Niagara Falls metropolitan area and the Western New York region."
        />
        <TripData
          image={trip3}
          heading="Trip to Yosemite Valley (California)"
          text="Situated in the amazing Yosemite National Park, deep in the heart of the Sierra Nevada mountains of central California, Yosemite Valley is mecca for landscape photography. Made famous by Ansel Adams and countless photographers following in his footsteps, Yosemite Valley is truly a place you have to see to believe."
        />
      </div>
    </div>
  );
}
export default Trip;
