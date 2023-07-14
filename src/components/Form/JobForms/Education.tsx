import { FormWrapper } from "../FormWrapper";
import { useState, ChangeEvent, useEffect } from "react";
import "../../../styles/TableStyle.scss";

type Certificate = {
  title: string;
  degree: string;
  major: string;
  university: string;
  country: string;
  year: string;
};

export function Education({ getEducationData }) {
  const [title, setTitle] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [major, setMajor] = useState<string>("");
  const [university, setUniversity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const [certificates, setCertificates] = useState<Certificate[]>([]);

  const updateField = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "degree") {
      setDegree(e.target.value);
    } else if (e.target.name === "major") {
      setMajor(e.target.value);
    } else if (e.target.name === "university") {
      setUniversity(e.target.value);
    } else if (e.target.name === "country") {
      setCountry(e.target.value);
    } else {
      setYear(e.target.value);
    }
  };

  const onAdding = () => {
    if (
      title === "" ||
      degree === "" ||
      major === "" ||
      university === "" ||
      country === "" ||
      year === ""
    ) {
      alert("Please Enter Value");
    } else {
      const newCertificate: Certificate = {
        title: title,
        degree: degree,
        major: major,
        university: university,
        country: country,
        year: year,
      };
      setCertificates([...certificates, newCertificate]);
      setTitle("");
      setDegree("");
      setMajor("");
      setUniversity("");
      setYear("");
      setCountry("");
    }
  };

  const onDeleting = () => {
    setCertificates((prev) => {
      return prev.slice(0, -1);
    });
    setTitle("");
    setDegree("");
    setMajor("");
    setUniversity("");
    setYear("");
    setCountry("");
  };

  useEffect(() => {
    if (certificates) {
      getEducationData(certificates);
      console.log(certificates);
    }
  }, [certificates]);

  return (
    <FormWrapper
      title="Education"
      subtitle="Tell Us About Your Education Journy"
    >
      <div className="inputs-wrapper">
        <input
          autoFocus
          placeholder="Certificate Title"
          value={title}
          name="title"
          onChange={(e) => updateField(e)}
        />
        <input
          placeholder="Degree"
          value={degree}
          name="degree"
          onChange={(e) => updateField(e)}
        />
        <input
          placeholder="Major"
          value={major}
          name="major"
          onChange={(e) => updateField(e)}
        />
        <input
          placeholder="University Taked This Certificate From"
          value={university}
          name="university"
          onChange={(e) => updateField(e)}
        />
        <input
          placeholder="Country Taked This Certificate From"
          value={country}
          name="country"
          onChange={(e) => updateField(e)}
        />
        <input
          placeholder="Year"
          value={year}
          name="year"
          onChange={(e) => updateField(e)}
        />
      </div>
      <div className="btns">
        <button className="tableBtn" type="button" onClick={() => onAdding()}>
          +
        </button>
        {certificates.length > 0 && (
          <button
            className="tableBtn"
            type="button"
            onClick={() => onDeleting()}
          >
            -
          </button>
        )}
      </div>

      <div className="certificates">
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>nu</th>
              <th>Certificate</th>
              <th>Degree</th>
              <th>Major</th>
              <th>University</th>
              <th>Country</th>
              <th>Year</th>
            </tr>
            {certificates.map((certificate, i) => (
              <tr>
                <td data-th="nu">{i + 1}</td>
                <td data-th="Certificate">{certificate.title}</td>
                <td data-th="Degree">{certificate.degree}</td>
                <td data-th="Major">{certificate.major}</td>
                <td data-th="University">{certificate.university}</td>
                <td data-th="Country">{certificate.country}</td>
                <td data-th="Year">{certificate.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FormWrapper>
  );
}
