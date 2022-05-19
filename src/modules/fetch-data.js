const fetchData = async (url) => {
  const request = new Request(url);
  const response = await fetch(request);
  const dataList = await response.json();

  return dataList;
};

export default fetchData;