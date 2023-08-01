import "./style.scss";
import { SIDECONTENTS } from "../../contants";

const SideContent = () => {
    const contents = SIDECONTENTS.map((content, index) => (
        <div>
            <h3>{content.title}</h3>
            <p>{content.bodyText}</p>
            {SIDECONTENTS.length - 1 === index ? "" : <hr />}
        </div>
    ));

    return (
        <div>
            <h1>New</h1>
            {contents}
        </div>
    );
};

export default SideContent;
