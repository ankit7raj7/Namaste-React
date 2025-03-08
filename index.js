
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    const header1 = React.createElement("h1", {
        id: "header1"
    },
    "Namaste React");
    const header2 = React.createElement("h2", {
        id: "header2"
    },
    "Namaste React");
    const container = React.createElement("div",{
        id: "container"
    },
    [header1, header2]);
    root.render(container);