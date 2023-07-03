import { getAuth } from 'firebase-admin/auth';
import { initializeApp, cert } from 'firebase-admin/app';

const serviceAccount = {
  type: "service_account",
  project_id: "656a1f8989e218305d7235430bb59c8a1cdb6b93",
  private_key_id: "bp-authantication",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDMikSM0/2RGNL3\nM1d2OEEcImtTi/jcHyKWv9twpVVffHH5+nJRW+z93dckPbw3qEM5snGvPqGNG+B+\nve/jJ/21DoDTJ4BKm8aDUrgmssuCkNi7531D1FK+yvPfQHLvX2GC+KwtaDPTH7Hd\nod2IicAcztDgYofEfwQLtw2+9wcV13y3/j2gbn6oTpMHXwNG33YLErzug2CyDwvh\nEQEPnob56tXMkl8Kucf+oHt6ndtWbhCReO3gD+mhtowtnE0NY+S/VqVjRmzWGc5B\ntSCPzAvXwDIM59sXR09hh8yrpeRpd9jcS9GFYbwrbepBqCg/StCZclMqMD/Vtwx5\np24YssmjAgMBAAECggEAOe9UGVuWb/nLD6/gLyEh+Bkbs09rTtYW0wJG4rJB60jx\nc6/nn3ndN88VODOwU0d6uyX7I3snATQLM3sTLpFOQHF6NdTzdq6G3P2aIYP1NudW\nLGsWRRcn1NjhmLPFml223gUXp8jjHQLWO4O0nw79dmtyKIxgDl03xSW1ZAjOXfXo\nvZw0tV36Sgjkl3uYNpOmU7z7oc8iZYcUmvMLQLpP3RL0g55/O/KYeLjT/RiHOdyd\nnvJn4bh+axT4UvZwxPAFvgAhXQW6WbsfW+w7DL5gPHYisLxi2VOOj+JmOLkl0vyb\nkl4ichJDj21b39W//C996WC6iyZqdirwJ/kQ5ESc2QKBgQDoO+N84lRS3XijpvnJ\nTNGZx+5DQJ2S0JRRk80aKRQI0TiIJiRSEy4KoscF3AAA5mirsPrMHPSZ4ywE0Pl6\nQk2fNWmbTSboLS6r33403QT7wxYt7Nu52hY8oTL/h2HviTt1/3+5yA0/ekLKSRr4\nM34goxo7eQcTLOEjDsXyc0Re3QKBgQDheNnAiqceWJbuAY2RqCNjp93jdUoTKDFD\nDT0yYZNMCaDO8ggDlUK5mnEtRhJzX3ztO7uWHS75sfHYKdx8m+I6suZ/XKX85Wmb\n8xfkQGr0LxwiLWHRegD8avPWE5LKmuOwelWeLxhPDGx9Tgvb/dm0YI123VHc5hpZ\n909pc5ICfwKBgQCHQBnE6atid0mDRgPDkNGhVicVU9RxZLh8qi+RRMs+N1tNL6mH\ng1QVLafraa022PmsxG3L4jEyTnOcenhRE7xRNLJEmDJIlcfQoWDHONFmLsAEDyYI\nn1LEDL2+xAHtl2bh2eNxN2k/xtyPIvRqCNMz/smQSXQtXr3fxQLTqP3woQKBgQCF\n8pu6bSS3PH39y2JlQ/QyQgnqFUX6d4g8g2L1yU4OgDHOf68PId9QEFZoRRa0/+dh\nsHjSx2ee433/o27fgGQ35wxUYaAiy8+f3B03dqWTh2E5VKimH8ryKj/N0DcGslnN\n//9ZSDUy0PiqwHD/MqHhLPMdyIHXr8O76tZ8mTIG1QKBgDVhtOUbdNooOrfr8qmk\nk2tSH15KI2i2eYB7fmn6E04RWBTntH+3PDPE4VlR2aZ1Ud/JdZxB3BF3EmYPxy/v\nUePaSuO3MsVg0K1SRYxIyE47QYdr5jVuSPUyUJOF0oQ372soPlcHpE66OvmsKilM\n9Hw6858Y6dOHGdHcc/Psr25/\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-kwu1k@bp-authantication.iam.gserviceaccount.com",
  client_id: "100645465928385918861",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kwu1k%40bp-authantication.iam.gserviceaccount.com"
};
const app = initializeApp({
  credential: cert(serviceAccount)
});

const post = async ({ request, redirect }) => {
  const auth = getAuth(app);
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();
  if (!email || !password || !name) {
    return new Response(
      "Missing form data",
      { status: 400 }
    );
  }
  try {
    await auth.createUser({
      email,
      password,
      displayName: name
    });
  } catch (error) {
    return new Response(
      "Something went wrong",
      { status: 400 }
    );
  }
  return redirect("/en/cpanel-login");
};

const register = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

export { app as a, register as r };
