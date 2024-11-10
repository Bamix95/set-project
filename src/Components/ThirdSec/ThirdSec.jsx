import Statistics from "./Stat/Statistics";
import Charts from "./Charts/Charts";
import style from "./thirdsec.module.css";
const ThirdSec = ({ user, statistics, chartData }) => {
  return (
    <div className={style.thirdContainer}>
      <header className={style.thirdheader}>
        <img src='/images/notification.svg' />
        <div className={style.headerCard}>
          <img src={user.userImage} />
          <div className={style.text}>
            <span>
              {user.firstName} {user.lastName}
            </span>
            <small>{user.plan}</small>
          </div>
          <img src='/images/chevron-down 1.svg' />
        </div>
      </header>
      <Statistics statistics={statistics} />
      <Charts chartData={chartData} />
    </div>
  );
};

export default ThirdSec;
