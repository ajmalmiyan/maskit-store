export const storeData=(data)=> {
  localStorage.setItem("user", JSON.stringify(data));
}

export const getData=()=> {
  let user = JSON.parse(localStorage.getItem("user"));
  return user;
}

export const deleteData=()=> {
  localStorage.removeItem("user");
}

