class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
        this.hover = this.hover.bind(this)

    }
    hover() {
        this.setState({
            hover: !this.state.hover
        })
    }
    render() {
        var imageContainerStyle = {
            backgroundImage: this.props.background,
            width: "20em",
            height: "12em",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: "10px",
            transition: "transform 0.8s ease-in-out",
            backgroundSize: "cover"
        }
        if (this.state.hover) {
            imageContainerStyle.transform = "translateY(-10px)"
        } else {

        }
        var imageContainer = e("div", {
            style: imageContainerStyle,
            key: 0
        }, e("img", {
            src: this.props.icon,
            style: {
                borderRadius: this.props.radius || "22%",
                width: "40%",
                boxShadow: "5px 10px 18px rgba(0,0,0,0.4)"
            }
        }))
        let title = e("h4", {
            style: {
                fontSize: this.props.fontSize,
                margin: 0,
                marginLeft: "0em",
                color: this.props.fontColor ? this.props.fontColor : '#274690',
                fontFamily: this.props.font ? this.props.font : "Roboto Slab",
                textAlign: "center"
            },
            key: 0
        }, this.props.name)
        let description = e("p", {
            style: {
                padding: "2px",
                margin: 0,
                marginBottom: "5px",
                color: "grey",
                textAlign: "center"
            },
            key: 1
        }, this.props.description)

        
        var textContainerStyle = {
            backgroundColor: "white",
            width: "90%",
            borderRadius: "10px",
            boxShadow: "5px 10px 18px rgba(0,0,0,0.4)",
            transition: "transform 0.8s ease-in-out",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
        if (this.state.hover) {

        } else {
            textContainerStyle.transform = "translateY(-10px)"
        }
        var textContainer = e("div", {
            key: 1,
            style: textContainerStyle
        }, [title, description])
        let container = e("div", {
            style: {
                padding: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            },
            onMouseEnter: this.hover,
            onMouseLeave: this.hover
        }, [imageContainer, textContainer])
        return container
    }
}