const myStyle = {
    color: 'green'
}

const rootNode = document.querySelector(`#app`);
const root = ReactDOM.createRoot(rootNode);
root.render(
    <h1 style={myStyle}>2 + 2 = {2 + 2}</h1>
);