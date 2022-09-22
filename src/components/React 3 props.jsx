import { faker } from "@faker-js/faker";
// import faker untuk regenerate data dari fakerjs
import User from "./User";
// import user untuk get props dari page user
const Comment = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    {/* src={faker.image.avatar()} data dari fakerjs untuk generate otomatis avatar */}
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
                <div className="text"><User comment="Nice info !" /></div>
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
                <div className="text"><User comment="What a Story !" /></div>
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
                <div className="text"><User comment="GG GG !" /></div>
            </div>
        </div>
    )
}

export default Comment