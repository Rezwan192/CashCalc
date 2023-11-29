import BPCard from "./BPCard";
import "./Budget_Planning.css";
function BudgetPlanning() {
  const firstCardTitle = "Necessary Budget";
  const secondCardTitle = "Medium Need";
  const thirdCardTitle = "Unnecessary Budget";

  return (
    <div id="columnLayout">
      <BPCard title={firstCardTitle}></BPCard>
      <BPCard title={secondCardTitle}></BPCard>
      <BPCard title={thirdCardTitle}></BPCard>
    </div>
  );
}

export default BudgetPlanning;