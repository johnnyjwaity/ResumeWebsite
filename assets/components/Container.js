class Container extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let elements = []
        for (let i = 0; i < this.props.data.length; i++) {
            let d = this.props.data[i]
            d.key = i
            elements.push(e(this.props.child, d, null))
        }
        let c = e("div", {
            key: 1, style: {
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap"
            }
        }, elements)
        return e('article', { className: 'sec-container' }, [e('h2', { key: 0 }, this.props.name), c])
    }
}