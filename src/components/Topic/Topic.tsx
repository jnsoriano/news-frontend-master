import "./style.scss";
import { TOPICS } from "./../../contants";
import useIsMobile from "../../utils/useIsMobile";
const Topic = () => {
    const isMobile = useIsMobile();
    const topicsList = TOPICS;
    const topics = topicsList.map((topic) => (
        <div className={`${isMobile ? "col-12" : "col-4"}`} key={topic.id}>
            <div className="col-4">
                <img className="image-size" src={topic.image} alt="text" />
            </div>
            <div className="col-8">
                <h2>{topic.headerText}</h2>
                <h4>{topic.title}</h4>
                <p>{topic.bodyText}</p>
            </div>
        </div>
    ));

    return <div className={`${isMobile ? "topic-mobile" : ""}`}>{topics}</div>;
};

export default Topic;
