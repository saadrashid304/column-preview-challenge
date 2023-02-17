import styles from "./App.module.css";
import Card from "./Components/Card/Card";
import luxury from "./icon-luxury.svg";
import sedans from "./icon-sedans.svg";
import suvs from "./icon-suvs.svg";

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <Card
          icon={sedans}
          title="SEDANS"
          description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
          style={{
            backgroundColor: "hsl(31, 77%, 52%)",
            // borderTopLeftRadius: "10px",
            // borderBottomLeftRadius: "10px",
          }}
          btnStyle="btn1"
        />
        <Card
          icon={suvs}
          title="SUVS"
          description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
          style={{ backgroundColor: "hsl(184, 100%, 22%)" }}
          btnStyle="btn2"
        />
        <Card
          icon={luxury}
          title="LUXURY"
          description="Cruise is the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
          style={{
            backgroundColor: "hsl(179, 100%, 13%)",
            // borderTopRightRadius: "10px",
            // borderBottomRightRadius: "10px",
          }}
          btnStyle="btn3"
        />
      </div>
    </div>
  );
};

export default App;
