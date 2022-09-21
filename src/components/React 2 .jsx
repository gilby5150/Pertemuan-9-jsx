
const User = ({name,age,time,comment})=>{
    return (
        <div>
            {/* <span>Age : {age}</span> */}
            <span>{name}</span>
            <span>{time}</span>
            <span>{comment}</span>
        </div>
    )
}

export default User;