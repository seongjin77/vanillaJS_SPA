import { Component } from "../../core/index.js";

class LinkToMain extends Component {
    // 메인페이지(상품 목록) 링크 렌더링
    render() {
        const mainPageLink = document.createElement("a");
        mainPageLink.setAttribute("class", "link-btn main-link");
        mainPageLink.href = "/vanillaJS_SPA";

        const spanInLink = document.createElement("span");
        spanInLink.setAttribute("class", "ir");
        spanInLink.innerText = "상품 목록 페이지로 이동하기";

        mainPageLink.append(spanInLink);

        return mainPageLink;
    }
}

export default LinkToMain