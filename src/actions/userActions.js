export const ADDUSER = "ADDUSER";
export const ALLUSERS = "ADDUSERS";
export const DELETEUSER = "DELETEUSER";

export const addUser = (user) => ({
  type: ADDUSER,
  payload: user,
});
export const deleteUser = (id) => ({ type: DELETEUSER, payload: id });
