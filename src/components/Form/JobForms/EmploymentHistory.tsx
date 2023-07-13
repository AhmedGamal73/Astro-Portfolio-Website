import { FormWrapper } from "../FormWrapper";
import { useState, ChangeEvent, useEffect } from "react";
import "../../../styles/TableStyle.scss";

type Company = {
  companyName: string;
  jobTitle: string;
  period: number;
  salary: number;
  manager: string;
  managerPhone: number;
  reason: string;
  year: string;
  country: string;
};

export function EmploymentHistory() {
  const [companyName, setCompanyName] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [period, setPeriod] = useState<number>(null);
  const [salary, setSalary] = useState<number>(null);
  const [manager, setManager] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [managerPhone, setManagerPhone] = useState<number>(null);
  const [country, setCountry] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const [companies, setCompanies] = useState<Company[]>([]);

  const updateField = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.name === "companyName") {
      setCompanyName(e.target.value);
    } else if (e.target.name === "jobTitle") {
      setJobTitle(e.target.value);
    } else if (e.target.name === "period") {
      setPeriod(Number(e.target.value));
    } else if (e.target.name === "salary") {
      setSalary(Number(e.target.value));
    } else if (e.target.name === "manager") {
      setManager(e.target.value);
    } else if (e.target.name === "reason") {
      setReason(e.target.value);
    } else if (e.target.name === "managerPhone") {
      setManagerPhone(Number(e.target.value));
    } else if (e.target.name === "country") {
      setCountry(e.target.value);
    } else {
      setYear(e.target.value);
    }
  };

  const onAdding = () => {
    if (
      companyName === "" ||
      jobTitle === "" ||
      period === 0 ||
      salary === 0 ||
      manager === "" ||
      managerPhone === 0 ||
      year === "" ||
      country === "" ||
      reason === ""
    ) {
      alert("Please Enter Value");
    } else {
      const newCompany: Company = {
        companyName: companyName,
        jobTitle: jobTitle,
        period: period,
        salary: salary,
        manager: manager,
        managerPhone: managerPhone,
        reason: reason,
        year: year,
        country: country,
      };
      setCompanies([...companies, newCompany]);
      setJobTitle("");
      setManager("");
      setCountry("");
      setReason("");
      setManagerPhone(null);
      setPeriod(null);
      setSalary(null);
      setYear("");
    }
  };

  const onDeleting = () => {
    setCompanies((prev) => {
      return prev.slice(0, -1);
    });
    setJobTitle("");
    setManager("");
    setCountry("");
    setReason("");
    setManagerPhone(null);
    setPeriod(null);
    setSalary(null);
    setYear("");
  };

  useEffect(() => {
    if (companies.length > 0) {
      console.log(companies);
    }
  }, [companies]);

  return (
    <FormWrapper
      title="Job History"
      subtitle="Tell Us More About Your Previos Companies That Your Worked In"
    >
      <div className="inputs-wrapper">
        <input
          placeholder="Company Name"
          type="text"
          value={companyName}
          name="companyName"
          onChange={(e) => updateField(e)}
        />
        <input
          placeholder="Job Title"
          value={jobTitle}
          name="jobTitle"
          type="text"
          onChange={(e) => updateField(e)}
        />
        <input
          placeholder="Period of working company (month)"
          value={period}
          type="number"
          name="period"
          onChange={(e) => updateField(e)}
        />
        <input
          placeholder="Salary"
          value={salary}
          name="salary"
          type="number"
          onChange={(e) => updateField(e)}
        />
        <input
          placeholder="Country"
          value={country}
          name="country"
          type="text"
          onChange={(e) => updateField(e)}
        />
        <input
          placeholder="How long did you work there"
          value={year}
          name="year"
          type="date"
          onChange={(e) => updateField(e)}
        />

        <input
          placeholder="Phone of your manager"
          value={managerPhone}
          name="managerPhone"
          type="tel"
          onChange={(e) => updateField(e)}
        />
        <input
          placeholder="Name of your manager"
          value={manager}
          name="manager"
          type="text"
          onChange={(e) => updateField(e)}
        />
        <textarea
          placeholder="Reason For Leaving"
          value={reason}
          name="reason"
          maxLength={100}
          onChange={(e) => updateField(e)}
        />
      </div>
      <div className="btns">
        <button className="tableBtn" type="button" onClick={() => onAdding()}>
          +
        </button>
        {companies.length > 0 && (
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
        {companies.length > 0 && (
          <table className="rwd-table">
            <tbody>
              <tr>
                <th>nu</th>
                <th>Company Name</th>
                <th>Job Title</th>
                <th>Period</th>
                <th>Salary</th>
                <th>Country</th>
                <th>reason</th>
                <th>managerPhone</th>
                <th>manager</th>
                <th>year</th>
              </tr>
              {companies.map((company, i) => (
                <tr>
                  <td data-th="nu">{i + 1}</td>
                  <td data-th="Company Name">{company.companyName}</td>
                  <td data-th="Job Title">{company.jobTitle}</td>
                  <td data-th="Period">{company.period}</td>
                  <td data-th="Salary">{company.salary}</td>
                  <td data-th="Country">{company.country}</td>
                  <td data-th="reason">{company.managerPhone}</td>
                  <td data-th="managerPhone">{company.year}</td>
                  <td data-th="manager">{company.manager}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </FormWrapper>
  );
}
