/*
  Title:
    Airport itinerary
  Description:
    Travel itinerary
    When you travel around the world you pass though different airports.
    TRN -> FCO -> JFK

    And then return back to home
    JFK - TRN

    In order to propose the unique list of airports that your trip uses we have to create an itinerary feature that can compress the list of airports including only the list of unique in/out combination.
    For example, a trip with:
    [TRN-FCO] [FCO-JFK] [JFK-TRN]

    Should be represented as:
    TRN-FCO-JFK-TRN

    That is the unique list of airport steps.
    Now in our database we save the travel as a list of objects with in/out properties and you will receive that list always sorted in the right way.
    [
      {in: "TRN", out: "FCO"},
      {in: "FCO", out: "JFK"},
      {in: "JFK", out: "FCO"}
    ]

    Now we have to create a helper function itinerary for JS that extract the unique airport list:
    travel = itinerary([
      {in: "TRN", out: "FCO"},
      {in: "FCO", out: "JFK"},
      {in: "JFK", out: "FCO"}
    ]); // TRN-FCO-JFK-FCO

    Or a helper class Route for C#/C++:
    public class Route
    {
      public string In;
      public string Out;
    }

    class Route
    {
    public:
        std::string in;

        std::string out;

        Route(std::string in, std::string out)
        {
            this->in = in;
            this->out = out;
        }

        ~Route() { };
    };

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/57a72cb872292dc43100000c
  Discuss Link:
    https://www.codewars.com/kata/57a72cb872292dc43100000c/discuss
  Solutions Link:
    https://www.codewars.com/kata/57a72cb872292dc43100000c/solutions
*/
// Long Solution
const itinerary = (travel) =>
  travel
    .reduce(
      (acc, airport) => [
        ...acc,
        ...(acc.includes(airport.in) ? [] : [airport.in]),
        airport.out
      ],
      []
    )
    .join('-');

// Function Export
module.exports = itinerary;
