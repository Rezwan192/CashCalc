import BPCard from "./BPCard";
import "./BudgetPlanning.css";
function BudgetPlanning() {
  const firstCardTitle = "Necessary Budget";
  const secondCardTitle = "Medium Need";
  const thirdCardTitle = "Unnecessary Budget";

  return (
    <div>
      <div id="columnLayout">
      <BPCard title={firstCardTitle}></BPCard>
      <BPCard title={secondCardTitle}></BPCard>
      <BPCard title={thirdCardTitle}></BPCard>
      </div>
    </div>
                          
  );
}

export default BudgetPlanning;