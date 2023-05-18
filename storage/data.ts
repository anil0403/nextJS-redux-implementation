const storage: unknown[] = [];

export const storeData = (data: object) => {
  storage.push(data);
  return {
    message: "Data Successfully Stored !",
  };
};

export const fetchData = () => {
  return Array.from(storage);
};
