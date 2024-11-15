
export default function UserInput({ onChange, userInput }) {


  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initail investment</label>
          <input
            onChange={(e) => onChange('initialInvestment', e.target.value)}
            value={userInput.initialInvestment}
            type="number"
          />
        </p>
        <p>
          <label>Annula investment</label>
          <input
            onChange={(e) => onChange('annualInvestment', e.target.value)}
            value={userInput.annualInvestment}
            type="number"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            onChange={(e) => onChange('expectedReturn', e.target.value)}
            value={userInput.expectedReturn}
            type="number"
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            onChange={(e) => onChange('duration', e.target.value)}
            value={userInput.duration}
            type="number"
          />
        </p>
      </div>
    </section>
  );
}
