import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Calculator } from "./calculator.js";

$(document).ready(function() {

  const DOMSelectors = {
    age_mercury: $("#mercAge"),
    mercury_exp: $("#mercExpec"),
    age_venus: $("#venuAge"),
    venus_exp: $("#venuExpec"),
    age_mars:  $("#marsAge"),
    mars_exp: $("#marsExpec"),
    age_jupiter: $("#jupiAge"),
    jupiter_exp: $("#jupiExpec"),
    title_text: $(".title_text"),
    form_div: $("#ageCalculator"),
    results_div: $("#planetResults")
  };

  function showContent(obj) {
    DOMSelectors.age_mercury.text(obj.ageMercuryYears);
    DOMSelectors.mercury_exp.text(obj.calcYearsLeft(obj.ageMercuryYears)); 
    DOMSelectors.age_venus.text(obj.ageVenusYears);
    DOMSelectors.venus_exp.text(obj.calcYearsLeft(obj.ageVenusYears));
    DOMSelectors.age_mars.text(obj.ageMarsYears);
    DOMSelectors.mars_exp.text(obj.calcYearsLeft(obj.ageMarsYears));
    DOMSelectors.age_jupiter.text(obj.ageJupiterYears);
    DOMSelectors.jupiter_exp.text(obj.calcYearsLeft(obj.ageJupiterYears));
  }

  DOMSelectors.title_text.first().fadeIn(3000);

  DOMSelectors.title_text.click(function() {
    DOMSelectors.title_text.animate({ 
      top: "0%",
    }, 700 );
    DOMSelectors.form_div.fadeIn(1000);

  });
  


  $("#ageCalculator").submit(function(event) {
    event.preventDefault();
    let userAge = parseInt($("#userAge").val());
    let userExpectancy = parseInt($("#userExpectancy").val());
    
    const calc = new Calculator(userAge, userExpectancy);
    calc.calcAllAges();
    showContent(calc);
    DOMSelectors.title_text.css({ 'position' : 'relative' });
    DOMSelectors.form_div.fadeOut(200);
    DOMSelectors.results_div.fadeIn(200);

  });

});