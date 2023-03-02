import React from 'react'

const Modal = (props) => {
    return (
        <>
            <div className="modal show fade" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Tambah Aktivitas</h5>
                            <button type="button" className="btn-close" onClick={props.hide}></button>
                        </div>
                        <div className="modal-body">

                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="Aktifitas bla bla bla.." onChange={props.change} value={props.editVal} />
                                <label for="floatingInput">Nama Aktifitas</label>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={props.hide}>Tutup</button>
                            <button type="button" className="btn btn-primary" onClick={props.tambah}> Tambahkan</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal