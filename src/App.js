import { useState } from "react";
import "./App.css";

function App() {
  const [predictionValue, setPredictionValue] = useState(0);
  const [values, setValues] = useState({
    bmi: 0,
    adultMorality: 0,
    infantDeaths: 0,
    alcohol: 0,
    percentageExpenditure: 0,
    hepatits: 0,
    underFiveDeaths: 0,
    polio: 0,
    totalExpenditure: 0,
    diptheria: 0,
    hiv: 0,
    gdp: 0,
    thinness1: 0,
    thinness2: 0,
    income: 0,
    schooling: 0,
    measles: 0,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setValues((prev) => {
      return { ...prev, [name]: parseInt(value) };
    });
  };

  const calculate = (e) => {
    e.preventDefault();

    let val = 0;
    val +=
      values.adultMorality +
      values.alcohol +
      values.bmi +
      values.diptheria +
      values.gdp +
      values.hepatits +
      values.hiv +
      values.income +
      values.infantDeaths +
      values.measles +
      values.percentageExpenditure +
      values.polio +
      values.schooling +
      values.thinness1 +
      values.thinness2 +
      values.totalExpenditure +
      values.underFiveDeaths;

    console.log(`Calculated value = ${val}`);
    val = val / 17;
    val = 100 - val;

    setPredictionValue(val);
  };

  return (
    <div className="App">
      <div class="Home Page">
        <div class="heading">
          <h1>Home Page</h1>
        </div>

        <h2>
          Life Expectancy Prediction <style></style>
        </h2>
        <h3>BMI</h3>
        <input
          type="number"
          class="Country"
          name="bmi"
          value={values.bmi}
          onChange={handleChange}
        />
        <h3>Adult_Mortality</h3>
        <input
          type="number"
          class="Country"
          name="adultMorality"
          value={values.adultMorality}
          onChange={handleChange}
        />
        <h3>Infant_Deaths</h3>
        <input
          type="number"
          class="Country"
          name="infantDeaths"
          value={values.infantDeaths}
          onChange={handleChange}
        />
        <h3>Alcohol</h3>
        <input
          type="number"
          class="Country"
          name="alcohol"
          value={values.alcohol}
          onChange={handleChange}
        />
        <h3>Percentage_Expenditure</h3>
        <input
          type="number"
          class="Country"
          name="percentageExpenditure"
          value={values.percentageExpenditure}
          onChange={handleChange}
        />
        <h3>Hepatitis_B</h3>
        <input
          type="number"
          class="Country"
          name="hepatits"
          value={values.hepatits}
          onChange={handleChange}
        />
        <h3>Under_Five_Deaths</h3>
        <input
          type="number"
          class="Country"
          name="underFiveDeaths"
          value={values.underFiveDeaths}
          onChange={handleChange}
        />
        <h3>Polio</h3>
        <input
          type="number"
          class="Country"
          name="polio"
          value={values.polio}
          onChange={handleChange}
        />
        <h3>Total_Expenditure</h3>
        <input
          type="number"
          class="Country"
          name="totalExpenditure"
          value={values.totalExpenditure}
          onChange={handleChange}
        />
        <h3>Diptheria</h3>
        <input
          type="number"
          class="Country"
          name="diptheria"
          value={values.diptheria}
          onChange={handleChange}
        />
        <h3>HIV/AIDS</h3>
        <input
          type="number"
          class="Country"
          name="hiv"
          value={values.hiv}
          onChange={handleChange}
        />
        <h3>GDP</h3>
        <input
          type="number"
          class="Country"
          name="gdp"
          value={values.gdp}
          onChange={handleChange}
        />
        <h3>Thinness_10_19_years</h3>
        <input
          type="number"
          class="Country"
          name="thinness1"
          value={values.thinness1}
          onChange={handleChange}
        />
        <h3>Thinness_5_9_years</h3>
        <input
          type="number"
          class="Country"
          name="thinness2"
          value={values.thinness2}
          onChange={handleChange}
        />
        <h3>Income Composition_of_Resources</h3>
        <input
          type="number"
          class="Country"
          name="income"
          value={values.income}
          onChange={handleChange}
        />
        <h3>Schooling</h3>
        <input
          type="number"
          class="Country"
          name="schooling"
          value={values.schooling}
          onChange={handleChange}
        />
        <h3>Measles</h3>
        <input
          type="number"
          class="Country"
          name="measles"
          value={values.measles}
          onChange={handleChange}
        />
        <h2> </h2>
        <h2> </h2>
        <h3>Prediction:</h3>

        {predictionValue == 0 ? (
          <h2>Please click on the Predict Button</h2>
        ) : (
          <h2>{predictionValue.toPrecision(5)} %</h2>
        )}

        <input
          type="submit"
          class="Submit"
          value="Predict"
          onClick={calculate}
        />
        <h2> </h2>
        <input type="submit" class="Submit" value="Cancel" />
      </div>
      <h2> </h2>
    </div>
  );
}

export default App;
