import { FormWrapper } from "../FormWrapper";
import { useState } from "react";
import { storage } from "../../../firebase/client";
import { uploadBytes, ref } from "firebase/storage";
import { v4 } from "uuid";
import styles from "../../../styles/global.module.css";

type CVData = {
  cv: string;
  img: string;
};

export function CVForm({ cv }: CVData) {
  const [CVUpload, setCVUpload] = useState(null);

  const uploadCV = () => {
    if (CVUpload == null) return;
    const CVRef = ref(storage, `cv/${CVUpload.name + v4()}`);
    uploadBytes(CVRef, CVUpload).then(() => {
      alert("image had been uploaded");
    });
  };
  return (
    <FormWrapper subtitle="Verify Your CV" title="CV">
      <div className={`field-wrapper ${styles.upload}`}>
        <label>Upload Your CV</label>
        <input
          className={styles.file_upload}
          autoFocus
          required
          type="file"
          value={img}
          onChange={(e) => {
            setCVUpload(e.target.files[0]);
          }}
        />
        <button className={`btn-stroke-yellow`} onClick={uploadCV}>
          Upload
        </button>
      </div>
      <div className={`field-wrapper ${styles.upload}`}>
        <label>Upload Your Picture</label>
        <input
          className={styles.file_upload}
          autoFocus
          required
          type="file"
          value={cv}
          onChange={(e) => {
            setCVUpload(e.target.files[0]);
          }}
        />
        <button className={`btn-stroke-yellow`} onClick={uploadCV}>
          Upload
        </button>
      </div>
    </FormWrapper>
  );
}
