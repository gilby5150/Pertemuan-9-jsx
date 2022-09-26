import React, {useState,useEffect} from "react";

const Clock = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() =>{
        setInterval(() => {

            setDateState(new Date());
        }, 1000);
    },[]);
    return(
        <p>
            {''}
            {dateState.toLocaleString('id-ID',{
                hour:'numeric',
                minute:'numeric',
                second:'numeric',
                hour12:'true'
            })}
        </p>
    );
}
export default Clock;