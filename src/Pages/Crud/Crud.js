import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "../../features/crudSlice";
import { Link } from "react-router-dom";

export default function Reduxcrud() {
  const [data, setData] = useState({
    name: "",
    age: "",
  });
  const { name, age } = data;
  const onvaluechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.crud);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: Date.now(), name, age }));
    setData({
      name: "",
      age: "",
    });
  };

  return (
    <React.Fragment>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 pb-md-0 pb-5">
            <form
              className="bg-dark border shadow p-4 text-white"
              onSubmit={handleSubmit}
            >
              <div className="text-center">
                <p className="display-4">Add Data</p>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputfname">Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => onvaluechange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputlname">Age *</label>
                <input
                  type="text"
                  name="age"
                  className="form-control"
                  value={age}
                  onChange={(e) => onvaluechange(e)}
                  required
                />
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-primary mt-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-8">
            <div className="table-responsive">
              <table className="table border shadow">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((e, index) => {
                    return (
                      <tr key={e.id}>
                        <th>{index + 1}</th>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>
                          <Link
                            type="button"
                            to={`/editcrud/${e.id}`}
                            className="btn btn-sm btn-warning mx-1"
                          >
                            <i className="fas fa-edit"></i>
                          </Link>
                          <button
                            type="button"
                            onClick={() => dispatch(deleteUser(e.id))}
                            className="btn  btn-sm btn-danger mx-1"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
