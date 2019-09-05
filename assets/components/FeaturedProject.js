class FeaturedProject extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var imageContainer = e("div", {
            style: {
                backgroundImage: "linear-gradient(rgb(68, 153, 243), rgb(112, 241, 135))",
                width: "18em",
                height: "12em",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                borderRadius: "10px"
            },
            key: 0
        }, e("img", {
            src: "assets/images/flux.png",
            style: {
                borderRadius: "22%",
                width: "40%",
                boxShadow: "5px 10px 18px rgba(0,0,0,0.4)"
            }
        }))
        let title = e("h4", {
            style: {
                fontSize: "2em",
                margin: 0,
                marginLeft: "0.5em",
                color: '#274690',
                fontFamily: "San Francisco"
            }
        }, "Flux")
        var textContainer = e("div", {
            key: 1,
            style: {
                backgroundColor: "white",
                width: "90%",
                transform: "translateY(-10px)",
                borderRadius: "10px",
                boxShadow: "5px 10px 18px rgba(0,0,0,0.4)"
            }
        }, title)
        let container = e("div", {
            style: {
                padding: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }
        }, [imageContainer, textContainer])
        return container
    }
}