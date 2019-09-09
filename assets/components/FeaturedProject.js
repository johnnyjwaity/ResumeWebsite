class FeaturedProject extends React.Component {
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
            transition: "transform 0.8s ease-in-out"
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
                borderRadius: "22%",
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
                margin: 0,
                marginBottom: "5px",
                color: "grey",
                textAlign: "center"
            },
            key: 1
        }, this.props.description)

        let productPageButton = e("button", {
            style: {
                marginBottom: "5px",
                display: this.props.productLink ? "inline-block" : "none",
                textDecoration: "none",
                border: "none",
                backgroundColor: "#274690",
                color: "white",
                // width: "90%",
                // height: "40px",
                padding: "8px 10px",
                fontSize: "20px",
                borderRadius: "8px"
            },
            onClick: () => { window.open(this.props.productLink) },
            key: 2
        }, "Visit Product Page")
        let appStoreButton = e("input", {
            type: "image",
            src: "assets/images/appstore.png",
            key: 0,
            style: {
                display: this.props.appStoreLink ? "inline-block" : "none"
            },
            onClick: () => { window.open(this.props.appStoreLink) }
        })
        let googlePlayButton = e("input", {
            type: "image",
            src: "assets/images/googleplay.png",
            key: 1,
            style: {
                display: this.props.googlePlayLink ? "inline-block" : "none"
            },
            onClick: () => { window.open(this.props.googlePlayLink) }
        })
        let storeContainer = e("div", {
            style: {
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                marginBottom: "5px"
            },
            key: 3
        }, [appStoreButton, googlePlayButton])
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
        }, [title, description, productPageButton, storeContainer])
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