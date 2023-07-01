// const heading = React.createElement(
//     "h1", 
//     {id:"heading"}, 
//     "hello from react"
//     );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



const parent = React.createElement(
    "div", 
    {id: "parentDiv"},
    [
        React.createElement
        (
        "div", 
        {id:"childDiv1"}, 
        [
            React.createElement("h1", {}, "head1 of childDiv1"), 
            React.createElement("h2", {}, "head2 of childDiv1")
        ]
        ),
        
        React.createElement
        (
        "div", 
        {id:"childDiv2"}, 
        [
            React.createElement("h1", {}, "head1 of childDiv2"), 
            React.createElement("h2", {}, "head2 of childDiv2")
        ]
        )
        
    ]
    )


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);