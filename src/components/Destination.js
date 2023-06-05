import "./DestinationStyles.css";
import Paris from "../images/paris.jpeg";
import Paris1 from "../images/paris2.jpeg";
import Rome from "../images/rome.jpeg";
import Rome1 from "../images/rome2.jpeg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular destinations!</h1>
      <p>Find a beautiful place and get lost.</p>
      <DestinationData
        className="first-des"
        heading="Paris, France."
        text="The Eiffel Tower, an iconic landmark in Paris, France, is a must-see
      for tourists. Built in the late 19th century by Gustave Eiffel, it
      serves as a symbol of Parisian culture and ingenuity. Visitors can
      enjoy panoramic views of the city from its observation decks, dine
      at its restaurants with stunning vistas, and witness the mesmerizing
      light show at night. Booking tickets in advance is recommended to
      avoid long queues. Whether exploring Gustave Eiffel's office,
      shopping for souvenirs, or capturing memorable moments, the Eiffel
      Tower offers an unforgettable experience that showcases the beauty
      and grandeur of Paris."
        img1={Paris}
        img2={Paris1}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Rome, Italy."
        text="The Eternal City is a significant destination for travelers far and wide as it houses several emblematic monuments thanks to the ancient Roman Empire. It is the capital of Italy and the Lazio region.
        It is famous for its historic and ancient structures, which makes the city’s view incredibly magical. The city’s various attractions include the Vatican City and the Colosseum, famous for their extensive histories as well as world-class museums."
        img1={Rome}
        img2={Rome1}
      />
    </div>
  );
};

export default Destination;
