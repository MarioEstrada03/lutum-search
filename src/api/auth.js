import users from "../db.json";

export function login(email, password) {
  const user = users.find((user) => user.email === email);
  if (user) {
    // Check password and do other stuff
    if (user.password === password) {
      return {
        user: {
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          lastSearch: user.last_search,
        },
      };
    }
    return { error: "Password is invalid" };
  }

  return { error: "User does not exist" };
}
