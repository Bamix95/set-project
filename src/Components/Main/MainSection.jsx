import Header from "./header";
import ProgressBar from "./ProgressBar";
import SecondSec from "./SecondSec";
import style from "./mainsec.module.css";

const MainSection = ({ Courses, user, Planning }) => {
  return (
    <div className={style.maincontainer}>
      <div className={style.mainbordereffect}></div>
      <Header user={user} />
      <div className={style.maincontent}>
        <header className={style.mainheader}>
          <div className={style.headerCourse}>
            <p>My Courses</p>
            <small>View All</small>
          </div>
          <div className={style.input}>
            <img src='/images/search 1.svg' />
            <input type='search' placeholder='Search...' />
          </div>
        </header>

        <div className={style.Courses}>
          {Courses.map((Course) => (
            <ul
              key={Course.course}
              style={{ backgroundColor: Course.background }}
            >
              <li>
                <section>
                  <div>
                    <p>{Course.course}</p>
                    <small>{Course.Lesson}</small>
                  </div>
                  <ProgressBar Course={Course} />
                </section>
                <img src={Course.Image} alt='' />
              </li>
            </ul>
          ))}
        </div>
      </div>
      <SecondSec Planning={Planning} />
    </div>
  );
};

export default MainSection;
