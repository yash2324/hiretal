const Cards = (props) => {
  return (
    <div className="Card">
      <div className="card-header">
        <h4 className="check">
          <input type="checkbox" />
        </h4>
        <div className="image-container">
          <img
            src={
              props?.profile_picture
                ? props?.profile_picture
                : "https://freesvg.org/img/abstract-user-flat-4.png"
            }
            alt="pfp"
          />
        </div>

        <h1 className="name">{props?.full_name}</h1>
        <button className="card-header-btn">
          <i className="fa">&#xf087;</i> Good Fit
        </button>
        <h2 className="location"> {props?.location}</h2>
        <a className="linkedin" href={props?.linkedin_url}>
          <img
            className="linkedin-logo"
            src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w600-h300-pc0xffffff-pd"
            alt="linkedin"
          />
        </a>
      </div>
      <div className="card-info">
        <div className="job-title">
          <h2>Title</h2>
          <p>{props?.job_title ? props?.job_title : "No title"}</p>
        </div>
        <div className="company-name">
          <h2>Job Company Name</h2>
          <p>
            {props?.job_company_name}
            <a href={`https://${props?.job_company_website}`}>
              <img
                className="link-icon"
                src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/95-512.png"
              />
            </a>
          </p>
        </div>
        <div className="company-industry">
          <h2>Company Industry</h2>
          <p>{props?.industry}</p>
        </div>
        <div className="job-function">
          <h2>Job Function</h2>
          <p>
            {props?.job_title_subrole ? props?.job_title_subrole : "No data"}
          </p>
        </div>
        <div className="job-title-level">
          <h2>Job Title Level</h2>
          <p>
            {props.job_title_levels
              ? props.job_title_levels.join(", ")
              : "No Job Titles"}
          </p>
        </div>
        <div className="education">
          <h2>Education :</h2>
          {props.educations && props.educations.length > 0 ? (
            <ul className="education-list">
              {props.educations.map((education) => (
                <li key={education.id}>{education?.school_name}</li>
              ))}
            </ul>
          ) : (
            <p>No education available</p>
          )}
        </div>
        <div className="experiences">
          <h2>Experiences :</h2>
          {props.experiences && props.experiences.length > 0 ? (
            <ul className="experiences-list">
              {props.experiences.map((experience) => (
                <li key={experience.id}>
                  {experience.title} at {experience.company.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No experiences available</p>
          )}
        </div>
      </div>
      <hr className="solid" />
    </div>
  );
};
export default Cards;
