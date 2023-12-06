import "./BPCard.css"
function BPCard({ title }) {
  const necessaryData = [
    { id: 1, Name: "Landlord", Category: "Rent", Price: "2500.75" },
    { id: 2, Name: "College Fee", Category: "Education", Price: "4500.75" },
    { id: 3, Name: "Grocery", Category: "Fooding", Price: "500.75" },
  ];
  
  const mediumData = [
    { id: 4, Name: "Landlord", Category: "Rent", Price: "2500.75" },
    { id: 5, Name: "Netflix", Category: "Subscription", Price: "20.75" },
    { id: 6, Name: "Netflix", Category: "Subscription", Price: "20.75" },
  ];
  
  const unnecessaryData = [
    { id: 7, Name: "Chegg", Category: "Subscription", Price: "10.75" },
    { id: 8, Name: "Amazon", Category: "Shopping", Price: "1000.75" },
  ];
  
  const isTitleOne = title === "Necessary Budget";
  const isTitleTwo = title === "Medium Need";
  const isTitleThree = title === "Unnecessary Budget";
  
  const HandleClick = () => {
    console.log("goodbye world!")
  }
  
  return(
  <div className="BPcard">
    <h2>{title}</h2>
    { isTitleOne && <> 
    {necessaryData.map(function (nec) {
      return (
      <div className="innerBP" key={nec.id}>
        <p id="leftaligned">{nec.Name}</p>
        <p id="leftaligned">Category: {nec.Category}</p>
        <p id="rightaligned">${nec.Price}</p>
      </div>);})}</>
    }
    { isTitleTwo && <> 
    {mediumData.map(function (nec) {
      return (
      <div className="innerBP" key={nec.id}>
        <p id="leftaligned">{nec.Name}</p>
        <p id="leftaligned">Category: {nec.Category}</p>
        <p id="rightaligned">${nec.Price}</p>
      </div>);})}</>
    }
    { isTitleThree && <> 
    {unnecessaryData.map(function (nec) {
      return (
      <div className="innerBP" key={nec.id}>
        <p id="leftaligned">{nec.Name}</p>
        <p id="leftaligned">Category: {nec.Category}</p>
        <p id="rightaligned">${nec.Price}</p>
      </div>);})}</>
    }
  <div id="buttondiv"><button id="bpbutton" onClick={HandleClick}>+</button>&nbsp; Add Item</div>
  </div>);}
export default BPCard;