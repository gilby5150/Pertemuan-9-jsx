import { faker } from "@faker-js/faker";
import User from "./User";
import Like from "./Like"
const Comment = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
            </div>
            <div className="content">
                <a href="/" className="author">
                    <User name="gilby"/>
                </a>
                <div className="metadata">
                    <span className="date"><User time="Today at : 08:00PM"/></span>
                </div>
                <div className="text"><User comment="Nice info !" /><Like/></div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
            </div>
            <div className="content">
                <a href="/" className="author">
                    <User name="Abdul"/>
                </a>
                <div className="metadata">
                    <span className="date">Today at : <User time="Today at : 08:15PM"/></span>
                </div>
                <div className="text"><User comment="What a Story !" /><Like/></div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
            </div>
            <div className="content">
                <a href="/" className="author">
                    <User name="Asep"/>
                </a>
                <div className="metadata">
                    <span className="date"><User  time="Today at : 09:00PM"/></span>
                </div>
                <div className="text"><User comment="GG GG !" /><Like/></div>
            </div>
        </div>
    )
}

export default Comment