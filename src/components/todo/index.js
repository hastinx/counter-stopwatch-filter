import React, { useEffect, useState } from 'react'
import Modal from '../modal';

const Todo = () => {
    const [counter, setCounter] = useState(0);
    const [modal, setModal] = useState(false);
    const [activity, setActivity] = useState([]);
    const [item, setItem] = useState();




    const addActivity = () => {
        setCounter(counter + 1)
        setActivity(arr => [...arr, { id: counter, nama: item }])
        setModal(false)
    }

    const updateActivity = () => {

    }


    return (
        <div className='bg-dark d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='card w-25' style={{ backgroundColor: 'rgb(255, 221, 35)' }}>
                <div className='card-header d-flex justify-content-between'>
                    <strong>Daftar Aktifitas</strong>
                    <button className='btn btn-sm btn-success' onClick={() => setModal(true)}><i className='fa-solid fa-plus' /></button>
                </div>
                <div className='card-body '>
                    {activity.length === 0 ? "Silahkan tambah aktivitas anda" : activity.map(i =>
                        <div className='d-flex gap-3 mb-1' key={i.id}>
                            <input className='form-control' type="text" value={i.nama} />
                            <button className='btn btn-sm btn-primary' onClick={() => updateActivity()}><i className='fa-solid fa-pencil' /></button>
                            <button className='btn btn-sm btn-danger' onClick={() => setActivity(
                                activity.filter(a =>
                                    a.id !== i.id
                                )
                            )
                            }><i className='fa-solid fa-trash' /></button>
                        </div>

                    )}
                </div>
            </div>


            {modal ? <Modal hide={() => setModal(false)} change={(e) => setItem(e.target.value)} tambah={addActivity} /> : ""}


        </div>
    )
}

export default Todo
