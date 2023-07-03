const get = async ({ redirect, cookies }) => {
  cookies.delete("session", {
    path: "/"
  });
  return redirect("/en/home");
};

export { get };
