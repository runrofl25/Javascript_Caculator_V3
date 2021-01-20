function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Recieved help from juniHUB from https://codepen.io/juniHub and Florin Pop from youtube channel https://www.youtube.com/watch?v=NGOzAaJRPQU&ab_channel=FlorinPop
// as well as Landon Schlangen from https://www.youtube.com/watch?v=3SqLY-4Bqv8&ab_channel=LandonSchlangen
// Each helped me show three different ways on how to style a caculator in javascript.  -->

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ["/", "+", "-", "*"];
const ids = {
  7: "seven",
  8: "eight",
  9: "nine",
  4: "four",
  5: "five",
  6: "six",
  1: "one",
  2: "two",
  3: "three",
  0: "zero",
  "/": "divide",
  "+": "add",
  "-": "subtract",
  "*": "multiply" };


const audio = document.getElementById("keypad-sound");

class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",









    event => {
      const { calc, lastPressed } = this.state;
      const { innerText } = event.target;

      switch (innerText) {
        case "AC":{
            this.setState({
              calc: "0" });


            break;
          }
        case "=":{
            const evaluation = eval(calc);
            this.setState({
              calc: evaluation });

            break;
          }
        case ".":{
            const splitNum = calc.split(/[\+\-\*\/]/);
            const last = splitNum.slice(-1)[0];

            if (!last.includes(".")) {
              this.setState({ calc: calc + "." });
            }
            break;
          }

        default:{
            let e = undefined;

            if (ops.includes(innerText)) {
              if (ops.includes(lastPressed) && innerText !== "-") {
                const lastNumIdx = calc.
                split("").
                reverse().
                findIndex(char => char !== " " && nums.includes(+char));
                e = calc.slice(0, calc.length - lastNumIdx) + ` ${innerText} `;
              } else {
                e = `${calc} ${innerText} `;
              }
            } else {
              e = calc === "0" ? innerText : calc + innerText;
            }
            this.setState({
              calc: e,
              lastPressed: innerText });

          }}


      this.setState({
        lastPressed: innerText });


      audio.currentTime = 0;
      audio.play();
    });this.state = { lastPressed: undefined, calc: "0", operation: undefined };this.handleClick = this.handleClick.bind(this);}

  render() {
    const { calc } = this.state;

    return /*#__PURE__*/(
      React.createElement("div", { className: "calculator" }, /*#__PURE__*/
      React.createElement("div", { id: "display", className: "display" },
      calc), /*#__PURE__*/


      React.createElement("div", { className: "nums-holder" }, /*#__PURE__*/
      React.createElement("button", {
        className: "light ac large-width",
        onClick: this.handleClick,
        id: "clear" }, "AC"),




      nums.map((num) => /*#__PURE__*/
      React.createElement("button", {
        className: `dark ${num === 0 && "large-width"}`,
        key: num,
        onClick: this.handleClick,
        id: ids[num] },

      num)), /*#__PURE__*/


      React.createElement("button", { className: "light", onClick: this.handleClick, id: "decimal" }, ".")), /*#__PURE__*/



      React.createElement("div", { className: "ops-holder" },
      ops.map((op) => /*#__PURE__*/
      React.createElement("button", {
        className: "gold",
        key: op,
        onClick: this.handleClick,
        id: ids[op] },

      op)), /*#__PURE__*/


      React.createElement("button", { className: "gold", onClick: this.handleClick, id: "equals" }, "="))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));