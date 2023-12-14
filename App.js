import { useState, useEffect } from "react";
import Cards from "./cards";
import Footer from "./footer";
const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [cardData, setCardData] = useState([]);
  const handlePageChange = (newPage) => {
    setPageNumber(newPage);
  };

  useEffect(() => {
    getData();
  }, [pageNumber]);

  const getInitialData = async () => {
    const response = await fetch(
      `https://api.hiretal.ai/people/collect?page_number=${pageNumber}&page_size=5`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.MjJhNmIxNDItMWE4MS00YTA2LTljMTMtNGMwYTM4NjRlZTZj.vqBkNJJiU4iIgXaQhRIozLJ5Rd-j7usZbfqb94M158c",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filtersToBeSent: {},
          isSandboxModeOn: true,
          isTurboSearchOn: true,
        }),
      }
    );

    const data = await response.json();
    setCardData(data?.data?.people);
    let string = JSON.stringify(data?.data?.people);
    localStorage.setItem(pageNumber, string);
    console.log(data);
  };
  const getData = async () => {
    if (localStorage.getItem(pageNumber)) {
      setCardData(JSON.parse(localStorage.getItem(pageNumber)));
    } else {
      getInitialData();
    }
  };
  return (
    <>
      <div>
        {cardData.length > 0 ? (
          cardData.map((person) => <Cards key={person.id} {...person} />)
        ) : (
          <p>No data available</p>
        )}
      </div>
      <Footer currentPage={pageNumber} onPageChange={handlePageChange} />
    </>
  );
};

export default App;
