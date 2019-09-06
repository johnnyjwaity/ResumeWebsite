class FeaturedProject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
        this.hover = this.hover.bind(this)
        
    }
    hover(){
        this.setState({
            hover: !this.state.hover
        })
    }
    render() {
        var imageContainerStyle = {
            backgroundImage: "linear-gradient(rgb(68, 153, 243), rgb(112, 241, 135))",
            width: "18em",
            height: "12em",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: "10px",
            transition: "transform 0.8s ease-in-out"
        }
        if(this.state.hover){
            imageContainerStyle.transform = "translateY(-10px)"
        }else{

        }
        var imageContainer = e("div", {
            style: imageContainerStyle,
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
                fontSize: "3em",
                margin: 0,
                marginLeft: "0em",
                color: '#56bcc8',
                fontFamily: "Amandita, San Francisco",
                textAlign: "center"
            },
            key: 0
        }, "Flux")
        let description = e("p", {
            style: {
                margin: 0,
                color: "grey",
                textAlign: "center"
            },
            key: 1
        }, "Surveys Made Easy")

        let productPageButton = e("button",{
            style: {

            },
            key: 2
        }, "Visit Product Page")
        let appStoreButton = e("input", {
            type: "image",
            src: "assets/images/appstore.png"
        })
        let googlePlayButton = e("input", {
            type: "image",
            src: "assets/images/googleplay.png"
        })
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
        if(this.state.hover){

        }else{
            textContainerStyle.transform = "translateY(-10px)"
        }
        var textContainer = e("div", {
            key: 1,
            style: textContainerStyle
        }, [title, description, productPageButton, appStoreButton, googlePlayButton])
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