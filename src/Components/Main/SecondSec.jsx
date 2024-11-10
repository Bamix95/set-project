import style from "./secondsec.module.css";
import PropTypes from "prop-types";
const SecondSec = ({ Planning }) => {
  return (
    <div>
      <header className={style.plan_header}>
        <div className={style.plan_links}>
          <p>Planning</p>
          <small>View All</small>
        </div>
        <div className={style.calendar_links}>
          <img src='/images/calendar.svg' />
          <p>20 March 2020</p>
        </div>
      </header>
      <div className={style.secondcard}>
        {Planning.map((plan) => (
          <ul key={plan.plan}>
            <li>
              <div className={style.cardcontent}>
                <span
                  style={{
                    backgroundColor: plan.imageBackground,
                    padding: "10px",
                    borderRadius: "12px",
                  }}
                >
                  {plan.image}
                </span>

                <small>
                  <span className={style.secondcardPlan}>{plan.plan}</span>
                  <span className={style.secondcardTime}>{plan.Time}</span>
                </small>
              </div>
              <img src='/images/more-vertical 7.svg' />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
SecondSec.propTypes = {
  Planning: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.element,
      imageBackground: PropTypes.string,
      plan: PropTypes.string,
      Time: PropTypes.string,
    })
  ),
};
export default SecondSec;
