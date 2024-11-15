import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultsTable({ input }) {
  const results = [];
  calculateInvestmentResults(input ,results);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interset (Year)</th>
            <th>Total Interset</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            const totalInterset =
              result.valueEndOfYear -
              input.annualInvestment * result.year -
              initialInvestment;
            const totalAountInvested = result.valueEndOfYear - totalInterset;
            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterset)}</td>
                <td>{formatter.format(totalAountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
