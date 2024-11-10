import style from "./statistics.module.css";
const Statistics = ({ statistics }) => {
  return (
    <div>
      <header className={style.statsheader}>
        <p>Statistics</p>
      </header>
      <div className={style.statsContainer}>
        {statistics.map((stat) => (
          <ul key={stat.title} className={style.statCard}>
            <p className={style.statCardTitle}>{stat.title}</p>
            <div className={style.statCardsec}>
              <div className={style.statCardRec}></div>
              <p className={style.statCardNum}>{stat.number}</p>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
