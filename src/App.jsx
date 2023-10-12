import { useState } from "react";
import "./App.css";

const App = () => {
  const [billValue, setBillValue] = useState("");
  const [tip1, setTip1] = useState("");
  const [tip2, setTip2] = useState("");

  const tips = billValue * ((tip1 + tip2) / 2 / 100);

  const handleEmpty = () => {
    setBillValue("");
    setTip1("");
    setTip2("");
  };

  return (
    <div>
      <h1>Calculadora de Gorjeta</h1>

      <BillInput billValue={billValue} setBillValue={setBillValue} />

      <SelectPercentage tip={tip1} setTip={setTip1}>
        Quão satisfeito você ficou com o atendimento?
      </SelectPercentage>

      <SelectPercentage tip={tip2} setTip={setTip2}>
        Quão satisfeito seu amigo ficou com o atendimento?
      </SelectPercentage>

      {billValue !== "" && (
        <>
          <Output tips={tips} billValue={billValue} />
          <Reset onReset={handleEmpty} />
        </>
      )}
    </div>
  );
};

const BillInput = ({ billValue, setBillValue }) => {
  return (
    <div>
      <label>Qual é o valor da conta?</label>
      <input
        type="number"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />
    </div>
  );
};

const SelectPercentage = ({ children, tip, setTip }) => {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value={0}>Insatisfeito (0% de gorjeta)</option>
        <option value={5}>Pouco Satisfeito (5% de gorjeta)</option>
        <option value={10}>Satisfeito (10% de gorjeta)</option>
        <option value={20}>Muito Satisfeito (20% de gorjeta)</option>
      </select>
    </div>
  );
};

const Output = ({ billValue, tips }) => {
  return (
    <h3>
      Seu pagamento é de R${(billValue + tips).toFixed(2)} (R${billValue} + $
      {tips} gorjeta)
    </h3>
  );
};

const Reset = ({ onReset }) => {
  return <button onClick={onReset}>Limpar</button>;
};

export default App;
