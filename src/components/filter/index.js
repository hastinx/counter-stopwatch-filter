import React, { useEffect, useState } from 'react'
import Navbar from '../navbar'

const buah = [
    { "id": 1, "nama": "Pisang" },
    { "id": 2, "nama": "Anggur" },
    { "id": 3, "nama": "Nanas" },
    { "id": 4, "nama": "Apel" },
    { "id": 5, "nama": "Semangka" },
    { "id": 6, "nama": "Melon" },
    { "id": 7, "nama": "Durian" },
]
const Filter = () => {
    const [fruit, setFruit] = useState([])
    const [namaBuah, setNamaBuah] = useState('')


    useEffect(() => {
        setFruit(buah)
    }, [])


    return (
        <>
            <Navbar>
                <div className='d-flex mb-5'>
                    <input type='text' className='form-control' onChange={(e) => setNamaBuah(e.target.value)} placeholder="Cari Buah Favorit.." />
                </div>
                {/* <div className='bg-dark'> */}
                {fruit.map(i =>

                    <div className={`card mb-2 ${i.nama.toUpperCase() === namaBuah.toUpperCase() ? 'bg-warning' : 'bg-white'}`} style={{ width: '200px' }} key={i.id}>
                        <div className='card-body fs-3 text-center'>
                            {i.nama}
                        </div>
                    </div>

                )}
            </Navbar>

            {/* </div> */}

        </>
    )
}

export default Filter