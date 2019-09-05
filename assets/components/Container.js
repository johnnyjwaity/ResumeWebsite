class Container extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let c = e("div", {
            key: 1, style: {
                display: "flex",
                justifyContent: "space-around"
            }
        }, e(this.props.child, { name: "Flux" }, null))
        return e('article', { className: 'sec-container' }, [e('h2', { key: 0 }, this.props.name), c])
    }
}