import style from "./progressbar.module.css";
const ProgressBar = ({ Course }) => {
  const size = 52;
  const strokewidth = 4;
  const radius = (size - strokewidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Course.progress / 100) * circumference;
  return (
    <div>
      <svg width={size} height={size} className={style.circularprogressbar}>
        <circle
          className={style.circularbackground}
          stroke={Course.Border}
          fill={Course.background}
          strokeWidth={strokewidth}
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />
        <circle
          className={style.circularprogress}
          stroke='white'
          fill='none'
          strokeWidth={strokewidth}
          strokeLinecap='round'
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          x='50%'
          y='50%'
          textAnchor='middle'
          dy='.3em'
          className={style.progresstext}
        >
          {`${Course.progress}%`}
        </text>
      </svg>
    </div>
  );
};

export default ProgressBar;
