import React from "react";

const Input = () => {
  return (
    <div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">
            <i className="fa fa-search "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
