export class Calculator {
  constructor(personAge, personLifeExpectancy) {
    this.personAge = personAge;
    this.personLifeExpectancy = personLifeExpectancy;
  }

  calcAgeEarthDays() {
    return this.personAge * 365;
  }

  calcAgeMercuryYears() {
    const earth_days_age = this.calcAgeEarthDays();
    const age = earth_days_age / 88;
    return this.roundNum(age); 
  }

  calcAgeVenusYears() {
    const earth_days_age = this.calcAgeEarthDays();
    const age = earth_days_age / 225;
    return this.roundNum(age);
  }

  calcAgeMarsYears() {
    const earth_days_age = this.calcAgeEarthDays();
    const age = earth_days_age / 687;
    return this.roundNum(age);
  }

  calcAgeJupiterYears() {
    const age = this.personAge / 12;
    return this.roundNum(age);
  }

  roundNum(num) {
    return Math.round(num * 10) / 10;
  }

  calcAllAges() {
    this.earthDaysAge = this.calcAgeEarthDays();
    this.ageMercuryYears = this.calcAgeMercuryYears();
    this.ageVenusYears = this.calcAgeVenusYears();
    this.ageMarsYears = this.calcAgeMarsYears();
    this.ageJupiterYears = this.calcAgeJupiterYears();
  }

  calcYearsLeft(age_on_planet) {
    if (age_on_planet > this.personLifeExpectancy) {
      const yearsPast = this.roundNum(age_on_planet - this.personLifeExpectancy);
      return `You have lived past your life expectancy by ${yearsPast} years`;
    } else {
      const yearsLeft = this.roundNum(this.personLifeExpectancy - age_on_planet);
      return `Based on your life expectancy for your demographic you have ${yearsLeft} years to live`;
    }
  }
}