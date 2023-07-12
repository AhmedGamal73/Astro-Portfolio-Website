import { FormWrapper } from "../FormWrapper";
import { useState, ChangeEvent, useEffect } from "react";
import "../../../styles/TableStyle.scss";

type Language = {
  title: string;
  read: string;
  write: string;
  speak: string;
};

export function Language() {
  const [title, setTitle] = useState<string>("");
  const [read, setRead] = useState<string>("");
  const [write, setWrite] = useState<string>("");
  const [speak, setSpeak] = useState<string>("");
  const [certificates, setCertificates] = useState<Language[]>([]);

  const updateField = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "read") {
      setRead(e.target.value);
    } else if (e.target.name === "write") {
      setWrite(e.target.value);
    } else {
      setSpeak(e.target.value);
    }
  };

  const onAdding = () => {
    if (title === "" || read === "" || write === "" || speak === "") {
      alert("Please Enter Value");
    } else {
      const newCertificate: Language = {
        title: title,
        read: read,
        write: write,
        speak: speak,
      };
      setCertificates([...certificates, newCertificate]);
      setTitle("");
      setRead("");
      setWrite("");
      setSpeak("");
    }
  };

  const onDeleting = () => {
    setCertificates((prev) => {
      return prev.slice(0, -1);
    });
    setTitle("");
    setRead("");
    setWrite("");
    setSpeak("");
  };

  useEffect(() => {
    if (certificates.length > 0) {
      console.log(certificates);
    }
  }, [certificates]);

  return (
    <FormWrapper title="Education" subtitle="Tell Us About Education Journy">
      <div className="inputs-wrapper">
        <input
          autoFocus
          id="lang-input"
          placeholder="Language Title"
          value={title}
          name="title"
          onChange={(e) => updateField(e)}
        />

        <select
          defaultValue="select"
          value={read}
          name="read"
          onChange={(e) => updateField(e)}
        >
          <option value="">Your Level In Speaking</option>
          <option value="Excellent">Excellent</option>
          <option value="Fair">Fair</option>
          <option value="Weak">Weak</option>
        </select>

        <select
          defaultValue="select"
          value={write}
          name="write"
          onChange={(e) => updateField(e)}
        >
          <option value="">Your Level In Writing</option>
          <option value="Excellent">Excellent</option>
          <option value="Fair">Fair</option>
          <option value="Weak">Weak</option>
        </select>

        <select
          defaultValue="select"
          value={speak}
          name="speak"
          onChange={(e) => updateField(e)}
        >
          <option value="">Your Level In Speaking</option>
          <option value="Excellent">Excellent</option>
          <option value="Fair">Fair</option>
          <option value="Weak">Weak</option>
        </select>
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
              <th>Language</th>
              <th>Read</th>
              <th>Write</th>
              <th>Speak</th>
            </tr>
            {certificates.map((certificate, i) => (
              <tr>
                <td data-th="nu">{i + 1}</td>
                <td data-th="Language">{certificate.title}</td>
                <td data-th="Read">{certificate.read}</td>
                <td data-th="Write">{certificate.write}</td>
                <td data-th="Speak">{certificate.speak}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FormWrapper>
  );
}
