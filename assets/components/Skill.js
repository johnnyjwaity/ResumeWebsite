class Skill extends React.Component {
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
        let image = e("img", {
            src: this.props.icon,
            style: {
                height: "45px",
                borderRadius: "3px"
            }
        })
        let title = e("h1", {
            style: {
                width: "100%",
                margin: 0,
                textAlign: "center",
                color: "#1B264F"
            }
        }, this.props.name)
        return e("div", {
            style: {
                display: "flex",
                alignItems: "center",
                // height: "50px",
                width: "175px",
                borderStyle: "solid",
                borderColor: "lightgray",
                borderWidth: "0px",
                borderRadius: "5px",
                boxShadow: "5px 10px 18px rgba(0,0,0,0.4)",
                padding: "3px"
            }
        }, [image, title])
    }
}