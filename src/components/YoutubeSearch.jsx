import React, { useState } from "react";

const YoutubeSearch = ({handleFormSubmit}) => {
  const [state, setState] = useState('')
  
  const handleChange = (event) =>{
    setState(
      event.target.value,
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(state);
  };
  
  return (
    <div className="search-bar ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label htmlFor="video-search">Video Search</label>
          <input
            onChange={handleChange}
            name="video-search"
            type="text"
            value={state}
          />
        </div>
      </form>
    </div>
  );
};

export default YoutubeSearch;
