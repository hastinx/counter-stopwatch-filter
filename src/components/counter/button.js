import React from 'react';

const Button = (props) => {
  return (
    <>
      <button
        className={`btn btn-sm ${
          props.fungsi === 'tambah'
            ? 'btn-success'
            : props.fungsi === 'kurang'
            ? 'btn-danger'
            : 'btn-primary'
        }`}
        onClick={
          props.fungsi === 'tambah'
            ? props.tambah
            : props.fungsi === 'kurang'
            ? props.kurang
            : props.reset
        }
      >
        {props.fungsi === 'tambah' ? (
          <i className="fa-solid fa-plus" />
        ) : props.fungsi === 'kurang' ? (
          <i className="fa-solid fa-minus" />
        ) : (
          <i className="fa-solid fa-arrows-rotate"></i>
        )}
      </button>
    </>
  );
};

export default Button;
