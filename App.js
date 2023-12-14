import { useState, useEffect } from "react";
import Cards from "./cards";
import Footer from "./footer";
import { Shimmer } from "react-shimmer";
const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handlePageChange = (newPage) => {
    setLoading(true);
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
    setLoading(false);
    let string = JSON.stringify(data?.data?.people);
    localStorage.setItem(pageNumber, string);
    console.log(data);
  };
  const getData = async () => {
    if (localStorage.getItem(pageNumber)) {
      setCardData(JSON.parse(localStorage.getItem(pageNumber)));
      setLoading(false);
    } else {
      getInitialData();
    }
  };
  return (
    <>
      <div>
        {loading ? (
          <>
            <Shimmer width={1500} height={500} />
            <hr className="solid" />
            <Shimmer width={1500} height={500} />
            <hr className="solid" />
            <Shimmer width={1500} height={500} />
            <hr className="solid" />
            <Shimmer width={1500} height={500} />
          </>
        ) : cardData.length > 0 ? (
          cardData.map((person) => <Cards key={person.id} {...person} />)
        ) : (
          <>
            <Shimmer width={1500} height={500} />
            <hr className="solid" />
            <Shimmer width={1500} height={500} />
            <hr className="solid" />
            <Shimmer width={1500} height={500} />
            <hr className="solid" />
            <Shimmer width={1500} height={500} />
          </>
        )}
      </div>
      <Footer currentPage={pageNumber} onPageChange={handlePageChange} />
    </>
  );
};

export default App;
