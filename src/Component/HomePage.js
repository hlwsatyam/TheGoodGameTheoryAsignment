import React, { useEffect, useState } from 'react'
import Card from './Card'

function HomePage() {

    const [searchableVal, setSeachableVal] = useState("")
    const [list, setList] = useState([])
    const [reagainStore, setReagainStore] = useState(false)


    // fetching All Data from api using hooks

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("https://api.punkapi.com/v2/beers")
            const res = await data.json()
            setList(res)
        }
        fetchData()
    }, [reagainStore])



    // code for filter the item

    const filtredData = async () => {
        if (searchableVal == "") {
            return;
        }
        const data = await fetch("https://api.punkapi.com/v2/beers")
        const res = await data.json()
        const filteredList = res.filter(item => {
            const regexp = new RegExp(item.name, 'i')

            function matches(text, partial) {
                return text.toLowerCase().indexOf(partial.toLowerCase()) > -1;
            }
            return regexp.test(searchableVal) || matches(item.name, searchableVal)
        }
        )
        setList(filteredList)
    }

    return (
        <div>
            {/* header  */}
            <header>
                <h5 className='conatainer-fluid ' >
                    <div className="row text-center bg-warning py-2  ">

                        <div className="col-md-6 g-3 "><span onClick={() => setReagainStore(!reagainStore)} >TheGoodGameTheory</span>
                        </div>
                        <div className="col-md-6 g-3 "> <form action="" onSubmit={(e) => {
                            e.preventDefault()
                            filtredData()
                        }} >
                            <input type="text" className='bg-warning fw-bold rounded ' placeholder='Search' value={searchableVal} onChange={(e) => setSeachableVal(e.target.value)} />

                            <button className='shadow rounded bg-primary text-danger' type="submit" >Search</button>
                        </form></div>


                    </div>


                </h5>
            </header>

            {/* Adding Card Functionality using another Card whith the help of card */}

            <div className="conatainer-fluid">
                <div className="row">
                    {
                        list.map(item => <div className="col-md-3">
                            <Card item={item} />
                        </div>)
                    }
                </div>
            </div>


        </div>
    )
}

export default HomePage