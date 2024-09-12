const VALID = 'validValues';
const INVALID = 'invalidValues';

module.exports = {
  //!!START SILENT
  // airlineCode
    // constraints:
      // not null
      // string
    // validations:
      // not null
      // string
      // min length: 2, max length: 2
      // uppercase letters only
  //!!END
  airlineCode: {
    [VALID]: [
      'UA',
      'BA', 
      'DL',
      'AA',
    ],
    [INVALID]: [
      null,
      '',
      'ua',
      'B',
      'ABC',
    ],
  },

  //!!START SILENT
  // flightNumber
    // constraints:
      // not null
      // string
    // validations:
      // not null
      // string
      // min length: 1, max length: 4
      // 1-4 numbers
      // numbers only
  //!!END
  flightNumber: {
    [VALID]: [
      '1',
      '98',
      '170',
      '8869',
    ],
    [INVALID]: [
      null,
      '',
      '1B',
      'ABC',
      '98765',
      '987654',
    ]
  },

  //!!START SILENT
  // inService
    // constraints:
      // not null
      // boolean
      // default value: true
    // validations:
      // not null
      // boolean
      // default value: true
    // Note: First item listed on the [VALID] list below must be `true` for the
      // test specs to pass the test specs for numCurrentPassengers properly 
  //!!END
  inService: {
    [VALID]: [
      true,
      false,
      undefined,
    ],
    [INVALID]: [
      null,
    ],
  },

  //!!START SILENT
  // maxNumPassengers
    // constraints:
      // not null
      // integer
    // validations:
      // not null
      // integer
      // max: 853
      // min: 2
  //!!END
  maxNumPassengers: {
    [VALID]: [
      853,
      550,
      100,
      2,
    ],
    [INVALID]: [
      null,
      -1,
      0,
      1,
      854,
      1000,
    ],
  },

  //!!START SILENT
  // currentNumPassengers
    // constraints:
      // integer
    // validations:
      // integer
      // max: 853
      // min: 0
      // cannot be greater than maxNumPassengers
      // currentNumPassengers is null when inService is false
  //!!END
  currentNumPassengers: {
    [VALID]: [
      null,
      undefined,
      853,
      550,
      150,
      0
    ],
    [INVALID]: [
      -1,
      854,
      1000,
    ],
  },

  //!!START SILENT
  // firstFlightDate
    // constraints:
      // date
    // validations:
      // date
      // before 2022-01-01,
      // after 2019-12-31,
  //!!END
  firstFlightDate: {
    [VALID]: [
      '2020-01-01',
      '2021-12-31',
      null,
    ],
    [INVALID]: [
      '2018-05-12',
      '2019-12-31',
      '2022-01-01',
      '2024-06-10',
    ],
  },

  VALID,
  INVALID,
};
