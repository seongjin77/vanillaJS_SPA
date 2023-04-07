import Component from "../../core/component.js";

class SectionHeading extends Component {
    render() {
        const sectionHeading = document.createElement("h2");
        sectionHeading.setAttribute("class", "ir");
        sectionHeading.innerText = this.props.text

        return sectionHeading
    }
}

export default SectionHeading