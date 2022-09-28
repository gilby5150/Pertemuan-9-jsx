import { useState } from "react";
// service API
import Unsplash from './Unsplash'

const Search = () => {
  // seacrh value
  const [search, setSearch] = useState('')
  // image data
  const [image, setImage] = useState([])

  const getSearch = async (str) => {
    // get image data from unsplash / client
    const { data } = await Unsplash.get('/search/photos', { params: { query: str } })
    // fill image data from client get
    setImage(data.results)
  }

  const handleSearch = (e) => {
    // when seacrh value change get search image
    setSearch(e.target.value)
    getSearch(e.target.value)
  }

  return (
    <>
      {/* form input */}
      <input placeholder="Search" required value={search} onChange={handleSearch} />

      {/* data list */}
      {image &&
        image.map((item, index) => (
          <img
            key={index}
            src={item.urls.regular}
            alt={item.alt_description}
            style={{
              // inline style <img />
              height: '200px',
              width: 'auto',
              objectFit: 'cover',
              flexShrink: 0,
              marginRight: '8px',
              marginBottom: '8px',
            }}
          />
        ))}
    </>
  )
}

export default Search