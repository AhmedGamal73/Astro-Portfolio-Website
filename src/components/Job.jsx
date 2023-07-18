import "../styles/Jobs.scss";

export const Job = ({ title, jobDesc }) => {
  return (
    <div className="job-cont">
      <div className="right-col">
        <h4>
          <a target="_blank" href="/en/job-application">
            Apply as employee
          </a>
        </h4>
        <h4>
          <a target="_blank" href="/en/job-application">
            Apply as trainee
          </a>
        </h4>
      </div>
      <div className="left-col">
        <div className="first">
          <h2>{title}</h2>
        </div>
        <div className="job-desc">
          <p>{jobDesc}</p>
        </div>
        <div className="last">
          <div className="job-statue">
            <div className="statue statue1">
              <span className="icon location-icon"></span>
              <p>1OO% Office-based</p>
            </div>
            <div className="statue statue12">
              <span className="icon clock-icon"></span>
              <p>Full-time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
