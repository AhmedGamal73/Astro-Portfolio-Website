import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
export const prerender = true;



const serviceAccount = {
  type: "service_account",
  project_id: import.meta.env.FIREBASE_PROJECT_ID,
  private_key_id: import.meta.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoraJTbbF6VeJ1\nALFcekecT/vXn61ZVKm3BuUXUIUZSX1b8JdUJllk3jK3JRTG6vGs/uCxNeEEzML3\ncYFM7Sm8SSXhUXfrQT+uXhk9D/Om+Vg5ruvLdvIdLK2WXL7eKo9SPZkoM+eHXo0C\n0CJ8JK9eDLmejnUexsycdW8plNaEnAS3Ev3DjpPtejGTQDiiDdhPwIZ06gNMH2PL\nPnJXAk539lPC6t5Uc0i4x9G/JZD8ijJulUhc7DiriZcG8IQy/pxiVUdoojcqOVVF\nairhKoeD9ifmOyBfuKLJTi4r8aJM77ALNuZW12URqCaUKhdJCLESXtMnx37mhv6i\nHBKoS95TAgMBAAECggEAFJQmby49TlMHD0Y33TPv46Kgc4SAFhttny5AqdEBg/3C\nxQI7vCD3nAY9wrlL6R7FwFjSGdycaMUAbkbTQwrWIin8bJpPWoy507CYPKpjC/Z0\nrIjqLIcE78lBHkyPXrRritmIA28dqpa+9l5lLqcdHAjKZo0zvb78PIRZPQXzC/d4\nKRLE3OMRRCU8Vg6v1tIxImI7J6a++wq8jzgPt+DXonJLRK4BT0XJKoDPMt2Qhcmw\ntc9jUxhqNN5AW5/o5RYzCzjV7NETicCUhUk0hTzUs0jz+Y1Py73NKlBGwv/K3vVn\njyf55UMEB+O1q4QRVaAheh1xmmaL2eIlBi8AZnBpKQKBgQDRdP4KVa/wfq3AnmNS\nmXrA5k4JuO/ownc3zegWSiKpoXTvuwCY4BxJGUz6zEUXGzbENmWdXtLf80UtV5uu\nIUWunrhMvDAJ+Sgp8NNiR8lO+J3Sbv9bMGozmkWc/izjipsNTJCe5tPbaSRSX8iS\nMxwBI4CmyBT7B0GGcSSZ1htAuQKBgQDOKO8XdeBcy1ShY+7AffvOyuoSwijcmw0/\n27LUYDsF2/d/kTcx5ghhWUPfz+eepD6mopxlk/vQ+GqqyA6GJwLm9npIcMOu2qWM\nSQX00V42kk3W8kkYOMfVZcUmmRdW+w7FmCmpziZMx2/Io45NRaYFLFQ3fTJ3kEBE\n//6LlePZawKBgQCwAEubKYdOYVPlH/I7rQXN43e9ia3l+soslROo7yCTQz08V/lX\nfDGoZt8detmvYcmyNDdMdiphzkvZnt0NA55G7c3VhOgk6T0LiPZGhiWs+xG6ilR+\nLn9+3uoR0i6sAILrOOPo8fMhUgcYRK4H03R7rHZlLokaqm0v6BCmR5fc2QKBgHuI\n7dRKDzqroLfg8QUpuQUudFrvO5sN0j+sv5khXNzi9YjclI1zARyMZ+6qX2mhk+U4\nVa1Mor2SziAuJv3eTI/nrFjSMYAKht7sNwR/nQvoWXpuzrwT8jL+e8foPqMhZ7Wh\nu32ECVFCxMoer7u/+37oFEL345DfwJNYLsin9dOnAoGAbSG8i3IhZt5IX08g7JZ0\nOvszkjTEyrRpSxirigL6SA5tXPFzQUZov7G4RHgB6fQrQo+VD2S1AqE9rRhnWO3p\nu6JgqtRQqL/Utp1zTtMNX8yKzBpijKxxfzD9zqSmr0ybGtRiJqusuKzvYTwbbZQW\nWWRe8sjnhxIGwUn1oyQwaJQ=\n-----END PRIVATE KEY-----\n',
  client_email: import.meta.env.FIREBASE_CLIENT_EMAIL,
  client_id: import.meta.env.FIREBASE_CLIENT_ID,
  auth_uri: import.meta.env.FIREBASE_AUTH_URI,
  token_uri: import.meta.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: import.meta.env.FIREBASE_AUTH_CERT_URL,
  client_x509_cert_url: import.meta.env.FIREBASE_CLIENT_CERT_URL,
};

export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
}, "app1");

