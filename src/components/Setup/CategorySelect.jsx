import React from 'react'

const CategorySelect = ({category, setCategory}) => {
    const categories = [
      "General Knowledge",
      "Entertainment: Books",
      "Entertainment: Film",
      "Entertainment: Music",
      "Entertainment: Musicals & Theatres",
      "Entertainment: Television",
      "Entertainment: Video Games",
      "Entertainment: Board Games",
        "Science & Nature",
        "Science: Computers",
        "Science: Mathematics",
        "Mythology",
        "Sports",
        "Geography",
        "History", 
        "Politics",
        "Art",
        "Celebrities",
        "Animals",
        "Vehicles",
        "Entertainment: Comics",
        "Science: Gadgets",
        "Entertainment: Japanese Anime & Mange",
      "Entertainment: Cartoon & Animations"
    ];

    const options = categories.map((item, i) => {
        return <option key={i} value={`${i + 9}`} >{item}</option>;
    })

//---------------------------
//Return Statement 
//---------------------------

    return (
           <div>
             <label className='categorySelect'>Select Trivia Category</label>
                <select className='categorySelect' value={category} onChange={(e) => setCategory(e.target.value)} >
                    {options}
                </select>  
           </div>
    );
}

export default CategorySelect;
