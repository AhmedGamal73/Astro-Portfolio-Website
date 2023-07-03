import styles from './form.module.scss';
import '../../../styles/ContactForm.scss';

const ConsaltantForm = () => {
  return (
    <div className={styles.flex}>
      <h3>Ask us any question</h3>
        <label>Email</label>
        <input
          autoFocus
          required
          type="email"
        />
        <label>Password</label>
        <input
          required
          type="password"
        />
      </div>
  );
}

export default ConsaltantForm